"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class usingClass {
    // constructor(public name : string, public age : number, public gender? : string ){
    //     this.name = name
    //     this.age = age
    //     this.gender = gender
    // }
    name = "unkown";
    age = 0;
    get() {
        console.log(this.name, this.age);
    }
}
// class GetSet {
//     constructor(public name: string, public age: number) {}
//     setName(name: string): void {
//         this.name = name;
//     }
//     getName(): string {
//         return this.name;
//     }
//     getDetails(): void {
//         console.log(this.name, this.age);
//     }
// }
// let x = new GetSet("raiyan", 10);
// x.setName("x");
// console.log(x.getName());
// x.getDetails();
class getset {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get;
}
{
}
//# sourceMappingURL=test.js.map