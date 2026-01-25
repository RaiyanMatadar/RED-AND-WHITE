
# Scope, Lexical Environment & Scope Chain

A comprehensive guide to understanding JavaScript's scoping mechanisms.

----

## 📍 1. Scope

**Scope** defines WHERE a variable or function can be accessed in your code.

### Types of Scope in JavaScript:

1. **Global Scope** - Accessible everywhere
2. **Function Scope** - Accessible only within the function
3. **Block Scope** - Accessible only within the block (let, const)

### Example:

```javascript
var x = 10; // Global scope

function test() {
  var y = 20; // Function scope
  
  if (true) {
    let z = 30; // Block scope
  }
}
```

---

## 🗂️ 2. Lexical Environment

### Definition

> A **lexical environment** is JavaScript's way of tracking variables and their scopes. Every time a function is created, it gets its own lexical environment.

### Components of a Lexical Environment:

1. **Environment Record** - All local variables and functions
2. **Reference to Outer Environment** - Its parent scope

### Why "Lexical"?

It's called **lexical** because it's based on where code is **written**, not where it's **called**.

This creates a **scope chain** - when JavaScript looks for a variable, it starts in the current environment and moves up through parent environments until it finds it or reaches global scope.

### Key Concept:

> This mechanism is fundamental to how **closures** work - functions remember their lexical environment even after the outer function has finished executing.

### Example 1: Basic Lexical Scope

```javascript
function outer() {
  let outerVar = "I am from the outer scope!";

  function inner() {
    // inner is lexically inside outer
    console.log(outerVar); // inner() can access outerVar
  }

  inner();
}

outer(); // Logs: "I am from the outer scope!"
```

**Explanation:**
- Function `inner` is written inside function `outer`
- So `inner`'s parent lexical environment is `outer`
- Therefore `inner` can access variables of `outer`

### Example 2: Closure in Action

```javascript
function outer() {
  let name = "Alice";
  
  function inner() {
    console.log(name); // Can access 'name'
  }
  
  return inner;
}

let myFunc = outer();
myFunc(); // Still logs "Alice"
```

> Here, `inner()` is **lexically inside** `outer()`, so it has access to `outer`'s variables. Even when we call `myFunc()` later, it still remembers that lexical environment - this is what we call a **closure**.

---

## 🔗 3. Scope Chain

### Definition

**Scope Chain** is the process JavaScript uses to resolve variables.

### How Variable Lookup Works:

When a variable is used, JavaScript follows this order:

1. ✅ Check **current scope**
2. ❌ If not found → Check **parent lexical environment**
3. ❌ If not found → Keep going **up the chain**
4. ❌ If not found in **global scope** → `ReferenceError`

This chain of lookups is called the **Scope Chain**.

### Example:

```javascript
var a = 100;

function outer() {
  var b = 200;

  function inner() {
    var c = 300;
    console.log(a, b, c);
  }

  inner();
}

outer();
```

### Variable Resolution Process:

**Lookup order for `a` inside `inner()`:**
- `inner` scope ❌
- `outer` scope ❌
- `global` scope ✅

**Lookup order for `b`:**
- `inner` ❌
- `outer` ✅

**Lookup order for `c`:**
- `inner` ✅

---

## 💡 4. Important Facts

| Fact | Description |
|------|-------------|
| ✔️ **Lexical Scoping** | Scope is determined at write time (lexical) |
| ✔️ **Chain Direction** | Scope chain goes from inner → outer → global |
| ✔️ **Memory** | Functions remember their lexical environment |
| ✔️ **One-Way Search** | JavaScript does NOT search downward |
| ✔️ **Parent Access Only** | Only parent scopes are accessible |

### Error Handling:

> If a variable is not found anywhere in the scope chain → `ReferenceError` is thrown

---

## 🎯 Interview Tips

### 1. Use the Right Terminology

- Say **"lexical environment"** instead of just "scope"
- Mention **"environment record"** and **"outer reference"**
- Connect it to **closures** and **scope chain**

### 2. Structure Your Answer

```
Definition → Why "lexical"? → Example → Scope chain connection
```

### 3. When JavaScript Tries to Find a Variable

It follows the **scope chain**:

1. Check the current lexical environment
2. If not found, check the parent lexical environment
3. Keep going up until we reach the global scope
4. If still not found, we get a `ReferenceError`

---

## 📚 Summary

- **Scope** = Where variables can be accessed
- **Lexical Environment** = Container holding variables + reference to parent
- **Scope Chain** = The lookup process from inner → outer → global
- **Closures** = Functions remembering their lexical environment

---

*Happy Learning! 🚀*
```