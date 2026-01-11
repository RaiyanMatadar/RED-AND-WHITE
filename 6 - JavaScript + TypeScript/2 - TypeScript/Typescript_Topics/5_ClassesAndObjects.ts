// Classes & Objects 
// # Class defination
// # Constructors 
// # access modifier (public,private,protected)
// # readonly properties 
// # optional properties 
// # parameter properties 
// # getter & setter 
// # static member 
// # abstract classes & modifier 

// # Class defination (syntax for making class)

class Device{
    name = "lg";
    price = 12000;
    cotegories = "digital";
}

let d1 = new Device();
let d2 = new Device();

// # Constructors 

class BottleMaker {
    constructor(public name : string, public price : number){
        
    }
}