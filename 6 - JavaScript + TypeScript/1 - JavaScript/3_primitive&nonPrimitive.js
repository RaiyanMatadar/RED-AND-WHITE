// --- Primitive data type --- 
// Immutable: Once created, the value of a primitive cannot be changed. If you "modify" a primitive, 
// you are actually creating a new primitive value.

// Stored by value: When you assign a primitive value to another variable, a copy of the value is made.

let a = 10;
let b = a; // b gets a copy of 10
a = 20; // b remains 10


// --- non-Primitive data type(also called refrence) ---
// Mutable: The properties or elements of a non-primitive value can be changed after creation.

// Stored by reference: When you assign a non-primitive value to another variable, it copies the reference 
// (memory address) to the object, not the object itself. Changes made through one variable will be reflected in the other.

let obj1 = { value: 10 };
let obj2 = obj1; // obj2 references the same object as obj1
obj1.value = 20; // obj2.value will also be 20