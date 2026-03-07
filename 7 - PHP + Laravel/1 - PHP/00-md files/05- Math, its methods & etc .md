## PHP Mathematics

---

### Integer Division

```php
echo intdiv(10, 3);   // → 3 (discards remainder)
```

---

### Math Functions

**Rounding**
```php
echo round(4.5);       // → 5 (its in the middle of the number so its will be converted into 5)
echo round(4.4);       // → 4 (its less then the half decimal amount so it will round down )
echo round(4.567, 2);  // → 4.57 (2 decimal places)
echo ceil(4.1);        // → 5  (always rounds UP)
echo floor(4.9);       // → 4  (always rounds DOWN)
```

**Absolute Value & Sign**
```php
echo abs(-15);    // → 15
echo abs(15);     // → 15
```

**Powers & Roots**
```php
echo pow(2, 8);      // → 256
echo sqrt(144);      // → 12
echo log(M_E);       // → 1   (natural log)
echo log(100, 10);   // → 2   (log base 10)
echo log10(1000);    // → 3
```

**Min, Max & Range**
```php
echo min(3, 1, 7, 2);   // → 1
echo max(3, 1, 7, 2);   // → 7
echo min([5, 3, 9]);    // → 3 (also accepts arrays)
```

**Random Numbers**
```php
echo rand();          // Random integer
echo rand(1, 100);    // Random integer between 1 and 100
echo mt_rand(1, 100); // Faster, better randomness
echo lcg_value();     // Random float between 0 and 1
```

---

### Mathematical Constants

```php
M_PI      // π ≈ 3.14159265358979
M_E       // e ≈ 2.71828182845905
M_SQRT2   // √2 ≈ 1.41421356237310
M_LN2     // ln(2) ≈ 0.69314718055995
PHP_INT_MAX   // Largest integer (e.g. 9223372036854775807)
PHP_FLOAT_MAX // Largest float
```

---

### Trigonometry

```php
echo sin(M_PI / 2);   // → 1
echo cos(0);          // → 1
echo tan(M_PI / 4);   // → 1
echo deg2rad(180);    // → π (converts degrees to radians)
echo rad2deg(M_PI);   // → 180
```

---

### Number Formatting

```php
echo number_format(1234567.891);         // → 1,234,568
echo number_format(1234567.891, 2);      // → 1,234,567.89
echo number_format(1234567.891, 2, '.', ','); // → 1,234,567.89
```

---

### Type Considerations

PHP automatically handles integer vs. float arithmetic, but be aware:

```php
var_dump(10 / 3);    // float(3.3333...)
var_dump(10 / 2);    // int(5)  ← PHP returns int when result is whole
var_dump(10 % 3);    // int(1)  ← modulus always returns int
```

---

### Practical Example — Compound Interest

```php
function compoundInterest($principal, $rate, $n, $t) {
    // A = P(1 + r/n)^(nt)
    return $principal * pow((1 + $rate / $n), $n * $t);
}

$result = compoundInterest(1000, 0.05, 12, 10);
echo number_format($result, 2); // → 1,647.01
```
