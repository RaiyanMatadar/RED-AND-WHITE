// 2 poiner works only on sorted array (95% of cases)
// if you want to work it on an unsorted array you can use hashtable

// let arr = [2,10,20,15,14,30];

// arr.sort((a,b)=>a-b)

// // goal : 
// let k = 35

// let start = 0 
// let end = arr.length-1

// console.log(arr)

// while(start < end){
//   let sum = arr[start] + arr[end];
  
//   if (sum === k){
//     console.log("yes");
//     return
//   } else if (sum < k){
//     start++
//   } else{
//     end--
//   }
// }

// console.log("no")


// string vowel

// let s = "hello";
// let arr = s.split('');

// console.log(s)

// let start = 0;
// let end = arr.length - 1;

// while (start < end) {
  
//     if (!'aeiouAEIOU'.includes(arr[start])) {
//         start++;
//         continue;
//     }
    
//     if (!'aeiouAEIOU'.includes(arr[end])) {
//         end--;
//         continue;
//     }
    
//     let temp = arr[start];
//     arr[start] = arr[end];
//     arr[end] = temp;
    
//     start++;
//     end--;
// }

// console.log(arr.join(''));