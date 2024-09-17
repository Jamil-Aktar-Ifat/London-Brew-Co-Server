const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.PORT || 5005;

// Middleware
app.use(cors({ origin: "*" })); // Allow requests from any origin, adjust as needed
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uphhg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server
    await client.connect();

    const coffeeCollection = client.db("LondonBrewDB").collection("coffee");
    const userCollection = client.db("LondonBrewDB").collection("users");

    // Getting all coffee data
    app.get("/coffee", async (req, res) => {
      try {
        const cursor = coffeeCollection.find();
        const result = await cursor.toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Getting specific coffee data
    app.get("/coffee/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await coffeeCollection.findOne(query);
        if (result) {
          res.send(result);
        } else {
          res.status(404).send({ error: "Coffee not found" });
        }
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Adding new coffee
    app.post("/coffee", async (req, res) => {
      try {
        const newCoffee = req.body;
        const result = await coffeeCollection.insertOne(newCoffee);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Updating coffee data
    app.put("/coffee/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const filter = { _id: new ObjectId(id) };
        const options = { upsert: true };
        const updatedCoffee = req.body;
        const coffee = {
          $set: {
            name: updatedCoffee.name,
            chef: updatedCoffee.chef,
            supplier: updatedCoffee.supplier,
            taste: updatedCoffee.taste,
            details: updatedCoffee.details,
            category: updatedCoffee.category,
            photoURL: updatedCoffee.photoURL,
          },
        };
        const result = await coffeeCollection.updateOne(
          filter,
          coffee,
          options
        );
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Deleting coffee data
    app.delete("/coffee/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await coffeeCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // User-related APIs
    app.get("/users", async (req, res) => {
      try {
        const cursor = userCollection.find();
        const users = await cursor.toArray();
        res.send(users);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.post("/users", async (req, res) => {
      try {
        const user = req.body;
        const result = await userCollection.insertOne(user);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    app.patch("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const updateDoc = {
        $set: {
          lastLoggedAt: user?.metadata?.lastSignInTime,
        },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await userCollection.deleteOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: error.message });
      }
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Optionally close the MongoDB client when the server stops
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("Server is running!");
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
