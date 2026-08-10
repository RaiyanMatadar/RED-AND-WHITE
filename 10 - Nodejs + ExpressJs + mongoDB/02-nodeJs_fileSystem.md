# Node.js File System (`fs`) — Core Notes

The `fs` module is built-in — no npm install needed.

```javascript
const fs = require("fs");        // callback / sync version
const fsPromises = require("fs/promises"); // promise-based version (modern, preferred)
```

There are **3 styles** for almost every fs operation:
| Style | Example | Blocks event loop? | When to use |
|---|---|---|---|
| Synchronous | `fs.writeFileSync()` | Yes | Scripts, startup config, CLI tools |
| Callback-based | `fs.writeFile(path, data, cb)` | No | Legacy code, old tutorials |
| Promise-based | `fsPromises.writeFile()` | No | **Modern apps — use this with async/await** |

In real backend work (Express, APIs), you almost always want **async** — sync methods freeze your whole server for every request while the disk operation runs.

---

## 1. Writing Files

### Sync
```javascript
fs.writeFileSync("./test.txt", "Hello world");
```

### Callback
```javascript
fs.writeFile("./test.txt", "Hello world", (error) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  console.log("File written successfully");
});
```
Note: your snippet had `return "error"` — returning a string from a callback does nothing useful, it just exits the function. Always `console.log`/handle the error, don't return it silently.

### Promise (recommended)
```javascript
const fsPromises = require("fs/promises");

async function writeData() {
  try {
    await fsPromises.writeFile("./test.txt", "Hello world");
    console.log("File written");
  } catch (error) {
    console.log("Error:", error);
  }
}
```

`writeFile` **overwrites** the file completely if it already exists, and creates it if it doesn't.

---

## 2. Reading Files

### Sync
```javascript
const data = fs.readFileSync("./test.txt", "utf-8");
console.log(data);
```
Without `"utf-8"`, you get a raw `Buffer` instead of a string.

### Callback
```javascript
fs.readFile("./test.txt", "utf-8", (error, data) => {
  if (error) return console.log(error);
  console.log(data);
});
```

### Promise
```javascript
async function readData() {
  try {
    const data = await fsPromises.readFile("./test.txt", "utf-8");
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
```

---

## 3. Appending to Files

Unlike `writeFile`, `appendFile` **adds to the end** instead of overwriting.

```javascript
// Sync
fs.appendFileSync("./test.txt", "\nNew line added");

// Callback
fs.appendFile("./test.txt", "\nNew line added", (error) => {
  if (error) return console.log(error);
});

// Promise
await fsPromises.appendFile("./test.txt", "\nNew line added");
```

Common use case: logging (`log.txt` that keeps growing).

---

## 4. Deleting Files

```javascript
// Sync
fs.unlinkSync("./test.txt");

// Callback
fs.unlink("./test.txt", (error) => {
  if (error) return console.log(error);
});

// Promise
await fsPromises.unlink("./test.txt");
```
Note: it's `unlink`, not `deleteFile` — trips people up initially.

---

## 5. Working with Folders

```javascript
// Create a folder
fs.mkdirSync("./newFolder");
await fsPromises.mkdir("./newFolder", { recursive: true }); // recursive: creates nested folders too, e.g. a/b/c

// Read folder contents (list files)
const files = fs.readdirSync("./someFolder");
const files2 = await fsPromises.readdir("./someFolder");

// Delete a folder
fs.rmdirSync("./newFolder");                 // older, empty folders only
await fsPromises.rm("./newFolder", { recursive: true, force: true }); // modern, deletes non-empty too
```

---

## 6. Checking if a File/Folder Exists & Getting Info

```javascript
// existsSync — quick boolean check (sync only, no async version)
if (fs.existsSync("./test.txt")) {
  console.log("File exists");
}

// stat — get metadata (size, created date, is it a file or folder, etc.)
const stats = fs.statSync("./test.txt");
console.log(stats.size);          // size in bytes
console.log(stats.isFile());      // true/false
console.log(stats.isDirectory()); // true/false

// Promise version
const stats2 = await fsPromises.stat("./test.txt");
```

---

## 7. Renaming / Moving Files

```javascript
fs.renameSync("./old.txt", "./new.txt");
await fsPromises.rename("./old.txt", "./new.txt");
```
Same function is used for both renaming and moving — moving is just "renaming" to a different path, e.g. `fs.renameSync("./old.txt", "./folder/old.txt")`.

---

## 8. Copying Files

```javascript
fs.copyFileSync("./source.txt", "./destination.txt");
await fsPromises.copyFile("./source.txt", "./destination.txt");
```

---

## Quick Reference Table

| Task | Sync | Promise (recommended) |
|---|---|---|
| Write (overwrite) | `writeFileSync` | `fsPromises.writeFile` |
| Read | `readFileSync` | `fsPromises.readFile` |
| Append | `appendFileSync` | `fsPromises.appendFile` |
| Delete file | `unlinkSync` | `fsPromises.unlink` |
| Create folder | `mkdirSync` | `fsPromises.mkdir` |
| List folder | `readdirSync` | `fsPromises.readdir` |
| Delete folder | `rmdirSync` / `rmSync` | `fsPromises.rm` |
| Check exists | `existsSync` | — (no async version) |
| File info | `statSync` | `fsPromises.stat` |
| Rename/move | `renameSync` | `fsPromises.rename` |
| Copy | `copyFileSync` | `fsPromises.copyFile` |

---

## Common Gotchas (things that trip people up)

1. **Relative paths are relative to where you run `node`**, not where the file lives. Use `__dirname` for reliability:
   ```javascript
   const path = require("path");
   fs.readFileSync(path.join(__dirname, "test.txt"), "utf-8");
   ```
2. **`writeFile` overwrites** — if you meant to add data, you wanted `appendFile`.
3. **Sync methods block the event loop** — never use `*Sync` inside an Express route handler that many users hit at once; it freezes the server for everyone until the disk op finishes.
4. **Forgetting `"utf-8"` on read** returns a `Buffer`, not readable text — `<Buffer 48 65 6c 6c 6f>` instead of `"Hello"`.
5. **Callback error handling** — always check `if (error)` first thing inside the callback; don't `return "error"` (does nothing visible), instead `console.log`/`throw`/handle it properly.
6. **`mkdir` fails if the folder already exists** unless you pass `{ recursive: true }`.

---

## The 90% Pattern You'll Actually Use (Express/backend context)

```javascript
const fsPromises = require("fs/promises");
const path = require("path");

app.get("/read-data", async (req, res) => {
  try {
    const filePath = path.join(__dirname, "data.json");
    const data = await fsPromises.readFile(filePath, "utf-8");
    res.json(JSON.parse(data));
  } catch (error) {
    res.status(500).json({ error: "Could not read file" });
  }
});
```
This combo — `fs/promises` + `async/await` + `try/catch` + `path.join(__dirname, ...)` — is what you'll use in almost every real project (reading JSON "databases", logging, config files, uploads, etc.).