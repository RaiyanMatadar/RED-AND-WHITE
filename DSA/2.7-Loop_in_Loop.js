//single loop 

//for(let i = 0; i < 5; i++){
//    for(let j = 0; j < 5; j++){
//        console.log(i + " " + j);
//    }
//}

//parent loop will start running first it will assign 0 to i 
//then it will check the condition if i < 5 then if yes then 
//it will go to the child loop then the child loop runs then its assign 
//the j = 0 then check wether if the j < 5 if yes then it will run the console.log();
//and it will print the i which is 0 right now as 0 and the j is right now j 
//then the first itration ends of child loop and it will increament the j by 1 

//now it will check again whether if the j < 5 if yes then it will run it again 
//and so on

//for(let i = 0; i < 5; i++){
//    for(let j = 0; j < i; j++){
//        console.log(i + " " + j);
//    }
//}

//1st iteration 
// i = 0 [ j = 0 < i = 0 ] false 

//2nd iteration 
//i = 1 [ j=0 < i=1 ] true : answer console.log(1 0)
//[ j=1 < i=1 ] false 

//3rd iteration 
//i = 2 [j=0 < i=2] true : answer console.log(2 0)
//i = 2 [j=1 < i=2] true : answer console.log(2 1)

//4th iteration 
//i = 3 [j=0 < i=3] true : answer console.log(3 0)
//i = 3 [j=1 < i=3] true : answer console.log(3 1)
//i = 3 [j=2 < i=3] true : answer console.log(3 2)

//5th iteation
//i = 4 [j=0 < i=4] true : answer console.log(4 0)
//i = 4 [j=1 < i=4] true : answer console.log(4 1)
//i = 4 [j=2 < i=4] true : answer console.log(4 2)
//i = 4 [j=3 < i=4] true : answer console.log(4 3)

//1 0 
//2 0 
//2 1
//3 0
//3 1 
//3 2 
//4 0 
//4 1 
//4 2 
//4 3


//for (let i = 0; i < 3; i++) {
//    for (let j = i; j > 0; j--) {
//        console.log(i + " " + j);
//    }
//}

//1st iteration 
//i = 0 [j=i(0) > j(0) > 0] : false 

//2nd iteration 
//i = 1 [j=i(1) > 0] : true - log(1 1)

//3rd iteration 
//i = 2 [j=2 > 0] : true - log(2 2)
//i = 2 [j=1 > 0] : true - log(2 1)

//for (let i = 0; i < 3; i++) {
//    for (let j = i; j >= 0; j--) {
//        console.log(i + " " + j);
//    }
//}


//i will run - i = 0 , 1 , 2 

//j = 0 

//0 0 

//1 1 
//1 0 

//2 2 
//2 1 
//2 0

//for (let i = 5; i > 0; i--){
//    for (let j = 0; j < i; j++){
//        console.log(i + " " + j);
//    }
//}

//i wil run - 5 , 4 , 3 , 2 , 1 

//i = 5
//j(0) < 5 - log(5 , 0)
//j(1) < 5 - log(5 , 1)
//j(2) < 5 - log(5 , 2)
//j(3) < 5 - log(5 , 3)
//j(4) < 5 - log(5 , 4)

//i = 4
//j(0) < 4 - log(4 , 0)
//j(1) < 4 - log(4 , 1)
//j(2) < 4 - log(4 , 2)
//j(3) < 4 - log(4 , 3)

//i = 3
//j(0) < 3 - log(3 , 0)
//j(1) < 3 - log(3 , 1)
//j(2) < 3 - log(3 , 2)

//i = 2
//j(0) < 2 - log(2 , 0)
//j(1) < 2 - log(2 , 1)

//i = 1
//j(0) < 1 - log(3 , 0)
