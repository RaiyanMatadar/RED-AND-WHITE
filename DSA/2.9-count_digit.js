//write a function that return the 
// count of digits in a number 

function countDigit(n) {
    // Edge case: 0 has 1 digit but the while loop below
    // would never run (0 > 0 is false), so we return early
    if (n === 0) return 1

    // Math.abs() handles negatives — e.g. -256 becomes 256
    // so the while loop can work correctly
    n = Math.abs(n)

    let count = 0;

    while (n > 0) {
        n = Math.floor(n / 10) // strip the last digit
        count++                // count that digit
    }

    return count
}

let result = countDigit(256)
console.log(result) // 3

/*
    Programme Flow — countDigit(256)
    ─────────────────────────────────────────────
    n = 256, count = 0

    Iteration 1:
        n = Math.floor(256 / 10) → Math.floor(25.6) → 25
        count = 1

    Iteration 2:
        n = Math.floor(25 / 10) → Math.floor(2.5) → 2
        count = 2

    Iteration 3:
        n = Math.floor(2 / 10) → Math.floor(0.2) → 0
        count = 3

    Loop ends (n = 0, condition 0 > 0 is false)

    return 3
    ─────────────────────────────────────────────
    The trick: dividing by 10 and flooring it
    removes one digit each time.
    We just count how many times we can do that.
*/

//__________________________________________________________________________________

// Some method of mathmetics 
Math.floor(4.9)  // → 4  Always rounds DOWN to the nearest integer

Math.ceil(4.1)   // → 5  Always rounds UP to the nearest integer

//Rule: decimal >= 0.5 → rounds up | decimal < 0.5 → rounds down
Math.round(4.5)  // → 5  (rounds UP)
Math.round(4.4)  // → 4  (rounds DOWN)

Math.abs(-7)     // → 7  Always returns the positive (absolute) value
Math.abs(7)      // → 7  (positive stays positive)