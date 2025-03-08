let s = "codeleet", indices = [4, 5, 6, 7, 0, 2, 1, 3] //[0, 1, 2]
// Output: "leetcode" ,codeleet
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.
// Example 2:

// Input: s = "abc", indices = , [4, 5, 6, 7, 0, 2, 1, 3]
// Output: "abc"

var restoreString = function (s, indices) {
    let arr = []

    for (let index = 0; index < indices.length; index++) {
        const element = indices[index];
        console.log("s.charAt", s.charAt(element));

        arr[element] = s.charAt(index)
        console.log(index,  "obj", arr);
    }

    console.log("arr", arr.join(""));
    return arr.join("")
};

console.log(restoreString(s, indices))

