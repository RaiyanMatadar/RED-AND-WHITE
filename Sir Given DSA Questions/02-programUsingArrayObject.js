const users = [
    { name: "Amit", age: 22, city: "Delhi" },
    { name: "Sana", age: 19, city: "Mumbai" },
    { name: "Rohit", age: 26, city: "Pune" },
    { name: "Neha", age: 2, city: "Delhi" },
    { name: "Karan", age: 24, city: "Jaipur" }
];

//   1. Find all users who live in "Delhi".
//   2. Find the youngest user.
//   3. Return all names in uppercase..
//   5. Check if every user is above 18.
//   6. Find the average age of all users.

console.log("=== Users Who lives in Delhi ===")
for (let i = 0; i < users.length; i++) {
    if (users[i].city == "Delhi") {
        console.log(users[i].name)
    }
}

console.log("=== youngest User ===")
let smallest = users[0];
for (let i = 1; i < users.length; i++) {
    if (users[i].age < smallest.age) {
        smallest = users[i]
    }
}
console.log(smallest.age)


console.log("=== all names in uppercase ===")
for (let i = 0; i < users.length; i++) {
    console.log(users[i].name.toUpperCase());
}

console.log("=== check every user is above 18 ===")
for (let i = 0; i < users.length; i++) {
    if (users[i].age > 18) {
        console.log("User ", users[i].name, "above 18")
    } else {
        console.log("User ", users[i].name, "is not above 18")
    }
}

console.log("=== Find the avrage age of all users ===")
let sum = 0;
let avrage = 0;
for (let i = 0; i < users.length; i++) {
    sum += users[i].age;
    avrage++
}

console.log(sum / avrage)