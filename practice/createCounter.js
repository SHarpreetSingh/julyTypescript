/**
 * @param {number} n
 * @return {Function} counter
 */
// var createCounter = function (n) {
//     console.log("outer",);

//     return function () {
//         console.log("n",n);
//         return n++;
//     };
// };

// const counter = createCounter(-2)
// console.log(counter());
// console.log(counter());
// console.log(counter());
// 10

/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise(async (resolve, reject) => {
        if (millis) {
            console.log("miilis",millis);
            setTimeout(() => {
                resolve(100)
            }, millis);
        }
    })
}

let t = Date.now()
sleep(100).then(() => console.log("Date.now()",Date.now(),Date.now() - t)) // 100


// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// var createCounter = function (init) {
//     // console.log("outer", array[0]);
//     let arr = []
//     let sum = init

//     return {
//         increment: function () {
//             sum = sum + 1
//             // console.log("sum", sum);
//             arr.push(sum)
//             return sum
//         },
//         decrement: function () {
//             sum = sum - 1
//             // console.log("decrement", sum);
//             arr.push(sum)
//             // console.log("decrement", arr);
//             return sum
//         },
//         reset: function () {
//             console.log("reset", init);
//             sum = init
//             arr.push(sum)
//             console.log("arr", arr);
//             return sum
//         }
//     }
// };


const counter = createCounter(0, ["increment","increment","decrement","reset","reset"])
// console.log(counter);

counter.increment(); // 6
counter.increment(); // 7
counter.decrement(); // 4
counter.reset(); // 5
counter.reset(); // 5
// /