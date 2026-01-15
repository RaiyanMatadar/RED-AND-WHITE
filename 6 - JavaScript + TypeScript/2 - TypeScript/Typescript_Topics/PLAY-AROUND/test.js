// Functions 
// # Funciton types 
// # Optional and Default parameters
// # Rest parameter 
// # overloads 
// # Funciton types
function funcType(name, callback) {
    callback("callback Funciton called");
}
funcType("raiyan", function (value) {
    console.log(value);
});
// # Optional and Default parameters
function identity(name, age, gender) {
    if (gender === void 0) { gender = "not to be disclosed"; }
    console.log(name, age, gender);
}
identity("harsh", 20, "male");
identity("zishan", 22);

// # Rest parameter 

let count = 0;
document.querySelector("button")
.addEventListener("click",()=>{
    console.log("btn clicked",++count);
})

function xyz (){
    let count = 0;
    document.querySelector("button")
    .addEventListener("click",()=>{
        console.log("btn clicked",++count);
    })
}
xyz()