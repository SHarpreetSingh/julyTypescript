// Input: 
// array = [
//   {"id":"1"},
//   {"id":"1"},
//   {"id":"2"}
// ], 
// fn = function (item) { 
//   return item.id; 
// }
// Output: 
// { 
//   "1": [{"id": "1"}, {"id": "1"}],   
//   "2": [{"id": "2"}] 
// }


/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    let obj = {}
    let arr = []
    let arr2 = []
    for (let index = 0; index < this.length; index++) {
        const element = this[index];
        console.log("ff", "n(this)", fn(element), index, "arrindex-1", arr[index - 1]?.id == element.id);
        if (arr[index - 1] == undefined || arr[index - 1]?.id == element.id) { //string, bool,array
            console.log("element", element);
            arr.push(element)
            obj[fn(element)] = arr
            console.log("index", "obj", obj);
        }
        else if (fn(element) == "false" || arr[index - 1]?.id != element.id) {
            console.log("arrS", index, arr2, fn(element));
            arr2.push(element)
            obj[fn(element)] = arr2
        }
        // console.log("arr==>",arr);
    }
    console.log("obj", obj);
    return obj
};


// [[1,2,3],[1,3,5],[1,5,9]]
// [
//     { "id": "1" },
//     { "id": "1" },
//     { "id": "2" }
// ]
    [{ "id": "1", "name": "Mark" }, { "id": "2", "name": "Juan" }, { "id": "3", "name": "Abigail" }]
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    .groupBy(function (item) {
        return item.id;
        // return String(item > 5);
        // return String(item[0]);
    })




// {"1":[{"id":"1","name":"Mark"}],"2":[{"id":"2","name":"Juan"}],"3":[{"id":"3","name":"Abigail"}],"4":[{"id":"4","name":"Madhavi"}]}