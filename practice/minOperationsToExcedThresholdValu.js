// Input: nums = [2,11,10,1,3], k = 10
// You are given a 0-indexed integer array nums, and an integer k.

// In one operation, you can remove one occurrence of the smallest element of nums.

// Return the minimum number of operations needed so that all elements of the array are greater than or equal to k.

// Input: nums = [2,11,10,1,3], k = 10
// Output: 3
// Explanation: After one operation, nums becomes equal to [2, 11, 10, 3].
// After two operations, nums becomes equal to [11, 10, 3].
// After three operations, nums becomes equal to [11, 10].
// At this stage, all the elements of nums are greater than or equal to 10 so we can stop.
// It can be shown that 3 is the minimum number of operations needed so that all elements 
// of the array are greater than or equal to 10.

// nums = [1,1,2,4,9], k = 1,

var minOperations = function (array, k) {
    console.log(array);
    let numbOfOprtns = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element >= k)
        if (element < k) {
            numbOfOprtns++
        } 
    }
    console.log("count",numbOfOprtns);
    
};

minOperations([1, 1, 2, 4, 9], 9)

// const noOfOPts = 1
// for (let r = 0; r < arr.length; r++) {
//     let ele = arr[r]
//     if (ele < k) {
//         // 2<10
//         noOfOPts++

//     }
// }
