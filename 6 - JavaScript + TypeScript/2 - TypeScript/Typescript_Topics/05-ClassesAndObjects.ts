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
    constructor(public name : string, public price : number){}
}

let b1 = new BottleMaker("raiyan",2000);
let b2 = new BottleMaker("faizan",1000);

b1.name = "raiyan Named Changed" // this will change the name of the b1 which shouldnt be allowed 

//# before the access modifer we first gonna learn this keyword 

class withThiskeyword {
    name = "raiyan";

    changeName(){
        this.name // it means when we make an variable in the class and wanna access it in an method of 
                // an class then we must use this so it can access the variable of the class 
                // (assume this defination for now altough its not 100% accurate)

        this.changeSomeMoreStuff() // here we must also write this 
        
        // basically when we wanna access the properties of the things which isnt the part of the current method 
        // then we use this keyword so that it can get the refrence of the method in the current class
        
        let a = 12;
        console.log(a); // we dont need this here as we delared the variable a using let 
    }
    changeSomeMoreStuff(){
        console.log("hey");
    }
}


class UnderstandingClasses {
    // public name; // made up by the costructor internally after the constructor made 
    
    // constructor(public name: string){}
    // When we declare a public property in the constructor, it automatically creates:
    // 1. A class-level property (variable) with the same name.
    // 2. A parameter in the constructor with the same name.

    constructor(public name: string) {
        // name       // here refers to the parameter passed to the constructor.
        // this.name  // refers to the class-level property (variable). as public name;   

        this.name = name; 
        // The "classUnderstanding" variable's testing string will be passed as an argument to the "name" parameter.
        // In the code "this.name = name", the "name" parameter is assigned to the class property "name" using "this".
        // Simplified visualization: public name (class property) = name (parameter). 
        // The parameter value is assigned to the class property using "this.name".
    }
}

let classUnderstanding = new UnderstandingClasses("testing")

// Same Code For  Better Understanding  

class sameOneForBetterUnderstanding {
    public name;
    constructor(name : string){
        this.name = name
        // this.name means the var on the class as public name; & = name means the param of the 
        // costructor's value will assign to the var of class  
    }
}

let sameOneclassUnderstanding = new sameOneForBetterUnderstanding("testing");


// # access modifier (public,private,protected)

// public:  Accessible by all properties and methods of the class, 
//          and also from any other file where the class is imported.

// private: Accessible only within the class it is defined in. 
//          It cannot be accessed outside the class, not even by derived classes.
// Note :   TypeScript’s private is only checked at compile time. JavaScript does not enforce it, so 
//          after compilation the property still exists. If you want real runtime privacy, you must use 
//          JavaScript’s #private fields.

//Protected: its allows access within the class and its derived classes but
//           not outside of them.


// # readonly properties 

class readOnlyClass {
    constructor (public readonly name : string){
        this.name = name
    }

    changeName(){
        // it will give error in only compile time but it will work on run time 
        this.name = "name chnage ho gaya he bhai"
        console.log(this.name); 
    }
}

let readOnly = new readOnlyClass("raiyan");
readOnly.changeName()


// readonly makes TypeScript show an error if we try to change the value of a property after it is set.
// We use readonly when we are sure that a particular property should never be changed after initialization.


// # optional properties 

// Optional properties in TypeScript are written using ?.
// We use them when a property, parameter, or value may or may not be provided.
// If it’s optional, TypeScript will not give an error when it’s missing.

// # parameter properties

// Parameter properties in TypeScript let us declare and initialize class properties 
// directly inside the constructor parameters.
// This removes the need to write separate property declarations and assignments.

// e.g =>
class withoutParameterProperties {
    name: string;
    age: number;
  
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
  }

class withoParameterProperties {
    constructor(public name: string, public age: number) {}
}

// # getter & setter  (we dont need getter & setter here but you must know it : sheriyan's bhaiya ne bola hain )

// this is how the typical setter & getter works 
class getterAndSetter{
    constructor(public name : string, public age : number){}

    getName(){
        return this.name
    }

    setName(value : string){
        this.name = value
    }
}

let user1 = new getterAndSetter("raiyan",10);
user1.setName("faizan")


// built-in getters and setters by TypeSript 
// TypeScript provides built-in support for getters and setters using the `get` and `set` keywords.
// This allows us to define properties with custom logic for getting and setting values.
// Once defined, we can use these properties like regular variables without explicitly calling a function.
// Example: u1.name = "value";

class TsGivenSetterAndGetter{
    constructor(public _name : string, public age : number){}
    // We use _name because without it, we cannot use the get and set keywords for a property named 'name'. 
    // its just an way for preventing name conflicts its not Ts rule or anything  
    
    get name(){
        return this._name;
    }

    set name(value : string){
        this._name = value
    }
}

let u1 = new TsGivenSetterAndGetter("new User",25);
u1.name = "subman gill"

console.log(u1.name);


// # static member 

// console.log(Math.PI);
// Math.PI
// here the Math (capital M of Math) indicates that its an class but 
// we are accesing the PI value by just using .PI 

// so how do we do that for our own classes ? 
// so for that we gonna learn how do we that so we can use it the way as Math.PI

class Shery {
    static version = 1.1 // static version 
    version = 1.1;       // non static version

    static getRandomNumber(){
        return Math.random()
    }
}

// To access a property like `version` directly from the class (e.g., Math.PI), 
// we need to declare it as a static member in the class:
// Example: static version = 1.1;
// This allows us to access it directly using the class name:
// Shery.version

// Static members are associated with the class itself, not with instances of the class.
// This means we can use the properties or methods of the class without creating an instance.

// BEFORE:
// let s = new Shery();
// console.log(s);
// The instance `s` will not have access to static members of the class, 
// because static members are not part of the instance. They belong to the class itself.

// NOW:
// Shery.version
// By declaring `version` as a static member, we can directly access it using the class name 
// without creating an instance of the class.

// # abstract classes & modifier 

class cookingEssentials{
    constructor(protected gas : number,public gasKaName:string){}   
}

class sabji extends cookingEssentials{

}

// The `cookingEssentials` class is designed to serve as a base class and will not be instantiated 
// directly. It provides shared functionality and properties essential for other derived classes.
// more about it coming 

