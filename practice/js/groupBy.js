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
    let grouped = {};
    for (let element of this) {
        console.log("el",element);
        
        let key = fn(element); // Get the group key using the provided function
        if (!grouped[key]) {
            grouped[key] = []; // Initialize the group if it doesn't exist
        }
        grouped[key].push(element); // Add the element to the corresponding group
    }
    console.log("grouped",grouped);
    return grouped;
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
