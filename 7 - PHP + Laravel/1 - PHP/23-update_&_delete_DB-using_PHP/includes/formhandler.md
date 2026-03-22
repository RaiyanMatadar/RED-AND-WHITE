# PHP PDO — Inserting Data Safely with Prepared Statements

## What is a Prepared Statement?

A **prepared statement** is a way to safely send data to the database.

Without it, a user could type malicious SQL code into a form field and **destroy or manipulate your database** — this is called **SQL Injection**.

Prepared statements prevent this by separating your SQL query from the actual data.

---

## Setup — Connecting to the Database

Before inserting data, you need an active database connection via PDO.
This is handled by an external file (`dbh.inc.php`) which is linked using `require_once`.

```php
require_once "dbh.inc.php";
// $pdo is now available from the included file
```

> 💡 Use `require_once` for critical files like database connections.
> It stops the script immediately if the file is missing, and ensures it's only loaded once.

---

## Handling the Form Submission

Only run the insert logic when the form is actually submitted (`POST` request).

```php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd      = $_POST["pwd"];
    $email    = $_POST["email"];
}
```

---

## ❌ The Unsafe Way (Do NOT use this)

Inserting variables directly into the query is dangerous — never do this in production.

```php
// ❌ UNSAFE — vulnerable to SQL Injection
$query = "INSERT INTO users (username, pwd, email) 
          VALUES ($username, $pwd, $email);";
```

A user could type something like `'; DROP TABLE users; --` into a field and wipe your database.

---

## A Note on Semicolons

You'll notice **two semicolons** at the end of every query string:

```php
$query = "INSERT INTO users (username, pwd, email) VALUES (?, ?, ?);";
//                                                                   ^ MySQL semicolon — ends the SQL query (inside the string)
//                                                                    ^ PHP semicolon — ends the PHP statement (outside the string)
```

- The **first** `;` (inside the quotes) belongs to **MySQL** — it ends the SQL query
- The **second** `;` (outside the quotes) belongs to **PHP** — it ends the PHP statement

---

## ✅ Method 1 — Unnamed Parameters (using `?`)

Each `?` is a placeholder that gets replaced with your actual data at execution time.
The values are passed as an **array in order** — first `?` = first value, and so on.

```php
// Step 1: Write the query with ? placeholders
$query = "INSERT INTO users (username, pwd, email) 
          VALUES (?, ?, ?);";

// Step 2: Prepare the query
// $pdo is the database connection object brought in from dbh.inc.php
$stmt = $pdo->prepare($query);

// Step 3: Execute — values map to ? in order
$stmt->execute([$username, $pwd, $email]);
```

> ⚠️ The order of the array **must match** the order of the `?` placeholders.
> If you have many columns, this can become error-prone.

---

## ✅ Method 2 — Named Parameters (Recommended)

Instead of `?`, you use named placeholders like `:username`.
Each placeholder is then **explicitly bound** to a variable — order doesn't matter.

```php
// Step 1: Write the query with named placeholders
$query = "INSERT INTO users (username, pwd, email) 
          VALUES (:username, :pwd, :email);";

// Step 2: Prepare the query
$stmt = $pdo->prepare($query);

// Step 3: Bind each placeholder to its variable
$stmt->bindParam(":username", $username);
$stmt->bindParam(":pwd",      $pwd);
$stmt->bindParam(":email",    $email);

// Step 4: Execute
$stmt->execute();
```

> 💡 Named parameters are **easier to read and debug**, especially with many columns.
> This is the recommended approach.

---

## Closing the Connection

PHP closes the database connection automatically when the script ends, but it's best practice to do it manually to free up resources as soon as possible.

```php
$pdo  = null; // Close the database connection
$stmt = null; // Clear the prepared statement
```

---

## Redirecting After Success & Ending the Script

Once the data is inserted, redirect the user to another page using `header()`.

```php
header("Location: ../index.php");
die();
```

### `die()` vs `exit()`

Both stop the script, but use them in the right context:

| | When to use |
|---|---|
| `die()` | When there **is** a database connection involved, or you want to show an error message |
| `exit()` | When you just want to **end the script** cleanly, with no error |

> ⚠️ Always call `die()` or `exit()` after `header("Location: ...")` — otherwise the script keeps running even after the redirect.

---

## Error Handling with PDOException

Wrap everything in a `try/catch` block to handle database errors gracefully
instead of crashing the entire page.

```php
try {
    // ... your PDO code here
} catch (PDOException $e) {
    die("Query failed: " . $e->getMessage());
}
```

---

## Complete Code — Method 1 (Unnamed Parameters)

```php
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd      = $_POST["pwd"];
    $email    = $_POST["email"];

    try {
        require_once "dbh.inc.php";

        // ? placeholders — values passed in order via array
        $query = "INSERT INTO users (username, pwd, email) 
                  VALUES (?, ?, ?);";
        //                        ^ MySQL semicolon     ^ PHP semicolon

        $stmt = $pdo->prepare($query);
        $stmt->execute([$username, $pwd, $email]);

        $pdo  = null;
        $stmt = null;

        header("Location: ../index.php");
        die();

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }

} else {
    header("Location: ../index.php");
}
```

---

## Complete Code — Method 2 (Named Parameters — Recommended)

```php
<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $pwd      = $_POST["pwd"];
    $email    = $_POST["email"];

    try {
        require_once "dbh.inc.php";

        // :name placeholders — each bound explicitly, order doesn't matter
        $query = "INSERT INTO users (username, pwd, email) 
                  VALUES (:username, :pwd, :email);";

        $stmt = $pdo->prepare($query);

        $stmt->bindParam(":username", $username);
        $stmt->bindParam(":pwd",      $pwd);
        $stmt->bindParam(":email",    $email);

        $stmt->execute();

        $pdo  = null;
        $stmt = null;

        header("Location: ../index.php");
        die();

    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }

} else {
    header("Location: ../index.php");
}
```

---

## Quick Reference

| | Method 1 (`?`) | Method 2 (`:name`) |
|---|---|---|
| Placeholder style | `?` | `:username` |
| Values passed via | Array in `execute()` | `bindParam()` calls |
| Order-sensitive | ✅ Yes | ❌ No |
| Recommended for | Short, simple queries | Most cases |