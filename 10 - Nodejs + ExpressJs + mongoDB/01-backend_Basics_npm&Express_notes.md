# Backend Basics — npm & Express Notes

## 1. package.json vs package-lock.json

### `package.json`

- The "identity card" of your project.
- Lists your project's **direct** dependencies (the packages _you_ installed), plus project info (name, version, scripts, etc.).
- Dependency versions here use ranges, e.g. `"express": "^4.19.2"` — the `^` means "this version or any newer minor/patch version."

### `package-lock.json`

- The "exact receipt" of everything that got installed.
- Locks the **exact** version of every package — including nested (indirect) dependencies — so that when someone else runs `npm install`, they get the _exact same_ dependency tree you have. This avoids "works on my machine" bugs.
- You should always commit this file to git.

### `node_modules/`

- Where all installed packages actually live as code.
- Should **never** be committed to git (add it to `.gitignore`) — it can be regenerated anytime by running `npm install`, since `package-lock.json` has the full recipe.

### The dependency chain example

```bash
npm i cat-me
```

- npm downloads `cat-me` into `node_modules/cat-me`.
- Inside `node_modules/cat-me`, there's its own `package.json` — this tells you `cat-me` itself depends on other packages.
- Those get installed too (nested inside `node_modules` or hoisted to the top level depending on npm's version).
- This whole chain (your package → its dependencies → their dependencies...) is exactly what `package-lock.json` records.

### Dependencies vs devDependencies

There are two types of dependencies in `package.json`:

```json
{
  "dependencies": {
    "express": "^4.19.2"
  },
  "devDependencies": {
    "nodemon": "^3.1.0"
  }
}
```

| Type              | Purpose                                                                                                                           |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `dependencies`    | Needed for your app to actually run (e.g. Express)                                                                                |
| `devDependencies` | Only needed while developing (e.g. `nodemon`, testing tools). Installed with `npm i -D <package>` or `npm i --save-dev <package>` |

---

## 2. Creating & Starting a Server with Express.js

### Step 1 — Initialize the project

```bash
npm init -y
```

Creates a `package.json` file with default values (the `-y` skips all the setup questions). This turns your folder into a proper Node.js project.

### Step 2 — Install Express

```bash
npm i express
```

Downloads the Express package into `node_modules` and adds it to `dependencies` in `package.json`.

### Step 3 — Create the server

```js
// server.js
const express = require("express");

const app = express(); // creates a server instance and stores it in "app"

app.get("/", (req, res) => {
  res.send("hello world"); // sends this response when someone visits "/"
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

- `express()` creates your server/application object.
- `app.listen(3000, callback)` starts the server and makes it listen on **port** 3000. The optional callback confirms it started — useful for debugging.
- Run it with `node server.js`.

---

## 3. Understanding `req` and `res`

```js
app.get("/", (req, res) => {
  // req = the incoming Request (data coming FROM the frontend/client)
  // res = the outgoing Response (what you send BACK to the frontend/client)
});
```

### `req` (Request) — reading data sent by the client

| What you want                    | How to get it | Example URL                      |
| -------------------------------- | ------------- | -------------------------------- |
| Route parameters                 | `req.params`  | `/users/:id` → `req.params.id`   |
| Query string values              | `req.query`   | `/search?q=cats` → `req.query.q` |
| Data sent in the body (POST/PUT) | `req.body`    | JSON sent from a form/fetch call |

> ⚠️ To use `req.body`, you need a **middleware** first (see below) — otherwise it will be `undefined`.

### `res` (Response) — sending data back to the client

```js
res.send("hello world"); // send plain text or HTML
res.json({ message: "hi" }); // send JSON data (most common for APIs)
res.status(404).send("Not found"); // set an HTTP status code + message
```

---

## 4. Middleware

Middleware are functions that run **before** your route handlers — used for things like parsing incoming data, logging, or authentication.

```js
app.use(express.json()); // lets Express parse JSON request bodies into req.body
```

Without this line, sending JSON from the frontend and trying to read `req.body` on the backend will give you `undefined`.

---

## 5. Handling Other HTTP Methods

Besides `.get()`, Express supports other HTTP verbs matching what the action does:

```js
app.get("/users", (req, res) => {}); // read data
app.post("/users", (req, res) => {}); // create new data
app.put("/users/:id", (req, res) => {}); // update existing data
app.delete("/users/:id", (req, res) => {}); // delete data
```

---

## 6. Bonus: Auto-restarting the Server (nodemon)

Normally, every time you edit `server.js`, you'd have to stop and re-run `node server.js`. `nodemon` watches your files and restarts automatically.

```bash
npm i -D nodemon
```

Then in `package.json`:

```json
{
  "scripts": {
    "dev": "nodemon server.js"
  }
}
```

Run it with:

```bash
npm run dev
```

---

# APIs & REST APIs Fundamentals

## What is an API?

**API = Application Programming Interface.**

It's a way for one piece of software to talk to another piece of software. You don't need to know how the other software works internally — the API just gives you a fixed set of rules for asking it for something and getting something back.

### Why the Frontend Needs an API

To a user, a web app feels like _one thing_. But under the hood, it's actually **two separate applications**:

- **Frontend** — runs in the browser (React, HTML/CSS/JS)
- **Backend** — runs on a server (Node.js, Express, etc.)

These two run in completely different environments and can't talk to each other directly. The **API is the bridge** between them — the frontend sends a request through the API, the backend processes it and sends a response back.

```
Browser (Frontend)  --request-->   API   --request-->  Server (Backend)
Browser (Frontend)  <--response--  API   <--response--  Server (Backend)
```

### Types of APIs (by Architectural Style / Protocol)

| Type                            | Idea                                                                                                                                            |
| ------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **REST**                        | Uses standard HTTP methods (GET, POST, etc.) to work with "resources." Most common style for web apps.                                          |
| **SOAP**                        | Older, stricter protocol, uses XML, common in enterprise/banking systems.                                                                       |
| **RPC** (Remote Procedure Call) | You call a function on the server as if it were local, e.g. `getUser()`.                                                                        |
| **GraphQL**                     | Client asks for exactly the data fields it needs in one request, instead of hitting multiple fixed endpoints.                                   |
| **WebSocket**                   | Keeps a connection open both ways, for real-time stuff like chat apps or live notifications (unlike REST, which is one request → one response). |

REST is just **one style** of API among these — the most widely used one for typical web apps, which is why it's the one to master first.

---

## REST APIs

**REST = Representational State Transfer.** It's a set of conventions (not a strict protocol like SOAP) for structuring APIs around **resources** — think "notes," "users," "products" — and manipulating them using standard HTTP methods.

### It Runs on HTTP

Every REST API call is an HTTP request, and every HTTP request has:

- A **method** (what you want to do)
- A **URL / endpoint** (which resource you're talking about, e.g. `/notes`)
- Optionally, a **body** (data you're sending, usually JSON)
- **Headers** (metadata, like `Content-Type: application/json`)

### The 5 Core HTTP Methods

| Method     | Purpose                                                 | Example                           |
| ---------- | ------------------------------------------------------- | --------------------------------- |
| **GET**    | Fetch/read data — doesn't change anything on the server | Get all notes                     |
| **POST**   | Create new data on the server                           | Create a new note                 |
| **PUT**    | Replace an _entire_ existing resource                   | Replace a whole note (all fields) |
| **PATCH**  | Update _part_ of an existing resource                   | Update just the title             |
| **DELETE** | Remove data from the server                             | Delete a note                     |

**PUT vs PATCH — the difference that's easy to miss:**

- `PUT` expects the **whole object** and replaces it entirely. If you leave out a field, it can wipe it out.
- `PATCH` only touches the fields you send, leaving the rest untouched. This is why the notes API below uses `PATCH` for updates.

### A Few Core REST Principles Worth Knowing

- **Statelessness** — the server doesn't remember anything about you between requests. Every request must carry all the info needed to process it (e.g. auth tokens). This is _why_ things like login tokens get sent with every request instead of the server "remembering" you're logged in.
- **Resources, not actions** — URLs represent _things_ (nouns), not actions (verbs). `/notes` not `/getNotes`. The HTTP method is what defines the action.
- **Status codes matter** — the response should always tell the client what happened, not just return data. See table below.

### Common HTTP Status Codes

| Code                          | Meaning                       | When to Use                    |
| ----------------------------- | ----------------------------- | ------------------------------ |
| **200** OK                    | Request succeeded             | Successful GET, PATCH          |
| **201** Created               | New resource created          | Successful POST                |
| **204** No Content            | Success, nothing to send back | Successful DELETE              |
| **400** Bad Request           | Client sent invalid data      | Missing/invalid fields in body |
| **401** Unauthorized          | Not logged in / missing auth  | No token provided              |
| **403** Forbidden             | Logged in, but not allowed    | Accessing someone else's data  |
| **404** Not Found             | Resource doesn't exist        | Invalid `:index` or `:id`      |
| **500** Internal Server Error | Something broke on the server | Unhandled bug/crash            |

> Your current code returns `201` for both create _and_ update — worth fixing since `201` specifically means "a new resource was created." Update should return `200`.

---

## Setting Up a Backend Project (Production-Style Structure)

**1. Initialize the Node project**

```bash
npm init -y
```

This creates `package.json`, which tracks your project's dependencies and scripts.

**2. Install Express**

```bash
npm i express
```

Express is a framework that makes it much easier to create servers and define routes in Node.js, instead of writing raw HTTP handling.

**3. Folder structure**

```
project-root/
├── src/
│   └── app.js       // creates and configures the app
├── server.js         // starts the server
├── package.json
```

**Why split `app.js` and `server.js`?**

- `app.js` — builds the Express app (routes, middleware). It doesn't actually start listening.
- `server.js` — imports `app.js` and calls `.listen()` to actually start the server on a port.

This separation matters because it lets you **test `app.js` without spinning up a real server** (common in unit testing with tools like Supertest), and keeps configuration separate from startup logic.

```js
// src/app.js
const express = require("express");
const app = express();

module.exports = app;
```

```js
// server.js
const app = require("./src/app");

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

**Bonus tool worth adding:** `nodemon` — auto-restarts your server whenever you save a file, so you don't have to manually stop/start it every time.

```bash
npm i -D nodemon
```

---

## What is Postman?

Postman is a tool for **testing APIs without needing a frontend**. While you're building the backend, you don't have a UI yet to click buttons and send requests — Postman lets you manually construct requests (choose the method, set the URL, add a JSON body, add headers) and see the raw response.

Useful features beyond just "sending requests":

- **Collections** — group related requests together (e.g. all your `/notes` endpoints) so you don't rebuild them every time.
- **Environments** — swap variables like base URL or auth token between dev/production without editing every request.
- **Saved history** — see past requests/responses to compare behavior.

---

## Creating Notes APIs & Testing With Postman

_(Simple notes task using GET, POST, PATCH, DELETE)_

```js
const express = require("express");
const app = express();

// Middleware that parses incoming JSON request bodies into req.body.
// Without this, req.body would be undefined.
app.use(express.json());

const notes = [];

/*
  POST /notes — create a new note
*/
app.post("/notes", (req, res) => {
  notes.push(req.body);

  res.status(201).json({
    message: "note successfully created",
  });
});

/*
  GET /notes — fetch all notes
*/
app.get("/notes", (req, res) => {
  res.status(200).json({
    notes: notes,
    message: "request successful",
  });
});

/*
  PATCH /notes/:index — update an existing note
  :index is a dynamic route parameter, accessible via req.params
*/
app.patch("/notes/:index", (req, res) => {
  const index = req.params.index;
  const { title, description } = req.body;

  notes[index].title = title;
  notes[index].description = description;

  res.status(200).json({
    message: "successfully updated",
  });
});

/*
  DELETE /notes/:index — delete a note
*/
app.delete("/notes/:index", (req, res) => {
  const index = req.params.index;
  notes.splice(index, 1);

  res.status(204).json({
    message: "note deleted successfully",
  });
});

module.exports = app;
```

### Why `notes` Doesn't Persist Across Server Restarts

The `notes` array is a JavaScript variable held in memory (RAM), not stored on disk. When you run `node app.js`, Node.js allocates memory for that array as part of the running process. Every POST request pushes data into this in-memory array — it lives only as long as the process is alive.

**What happens on restart:**

1. Stopping the server (Ctrl+C, crash, deployment restart, etc.) kills the Node.js process.
2. Killing the process releases all memory it was using — including the `notes` array.
3. Starting the server again runs your file fresh from the top → `const notes = []` executes again → you get a brand new empty array.

There's no step in this flow that ever writes `notes` to disk, so nothing survives a restart. This is sometimes called **ephemeral** or **non-persistent** storage.

**The fix: a database.** Databases (MongoDB, PostgreSQL, MySQL, etc.) write data to disk, not just RAM. Disk storage survives process restarts, crashes, and even full machine reboots. That's the core reason APIs use a database instead of an in-memory array — persistence, not just structure or querying power.

### Things Worth Knowing

**1. Path params vs query params vs body — the three ways data reaches your route**

- `req.params` — from the URL path itself, e.g. `/notes/3` → `req.params.index` is `"3"`. Used for identifying _which_ resource.
- `req.query` — from the URL after `?`, e.g. `/notes?sort=asc` → `req.query.sort`. Used for filtering/sorting/pagination options.
- `req.body` — the JSON payload sent with POST/PATCH/PUT. Used for the actual data being created/updated.

**2. `delete notes[index]` vs `notes.splice(index, 1)`**
Your original code used `delete notes[index]`. This doesn't actually remove the item from the array — it leaves an empty/`undefined` slot behind (the array length stays the same), which causes bugs later (e.g. `.map()` over the array will hit `undefined`). `.splice(index, 1)` actually removes the element and shifts the rest down. I swapped this in the example above.

**3. Using array index as an ID is fragile**
Right now, a note's "id" is just its position in the array. This breaks the moment you delete something in the middle — every note after it shifts position, so old links/references to `/notes/3` now point to the wrong note. In a real app (especially once you connect a database), each note should get a stable **unique ID** (e.g. `crypto.randomUUID()` for now, or an auto-generated database ID later) instead of relying on array position.

**4. No input validation yet**
Right now, `notes[index].title = title` will crash if `notes[index]` doesn't exist (e.g. invalid index, or already deleted). Real APIs check that the resource exists first and return a `404` if not, and validate that required fields exist in the body before using them.

**5. Middleware**
You already touched this with `app.use(express.json())` — this is a function that runs _before_ your route handlers, on every request, to process or check something (here, converting the raw request body into usable JSON). You'll build custom middleware later for things like authentication checks and logging.

---

## Database, MongoDB Atlas Connection, Schema & Notes APIs with DB

### 1. What is MongoDB Atlas?

MongoDB Atlas is a **Database-as-a-Service (DBaaS)**. Instead of installing and managing a database on your own laptop, you "rent" it from the cloud (AWS, Google Cloud, or Azure).

### 2. Understanding the "Cluster"

Think of a Cluster as your database's "home."

- **The Physical Part** — a group of servers that store your data.
- **The Config** — you choose how much "horsepower" (CPU/RAM) and "garage space" (storage) it needs.
- **High Availability** — in the real world, a cluster usually has 3 copies of your data. If one server crashes, the others keep your app running without you doing anything.

### 3. Types of Servers

- Web Server
- Database Server
- File Server
- Mail Server
- Application Server
- Proxy Server
- ...and many more

### 4. Why Choose a Region (e.g., Mumbai)?

When you select "Mumbai," you are telling MongoDB to use a data center physically located in India.

- **Latency** — if your users are in India, picking Mumbai makes the app fast. If you pick "New York," the data has to travel across the ocean, making the app feel slow.
- **Compliance** — some countries require that their citizens' data stays within their borders.

### 5. The Two-Layer Security "Gatekeeper"

You must set these up before you can connect:

- **Network Access (IP Access List)** — this is the _"Where."_ You tell the database: "Only allow connections coming from this specific internet address (IP)."
- **Database Access (Users)** — this is the _"Who."_ You create a username and password. Even if someone is on a safe IP, they still need these credentials to get in.

### 6. The "CRUD" Operations

These are the four things every developer does with a database:

| Operation  | Meaning                                                 |
| ---------- | ------------------------------------------------------- |
| **Create** | Adding a new "Note" to your database                    |
| **Read**   | Fetching your saved "Notes" to show them on your screen |
| **Update** | Editing the text of an old "Note"                       |
| **Delete** | Removing a "Note" forever                               |

### 7. Fundamental Concept: The Document Model

Unlike Excel or SQL (which use rows and columns), MongoDB uses **Documents** (JSON style).

- **Flexible Schema** — one "Note" can have just a title, and another can have a title, body, and a list of tags. The database doesn't care if they look different.
- **BSON** — internally, MongoDB stores data in "BSON" (Binary JSON), which makes it super fast to search and sort.

---

## Built-in Roles in MongoDB

When you create a **database user** in MongoDB (either on MongoDB Atlas or a local server), you don't just give that user a username/password — you also assign them **roles**. A role decides **what that user is allowed to do**.

Think of it like giving someone a keycard at an office. Depending on the keycard, they can:

- Only enter and read files (view-only)
- Enter, read, and edit files
- Manage other people's keycards too (admin-level)

MongoDB comes with **pre-built (built-in) roles** so you don't have to design permissions from scratch every time.

### Most Common Built-in Roles

| Role                   | What it can do                                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| `read`                 | Can only **read/view** data in a specific database. Cannot insert, update, or delete.                                                 |
| `readWrite`            | Can **read AND write** (insert, update, delete) data in a specific database. This is the most commonly used role for app development. |
| `dbAdmin`              | Can perform admin tasks on a database — like creating indexes, viewing stats — but **cannot read/write actual data**.                 |
| `userAdmin`            | Can create and manage **other users and their roles** in that database. Doesn't touch the actual data.                                |
| `dbOwner`              | Combines `readWrite` + `dbAdmin` + `userAdmin`. Full control over one database.                                                       |
| `readAnyDatabase`      | Read access across **all databases** in that server/cluster.                                                                          |
| `readWriteAnyDatabase` | Read + write access across **all databases**.                                                                                         |
| `clusterAdmin`         | Full control over the entire cluster (server-level settings, replication, sharding). Used by DB administrators, not app developers.   |
| `root`                 | Superuser — full access to everything. Use with extreme caution.                                                                      |

### Simple Rule of Thumb (for a Beginner Building Projects)

> When you create a database user for your Node.js/Express project on MongoDB Atlas, you will almost always give it **`readWrite`** access on your specific database. You do **not** need `root` or `dbAdmin` roles for a normal app — that's overkill and a security risk.

**Where you assign this:** On MongoDB Atlas → **Database Access → Add New Database User → Built-in Role → choose `readWrite`/`Read and write to any database`.**

---

## Connecting a Cluster to MongoDB Compass

**MongoDB Compass** is the official **GUI (visual) tool** for MongoDB. Instead of writing queries in a terminal, you can see your databases, collections, and documents visually — like looking at Excel, but for MongoDB data. This is extremely useful while learning, because you can see exactly what your app is saving.

### Step-by-Step

**Step 1 — Get your connection string from Atlas**

1. Go to your MongoDB Atlas dashboard.
2. Click on your Cluster → **Connect**.
3. Choose **"Compass"** as the connection method.
4. Atlas will give you a connection string that looks like this:

```
mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/
```

**Step 2 — Open MongoDB Compass**
If you don't have it, download it from MongoDB's official site and install it (it's a free desktop app).

**Step 3 — Paste and connect**

1. Open Compass.
2. Paste the connection string into the connection box.
3. Replace `<username>` and `<password>` with your **actual database user's credentials** (the one you created under Database Access, NOT your Atlas login email/password — these are different!).
4. Click **Connect**.

**Step 4 — You're in!**

- On the left sidebar, you'll now see all your **databases**.
- Click a database → see its **collections** (collections = like "tables" in SQL).
- Click a collection → see the actual **documents** (documents = like "rows"/individual records, stored as JSON-like objects).

### ⚠️ Common Beginner Mistakes

- **Wrong password** — if your DB user's password has special characters (`@`, `#`, `%`, etc.), you must **URL-encode** them, or Compass/Mongoose will fail to connect.
- **IP not whitelisted** — on Atlas, go to **Network Access** and add your current IP address (or `0.0.0.0/0` to allow from anywhere — fine for learning, not recommended for production).
- **Using Atlas login instead of DB user** — your Atlas account login (email/password) is different from the **database user** you create under Database Access. Compass needs the database user.

---

## Connecting Your Server to MongoDB Using Mongoose

**Mongoose** is a **Node.js library (ODM — Object Data Modeling tool)** that makes it much easier to work with MongoDB from your Express/Node app. Instead of writing raw MongoDB driver code, Mongoose gives you a simpler, structured way to interact with your database using JavaScript objects.

### Step 1 — Install Mongoose

```bash
npm install mongoose
```

### Step 2 — Import and connect

In your main server file (e.g. `server.js` or `index.js`):

```js
require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myDatabaseName",
      //here myDatabaseName is the database inside the cluster you want to connect with  
    );
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("MongoDB connection failed:", err);
    process.exit(1); // stop the server if DB connection fails
  }
};

module.exports = connectDB;
```

### Best Practice — Don't Hardcode Your Connection String

Hardcoding your username/password directly in code is risky (especially if you push it to GitHub). Instead:

1. Install `dotenv`:

```bash
npm install dotenv
```

2. Create a `.env` file in your project root:

```
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/myDatabaseName
```

3. Add `.env` to your `.gitignore` file so it never gets pushed to GitHub.

4. Use it in your server file:

```js
require('dotenv').config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected successfully");
  } catch (err) {
    console.log("MongoDB connection failed:", err);
    process.exit(1); // stop the server if DB connection fails
  }
};

module.exports = connectDB;
```

### What's Actually Happening Here
- `connectDB` is an **`async` function** — marking it `async` lets you use `await` inside it, so the connection logic reads top-to-bottom instead of chained `.then()`/`.catch()` calls.
- `await mongoose.connect(...)` pauses execution of `connectDB` until the connection to **your MongoDB cluster** either succeeds or throws an error — it opens the connection between **your Node.js server** and the database.
- The `try` block runs if the connection succeeds, logging the success message.
- The `catch (err)` block runs if something goes wrong (wrong password, IP not whitelisted, no internet, etc.) — this is why you always wrap `await` calls in `try/catch`, so your app doesn't fail silently.
- `process.exit(1)` inside the `catch` block **stops the server process entirely** if the database connection fails. This is intentional: an app with no working database connection usually shouldn't keep running and silently fail on every request — it's better to crash immediately with a clear error so the problem gets noticed and fixed.
- `module.exports = connectDB` exports the function so it can be imported and called elsewhere (e.g. in `server.js`) with `connectDB();` when the app starts.

---

## Creating a Schema

### Why Do We Need a Schema?

MongoDB itself is **schema-less** — meaning technically, you could save documents with totally different structures in the same collection (one document could have a `name` field, another could not). This sounds flexible, but in real apps it's dangerous — you don't want inconsistent, messy data.

> Before we start storing data in the database, we need to tell the database what the data would look like, and how it is structured. This process is called a **Schema**.

So a **Schema** = a **blueprint/structure** that defines:

- What fields a document will have (e.g. `name`, `email`, `age`)
- What data type each field should be (String, Number, Boolean, etc.)
- Rules for each field (required or not, default value, min/max, unique, etc.)

Mongoose uses Schemas to enforce this structure on top of MongoDB, since MongoDB itself doesn't force one.

### Step 1 — Import Schema and Create It

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // this field MUST be provided
  },
  email: {
    type: String,
    required: true,
    unique: true, // no two documents can have the same email
  },
  age: {
    type: Number,
    default: 18, // if not provided, defaults to 18
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now, // auto-fills current date/time
  },
});

const noteModel = mongoose.model("notes", noteSchema);

module.exports = noteModel;

```

### Step 2 — Turn the Schema into a Model

A **Schema** is just the blueprint. To actually use it to save/read data from MongoDB, you convert it into a **Model**.

```js
const User = mongoose.model("User", userSchema);
```

- `'User'` → the name of your model (Mongoose will automatically create a MongoDB collection called `users` — lowercase and pluralized).
- `userSchema` → the blueprint you just created.

### Step 3 — Use the Model to Interact with the Database

```js
// Creating a new document
const newUser = new User({
  name: "Raiyan",
  email: "raiyan@example.com",
});

newUser
  .save()
  .then(() => console.log("User saved!"))
  .catch((err) => console.log(err));
```

### Common Schema Field Options (Cheat Sheet)

| Option        | Meaning                                                                     |
| ------------- | --------------------------------------------------------------------------- |
| `type`        | Data type: `String`, `Number`, `Boolean`, `Date`, `Array`, `ObjectId`, etc. |
| `required`    | Field must be provided, or saving fails.                                    |
| `unique`      | No two documents can share this value (e.g. email).                         |
| `default`     | Value used automatically if none is provided.                               |
| `min` / `max` | Minimum/maximum value (for Numbers) or length (for Strings/Arrays).         |
| `enum`        | Restrict value to a fixed list, e.g. `enum: ['admin', 'user']`.             |
| `trim`        | Removes extra whitespace from a String.                                     |

---

## Quick Recap (Big Picture Flow)

1. **Create a database user** on Atlas with a **built-in role** (usually `readWrite`).
2. **Whitelist your IP** and grab your **connection string**.
3. **Connect visually** using **Compass** (to see your data) — optional but very helpful while learning.
4. **Connect your Node.js server** to MongoDB using **Mongoose** (`mongoose.connect(...)`), ideally with the connection string stored safely in `.env`.
5. **Define a Schema** describing what your data should look like.
6. **Convert the Schema into a Model**, and use that Model to actually create, read, update, and delete (CRUD) documents in MongoDB.

This is the exact same flow you'll repeat in every backend project going forward.
