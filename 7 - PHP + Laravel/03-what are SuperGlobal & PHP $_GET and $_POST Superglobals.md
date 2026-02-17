# PHP `$_GET` and `$_POST` Superglobals

## What Are Superglobals?
Built-in global arrays in PHP that are automatically available everywhere. They capture data from forms and URLs.

---

## `$_GET` - Data in URL

### How It Works:
```html
<form action="index.php" method="get">
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>
```

### Internal Flow:
1. User types **"raiyan"** and submits
2. URL becomes: `index.php?username=raiyan`
3. PHP creates: `$_GET = ["username" => "raiyan"]`
4. Access: `echo $_GET['username'];` → Prints: **raiyan**

### Key Points:
- Data **visible** in URL
- Input `name` attribute = array key
- User input = array value
- Limited data size
- Use for: search, filters, pagination

---

## `$_POST` - Data Hidden in Request Body

### How It Works:
```html
<form action="index.php" method="post">
    <input type="text" name="username">
    <input type="submit" value="Submit">
</form>
```

### Internal Flow:
1. User types **"raiyan"** and submits
2. Data sent in **request body** (not URL)
3. URL stays clean: `index.php`
4. PHP creates: `$_POST = ["username" => "raiyan"]`
5. Access: `echo $_POST['username'];` → Prints: **raiyan**

### Key Points:
- Data **hidden** from URL
- More secure for sensitive data
- Can send large amounts of data
- Use for: login, registration, file uploads

---

## Comparison:

| Feature | `$_GET` | `$_POST` |
|---------|---------|----------|
| **Visibility** | In URL | Hidden |
| **Security** | Less secure | More secure |
| **Data Size** | Limited (~2000 chars) | Large |
| **Bookmarkable** | Yes | No |
| **Best For** | Search, filters | Passwords, forms |

---

## Safe Usage:
```php
// Check if exists
if (isset($_POST['username'])) {
    $username = $_POST['username'];
}

// With default value
$username = $_POST['username'] ?? 'Guest';

// Sanitize output
echo htmlspecialchars($_POST['username']);

// Check request method
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Process form
}
```

---

## Multiple Inputs Example:
```html
<form method="post">
    <input name="username">
    <input name="email">
    <input name="age">
</form>
```

Creates:
```php
$_POST = [
    "username" => "raiyan",
    "email" => "raiyan@gmail.com",
    "age" => "25"
];
```

---

## Summary:
- Both are **superglobal arrays** automatically created by PHP
- Input `name` attribute becomes the **key**
- User input becomes the **value**
- `$_GET` = data in URL (visible)
- `$_POST` = data in request body (hidden)
- Always validate and sanitize user input!