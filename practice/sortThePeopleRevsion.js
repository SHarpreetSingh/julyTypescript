let names = ["Mary", "John", "Emma"], heights = [180, 165, 170]
var sortPeople = function (names, heights) {
    let sortedNames = []
    let obj = {}
    for (let index = 0; index < names.length; index++) {
        const name = names[index];
        const height = heights[index];
        console.log(name, height);
        // obj = { [height]: name }
        obj[height] = name

    }
    console.log(obj);

    let sortedHgt = heights.sort((a, b) => b - a)
    for (let index = 0; index < sortedHgt.length; index++) {
        const srtht = sortedHgt[index];
        console.log("sortedHgt", obj[srtht])
        sortedNames.push(obj[srtht])
    }
    console.log("sortedNames",sortedNames);

}

sortPeople(names, heights)

