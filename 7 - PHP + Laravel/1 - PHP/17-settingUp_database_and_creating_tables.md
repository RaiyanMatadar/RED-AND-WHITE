# MySQL Data Types & Foreign Keys — Beginner's Guide

---

## 📦 Numeric Data Types

### INT(11)
Stores whole numbers (no decimals).

| Type | Min | Max |
|------|-----|-----|
| INT(11) | -2,147,483,648 | 2,147,483,647 |
| BIGINT | -9,223,372,036,854,775,808 | 9,223,372,036,854,775,807 |

> 💡 The `(11)` in `INT(11)` is just the **display width** — it does NOT limit the actual value you can store. It's mostly cosmetic.

---

### SIGNED vs UNSIGNED

By default, INT is **SIGNED** — meaning it holds both negative and positive numbers.

```sql
INT SIGNED   -- stores: -2,147,483,648 to 2,147,483,647  (default)
INT UNSIGNED -- stores: 0 to 4,294,967,295
```

> 💡 When you use `UNSIGNED`, you remove the negative side and that space gets added to the positive side — so you can store roughly **double** the positive numbers.

---

### FLOAT vs DOUBLE

Both store decimal numbers (like `3.14`).

- **FLOAT** — less precise, uses less memory
- **DOUBLE** — more precise, uses more memory

> 💡 For most beginner projects, `FLOAT` is fine. Use `DOUBLE` when you need high precision (e.g., scientific calculations).

---

## 📝 Text Data Types

### VARCHAR(n)
Stores text up to `n` characters. Good for short text like names, emails, usernames.

```sql
VARCHAR(30)   -- max 30 characters
VARCHAR(255)  -- max 255 characters (common for passwords)
```

### TEXT
Stores large amounts of text — much more than VARCHAR can hold. Use it for things like blog posts, comments, descriptions.

```sql
TEXT  -- can hold up to 65,535 characters
```

> 💡 Rule of thumb: Use `VARCHAR` for short, predictable text. Use `TEXT` for long, open-ended content.

---

## 📅 Date & Time Data Types

| Type | Format | Example |
|------|--------|---------|
| `DATE` | `YYYY-MM-DD` | `2026-03-05` |
| `DATETIME` | `YYYY-MM-DD HH:MM:SS` | `2026-03-05 17:30:00` |
| `TIMESTAMP` | `YYYY-MM-DD HH:MM:SS` (UTC) | `2026-03-05 12:00:00` |

> 💡 **TIMESTAMP vs DATETIME:**
> - `DATETIME` stores the time as-is (your local time)
> - `TIMESTAMP` converts and stores in **UTC** (universal time) — used in modern applications so time is consistent across timezones

---

## 🏗️ Creating Tables

### Users Table

```sql
CREATE TABLE users (
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30)  NOT NULL,
    email VARCHAR(100) NOT NULL,
    pwd VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);
```

**What each part means:**
- `NOT NULL` — this field cannot be left empty
- `AUTO_INCREMENT` — MySQL automatically gives the next number (1, 2, 3...) for each new row
- `DEFAULT CURRENT_TIMESTAMP` — automatically saves the current date & time when a row is inserted
- `PRIMARY KEY (id)` — makes `id` the unique identifier for every row in this table

> ⚠️ **Common mistake:** `DEFAULT CURRENT_TIME` is wrong — use `DEFAULT CURRENT_TIMESTAMP` for DATETIME/TIMESTAMP columns.

---

## 🔗 Foreign Keys — Linking Tables Together

### Why do we need a second table?

Imagine a user signs up → their data goes into `users`.  
Then they write a comment → that comment goes into `comments`.  
Later they delete their account.

**What happens to their comments?**

That depends on how you set up your **Foreign Key**.

---

### Comments Table

```sql
CREATE TABLE comments (
    id INT(11) NOT NULL AUTO_INCREMENT,
    comment_text TEXT NOT NULL,
    user_id INT(11),  -- no NOT NULL here! (see explanation below)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);
```

> 💡 `user_id` is the **Foreign Key** — it links each comment back to the user who wrote it by storing the user's `id`.

---

### ON DELETE Options — What happens when a user is deleted?

| Option | What it does |
|--------|-------------|
| `SET NULL` | Sets `user_id` to NULL — comment stays, user link is removed |
| `CASCADE` | Deletes the comment too when the user is deleted |
| `NO ACTION` | Does nothing — user can't be deleted if they have comments |
| `RESTRICT` | Same as NO ACTION (blocks the delete) |

**Which one to use for comments?**

✅ Use `SET NULL` — the comment stays on the site, but it shows as "anonymous" or "deleted user". This is what most platforms do (Reddit, YouTube, etc.)

❌ Avoid `CASCADE` for comments — you'd lose all the comment data permanently.

---

## ⚠️ Common Error — Error 1005

If you see **Error 1005** when creating the `comments` table, here's why:

You wrote:
```sql
user_id INT(11) NOT NULL,
...
FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
```

**The problem:** You said `user_id` cannot be NULL (`NOT NULL`), but then told MySQL to set it to NULL when a user is deleted (`ON DELETE SET NULL`). That's a contradiction!

**The fix:** Remove `NOT NULL` from `user_id`:

```sql
user_id INT(11),   -- ✅ can be NULL now
```

---

## 🔁 Full Example — Both Tables Together

```sql
-- Step 1: Create users table first (comments depends on it)
CREATE TABLE users (
    id         INT(11)      NOT NULL AUTO_INCREMENT,
    username   VARCHAR(30)  NOT NULL,
    email      VARCHAR(100) NOT NULL,
    pwd        VARCHAR(255) NOT NULL,
    created_at TIMESTAMP    DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Step 2: Create comments table with foreign key
CREATE TABLE comments (
    id           INT(11)  NOT NULL AUTO_INCREMENT,
    comment_text TEXT     NOT NULL,
    user_id      INT(11),
    created_at   TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);
```

> ⚠️ Always create the **parent table** (`users`) before the **child table** (`comments`). MySQL needs `users` to exist before it can set up the foreign key link.

---

## 📌 Quick Summary

| Concept | Remember |
|---------|----------|
| `INT UNSIGNED` | Only positive numbers, double the range |
| `VARCHAR` | Short text with a max limit |
| `TEXT` | Long text, no practical limit |
| `TIMESTAMP` | Saves in UTC — use for modern apps |
| `AUTO_INCREMENT` | MySQL handles the ID numbering for you |
| `FOREIGN KEY` | Links two tables together |
| `ON DELETE SET NULL` | Keeps the data, removes the user link |
| `ON DELETE CASCADE` | Deletes related rows too |
| Error 1005 | `NOT NULL` + `SET NULL` conflict on foreign key column |






---
# Manual Notes Below













INT(11) -2147483648 , 2147483647
BIGINT - 56789067890900

FLOAT
DOUBLE 

VARCHAR(10) - only 10 characters will be allowed 

TEXT -  for more characters then VARCHAR 

DATE 2026-03-05

same as DATE but with TIME 
DATETIME 2026-03-05 17:30:00

there are bits for each of the datatype 

for saving only negetive number 
INT(11) SIGNED - only negetive number allowed
INT(11) SIGNED - only positive number allowed 

once you use any of them you can store from 0 to much more greter number then this 2147483647 number as we have used SIGNED/UNSIGNED so it have cut down the space for the NEGATIVE/POSITIVE number which was there 

CREATE TABLE users(
	id INT(11) NOT NULL AUTO_INCREMENT,
  	username VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    pwd VARCHAR(255) NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIME,
    -- or 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP (this will store time with the UTC format we use it in mordern applications) 
    PRIMARY KEY (id)
);

we will create an comment table so that the users comment can be stored here 

so the user created an account its data get stored into the users table now the user 
has added some comment on the web app so the comment data also stored in the comment table 
after that he deleated the account so means the users account has been deleted so does that 
means the comment data on comment table that he made will get deleated too?
the answer is no thats not an good way to do so

CREATE TABLE comments(
    id INT(11) NOT NULL AUTO_INCREMENT,
    username VARCHAR(30) NOT NULL,
    comment_text TEXT NOT NULL,
    user_id INT(11) NOT NULL,   // remove the not null as we using SET NULL to foraign key 
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIME,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE SET NULL (other operation  as NO ACTION , CASCADE)
);

FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE NO ACTION  
it will do nothing if the user deleted 

FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
it will delete the comment on the user account deleation which isnt good practice tough for comment 

error explain 
the error 1005 was coming because we have said 
user_id REFERENCES id from the table users now the relation has been made 
after that if the user delete account then set the user_id to NULL but inn inizial phase 
we set the user_id to NOT NULL thats why the error saying an error into foreign key