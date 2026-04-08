## PHP Sessions

Here's the real-life analogy first, then the code, then the mistakes.

**The coat check analogy.** When you walk into a restaurant, you hand your coat to the coat check. They give you a small ticket with a number. You keep that ticket in your pocket. Every time you interact with the staff — order food, ask for water, pay the bill — they can look up your ticket number and find your coat, your preferences, everything about you. When you leave, you hand in the ticket and they discard your coat.

PHP sessions work exactly like this. The server keeps your data (the coat). It gives your browser a small ID in a cookie (the ticket). Every request your browser makes, it shows that ticket. The server looks up your data and knows who you are.

This is how PHP remembers you across pages — because HTTP itself is stateless (it forgets you after every request).

Here's a minimal, annotated example:Now here's the code:

```php
<?php
// MUST be the very first line — before any HTML or echo
// This starts the session engine. Without it, $_SESSION doesn't exist.
session_start();

// Storing data into the session — works like a normal array
// This data is saved in a file on the server, NOT in the cookie
$_SESSION['username'] = 'Progmmer';
$_SESSION['role']     = 'admin';

// Reading data back on the same page (or any other page)
// As long as session_start() was called, $_SESSION is available
echo "Welcome, " . $_SESSION['username']; // Outputs: Welcome, Progmmer

// Removing one specific value from the session
unset($_SESSION['role']);

// Destroying the ENTIRE session (use this on logout)
// session_destroy() wipes the server-side file
session_destroy();
?>
```

---

## The 3 most common beginner mistakes

**1. Forgetting `session_start()` — or calling it too late.**
`$_SESSION` is just an empty array until you call `session_start()`. If you output anything — even a single space or a blank line before `<?php` — before calling it, PHP throws a "headers already sent" error because the session cookie can't be sent after output has started. Rule: `session_start()` goes on line 1, before everything.

**2. Confusing `session_destroy()` with actually clearing the data.**
Calling `session_destroy()` deletes the session file on the server, but `$_SESSION` still holds the old values in memory for the rest of that request. A proper logout needs both:
```php
$_SESSION = [];      // wipe the array in memory
session_destroy();   // delete the server-side file
```
Many beginners call only `session_destroy()` and then wonder why `$_SESSION['username']` still prints.

**3. Checking `$_SESSION` without checking if it's set first.**
If a user visits a page directly without logging in, `$_SESSION['username']` doesn't exist yet. Accessing it directly causes an "Undefined index" notice. Always guard with `isset()`:
```php
// Wrong — crashes if session value doesn't exist
echo $_SESSION['username'];

// Right — safe check first
if (isset($_SESSION['username'])) {
    echo $_SESSION['username'];
}
```

This is especially important in your Student Management System where you'll be checking for admin sessions on every protected page.