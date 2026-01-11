// interfaces & Type Aliases 
// # Defining interfaces 
// # Using interface to define object shapes 
// # Extending interfaces
// # Type aliases 
// # Intersection Type 

// why need interface 
function whyNeedInterface1(a : number, b : string){
    // a.   this a. will show all the methods related to number 
    // b.   this a. will show all the methods related to string 
    // the thing is that these a , b can use method related to its data type cause 
    // they know there data type 
}

function whyNeedInterface2(obj){
    // obj. even if you pass as obj : Object in param it wont give you the access of the properties it 
    // will just give you access of the method of object data type, its only know the data type & also 
    // this wont know which properties the obj has without interface 
}

// Defining interfaces
interface User{
    name:string,
    email : string,
    password : string
    gender? : string       // gender? means it  an optinal means you can whether give it or not error wont occure 
} 

// # Using an interface to define object shapes:
function getUserData(obj : User){
    obj.email

    // obj. // when we write obj. then it will show all the keys that we defined in the interface
    // menas Ts is 100% sure that in this obj the properties of it would be from the User cause we passes on 
    // param obj : User 
}

getUserData({name:"Raiyan",email:"raiyan@gmail.com",password:"124",gender:"male"})
// after calling this getUserData we cant assign any other thing rather than object cause we have passes the obj : User 
// which menas the Ts knows that it must be object which is User and we will get the properties of the interface User 

// # Extending interfaces

interface Admin extends User {
    admin : boolean;
    // here the admin will have all the properties from the User 
    // and Admin will have interface User property + its own aditional 
    // property as admin  
}

function extendedFunc(obj : Admin){
    // when we use obj : Admin then it will have User all properties + it 
    // will have an extra property of an admin 
    obj.admin 
}

interface clone {
    name : string,
}

interface clone {
    number : number
}


function cloneFunc (obj : clone){
    obj.name
    obj.number
    // if the same interface has diffrent properties then 
    // both interface will merge toghether and obj will get the 
    // all properties from both    
}

// # Type aliases 

// this way you can pass any 3 of the data type in the typeAliases variable 
type value = string | number | null; 
let typeAliases : value;

function withAliases(obj : value){
    // you can pass any data type in the obj here 
}

withAliases("string") // you can pass any 3 data type from the value 

// # Intersection Type 
// union & Intersection 

let union : string | null; // its called union

type UserWithType = {
    name : string,
    email : string,
}

type adminWithType = UserWithType & {
    getDetails(user:string) : void
} 

function funcWithType (a:adminWithType){
    a.getDetails
}

// these feels same as interface like we are making one you can call it prototype 
// then making another prototype then passing first prototype to another prototype 
// but there is an key diffrence as

// type chekingTypes = string;
// type chekingTypes = number;

// these will throw an error as it wont merge as the interface used to do 

// USE OF type & interface
// type : its used when we wanna work with type (data type) as string, number, boolean etc 
// interface : its used for making an shape of an object (jab shakal banani he tab)