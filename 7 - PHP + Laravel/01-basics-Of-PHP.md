## 📋 Table of Contents
- [What is PHP?](#what-is-php)
- [PHP Syntax](#php-syntax)
- [Case Sensitivity](#case-sensitivity)
- [Variables](#variables)
- [Data Types](#data-types)
- [Checking Variable Values](#checking-variable-values)
- [Operators](#operators)
  - [Arithmetic Operators](#1-arithmetic-operators)
  - [Assignment Operators](#2-assignment-operators)
  - [Comparison Operators](#3-comparison-operators)
  - [Logical Operators](#4-logical-operators)
  - [String Concatenation Operator](#5-string-concatenation-operator)
  - [Other Operators](#6-other-operators)


## What is PHP?
PHP runs on the **server side** (not in the browser like JavaScript does).

**Server-side** means the code runs on the server before sending results to the browser.
**Client-side** means the code runs in the browser (like JavaScript), and users can see it in the page source.

To run PHP, you need:
- **Web Server** (like Apache or Nginx)
- **PHP Engine**
- **MySQL Database** (optional - only needed for database-driven applications)

---

## PHP Syntax

A PHP script starts with `<?php` and ends with `?>`
```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>A Simple PHP File</title>
</head>
<body>
    <h1><?php echo "Hello, world!"; ?></h1>
</body>
</html>
```

**What happens here?**
1. The PHP engine executes code between `<?php ... ?>`
2. It leaves the HTML as-is
3. The web server sends the final HTML output to your browser

---

## Case Sensitivity

**Variables ARE case-sensitive:**
```php
$color = "red";
$Color = "blue";
$COLOR = "green";
// These are THREE different variables
```

**Keywords, functions, and class names are NOT case-sensitive:**
```php
ECHO "Hello"; // Works
echo "Hello"; // Also works
Echo "Hello"; // Also works
```

---

## Variables

Variables start with the `$` sign:
```php
$name = 'Flavio';  // String
$age = 20;         // Integer
```

**Remember:** Every statement must end with a semicolon (`;`)

---

## Data Types

PHP has these main types:

- `bool` - Boolean values (true/false)
- `int` - Integer numbers (no decimals)
- `float` - Floating-point numbers (with decimals)
- `string` - Text strings
- `array` - Collections of values
- `object` - Objects
- `null` - Represents "no value assigned"

---

## Checking Variable Values

Use `var_dump()` to see a variable's type and value:
```php
$name = 'Flavio';
var_dump($name);
// Output: string(6) "Flavio"

$age = 20;
var_dump($age);
// Output: int(20)
```

---

## Operators

### 1. Arithmetic Operators
```php
$sum = 5 + 3;        // Addition: 8
$diff = 5 - 3;       // Subtraction: 2
$product = 5 * 3;    // Multiplication: 15
$quotient = 6 / 3;   // Division: 2
$remainder = 7 % 3;  // Modulo (remainder): 1
```

**Modulo (%)** gives you the remainder after division.
Example: 7 ÷ 3 = 2 remainder 1, so `7 % 3 = 1`

---

### 2. Assignment Operators
```php
$x = 10;      // Assign 10 to $x
$x += 5;      // Add 5 to $x (now $x is 15)
$x -= 3;      // Subtract 3 from $x (now $x is 12)
$x *= 2;      // Multiply $x by 2 (now $x is 24)
$x /= 4;      // Divide $x by 4 (now $x is 6)
```

---

### 3. Comparison Operators
```php
5 == 5;       // Equal to (value only): true
5 === "5";    // Identical (value AND type): false
5 != 3;       // Not equal: true
5 !== "5";    // Not identical: true
5 > 3;        // Greater than: true
5 < 3;        // Less than: false
5 >= 5;       // Greater than or equal: true
5 <= 3;       // Less than or equal: false
```

**Important:** 
- `==` compares values only
- `===` compares both value AND type

---

### 4. Logical Operators
```php
true && false;   // AND: both must be true → false
true || false;   // OR: at least one must be true → true
!true;           // NOT: flips the value → false
```

---

### 5. String Concatenation Operator (.)

```php
// Basic concatenation
$a = "Hello ";
$b = "World!";
$c = $a . $b; 
// Output: "Hello World!"


// Concatenation assignment (.=)
$greeting = "Hello ";
$greeting .= " World";  // Appends " World" to $greeting
// Output: "Hello World"

```

---

### 6. Other Operators

**Ternary Operator (? :)**
```php
$age = 20;
$status = ($age >= 18) ? "Adult" : "Minor";
// Output: "Adult"
```

**Null Coalescing (??)**
```php
$username = $_GET['user'] ?? 'Guest';
// If $_GET['user'] exists, use it; otherwise use 'Guest'
```

**Array Operators** (we'll cover these in detail later)
```php
$arr1 = [1, 2, 3];
$arr2 = [4, 5, 6];
$combined = $arr1 + $arr2;  // Union of arrays
```
