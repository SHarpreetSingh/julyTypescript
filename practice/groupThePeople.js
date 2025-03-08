// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
// Explanation: 
// The first group is [5]. The size is 1, and groupSizes[5] = 1.
// The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
// The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.

let groupSizes = [3, 3, 3, 3, 3, 1, 3]

// Output: [[5],[0,1,2],[3,4,6]]

// [1,1, 3, 3, 3, 3,  3]
let objs = new Set(groupSizes)
let final = []

var groupThePeople = function (groupSizes) {

    for (const o of objs) {
        console.log("arr","p",o)
        let arrIdx = []
        for (let index = 0; index < groupSizes.length; index++) {
            const element = groupSizes[index];
            console.log("element",element);
            if(o == element) {
                arrIdx.push(index)
            }
            console.log("index", "j", o, element,o == element,"arrIdx",arrIdx)
            console.log("element", element, "element", groupSizes[index + 1])
        }
        // final.push(arrIdx)
        console.log("arrIdx.length",arrIdx.length);

        while (arrIdx.length) {
            // console.log("arrIdx.splice(0, o)","o",o,arrIdx.splice(0, o));
            console.log("arrIdx.lengthjjjj",arrIdx.length);
            final.push(arrIdx.splice(0, o));
        }
    }
    console.log("final", final)
};

groupThePeople(groupSizes)


// function g(params) {
//     const h = new Set(params)
//     let dex = []

//     for (let obj of h) {
//         let ray = []
//         console.log("obj", obj);
//         for (let index = 0; index < params.length; index++) {
//             const element = params[index];
//             if (element === obj) {
//                 console.log("element", element, "obj", obj, element == obj);
//                 ray.push(index)
//                 console.log("ray", ray)
//             }
//         }

//         console.log("ray.length", ray.length)
//         while (ray.length) {
//             // console.log("ray.slice", ray.splice(0, obj));
//             dex.push(ray.splice(0, obj))
//         }
//     }
//     console.log("ray.slice", dex);
//     // return dex
// }

// g([3, 3, 3, 3, 3, 1, 3])

