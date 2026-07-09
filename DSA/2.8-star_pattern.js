//let n = 4;

//for (let i = 0; i < n; i++) {
//    let row = " ";
//    for (let j = 0; j < n; j++) {
//        row = row + "*";
//    }
//    console.log(row);
//}

//i = 1, 2, 3, 4

//1 iteration 
//1st * added in row variable 
//2st ** added in row variable 
//3rd *** added in row variable 
//4th **** added in row variable 

//now once the child get finished it log the value of row wihch is 
//"****"

//now the parent loop increase the i by 1 and check the condition again 
//this happens till the i < n get false 

//so in the last we got 
//"****"
//"****"
//"****"
//"****"

//let n = 4;
//let stars = "*"

//for (let i = n; i >= 0; i--){
//    console.log(stars);
//    stars = stars + "*"
//}

//let n = 4;

//for (let i = 0; i < n; i++){
//    let row = ""
//    for (let j = 0; j <= i; j++){
//        row = row + "*"
//    }
//    console.log(row);
//}

//key point 

//for (let i = 0; i < 5; i++)
//both are same 
//for (let i = 0; i <= 4; i++)

//for (let i = 0; i < 5+1; i++)
//both are same 
//for (let i = 0; i <= 4; i++)

//both runs 5 times so 
//when you see 
//j < n + 1 or j <= n 
//they both are same its just the way we write it are differs


//1
//1 2
//1 2 3
//1 2 3 4
//1 2 3 4 5

//let n = 5;

//for (let i = 0; i < n; i++){
//    let num = "";
//    for(let j = 1; j <= i + 1; j++){
//        num = num + j
//    }
//    console.log(num);   
//}

//1 
//2 2 
//3 3 3
//4 4 4 4
//5 5 5 5 5

//let n = 5;

//for (let i = 0; i < n; i++){
//    let num = ""
//    for(let j = 0; j < i+1; j++){
//        num = num + (i+1);
//    }
//    console.log(num);
//}

//1 2 3 4 5 
//1 2 3 4 
//1 2 3 
//1 2 
//1 

//let n = 5;

//for (let i = 0; i < n; i++){
//    let num = ""
//    for (let j = 0; j < n; j++){
//        num = num + (j+1) 
//    }
//    console.log(num);
//}

//* * * * * 
//* * * *
//* * *
//* * 
//*

//let n = 5;

//for (let i = 0; i < n; i++) {
//    let row = ""
//    for (let j = i; j < n; j++) {
//        row = row + "*"
//    }
//    console.log(row);
//}

//        * 
//      * *
//    * * * 
//  * * * * 
//* * * * * 

//let n = 5

//for (let i = 0; i < n; i++) {
//    let space = " "
//    let star = ""

//    //space 
//    for (let j = i; j < n; j++) {
//        space = space + " "
//    }

//    //stars 
//    for (let k = 0; k <= i; k++) {
//        star = star + "*"
//    }
//    console.log(space, star);

//}

//1
//1 0
//1 0 1
//1 0 1 0 
//1 0 1 0 1

//let n = 5

//for (let i = 0; i < n; i++) {
//    let row = "";
//    let toggle = 1

//    for (let j = 0; j <= i; j++) {
//        if (toggle === 1) {
//            row = row + toggle
//            toggle = 0
//        } else {
//            row = row + toggle
//            toggle = 1
//        }
//    }
//    console.log(row);
//}

//1
//0 1
//0 1 0
//1 0 1 0
//1 0 1 0 1

let n = 5
let toggle = 1

for (let i = 0; i < n; i++) {
    let row = "";

    for (let j = 0; j <= i; j++) {
        if (toggle === 1) {
            row = row + toggle
            toggle = 0
        } else {
            row = row + toggle
            toggle = 1
        }
    }
    console.log(row);
}