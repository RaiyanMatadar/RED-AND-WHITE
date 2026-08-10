// MODULUS ( % )

// % gives you the REMAINDER after division
// when we do (n % 10) it always gives us the last digit of any number
let n = 7876
console.log(n % 10) // 7876 % 10 = 6  (last digit)
console.log(123 % 10) // 123 % 10  = 3  (last digit)
console.log(50 % 10)  // 50 % 10   = 0  (last digit)

// =====================
// HOW TO GET LAST DIGIT
// =====================

// any number divided by 10 always leaves the last digit as remainder
// 7876 / 10 = 787.6  -> remainder is 6
// so 7876 % 10 = 6
let lastDigit = n % 10
console.log(lastDigit) // 6

// =====================
// HOW TO REMOVE LAST DIGIT
// =====================

// dividing by 10 shifts all digits one step to the right
// 7876 / 10 = 787.6
// but we use Math.floor to remove the decimal and get a clean integer
// Math.floor(787.6) = 787  -> last digit removed
let removeLastDigit = Math.floor(n / 10)
console.log(removeLastDigit) // 787

// without Math.floor you get 787.6 which can cause hidden errors
// so always use Math.floor when removing digits

// =====================
// ANOTHER EXAMPLE
// =====================

let number = 1234
console.log(number % 10)           // 4   (last digit)
console.log(Math.floor(number / 10)) // 123 (last digit removed)





function palindrome(n) {
  
    n = Math.abs(n)
    let originalNumber = n
    let reversed = 0

    while (n > 0) {

        // step 1: grab the last digit using modulus
        // example: 121 % 10 = 1
        // example: 12 % 10  = 2
        // example: 1 % 10   = 1
        let lastDigit = n % 10

        // step 2: build the reversed number digit by digit
        // we multiply reversed by 10 first to "shift" existing digits to the left
        // then add the new lastDigit at the end
        // without (reversed * 10) the digits would just add up and we wont get the correct reversed number
        // first loop:  (0  * 10) + 1 = 1
        // second loop: (1  * 10) + 2 = 12
        // third loop:  (12 * 10) + 1 = 121
        reversed = (reversed * 10) + lastDigit

        // step 3: remove the last digit from n so the loop moves forward
        // Math.floor removes the decimal so we get a clean integer (no hidden errors)
        // example: 121 / 10 = 12.1 -> Math.floor -> 12
        // example: 12  / 10 = 1.2  -> Math.floor -> 1
        // example: 1   / 10 = 0.1  -> Math.floor -> 0  (loop stops here)
        n = Math.floor(n / 10)

    }

    // finally check if the original number and reversed number are the same
    if (originalNumber === reversed) {
        console.log(originalNumber + " is a palindrome")
    } else {
        console.log(originalNumber + " is not a palindrome")
    }

}

palindrome(121)   // palindrome
palindrome(123)   // not palindrome






























////it always give the last number
////if you want to get the last number in an integer value we can use it 
//let n = 7876
//console.log(n % 10) // 6

////and if you want to remove the last digit we can do as 
//let lastDigit = n % 10 // for getting the last digit 
//let removeLastDigit = n / 10 // for removing the last digit 

//let number = 1234
//console.log(number % 10);

//function palindrome(n) {
//    let newNumber = n

//    reversed is for saving the reversed number  
//    let reversed = 0

//    while (n > 0) {

//        let lastDigit = n % 10; // for getting the last digit from the n 
        
//        //we will store the lastDigit value to reversed variable 
//        //(reversed * 10) if we dont use it then the last digit will be sumed with the other last digit 
//        //so in total we wont get the reversed number so for getting the perfect reveresed number we use it  
//        reversed = (reversed * 10) + lastDigit 

//        //making the n from decimal to integer so there should not uccure any hidden error 
//        n = Math.floor(n / 10)
//    }

//    //finally checking whether its palindrome or not 
//    if (newNumber === reversed) {
//        console.log("this is palindrome");
//    } else {
//        console.log("this is not palindrome");
//    }
//}

//let n = 121
//palindrome(n)