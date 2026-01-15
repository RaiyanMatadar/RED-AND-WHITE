// ===============================
// OBJECT DESTRUCTURING (NOTES)
// ===============================

// Object destructuring is a way to extract values from an object
// and store them into variables in a clean and readable way.

// --------------------------------
// 1. Normal object
// --------------------------------
const course = {
    courseName: "js in hindi",
    price: "999",
    courseInstructor: "hitesh",
};

// --------------------------------
// 2. Direct property access
// --------------------------------
// Works fine, but becomes messy when used repeatedly
console.log(course.courseInstructor);

// ❌ Problem:
// - Repetitive
// - Hard to read in large codebases
// - Not scalable

// --------------------------------
// 3. Basic object destructuring
// --------------------------------
const { courseInstructor } = course;
console.log(courseInstructor);

// ✔ Explanation:
// - Variable name MUST match the object key
// - JavaScript searches for "courseInstructor" key
// - Extracts its value into a variable

// --------------------------------
// 4. Destructuring with alias (renaming)
// --------------------------------
const { courseInstructor: Instructor } = course;
console.log(Instructor);

// ✔ Explanation:
// - courseInstructor = object key
// - Instructor = new variable name
// - Useful when variable names are long or conflicting

// --------------------------------
// 5. Destructuring multiple properties
// --------------------------------
const { courseName, price } = course;
console.log(courseName, price);

// ✔ Cleaner than course.courseName again and again

// --------------------------------
// 6. Default values in destructuring
// --------------------------------
const { duration = "Not Provided" } = course;
console.log(duration);

// ✔ If key does NOT exist, default value is used
// ❌ No error is thrown

// --------------------------------
// 7. Destructuring in function parameters
// --------------------------------
function printInstructor({ courseInstructor }) {
    console.log(courseInstructor);
}

printInstructor(course);

// ✔ Very common in React and real projects
// ✔ Avoids using obj.key inside functions

// --------------------------------
// 8. What destructuring DOES NOT do
// --------------------------------

// ❌ It does NOT change the original object
// ❌ It does NOT copy the entire object
// ❌ It does NOT work if key names are wrong

// Example (wrong key name):
// const { instructor } = course; // undefined

// --------------------------------
// 9. Why destructuring matters (REAL reason)
// --------------------------------

// - Cleaner code
// - Less repetition
// - Easier to read
// - Industry standard (React, Node, APIs)
// - Reduces bugs in large codebases