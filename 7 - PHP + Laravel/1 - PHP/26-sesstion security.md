## PHP Session Security

Think of your session ID like a **hotel key card**. The hotel doesn't write your name and room
number on the outside of the card — it just stores a random code. The front desk looks up that
code internally to find your room. If someone steals your key card, they get into your room.
If someone steals your session ID, they get into your account.

Session security is all about protecting that key card.

---

## 3 attacks, 3 defences
```
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│   Session hijacking │   │   Session fixation  │   │   Session exposure  │
│  Attacker steals ID │   │  Attacker plants ID │   │ ID leaks in URL/log │
└──────────┬──────────┘   └──────────┬──────────┘   └──────────┬──────────┘
           │ fix                     │ fix                     │ fix
           ▼                         ▼                         ▼
┌─────────────────────┐   ┌─────────────────────┐   ┌─────────────────────┐
│   Regenerate ID     │   │ Regenerate on login │   │    Cookie only      │
│session_regenerate_id│   │ destroy old session,│   │ use_only_cookies = 1│
│   after every login │   │    issue fresh ID   │   │    never in URL     │
└─────────────────────┘   └─────────────────────┘   └─────────────────────┘

Applies to all three:
  - HttpOnly cookie flag
  - Secure cookie flag (HTTPS only)
  - Short session lifetime
  - Validate user agent and IP on each request
```

---

## Secure session code
```php
<?php
// Step 1 — configure BEFORE session_start(), not after
// These settings harden the session cookie itself

ini_set('session.use_only_cookies', 1);       // never put session ID in the URL
ini_set('session.use_strict_mode', 1);        // reject session IDs the server didn't create
ini_set('session.cookie_httponly', 1);        // JS in the browser cannot read this cookie
ini_set('session.cookie_secure', 1);          // cookie only travels over HTTPS, never plain HTTP
ini_set('session.cookie_samesite', 'Strict'); // blocks the cookie being sent in cross-site requests
ini_set('session.gc_maxlifetime', 1800);      // session expires after 30 minutes of inactivity

session_start(); // now it's safe to start

// Step 2 — regenerate the ID immediately after login
// This defeats session fixation: the attacker's planted ID becomes invalid
if ($loginSuccessful) {
    session_regenerate_id(true); // true = delete the old session file too
    $_SESSION['user_id'] = $userId;
    $_SESSION['role']    = 'admin';
}

// Step 3 — bind the session to the user's browser fingerprint
// If the IP or user agent changes mid-session, someone may have stolen the ID
if (isset($_SESSION['user_agent'])) {
    if ($_SESSION['user_agent'] !== $_SERVER['HTTP_USER_AGENT']) {
        // fingerprint mismatch — possible hijack, kill the session
        session_destroy();
        header('Location: /login.php');
        exit;
    }
} else {
    // first request after login — store the fingerprint
    $_SESSION['user_agent'] = $_SERVER['HTTP_USER_AGENT'];
}

// Step 4 — enforce session lifetime manually as well
// PHP's gc_maxlifetime is garbage collection, not a strict timer
// A manual check is more reliable
$maxIdle = 1800; // 30 minutes
if (isset($_SESSION['last_activity'])) {
    if (time() - $_SESSION['last_activity'] > $maxIdle) {
        session_unset();
        session_destroy();
        header('Location: /login.php');
        exit;
    }
}
$_SESSION['last_activity'] = time(); // refresh the timer on every page load
?>
```

---

## The 3 most common beginner mistakes

**1. Setting `ini_set()` options after `session_start()`.**
All those `ini_set` calls must come before `session_start()`. Once the session has started,
the cookie has already been sent to the browser — changing the settings at that point does
nothing. The line order genuinely matters here.

**2. Never calling `session_regenerate_id(true)` after login.**
Most beginners call `session_start()` on the login page, check the password, and then just
write to `$_SESSION` using the same ID that already existed. That existing ID may have been
planted by an attacker (session fixation). The fix is one line after a successful login:
`session_regenerate_id(true)`. The `true` argument also deletes the old session file so the
old ID becomes completely dead.

**3. Forgetting `exit` after a `header()` redirect.**
When you detect a security problem (expired session, fingerprint mismatch), you call
`header('Location: /login.php')` to kick the user out. But PHP keeps executing the code
below that line. An attacker can sometimes still receive the page output before the redirect
kicks in. Always pair every redirect with `exit` immediately after:
```php
header('Location: /login.php');
exit; // execution stops here — nothing below runs
```

