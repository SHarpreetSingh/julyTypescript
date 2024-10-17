// Input: nums = [1,2,3,4]

// Output: 3

// 1-1
// 2+1
// 3
// 4-1
// 5+1
// 6
// 7-1
// 7,1
// 22, 1-1
// 23 left 2,+1
// 25 reme = 1, -1
// 26 reme=2, +1
// 27 
// 28 reme= 1, -1

var minimumOperations = function (nums) {
    let count = 0;
    for (const key in nums) {
        if (Object.prototype.hasOwnProperty.call(nums, key) !== true) {
            console.log("err in input")
            return false;
        }
        
        let element = nums[key];
        console.log(element);
        if (element % 3 !== 0) {
            console.log("here ele", element);
            console.log("count", count)
            count++
        }
    }
    console.log("return", count)

    return count;
};

minimumOperations([3, 6, 9])
