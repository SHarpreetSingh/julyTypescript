// Example 1:

// let allowed = "ab", words = ["ad", "bd", "aaab", "baa", "badab"] // ,"ad", "bd","aaab",
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// let allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"]
// Output: 7


// var countConsistentStrings = function (allowed, words) {
//     console.log(allowed, words)
//     for (let index = 0; index < allowed.length; index++) {
//         const element = allowed[index];
//         let obj = {}
//         for (let index = 0; index < words.length; index++) {
//             const word = words[index];
//             for (let j = 0; j < word.length; j++) {
//                 let count = 0
//                 // console.log("word", word[j])
//                 let set = new Set(element)
//                 // console.log("set", set)
//                 console.log(set, "element", word, set.has(word[j]));
//                 // if (set.has(word[j])) {
//                     // count++
//                     obj = {
//                         [words[index]]: {
//                             [word[j]]: count
//                         }
//                     }
//                 // }
//                 if (set.has(word)) count++
//                 console.log(count)
//             }
//             console.log("obj", obj)

//         }
//     }
// };
// countConsistentStrings(allowed, words)


// var cntConsistentStrings = function (allowed, words) {
// let alwd = allowed.split(""), arr = []

// for (let index = 0; index < words.length; index++) {
//     const word = words[index]; let count = 0
//     const uword = new Set(word)
//     console.log("uword", uword, uword.size);

// for (const leter of uword) {
//     console.log("leter", leter, leter == alwd[0], alwd[0], alwd[1], leter == alwd[1]);
//     if ((leter == alwd[0] || leter == alwd[1])) {
//         count++
//     }
// }
// console.log("count", count, uword.size == count);
// if (uword.size === count) {
//     arr.push(word)
// }
// }
//         console.log("arr", arr.length);
// return arr.length
// }
// [].reduce()

var cntConsistentStrings = function (allowed, words) {
    const alwWword = new Set(allowed)
    console.log("alwWword", alwWword)
    let counterUni = 0
    for (let index = 0; index < words.length; index++) {
        const strg = words[index];
        console.log(strg.split(''));
        let chars = strg.split(''), count = 0
        for (let index = 0; index < chars.length; index++) {
            const element = chars[index];
            console.log(element, "element", alwWword.has(element));
            if (!alwWword.has(element)) {
                count--
                break
            }
            count++
        }
        console.log("count", count, chars.length)
        if (count >= chars.length)
            counterUni++
    }
    console.log("counterUni", counterUni)
    return counterUni
}
cntConsistentStrings(allowed, words)

