// --- constructor = special method for defining the properties & methods of Object

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function() {
        console.log(`you drove ${this.model}`)
    }
}

const car1 = new Car("ford", "mustag", 2024, "red");
const car2 = new Car("honda", "h20", 2014, "white");

console.log(car1)
car1.drive()

// new creates a new empty object.
// It sets this keyword inside the Car function to that new object.
// It runs the Car function to assign properties (make, model, etc.) to this new object.
// Finally, it returns the new object assigned to car1.


// -- this keyword 

const person = {
    name: "raiyan",
    address: "hingalla",
    get: function() {
        console.log(name); // without this keyword
        console.log(this.name); // with this keyword 

    }
}

person.get()

// MUST KEEP IN MIND : this keyword doesnt work with the arrow funciton 

// Issue in the Code:

// Inside the get method, console.log(name) is used.
// However, name is not defined in the current scope. It should be 
// accessed using this.name to refer to the name property of the person object.

// Key Takeaway:

// The this keyword refers to the object that is calling the method. 
// In this case, this refers to the person object. Always use this to 
// access properties of the object within its methods (function).

// --- new keyword

let User = function(firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function() {
        console.log(`course count is : ${this.courseCount}`);
    }
}

let user1 = new User("raiyan", 20);
console.log(user1);

// this keyword always point toward the window object.
// let user1 = new User("raiyan", 20);  here this line look like an regular call of the funciton.
// let user1 = User("raiyan", 20); if we log this it will say undefined at that point of time we werent using 
// new keyword let user1 = User("raiyan", 20); this user which is regular function and the this keyword inside the User 
// point to the window or the global object. in our case it was point to an empty object that why it was saying an undefined
// after using new keyword ` new User("raiyan", 20); ` this isnt an regular function which means the User will not point to the 
// window object which means the code inside of the User object will only point inside of it

// IMPROVED VERSION 
// The `new` keyword creates a new object and binds `this` inside the constructor function to that object.
// Without `new`, calling the function treats it as a regular function, and `this` points to the global object 
// (or `undefined` in strict mode). For example:
// let user1 = User("raiyan", 20); // Without `new`, `this` points to the global object, causing issues.
// Using `new` ensures that `this` refers to the newly created object, allowing the constructor to initialize it properly.