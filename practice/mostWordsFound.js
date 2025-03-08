let sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]

var mostW = function (sentences) {
    let arr = []
    for (let index = 0; index < sentences.length; index++) {
        const element = sentences[index];
        let word = element.split(' ');
        let count = 0
        for (let index = 0; index < word.length; index++) {
            const Word = word[index];
            console.log(Word);
            count++
        }
        arr.push(count)
        // console.log(count);
    }
    arr.sort((a, b) => a - b);
    console.log(arr[arr.length - 1]);
    return arr[arr.length - 1];
}

mostW(sentences)


