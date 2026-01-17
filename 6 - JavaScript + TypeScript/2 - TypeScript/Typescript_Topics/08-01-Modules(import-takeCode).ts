// Exporting and Importing Modules
import {payment,sum} from "./08-00-Modules(import-sendCode)"

console.log(sum(10,30));


// Default exports
import defaultExport from "./08-00-Modules(import-sendCode)"

let a = new defaultExport("kvmdv");
console.log(a);