// Input: nums = [2,11,10,1,3], k = 10

// nums = [1,1,2,4,9], k = 1,9

var minOperations = function (array, k) {
    // console.log(array);
    let numbOfOprtns = 0;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element >= k)
        if (element < k) {
            numbOfOprtns++
        } 
    }
    console.log("count",numbOfOprtns);
    
};

minOperations([2,11,10,1,3], 10)


