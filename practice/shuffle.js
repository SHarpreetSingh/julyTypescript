let n = 3, nums = [2, 5, 1, 3, 4, 7]
var shuffle = function (nums, n) {
    let arr =[]
    for (let i = 0; i < nums.length/2; i++) {
        // console.log("nums", nums[i], n + 1,nums[n++]);
        arr.push(nums[i],nums[n++])
    }
    console.log("nums", arr);
};

shuffle(nums, n)


// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7] 
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

