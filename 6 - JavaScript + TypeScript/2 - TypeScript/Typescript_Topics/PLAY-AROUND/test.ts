class usingClass {
    // constructor(public name : string, public age : number, public gender? : string ){
    //     this.name = name
    //     this.age = age
    //     this.gender = gender
    // }
    public name : string = "unkown"
    public age : number= 0

    get(){
        console.log(this.name,this.age);
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

class getset{
    constructor(public name: string, public age: number) {}

    get {
        
    }

}