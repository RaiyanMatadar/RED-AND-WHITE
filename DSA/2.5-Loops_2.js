// write a function that searches for an element in an array and 
// return the index if the element is not found then just return -1

//function findIndex(arr,n) {

//    for (let i = 0; i < arr.length; i++) {
//        if (n === arr[i]) {
//            return n
//        }
//    }

//    return -1
//}

//let arr = [1, 6, 8, 1, 67, 9, 1, 24, 89, 1];

//console.log(findIndex(arr,907));

//write a function that return the number of negetive in array 

//function negetiveNumCount(arr) {

//    let positiveArr = [];
//    let positiveSum = 0;

//    let negetiveArr = [];
//    let negetiveSum = 0;

//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] > 0) {
//            positiveArr.push(arr[i])
//            positiveSum += arr[i]
//        }

//        if (arr[i] < 0) {
//            negetiveArr.push(arr[i])
//            negetiveSum += arr[i]
//        }
//    }

//    let result = {}

//    return result = {
//        positiveArr,
//        positiveSum,
//        negetiveArr,
//        negetiveSum
//    }
//}

//let arr = [10, -10, -10, -4, -9];

//let result = negetiveNumCount(arr)
//console.log(result.positiveSum);


//write a function that return an new array of negetive number

//function negetiveNum(arr) {

//    let negetiveArr = []

//    for(let i = 0; i < arr.length; i++){
//        if (arr[i] < 0) {
//            negetiveArr.push(arr[i])
//        }
//    }

//    if (negetiveArr.length > 0) {
//        return negetiveArr
//    }

//    return "No negetive Num"
//}


//let arr = [1, 6, 8, 1, 1, 9, 1, 24, 89, 1];

//console.log(negetiveNum(arr));



//write a function that return the largest number in an array 

// Infinity is a special numeric value — larger than any finite number.

//function largestNum(arr) {

//    let largestNum = -Infinity;

//    for (let i = 0; i < arr.length; i++) {
//        if (arr[i] > largestNum) {
//            largestNum = arr[i]
//        }
//    }

//    return largestNum
//}

//let arr = [-1, -28, -3];

//console.log(largestNum(arr));

function minimumNum(arr) {

    let minimumNum = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < minimumNum) {
            minimumNum = arr[i]
        }
    }

    return minimumNum
}

let arr = [-1, -28, -3];

console.log(minimumNum(arr));