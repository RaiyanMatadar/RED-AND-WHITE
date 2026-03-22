**Episode — Fetching & Displaying Data from a Database**

In this episode, Daniel Crossing demonstrates how to retrieve data from a database and display it on a webpage.

**The core query used:**
```sql
SELECT * FROM comments WHERE username = :usersearch;
```

This is a **prepared statement** — the `:usersearch` is a named placeholder that gets bound to a value before execution, which protects against SQL injection.

**How it works:**
- The query runs and returns all matching rows as a **PHP array**
- That array is then looped through and rendered on the webpage

**Why this matters:**
This is the foundation of almost every dynamic webpage — fetch data from the database, loop through the results, display them. Search pages, dashboards, user profiles — they all follow this exact pattern.

---

> Already comfortable with this — no further notes needed for now.