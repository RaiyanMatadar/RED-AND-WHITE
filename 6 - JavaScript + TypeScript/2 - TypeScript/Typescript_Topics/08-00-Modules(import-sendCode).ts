// Modules 
// Exporting and Importing Modules
// Default exports


// Exporting and Importing Modules
export function payment(value : number){
    console.log(value);
}

export function sum(a:number,b:number):number{
    return a + b
}


// Default exports
// in react this method used most
// but why this exist ?
export default class defaultExport{
    constructor(public name : string){}

}