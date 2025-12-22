// ==============================
// Spread & Rest (JavaScript)
// ==============================

// Same syntax: ...
// Different meaning.

// --------------------------------
// SPREAD OPERATOR → UNPACK
// --------------------------------
// Used to expand values.

// ARRAYS:
// const skills = ["html", "css"];
// const fruits = ["apple", "banana"];
// const all = [...skills, ...fruits];
// // ["html","css","apple","banana"]

// Rules:
// - Arrays work on INDEX.
// - Duplicate values are ALLOWED.
// - Spread copies values in order.
// - No index conflict exists.
// - Spread does NOT remove duplicates.
// - Creates a SHALLOW copy.

// --------------------------------
// OBJECTS:
// const a = { x: 1, y: 2 };
// const b = { y: 99, z: 3 };

// const c = { ...a, ...b };
// // { x:1, y:99, z:3 }

// Rules:
// - Objects work on KEYS.
// - Duplicate keys are NOT allowed.
// - Last key WINS (override).
// - Order matters.
// - Spread does NOT deep merge.
// - Creates a SHALLOW copy.

// --------------------------------
// REST OPERATOR → PACK
// --------------------------------
// Used to collect values.

// FUNCTIONS:
// function sum(...nums) {
//   return nums;
// }
// sum(1,2,3); // [1,2,3]

// Rules:
// - Rest ALWAYS comes last.
// - Rest creates an ARRAY.

// --------------------------------
// DESTRUCTURING:
// const [a, ...rest] = [1,2,3,4];
// // a = 1, rest = [2,3,4]

// const { x, ...rest } = { x:1, y:2, z:3 };
// // rest = { y:2, z:3 }

// --------------------------------
// CORE TRUTH (REMEMBER THIS)
// --------------------------------
// - Spread = UNPACK
// - Rest = PACK
// - Same syntax, opposite job
// - Both are SHALLOW
// - Arrays allow duplicates
// - Objects override keys

// ==============================
// END
// ==============================