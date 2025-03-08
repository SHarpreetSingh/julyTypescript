// [1,1,2]

let count = []
var removeDuplicates = function (nums) {
    nums.filter((value, index, array) => {
        console.log(nums.indexOf(value), index, "value", value, "indexOf")
        if (nums.indexOf(value) === index) {
            console.log(value, index)
            count.push(value)
        }
    })
    // console.log(count, "count")
    return count;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))

// removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4])
