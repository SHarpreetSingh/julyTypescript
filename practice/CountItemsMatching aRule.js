
let items = [["ii", "iiiiiii", "ii"], ["iiiiiii", "iiiiiii", "ii"],
["ii", "iiiiiii", "iiiiiii"]], ruleKey = "color", ruleValue = "ii"
// Output: 1

var countMatches = function (items, ruleKey, ruleValue) {
    let count = 0
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        console.log("element", element);
        for (let j = 0; j < element.length; j++) {
            const v = element[j];
            console.log("v", v, ("type" == ruleKey && j == 0), ("color" == ruleKey && j == 0), ("name" == ruleKey && j == 0));
            if (v === ruleValue && (("type" == ruleKey && j == 0) || ("color" == ruleKey && j == 1) || ("name" == ruleKey && j == 2))) {
                count++
            }
        }
    }
    // console.log("count", count);
    return count
};

console.log("items", items);

console.log(countMatches(items, ruleKey, ruleValue))
// console.log()

