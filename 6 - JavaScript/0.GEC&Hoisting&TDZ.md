## Global Execution Context (GEC)
The GEC is created when JavaScript code first runs. It consists of two phases **memory creation & code execution**:

1. **Creation Phase (Memory Allocation)**
During this phase, JavaScript scans through the code and sets up memory space for variables and functions:

- **Function declarations**: Fully hoisted with their entire definition
- **var variables**: Hoisted and initialized with `undefined`
- **let/const variables**: Hoisted but remain uninitialized (in TDZ)

2. **Execution Phase**
Code runs line by line, assigning actual values to variables.

## Hoisting

Hoisting is JavaScript's behavior of moving declarations to the top of their scope during the creation phase.

**Example:**
```javascript
console.log(x); // undefined (not ReferenceError)
console.log(greet()); // "Hello!" (works fine)

var x = 5;
function greet() {
  return "Hello!";
}
```

**What actually happens (conceptually):**
```javascript
var x = undefined; // hoisted
function greet() { // fully hoisted
  return "Hello!";
}

console.log(x); // undefined
console.log(greet()); // "Hello!"
x = 5;
```

## Temporal Dead Zone (TDZ)

The TDZ is the period between entering a scope and the actual declaration of `let` or `const` variables. During this time, accessing the variable throws a `ReferenceError`.

**Example:**
```javascript
console.log(a); // ReferenceError: Cannot access 'a' before initialization
console.log(b); // ReferenceError: Cannot access 'b' before initialization

let a = 10;
const b = 20;
```

### Why TDZ exists:
- Prevents usage of variables before meaningful initialization
- Catches potential bugs early
- Makes `const` behavior consistent (can't be undefined first, then assigned)

## Complete Example

```javascript
// Creation Phase:
// - greet: function object
// - x: undefined
// - y: uninitialized (TDZ)
// - z: uninitialized (TDZ)

console.log(greet); // [Function: greet]
console.log(x);     // undefined
// console.log(y);  // ReferenceError: TDZ
// console.log(z);  // ReferenceError: TDZ

var x = 5;
let y = 10;
const z = 15;

function greet() {
  return "Hello!";
}

// Execution Phase:
console.log(x); // 5
console.log(y); // 10
console.log(z); // 15
```

## Key Differences

|-----------------------------------------------------------------------------------------------|
|         Feature           |               var                       |       let/const         |
|---------------------------|-----------------------------------------|-------------------------|
| Hoisting                  | Yes, initialized to `undefined`         | Yes, but uninitialized  |
| TDZ                       | No                                      | Yes                     |
| Access before declaration | Returns `undefined`                     | Throws `ReferenceError` |
| Scope                     | Function-scoped                         | Block-scoped            |
|---------------------------|-----------------------------------------|-------------------------|

The TDZ helps write more predictable code by forcing you to declare variables before using them, which is considered a best practice.