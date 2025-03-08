/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {

    return function (x) {
        // functions.reverse().forEach((v,i,array)=>{
        //     console.log("element", i,v ,array[i](x));
        //     x= array[i](x)
        // }) 
        // return x
        for (let index = functions.length - 1; index >= 0; index--) {
            const element = functions[index];
            console.log("element", index, element(x));
            x = element(x)
        }
        return x
    }
};

const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)) // 9
// console.log(fn(4)) // 9
//

/**
 * @param {Function} fn
 * @return {Function}
 */
// var once = function (fn) {
//     let bool = true
//     return function (...args) {
//         if (!bool) {
//             return false
//         }
//         bool = false
//         return fn(...args)
//     }
// };


// let fn = (a, b, c) => (a + b + c)
// let onceFn = once(fn)
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // returns undefined without calling fn


// let executionCount = 0;
// return function (...args) {
//   if(executionCount > 0) return undefined;
//   executionCount++;
//   return fn(...args);
// };

