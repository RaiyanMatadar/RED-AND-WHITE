// Type Guards and TypeScript utility Types 
// Using typeof and instanceof
// partial, required, readonly 


// type Guards means -> type narrowing 
// (type Narrowing means if there are more than one data than you dont know which 
// data type is which so you use typeof operator in if else stetment then the work get done )


// 2nd ways of type Guards
// typeof & instanceof 

//# type Narrowing
function typeNarrow<T>(value: T) {
    if (typeof value === "string") {
        console.log("It's a string");
    } 
    else if (typeof value === "number") {
        console.log("It's a number");
    }
     else {
        console.log("It's something else");
    }
}

typeNarrow("string"); // Output: It's a string
typeNarrow(42);       // Output: It's a number
typeNarrow(true);     // Output: It's something else

// # instanceof

class TvKaRemote{
    TvSwitchOff(){
        console.log("tv has been off");
    }
}

class CarKaRemote{
    CarSwitchOff(){
        console.log("tv has been off");
    }
}

let tv = new TvKaRemote();
let car = new CarKaRemote();

function remote(device : TvKaRemote | CarKaRemote){
    if ( device instanceof TvKaRemote) {
        device.TvSwitchOff()
    } else if (device instanceof CarKaRemote){
        device.CarSwitchOff()
    }
}

remote(tv)