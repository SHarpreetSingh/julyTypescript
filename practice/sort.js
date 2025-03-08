let names = ["Mary","John","Emma"], heights = [180,165,170]
// Output:   // ["Mary","Emma","John"]

var sortPeople = function (names, heights) {
    let log = console.log
    let resArr = []
    let final = []

    for (let index = 0; index < heights.length; index++) {
        const element = heights[index];
        resArr.push({
            [element]: names[index]
        })
    }
    console.log("resArr", resArr)

    heights.sort((a, b) => a - b).reverse()
    log("heights", heights)

    console.log("resArr", resArr)
    for (let index = 0; index < heights.length; index++) {
        const element = heights[index];
        for (let j = 0; j < resArr.length; j++) {
            log(resArr[j][element])
            if(resArr[j][element]){
                console.log("element",element, resArr[j][element], resArr[j]);
                // final.push(resArr[j][element])
            }
        }
    }
    console.log("final", final);

     // create objects in an array
    //  let people = [];
    //  for (let i = 0; i < names.length; i++) {
    //      people.push({name: names[i], height: heights[i]});
    //  }
 
    //  // sort in descending order based on height
    //  people.sort((a, b) => b.height - a.height);
    //  console.log(people);
 
    //  // return only the names in the sorted order
    //  return people.map(person => {
    // });
};

sortPeople(names, heights)



// for (let j = index + 1; j < names.length; j++) {
//     const elementAtIndex1 = heights[j];
//     // log("elementAtIndex1", elementAtIndex1, element > elementAtIndex1)
//     if (top > elementAtIndex1) {
//         console.log("top", top);
//         resArr.push({ [index]: top })
//     }
//     else {
//         console.log("elementAtIndex1", top, j, elementAtIndex1);
//         top = elementAtIndex1
//         resArr.push({ [j]: top })
//     }
// }
