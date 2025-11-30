//       *
//      **
//     ***
//    ****
//   *****

let n = 5;
let star = "*"
let space = " ".repeat(n);
// let space = " ".repeat(n);

for (let i = 0; i < n; i++) {
    console.log(space, star)
    star += "*"
    space = space.slice(0, -1);
    // space -= " "

}
// ___________________________________________________

//          * 
//         * * 
//        * * * 
//       * * * * 
//      * * * * * 
//     * * * * * * 
//    * * * * * * * 
//   * * * * * * * * 
//  * * * * * * * * * 
// * * * * * * * * * * 

// its just that i have added space on the stars variable so thats why 
// its forming an pyramid

let n2 = 5;
let star2 = "* "
let space2 = " ".repeat(n2);

for (let i = 0; i < n2; i++) {
    console.log(space, star)
    star += "* "
    space = space.slice(0, -1);
}

// ___________________________________________________

// * * * * * 
// * * * * 
// * * * 
// * * 
// * 


let n3 = 5;
let star3 = "* ".repeat(n)

for (let i = 0; i < n3; i++) {
    console.log(star3)
    star3 = star3.slice(0, -2);
}

// in this code slice(0,-2) means that it will minus 1 space and 1 start from the star3

// ___________________________________________________

// * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         *

let n4 = 5;
let star4 = "* ".repeat(n)

let spaceI = 0;
let space4 = "  ".repeat(spaceI)

for (let i = 0; i < n; i++) {
    console.log(space4, star)
    star4 = star4.slice(0, -2);
    space4 += "  "
}

// ___________________________________________________

//   * * * * * 
//    * * * * 
//     * * * 
//      * * 
//       * 

let n5 = 5;
let star5 = "* ".repeat(n);
let spaceI1 = 0;
let space5 = " "

for (let i = 0; i < n5; i++) {
    console.log(space5, star5)
    star5 = star5.slice(0, -2);
    space5 += " "
}

// ___________________________________________________

// * * * * * 
//  * * * * * 
//   * * * * * 
//    * * * * * 
//     * * * * * 

let n6 = 5;
let star6 = "* ".repeat(n);
// let spaceI = 0;
let space6 = " "

for (let i = 0; i < n; i++) {
    console.log(space6, star6);
    // star = star.slice(0,-2);
    space6 += " "
}


// ___________________________________________________

//     * 
//    * * 
//   * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 

let n7 = 7;
let star7 = "* "
let spaceI7 = n7 / 2;
let space7 = " ".repeat(spaceI7)



for (let i = 1; i <= n7; i++) {
    if (i < n7 / 2) {
        // for (let j = 0; j < n/2; j++){
        console.log(space7, star7)
        star7 += "* "
        space7 = space7.slice(0, -1)
            // }
    }
    if (i > n7 / 2) {
        console.log(space7, star7)
        star7 = star7.slice(0, -2)
        space7 += " "
    }
}

// ___________________________________________________

// HALF WAY

// let n = 7;
// let star = "* ".repeat(5)    // starts is 5 now "* * * * *" (5)
// let spaceI = 0;                
// let space = " ".repeat(spaceI)

// for (let i = 0; i < n; i++){

//   if (i <= n/2){
//     console.log(space,star)
//     space += " "
//     star = star.slice(0,-2)
//   }

//   if (i+1 >= n/2){
//     console.log(space,star)
//     star += "* "

//     space = space.slice(0,-1)
//   }

// }