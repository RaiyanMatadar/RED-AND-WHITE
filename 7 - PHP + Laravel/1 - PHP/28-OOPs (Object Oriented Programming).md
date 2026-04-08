## OOP — Think of it like a Blueprint Factory 🏗️

**The Analogy:** Imagine you're building cars. Instead of building each car from scratch every time, you create a **blueprint** (class) that defines what a car *is* (properties: color, brand) and what it can *do* (methods: drive, honk). Every actual car on the road is an **object** — a real thing made from that blueprint.

---

### The 4 Pillars

**1. Class & Object** — Blueprint → Real thing

**2. Encapsulation** — Hide the engine internals, just give the driver a steering wheel

**3. Inheritance** — A SportsCar blueprint *extends* the Car blueprint (gets everything + adds more)

**4. Polymorphism** — A Car and a Bike both have a `move()` method, but they move differently

---

### PHP Example

```php
<?php

// CLASS = the blueprint
class Car {

  // PROPERTIES = the car's data/attributes
  private string $brand;   // private = only accessible inside this class (encapsulation)
  private int $speed = 0;

  // CONSTRUCTOR = runs automatically when you create a new car
  public function __construct(string $brand) {
    $this->brand = $brand; // $this refers to the current object
  }

  // METHOD = something the car can do
  public function accelerate(int $amount): void {
    $this->speed += $amount;
  }

  // GETTER = controlled way to read a private property
  public function getSpeed(): int {
    return $this->speed;
  }
}

// INHERITANCE: SportsCar IS-A Car, but with extras
class SportsCar extends Car {

  // POLYMORPHISM: overriding the parent's method
  public function accelerate(int $amount): void {
    parent::accelerate($amount * 2); // sports cars go twice as fast
  }
}

// OBJECT = a real car built from the blueprint
$myCar = new Car("Toyota");
$myCar->accelerate(30);
echo $myCar->getSpeed(); // 30

$sports = new SportsCar("Ferrari");
$sports->accelerate(30);
echo $sports->getSpeed(); // 60 — same method, different behavior!
```

---

### JavaScript Example

```js
// CLASS = same idea, JS syntax is slightly different
class Car {

  // CONSTRUCTOR runs on `new Car(...)`
  constructor(brand) {
    this.brand = brand;  // public by default in JS
    this.speed = 0;
  }

  // METHOD
  accelerate(amount) {
    this.speed += amount;
  }

  getSpeed() {
    return this.speed;
  }
}

// INHERITANCE with `extends`
class SportsCar extends Car {

  // POLYMORPHISM: same method name, different behavior
  accelerate(amount) {
    super.accelerate(amount * 2); // super calls the parent class method
  }
}

// Create objects
const myCar = new Car("Toyota");
myCar.accelerate(30);
console.log(myCar.getSpeed()); // 30

const sports = new SportsCar("Ferrari");
sports.accelerate(30);
console.log(sports.getSpeed()); // 60
```

> **Key diff:** PHP uses `$this->property`, JS uses `this.property`. PHP has strict `private`/`public` keywords built in; JS uses `#` prefix for true private fields (e.g. `#speed`).

---

### ⚠️ 3 Most Common Beginner Mistakes

**1. Confusing the class with the object**
The class is *not* a thing you use directly — it's just the recipe. You must do `new Car()` to get something you can actually work with. Beginners often try to call methods on the class name itself.

**2. Forgetting `$this` (PHP) or `this` (JS)**
Inside a method, your properties don't float around freely. You *must* reference them through `$this->speed` or `this.speed`. Writing just `speed` inside a method will either error out or create a totally separate variable.

**3. Over-inheriting everything**
Beginners see inheritance and think *"I'll just make everything extend everything."* Real rule: only use `extends` when the relationship is truly **IS-A** (a SportsCar IS-A Car ✅). If it's more like **HAS-A** (a Car HAS-A Engine), use a separate class and store it as a property instead. This is called *composition over inheritance*.

---

Want me to go deeper on any one of the 4 pillars, or show a more real-world example like a User/Admin system?