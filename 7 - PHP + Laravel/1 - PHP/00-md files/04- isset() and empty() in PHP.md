# isset() and empty() in PHP

These are two fundamental functions for checking variable states in PHP. While they might seem similar, they behave quite differently and understanding their distinctions is crucial for writing robust code.

## isset()

The `isset()` function checks if a variable is declared and is not `NULL`.
same as `(property) != null ` condition but an readable way. 

### Syntax
```php
isset($var)
isset($var1, $var2, ...) // Returns true only if ALL are set
```

### Returns
- `true` if the variable exists and is not `NULL`
- `false` if the variable doesn't exist or is `NULL`

### Examples

```php
$name = "John";
$age = 0;
$city = "";
$active = false;
$nothing = null;

isset($name);      // true
isset($age);       // true (0 is set)
isset($city);      // true (empty string is set)
isset($active);    // true (false is set)
isset($nothing);   // false (NULL is not set)
isset($undefined); // false (doesn't exist)
```

### Multiple Variables

```php
isset($name, $age, $city); // true (all are set)
isset($name, $undefined);  // false (one is not set)
```

### With Arrays

```php
$person = [
    "name" => "John",
    "age" => 30,
    "address" => null
];

isset($person["name"]);     // true
isset($person["age"]);      // true
isset($person["address"]);  // false (value is NULL)
isset($person["phone"]);    // false (key doesn't exist)

// Checking nested arrays safely
isset($person["contact"]["email"]); // false (no warning)
```

## empty()

The `empty()` function checks if a variable is considered "empty".

### Syntax
```php
empty($var)
```

### Returns
- `true` if the variable is considered empty
- `false` if the variable has a non-empty value

### What is Considered Empty?

The following values are considered empty:
- `""` (empty string)
- `0` (integer zero)
- `0.0` (float zero)
- `"0"` (string zero)
- `NULL`
- `false`
- `[]` (empty array)
- A variable that is declared but not assigned a value

### Examples

```php
$emptyString = "";
$zero = 0;
$floatZero = 0.0;
$stringZero = "0";
$null = null;
$false = false;
$emptyArray = [];
$space = " ";
$name = "John";

empty($emptyString);  // true
empty($zero);         // true
empty($floatZero);    // true
empty($stringZero);   // true
empty($null);         // true
empty($false);        // true
empty($emptyArray);   // true
empty($space);        // false (space is not empty)
empty($name);         // false
empty($undefined);    // true (no warning)
```

### With Arrays

```php
$data = [
    "name" => "John",
    "age" => 0,
    "city" => "",
    "active" => false,
    "items" => []
];

empty($data["name"]);   // false
empty($data["age"]);    // true (0 is empty)
empty($data["city"]);   // true (empty string)
empty($data["active"]); // true (false is empty)
empty($data["items"]);  // true (empty array)
empty($data["phone"]);  // true (doesn't exist, no warning)
```

## Key Differences

```php
$value = 0;

isset($value);  // true (variable exists and is not NULL)
empty($value);  // true (0 is considered empty)

$value = null;

isset($value);  // false (NULL is not set)
empty($value);  // true (NULL is empty)

$value = "0";

isset($value);  // true
empty($value);  // true (string "0" is empty)

$value = false;

isset($value);  // true (false is set)
empty($value);  // true (false is empty)

// Undefined variable
isset($undefined);  // false
empty($undefined);  // true (no warning)
```

## Comparison Table

| Value | isset() | empty() |
|-------|---------|---------|
| `""` | true | true |
| `" "` | true | false |
| `0` | true | true |
| `"0"` | true | true |
| `1` | true | false |
| `NULL` | false | true |
| `false` | true | true |
| `true` | true | false |
| `[]` | true | true |
| `[0]` | true | false |
| undefined | false | true |

## Common Use Cases

### Checking Form Input

```php
// Check if form was submitted
if (isset($_POST['submit'])) {
    // Check if required fields have values
    if (!empty($_POST['username']) && !empty($_POST['email'])) {
        // Process form
    } else {
        echo "Please fill in all fields";
    }
}
```

### Checking Array Keys

```php
// Using isset() - safer for checking if key exists
if (isset($config['database']['host'])) {
    $host = $config['database']['host'];
}

// Using empty() - check if key exists AND has value
if (!empty($user['email'])) {
    sendEmail($user['email']);
}
```

### API Response Validation

```php
$response = json_decode($apiData, true);

// Check if response exists and has data
if (isset($response['data']) && !empty($response['data'])) {
    processData($response['data']);
}
```

### Null Coalescing Operator (PHP 7+)

A modern alternative to `isset()`:

```php
// Old way
$username = isset($_GET['user']) ? $_GET['user'] : 'guest';

// New way (PHP 7+)
$username = $_GET['user'] ?? 'guest';

// Chaining (PHP 7)
$config = $customConfig ?? $defaultConfig ?? [];

// Null coalescing assignment (PHP 7.4+)
$data['name'] ??= 'Unknown';
```

## Important Notes and Gotchas

### isset() Doesn't Check Array Values

```php
$arr = ["key" => null];

isset($arr["key"]);  // false (value is NULL)
array_key_exists("key", $arr); // true (key exists)
```

### empty() Cannot Check Function Returns Directly (Before PHP 5.5)

```php
// PHP 5.5+: Works
if (empty(getUsername())) { }

// Before PHP 5.5: Syntax error, use variable
$username = getUsername();
if (empty($username)) { }
```

### Zero Values Can Be Tricky

```php
$quantity = 0;

// Wrong: Treats 0 as no input
if (empty($quantity)) {
    echo "Please enter quantity";
}

// Better: Check if set first
if (!isset($quantity) || $quantity === '') {
    echo "Please enter quantity";
}

// Or: Use strict comparison
if ($quantity === 0 || $quantity === '') {
    // Handle appropriately
}
```

### Checking Boolean Values

```php
$accepted = false;

// Wrong: false is empty
if (empty($accepted)) {
    echo "Not accepted"; // Always executes even if set to false
}

// Better: Check explicitly
if (isset($accepted) && $accepted === false) {
    echo "Explicitly set to false";
}

// Or check if truly not set
if (!isset($accepted)) {
    echo "Not set at all";
}
```

## Best Practices

**Use `isset()` when:**
- You need to check if a variable or array key exists
- You want to distinguish between `NULL` and other falsy values
- Checking optional configuration values

**Use `empty()` when:**
- You want to check if a value is present and meaningful
- Validating required form fields
- You want to treat `0`, `"0"`, `false`, `""`, and `NULL` the same way

**Consider alternatives:**
- Use `array_key_exists()` to check array keys when `NULL` values are valid
- Use null coalescing operator (`??`) for cleaner default value assignment
- Use strict comparisons (`===`, `!==`) when you need precise control
- Use type declarations in function parameters (PHP 7+) for better validation

```php
// Modern PHP approach
function processUser(array $data): void {
    $name = $data['name'] ?? throw new InvalidArgumentException('Name required');
    $age = $data['age'] ?? 0;
    $email = $data['email'] ?? null;
    
    if ($age > 0) {
        // Process age
    }
}
```