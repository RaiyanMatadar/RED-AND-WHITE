/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let copyNumber = x
    let reversed = 0

    while (x > 0) {
        let lastDigit = x % 10
        reversed = reversed * 10 + lastDigit

        x = Math.floor(x / 10)
    }
    
    return reversed
};