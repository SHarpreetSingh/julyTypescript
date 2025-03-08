var removeDuplicates = function (s) {
    // console.log("string", s)

    let ssplited = s.split('')
    // ssplited.splice(1,2)
    console.log("===", ssplited)
    for (let i = 0; i < ssplited.length-1; i++) {
        console.log("i",i,ssplited)
        if (ssplited[i] == ssplited[i + 1]) {
            console.log(i, "eee=", ssplited[i])
            ssplited.splice(i,2)
            console.log(i,"0000d", ssplited)
            ssplited.splice(i-1,2)
            console.log(i,"ddd", ssplited)
        }      
    }

    //     return ssplited.join('')

    // Create an empty stack.
    // let stack = [];
    // // "aaaaa"
    // // Iterare over the string
    // for (let c of s) {
    //     // If stack has at least one character and
    //     // stack's top character is same as the string's character.
        
    //     if (stack.length > 0 && stack[stack.length - 1] === c) {
    //         // Pop a character from the stack.
    //         stack.pop();
    //     } else {
    //         // Otherwise, push that character onto the stack.
    //         stack.push(c);
    //         // ["a"]
    //     }
    // }

    // // Return the result string.
    // console.log(stack)
    // return stack.join("");
};

removeDuplicates("aaaaabaac")

