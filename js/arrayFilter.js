/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */

var filter = function (arr, fn) {
    let nums = [];
        for (let index = 0; index < arr.length; index++) {
            const element = arr[index];
            // console.log("element",element,fn(element))
            if(fn(element)){
                nums.push(element)
            }
    }
    console.log("nums",nums)
    return nums
};

filter([-2,-1,0,1,2], function  plusOne(n) { return n + 1 })


