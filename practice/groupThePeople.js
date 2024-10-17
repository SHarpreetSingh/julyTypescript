let groupSizes = [3, 3, 3, 3, 3, 1, 3]
// [1,1, 3, 3, 3, 3,  3]
// Output: [[5],[0,1,2],[3,4,6]]
// Input: groupSizes = [1,2,2,3,3,3,]
// Output: [[1],[0,5],[2,3,4]]
let objs = new Set(groupSizes)
let final = []

var groupThePeople = function (groupSizes) {
    let arr = new Set(groupSizes)
    console.log("arr", arr)
    
    for (const o of objs) {
        let arrIdx = []
        for (let index = 0; index < groupSizes.length; index++) {
            const element = groupSizes[index];
            if(o == element){
                arrIdx.push(index)
            }
            console.log("index", "j", o == element,arrIdx)
            // console.log("element", element, "element", groupSizes[index + 1],)
        }
        // final.push(arrIdx)
        while (arrIdx.length) {
            final.push(arrIdx.splice(0, o));
        }
    }

    console.log("final", final)
};

groupThePeople(groupSizes)