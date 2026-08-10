function doubleArray(arr) {

  // space complexity O(n) 
  let newArr = []

  // time complexity O(n)
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2)
  }

  return newArr
}

console.log(doubleArray([1, 2, 3, 4, 5]));
