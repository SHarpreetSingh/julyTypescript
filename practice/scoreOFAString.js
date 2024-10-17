var scoreOfString = function (str) {
    let sum
    
    let substArr = []
    for (let index = 0; index < str.length - 1; index++) {
        const element = str[index];
        console.log(str.charCodeAt(index)); // returns 104 (ASCII value of 'H')
        let resOfSubst = str.charCodeAt(index) - str.charCodeAt(index + 1)
        // console.log("resOfSubst", Math.abs(resOfSubst));
        substArr.push(Math.abs(resOfSubst))
    }

    console.log(substArr);
    substArr.reduce((p, c, i) => {
        sum = p + c
        console.log(p, c, p + c)
        return sum
    },0);

    return sum
};

console.log(scoreOfString("hello"))
// const sumWithInitial = array1.reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue);



