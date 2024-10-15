// Input: garbage = ["G","P","GP","GG"], travel = [2,4,3]
// Output: 21
// Explanation:
// The paper garbage truck:
// 1. Travels from house 0 to house 1, 2
// 2. Collects the paper garbage at house 1, min - 1 
// 3. Travels from house 1 to house 2, min - 4
// 4. Collects the paper garbage at house 2, min - 1
// Altogether, it takes 8 minutes to pick up all the paper garbage.
// The glass garbage truck:
// 1. Collects the glass garbage at house 0,min - 1
// 2. Travels from house 0 to house 1,min - 2
// 3. Travels from house 1 to house 2, min - 4
// 4. Collects the glass garbage at house 2, min - 1
// 5. Travels from house 2 to house 3, min - 3
// 6. Collects the glass garbage at house 3, min - 2
// Altogether, it takes 13 minutes to pick up all the glass garbage.
// Since there is no metal garbage, we do not need to consider the metal garbage truck.
// Therefore, it takes a total of 8 + 13 = 21 minutes to collect all the garbage.

// ["G", "P", "GP", "GG"] [2, 4, 3]// ["MMM","PGM","GP"] [3,10], ["PGG", "GG", "PGG"], travel = [10, 11]

let garbage = ["G", "P", "GP", "GG"], travel = [2, 4, 3]

var garbageCollection = function (garbage, travel) {
    let min = 0
    for (let index = 0; index < garbage.length; index++) {
        const element = garbage[index];
        // console.log(element)
        // if (element.length >= 1) {
        //     min += element.length
        // }
        // console.log("min here", min, "index", index)

        // if (element.length === 1) {
        //     min += 1
        // }
        let [m, p, g] = [false, false, false];
        console.log("element", element)
        if (travel[index - 1] && index > 0) {
            // console.log(index - 1, travel[index - 1])
            // min += travel[index - 1]
            for (const key in element) {
                m = m || garbage[key].includes('M');
                p = p || garbage[key].includes('P');
                g = g || garbage[key].includes('G');
                console.log("element.indexOf(element[key])", key, element.indexOf(element[key]) == key)
                if (element.indexOf(element[key]) == key) {
                    min += travel[index - 1]* (m + p + g);
                    console.log("key", key, element[key], "element[key]", "min", min)

                }
            }
        }
        console.log("min after travel===>", min)
    }
};

garbageCollection(garbage, travel)

