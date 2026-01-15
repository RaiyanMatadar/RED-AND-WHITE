// Functions 
// # Funciton types 
// # Optional and Default parameters
// # Rest parameter 
// # overloads 

// # Funciton types


function funcType(name : string,callback: (value : string)=>void){
    callback("callback Funciton called");
}

funcType("raiyan",(value:string)=>{
    console.log(value);
})

// # Optional and Default parameters

function identity(name : string, age : number , gender: string = "not to be disclosed"){
    console.log(name,age,gender);
}

identity("harsh",20,"male");
identity("zishan",22);

// # Rest parameter 

