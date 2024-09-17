<h1>London Brew Co - Backend</h1>
<p>This is the backend repository for the <strong>London Brew Co</strong> application. The backend is responsible for managing APIs, user data, and handling database operations using MongoDB.</p>

<h2>Table of Contents</h2>
<ul>
  <li><a href="#overview">Overview</a></li>
  <li><a href="#features">Features</a></li>
  <li><a href="#technologies-used">Technologies Used</a></li>
  <li><a href="#setup-and-installation">Setup and Installation</a></li>
  <li><a href="#environment-variables">Environment Variables</a></li>
  <li><a href="#deployment">Deployment</a></li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="overview">Overview</h2>
<p>The backend manages APIs for handling user authentication, coffee items, and orders. It is built using Node.js and Express, and it connects to MongoDB for database operations.</p>

<h2 id="features">Features</h2>
<ul>
  <li>User Authentication</li>
  <li>CRUD operations for managing coffee items</li>
  <li>Order management and processing</li>
  <li>Integrated with Firebase Authentication for secure user management</li>
</ul>

<h2 id="technologies-used">Technologies Used</h2>
<ul>
  <li><strong>Node.js</strong> and <strong>Express</strong>: Server-side technologies used for creating APIs.</li>
  <li><strong>MongoDB</strong>: NoSQL database for storing data.</li>
  <li><strong>Mongoose</strong>: ODM for MongoDB for object modeling.</li>
  <li><strong>Firebase Authentication</strong>: For user authentication and management.</li>
  <li><strong>Vercel</strong>: For deploying the backend APIs.</li>
</ul>

<h2 id="setup-and-installation">Setup and Installation</h2>

<h3>Prerequisites</h3>
<ul>
  <li><strong>Node.js</strong> and <strong>npm</strong> installed on your machine.</li>
  <li>A <strong>MongoDB Atlas</strong> account and cluster set up.</li>
  <li>A <strong>Firebase</strong> project for user authentication.</li>
</ul>

<h3>Steps</h3>
<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Jamil-Aktar-Ifat/London-Brew-Co-Server.git
cd London-Brew-Co-Server
    </code></pre>
  </li>
  <li>Install the dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create a <code>.env</code> file at the root of the project with the following content:
    <pre><code>MONGODB_URI=your_mongodb_uri
PORT=your_preferred_port
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
    </code></pre>
  </li>
  <li>Run the backend server:
    <pre><code>npm run start</code></pre>
  </li>
</ol>

<h2 id="environment-variables">Environment Variables</h2>
<p>The backend requires the following environment variables. Add these variables to the <code>.env</code> file:</p>
<pre><code>MONGODB_URI=your_mongodb_uri
PORT=your_preferred_port
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
FIREBASE_PROJECT_ID=your_firebase_project_id
FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
FIREBASE_APP_ID=your_firebase_app_id
</code></pre>

<h2 id="deployment">Deployment</h2>
<p>This backend is deployed using <strong>Vercel</strong>.</p>

<p>To deploy:</p>
<ol>
  <li>Install Vercel CLI:
    <pre><code>npm install -g vercel</code
