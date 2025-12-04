// Pattern - 1

//  []  []  []  []  [] 
//    []  []  []  []  [] 
//  []  []  []  []  [] 
//    []  []  []  []  [] 

// let n = 4
// let brick = " [] "
// let space = " "


// for (let i = 0; i < n; i++) {
//     brick += " [] "
// }

// for (let i = 0; i < n; i++) {

//     if (i % 2 == 0) {
//         console.log(brick)
//     } else {
//         console.log(space, brick)
//     }
// }


// Pattern - 2

//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 
//     |


// let n = 5
// let stars = "* "
// let spaces = ""

// for (let i = 0; i < n; i++){
//   spaces += " "
// }

// for (let i = n; i > 0; i--){
//   console.log(spaces,stars)

//   stars += "* "

//   spaces = ""
//   for (let j = 0; j < i - 1; j++){
//     spaces += " "
//   }
// }

// let stick = "";
// for (let k = 0; k < n; k++){
//     stick += " "
// }
// console.log(stick,"|")


// Pattern - 3

// +/\/\/\/\+
// +\/\/\/\/+
// +/\/\/\/\+
// +\/\/\/\/+
// +/\/\/\/\+
// +\/\/\/\/+

// let N = 3
// let M = 4

// for (let i = 0; i < N*2; i++){

//   let spaces = "";
//   for (let s = 0; s < M; s++){
//     spaces += " "
//   }

//   let pattern = ""
//   if (i % 2 == 1){
//       for (let i = 0; i < M; i++){
//          pattern += "\\/"
//       }
//   } else {
//     for (let i = 0; i < M; i++){
//         pattern += "/\\"
//     }
//   }

// console.log(spaces + "+" + pattern + "+")
// }