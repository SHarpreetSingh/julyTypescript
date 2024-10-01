
var isStrictlyPalindromic = function (n) {
    for (let i = 2; i < n - 1; i++) {
        let strForBasedNumber = numberToBase(n, i);
        if (strForBasedNumber !== strForBasedNumber.split("").reverse().join("")) return false;
        return true;
    };
}

var numberToBase = function (number, base) {
    let strForBasedNumber = "";
    while (number) {
        strForBasedNumber += number % base;
        number = Math.floor(number / base);
    }
    return strForBasedNumber; //return reversing string-number in base;
}

// 4,2
// "0"
// "00"
// "0001"

// n - 2: n = 1 * (n - 2) ^ 1 + 2 * (n - 2) ^ 0
// 7:1*(7)+2*1

// 4,2: 1*2+2*1

// [4,1,5,9], students = [1,3,2,6]
// [1,4,5,9]  [1,2,3,6] 0+2+2+3

// seats = [3,1,5], students = [2,7,4]

// 1,3,5 bb 2,4,7 => 1+1+2

