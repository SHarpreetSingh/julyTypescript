let s = " " //" hello world  " //   world hello"   "the sky is blue" "a good   example"
// Output: "blue is sky the"

var reverseWords = function (s) {
    let arr = s.trim().split(' ')
    // console.log("s=>", arr)
    let out = ""
    for (let index = arr.length - 1; index >= 0; index--) {
        // console.log("s", arr[index])
        if (arr[index])
            out += arr[index] + " "
    }
    console.log("out", out.trim());
    return out.trim()
};

reverseWords(s)

