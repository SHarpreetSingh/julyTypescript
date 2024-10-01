var longestCommonPrefix = function (strs) {
    // strs(strs.length-1).indexOf(a)
    // let s = ""
    let stack = [];
    let arr = [];

    console.log("strs", strs.join("").split(""));
    console.log("strs");
    let splStr = strs.join("").split("")
    splStr.filter((value, index, array) => {
        // console.log(value, index, "indexOf")
        if (splStr.indexOf(value) === index) {
        } else {
            // s += value
            // console.log("ch", value, index)
            if (stack.length > 0 && stack[stack.length - 1] === value) {
                // Pop a character from the stack.
                stack.pop();
                console.log("stack",stack)
            } else {
                // Otherwise, push that character onto the stack.
                stack.push(value);
                console.log("push",stack)
            }
        }
        // console.log("finstr", str,)
    })
};

longestCommonPrefix(["dog","racecar","car"])

// let uq= new Set(splStr)

    // function onlyUnique(value, index, array) {
    //     let count = 0
    //     let len = array.length - 1
    //     console.log("array[2][0]", array[len].indexOf(array[len][count]), array[len][count])

    //     if (value.indexOf(array[len][count]) === array[len].indexOf(array[len][count])) {
    //         console.log("array[len][count]", array[len][count])
    //         count++
    //         return value
    //     }
    // }