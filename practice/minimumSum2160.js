//  Input: num = 2932
// Output: 52
// Input: num = 4009,9813,1389
// Output: 13


var minimumSum = function (array) {
    let arrStrg = array.toString();
    console.log(arrStrg, arrStrg.split('').sort((a, b) => a - b)); //0049,4567,1122
    // for (let index = 0; index < arrStrg.split('').length; index++) {
    console.log("typeof ", arrStrg);

    const [a, b, c, d] = array.toString().split('').sort((a, b) => a - b)
    // console.log(a, b, c, d, parseInt(a + c), parseInt(b + d));

    return parseInt(a + c)+parseInt(b + d)
};

console.log(minimumSum(4009))



