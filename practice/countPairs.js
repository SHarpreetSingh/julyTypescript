
// # Given a 0-indexed integer array nums of length n and an integer target, return the number of pairs (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.


// # Example 1:

// # Input: nums = [-1,1,2,3,1], target = 2
// # Output: 3
// # Explanation: There are 3 pairs of indices that satisfy the conditions in the statement:
// # - (0, 1) since 0 < 1 and nums[0] + nums[1] = 0 < target
// # - (0, 2) since 0 < 2 and nums[0] + nums[2] = 1 < target 
// # - (0, 4) since 0 < 4 and nums[0] + nums[4] = 0 < target
// # Note that (0, 3) is not counted since nums[0] + nums[3] is not strictly less than the target.
// 1 <= nums.length == n <= 50
// -50 <= nums[i], target <= 50
        let nums = [-1,1,2,3,1], target = 2,  count = 0

        var countPairs = function (nums, target) {
            for (let index = 0; index < nums.length; index++) {
                const element = nums[index];
                // console.log("element", element);
                nums.filter((v, i, a) => {
                    if ((a[i + 1]) === undefined) return false
                    // console.log(a.indexOf(v),nums.indexOf(element), "dd");
                    console.log("index < i+1", index, i + 1,index < i + 1);
                    if (index < i + 1) {
                        // console.log("pppp=>", element == a[i + 1]);
                        // if (element != a[i + 1]) {
                            console.log("sum", element, (a[i + 1]), element + (a[i + 1]), (element + (a[i + 1])) < target);
                            if ((element + (a[i + 1])) < target) count++
                        // }
                    }
                })
            }
            console.log("count", count);
            return count
        };

        countPairs(nums, target)


