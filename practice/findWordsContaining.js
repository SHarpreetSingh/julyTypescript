var findWordsContaining = function (words, x) {
    let idxs = []

    words.filter((word,index,array) => {
        console.log(word,index)
        if (word.includes(x)) {
            console.log("word", word)
            idxs.push(index)
        }
    })
    console.log(idxs);
    return idxs
};


let words = ["abc","bcd","aaaa","cbc"], x = "b"
findWordsContaining(words,x)

// 2,6,10
// let b = 6, a = 18

// var gcd = function(a, b) {
//     if (!b) {
//         return a;
//     }
//     console.log(gcd(b, a % b));
//     // return gcd(b, a % b);
// }

// gcd(a,b)



