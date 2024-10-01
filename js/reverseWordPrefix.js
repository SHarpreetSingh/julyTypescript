// let word = "abcdefd"
// let ch = "d"
// Output: "dcbaefd"
// "xyxzxe"

// Find the first index of ch.
// If index does not exist, then return the word itself
// Else, all the chars from index to 0 and from index to word.length()
// "".substring()

// var reversePrefix = function (word, ch) {
//     // console.log("word.split", word.split(ch))
//     let splitedWords = word.split(ch)
//     console.log("splitedWords")

//     let reverse_prefix = ""
//     console.log(word.split("d")[0].includes(word.split("d")[0]));
//     // console.log(word.indexOf(ch));

//     for (let index = 0; index < word.length; index++) {
//         const element = word[index];
//         console.log("element",element);
//         if (word.split(ch)[0].includes(element)) {
//             if (element !== ch) {
//                 reverse_prefix = element + reverse_prefix
//             }
//         } else {
//             reverse_prefix = ch + reverse_prefix
//         }
//     }


//     if (!reverse_prefix){
//         console.log("reverse_prefix false",reverse_prefix);
//         return word
//     }

//     // console.log(word.split(ch)[2] ? word.split(ch)[2] : "");
//     let lastWORD

//     if (word.split(ch)[1] === splitedWords[(splitedWords.length) - 1]) {
//         lastWORD = ""
//     }

//     if (word.split(ch)[1] !== splitedWords[(splitedWords.length) - 1]) {
//         lastWORD = ch
//     }

//     reverse_prefix = reverse_prefix + word.split(ch)[1] + lastWORD
//     // console.log(reverse_prefix);
//     return reverse_prefix

// };

var reversePrefix = function (word, ch) {
    let arrOfstr = []
    let letfchar = ""
    let flag = false
    // console.log(word.split());
    for (let index = 0; index <= word.length; index++) {
        const element = word[index];
        // console.log("element", element)
        if (!arrOfstr.includes(ch)) {
            arrOfstr.push(element)
        } else {
            flag = true
            if (element)
                letfchar = letfchar + element
            console.log("letfchar", letfchar);
        }
    }

    if (!flag) {
        console.log("arrOfstr", arrOfstr.join(""))
        return arrOfstr.join("")
    }

    // console.log("ddd", letfchar, arrOfstr.reverse().concat(letfchar).join(""))
    return arrOfstr.reverse().concat(letfchar).join("")
}

console.log(reversePrefix("xxxxxxxxxx", "x"))

