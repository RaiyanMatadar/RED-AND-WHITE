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

class GetSet {
    constructor (public name : string,public age : number){
        
        setter(){
            this.name = name
        }

        getter (){
            return name
        }
    }
}

let x = new GetSet("raiyan",10);