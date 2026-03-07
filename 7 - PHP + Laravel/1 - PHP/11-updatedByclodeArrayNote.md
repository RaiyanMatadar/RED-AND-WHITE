# PHP Arrays

---

## Indexed Arrays

```php
$fruits = ["orange", "banana", "cherry"];
```

### Removing Elements

`unset()` removes an element but **DOES NOT re-index** the array.
The gap in keys remains, which can cause issues when looping by index.

```php
// unset($fruits[1]);
// Result: [0 => "orange", 2 => "cherry"]  <-- key 1 is missing
```

`array_splice()` removes elements **AND re-indexes** the array automatically.  
Syntax: `array_splice($array, $startIndex, $deleteCount);`

```php
array_splice($fruits, 0, 1); // removes 1 element starting at index 0
echo $fruits[0]; // "banana" -- now re-indexed from 0
```

---

## Associative Arrays (key => value pairs)

```php
$tasks = [
    "laundry" => "daniel",
    "trash"   => "frieda",
    "vacuum"  => "basse",
    "dishes"  => "bella"
];

echo $tasks["laundry"]; // Access by key: "daniel"
```

`print_r()` displays the full array structure (keys + values)
```php
print_r($tasks);
```

`count()` returns the number of elements in the array
```php
echo count($tasks); // 4
```

### Sorting Functions

- `sort()` — sorts indexed arrays by value (A-Z), resets keys
- `asort()` — sorts associative arrays by **VALUE**, preserves keys
- `ksort()` — sorts associative arrays by **KEY**, preserves keys
- `rsort()` — reverse sort for indexed arrays
- `arsort()` / `krsort()` — reverse versions of `asort` / `ksort`

---

## Adding Elements

### Indexed Arrays

`array_push()` appends one or more elements to the **END** of an indexed array.

```php
$fruits = ["orange", "banana", "cherry"];
array_push($fruits, "mango");  // appends one item

// Equivalent shorthand (preferred):
$fruits[] = "grape";           // same as array_push for a single item
print_r($fruits);
```

### Associative Arrays

`array_push()` does **NOT** work with associative arrays.  
Assign a new key directly instead:

```php
$tasks["dusting"] = "tara";
print_r($tasks);
```

---

## Inserting Elements at a Specific Position

`array_splice()` can also **INSERT** without deleting (set deleteCount to 0).  
Syntax: `array_splice($array, $startIndex, 0, $insertValue);`

```php
$fruits = ["orange", "banana", "cherry"];
array_splice($fruits, 1, 0, "kiwi"); // inserts "kiwi" before index 1
print_r($fruits);
// Result: ["orange", "kiwi", "banana", "cherry"]
```

You can also insert another array at a position:

```php
$extras = ["fig", "peach"];
array_splice($fruits, 1, 0, $extras); // inserts the whole array at index 1
print_r($fruits);
```

---

## Removing Elements (recap)

- `unset($array[$index])` — removes element, **KEEPS** original keys (creates gap)
- `array_splice($array, $i, 1)` — removes element, **RE-INDEXES** keys
- `array_pop($array)` — removes & returns the **LAST** element
- `array_shift($array)` — removes & returns the **FIRST** element, re-indexes

---

## Useful Array Functions

```php
in_array("banana", $fruits)          // checks if a value exists (returns bool)
array_search("banana", $fruits)      // returns the KEY of the found value (or false)
array_merge($array1, $array2)        // merges two arrays into one
array_reverse($fruits)               // returns array in reverse order
array_unique($fruits)                // removes duplicate values
array_slice($fruits, 1, 2)           // returns a sub-array (start, length)
implode(", ", $fruits)               // joins array elements into a string
explode(", ", "a, b, c")             // splits a string into an array
```

---

## Multidimensional Arrays

An array where each element can itself be an array.

```php
$grid = [
    ["apple", "mango"],   // index 0 -- inner indexed array
    "banana",             // index 1 -- plain string
    "cherry"              // index 2 -- plain string
];

echo $grid[0][1]; // "mango"  (row 0, column 1)
```

### Multidimensional Associative Array

```php
$food = [
    "meat"      => ["beef", "chicken"],
    "vegetable" => ["veggie" => "cucumber", "pearl onion"]
    //              ^ named key                ^ auto-indexed as 0
];

echo $food["meat"][0];             // "beef"
echo $food["vegetable"]["veggie"]; // "cucumber"
echo $food["vegetable"][0];        // "pearl onion"
```

### Looping Through a Multidimensional Array

```php
foreach ($food as $category => $items) {
    echo strtoupper($category) . ":\n";
    foreach ($items as $key => $value) {
        echo "  [$key] => $value\n";
    }
}
```