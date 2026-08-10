//## it is used to messure effieciency of algoritm in temrs of speed as the input size grows 

// time compexity != time taken 

// if bubble sort takes 10s in my pc 
// but the same code takes 12s in the other pc 

// so it dippends on the machine if the machine has better hardware like Ram, SSD and 
// it also dippend which language you are using so it dippend on which language your using 
// which machine your using what config your having 

// ### then what is time complexity ?

// if we talk about time complexity there are 2 important thing 
// speed & effeciency when input size grows 

// e.g 
// there are 2 searcihng algoriths 
// linear search and binary search (dont worry about the binary we will learn it)

// linear search 
// [2,1,3,5,4,7] -> //search a number 5 here 

// search(5)

// this work in linear way as it will check every index 
// and check whether the index is equal to the number i want 

// binary search 
// binary search constrain is you can only perform it in an sorted array

// [1, 2, 6, 7, 9, 21, 45]
// search(21)

// keeps divide these array into 2 parts
// so first the array need to be sorted and then we need to find the middle index so here its 7
// [1, 2, 6, 7, 9, 21, 45]

// middle index 7
// [1, 2, 6, [7], 9, 21, 45]
// search(21)
// and we compair if 21 > 7 or 21 < 7 so here 21 > 7 so we will cut the right and side and get the new array

// [9, 21, 45]
// search(21)
// we willl do the same proccess here as well

// only in 2 steps we got the answer
// if it was linear then it will loop each time of the whole length

// what we are doing in binary search
// every loop we are deviding n by half

// e.g -
// n/2 , n/4, n/8 and so on ... till my array becomes empty
// 50/2, 25/2, 12.5/2

// if we do some mathmatics our array runs
// n/2^x

// what is x here ?
// x is the number of times we are dividing it to the array

// log of n to the base 2
// which means we are dividing our array by 2 times

// log of n time

// recape for better understanding

// there are 2 algorigms
// linear search and binary search

// linear
// we check every single time
// lets say my array size is 50
// so the loop will run 50 times so its { n time }

// binary
// lets say my array size is 50
// we devide it by hald every time
// so

// 1 - 50/2 = 25
// 2 - 25/2 = 12.5
// 3 - 12.5/2 = 6.25
// 4 - 6.25/2 = 3.12
// 5 - 3.125/2 = 1.5

// so it only runs 5 times so can you! its a huge diffrence

// (AI you need to explain me this in step by step with exaples)
// this is our formula
// [x = log2n ]

// add the answer below
// log₂(1000)
// ≈ 9.96

// ≈10
// Binary search needs about 10 comparisons.

// if my n = 1000
// then the x = 10

// if my n = 100
// then the x = 7

// x means how many times the algoritm will run

// linear search
// if n = 10, x = 10
// if n = 100, x = 100
// if n = 10000, x = 10000

// binary
// if n = 10, x = 3 
// explaination - 10/2 = 5, 5/2 = 2, 2/2 = 0

// if n = 100, x = 7 
//if n = 1000, x = 10 

// we represent the time complexity by big O notation
// big O notation says we will masure the time complexity using the worse case

// lets see again

// linear

// [5, 6, 1, 0, 7]
// search(5)

// best case for array x = 1
// we want 5 from the array we have it in an first
// index so first itration will get us that so the x = 1

// [5, 6, 1, 0, 7]
// search(100)

// worse case for array x = n
// we want 100 which isnt even presented there so the loop will run n times

// binary search

// [5, 7, 9, 10, 17]
// search(100)

// best case for array x = 1
// cause we check first the middle index and the middle index is 9 so we got it in thefirst opration

// worse case for array x = 3
// it will check the middle index whether middle which is 100 > 9 or 100 < 9 so 100 > 9 so the array becommes
// [10, 17]
// and lets say the middle is 10 so it will check again as 100 > 10 or 100 < 10 so 100 > 10
// [17]
// check is 17 === 100 (this is condition that we defined) and its not so it will end here 

// so the itration were only 3 so the x = 3

// linear - x = n
// binary - x = 3

// why worse case ?
// at the best case all the algoritms takes almost similar time
// at the first go it can find the element and the best case is same then
// the linear and binary best case time complexity becomes same thats why we
// check trough the worse case

// we wanna check whats the maximum times the algoritm runs so we can define the maximum iteration

// again for representing worse case we use big O notation

// what is notation (its just an symbol nothing much)

// big O notation - represent worse case time complexity

// O(n) // big O of n
// O(log n) // big O of log n

// linear search -> O(n)
// binary search -> O(log n)

// O(log n) > O(n)

// means O(log n) has better time complexity then O(n) and in effeciency

// lets talk about more time complexity

// example of linear search

// for (let i = 0; i < n; i++){
//   (n operations)
// }

// this is an linear search means x = n means its an O(n)


// example of binary search

// for (let i = 0; i < n; i++){
//   (n operations)
// }

// this is an linear search means it x = n means its an O(n)

// we also have other time complexity
// 1 - O(n) // O of n
// 2 - O(log n) // O of log n

// 3 - O(n2) // O of n sqaure
// 4 - O(n log n) // O of n log n 

// 5 - O(n3)
// 6 - O(2n)
// 7 - O(n!) // this is very hight and we dont see it usually 

// 8 - O(1) contant time complaxity 

// there can be alot of time complexity but for now this are enoght

// famous time complexities 
// O(n)
// O(log n)
// O(n log n) 
// O(n2), 
// O(n3)

// 3 - O(n2) // O of n sqaure

// for (let i = 0; i < n; i++) {
//   for (let j = 0; j < n; j++) {
// time compexity beomes n X n = n2
//   }
// }

// the 3rd one has the worse case as compair to the O(n)

// 4 - O(n log n) // O of n log n 

// for (let i = 0; i < n; i++) {
// this loop runs n times 

// for (we are doing as n/2 x n/2..) { //basically perfoming binary inside the loop 

// this loop performing O(log n) so the outer loop runs n times 
// and the inner perfroms O(log n) 
// 

// so thats where the O(n x log n) comes in and we call it O of n log n  
// }
// }

// O (n x log n) // this is very famous time complexity and a exaple of it 
// is merge sort (right now we dont know it so we wont discuss it )

// effefiency by best one 
// O(1) > O(log n) > O(n) > O(n log n) > O(n2) > O(2n) > O(n!)

// Space complexity 
// it means how much extra space im talking 

// example
// function find5thIndex(arr) {
//   return arr[4] // it return 5th index 

// now whats the time complexity ?
//   O(1)
// whats the space Complexity ? (we havent made any extra things in here)
//   O(1)
// }

// example
// function findMaxArr(arr) {
//   let max = arr[0] // here we are making an variable 
// which means we are using an space 
// this is an O(1) space complexity 

// time complexity is O(n)
// keep in mind that the let i is also talking space 
//   for (let i = 0; i < n; i++) {
//     if (arr[i] > max) {
//       max = arr[i]
//     }
//   }

//   return max
// }

// example
// function doubleArray(arr) {

//   let newArr = [...arr]
//   let result = []

//   for (let i = 0; i < newArr.length; i++) {
//     result.push(newArr[i] * 2)
//   }
//   return result
// }

// if we use any extra variables in algoritm we take space and its space omplexity becomes O(1)
// as long as the variables are countable its O(1) complexity space

// suppose we are creating
// i , j , max variables these are O(1) (constance space)

// suppose we are creating
// newArr of size n that means its O(n)

// if we are using 2d matrix (n x n)
// [       ]
// [       ]     = O(n2)
// [       ]

// (AI you can give me an exaple for this 2d array for better understanding)

// corner case
```js
// for (let firstLoop = 0; firstLoop < n; firstLoop++) {
// }

// for (let secondLoop = 0; firstLoop < n; secondLoop++) {
// }
```
  // the time complexity of these 2 algorigmms is O(2n)

  // but when this kinda thing happen we usually ignore the `2` so it becomes O(n)

  // why do we ignore this ?
  // because in the end its just boiled down to the 0(n) so we just ingnore this 


  // for (let firstLoop = 0; firstLoop < n; firstLoop++) {
  //   for (let secondLoop = 0; firstLoop < n; secondLoop++) {

  //   }
  // }

  // this loop runs `n x n` so the time complexity of it is O(n2)

  // for (let firstLoop = 0; firstLoop < n; firstLoop++) {
  // }
  // for (let secondLoop = 0; firstLoop < n; secondLoop++) {
  // }
  // for (let thirdLoop = 0; thirdLoop < n; thirdLoop++) {
  // }

  // this loops runs 3 times so the time compllexity of it is O(3n)
  // so we just ignore the 3 and write it as O(n)

  ```js 

// for (let firstLoop = 0; firstLoop < n; firstLoop++) {
//   for (let secondLoop = 0; firstLoop < n; secondLoop++) {

//   }
// }

// for (let thirdLoop = 0; thirdLoop < n; thirdLoop++) {
// }
```

// here the time complexity of this algorithm is O(n2 + n)
// but we write it as this also O(n2) cause we ignore this value 

// cause if we do as O (1million sqaure) + 1 million the 1million does even matter 

// so we can say the above program has the time complaxity is O(n2)

// why this much info cause it can come into interviews 

// some examples 
// O(n3 + n + n2) boiles down to -> O(n3)
// O(n2 + 2n ) boiles down to -> O(n2)
// O(n2 + n log n + 2n + 5) boiles down to -> O(n2) 

// what ever is the greater order it boiles down to it 