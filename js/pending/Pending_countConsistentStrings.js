// Example 1:

let allowed = "ab", words = ["baa", "badab"] // ,"ad", "bd","aaab",
// Output: 2
// Explanation: Strings "aaab" and "baa" are consistent since they only contain characters 'a' and 'b'.
// Example 2:

// let allowed = "abc", words = ["a", "b", "c", "ab", "ac", "bc", "abc"]
// Output: 7


var countConsistentStrings = function (allowed, words) {
    // console.log(allowed, words)
    for (let index = 0; index < allowed.length; index++) {
        const element = allowed[index];
        let obj = {}
        for (let index = 0; index < words.length; index++) {
            const word = words[index];
            for (let j = 0; j < word.length; j++) {
                let count = 0
                // console.log("word", word[j])
                let set = new Set(element)
                // console.log("set", set)
                console.log(set, "element", word, set.has(word[j]));
                // if (set.has(word[j])) {
                    count++
                    obj = {
                        [words[index]]: {
                            [word[j]]: count
                        }
                    }
                // }
            }
            console.log("obj", obj)
            // if (set.has(word)) count++
            // console.log(count)
        }
    }
};

countConsistentStrings(allowed, words)


