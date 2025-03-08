// Output: 6
// Explanation:
// 1st customer has wealth = 1 + 2 + 3 = 6
// 2nd customer has wealth = 3 + 2 + 1 = 6
// Both customers are considered the richest with a wealth of 6 each, so return 6.

let accounts = [[1,5],[7,3],[3,5]]

var maxWealth = function (accounts) {
    let sumArr = []
    for (let index = 0; index < accounts.length; index++) {
        let sum = 0
        const arr = accounts[index];
        console.log("element", arr);
        for (let j = 0; j < arr.length; j++) {
            // console.log("element", element);
            const element = arr[j];
            console.log("element", element );
            sum = element + sum
            // element+ 
        }
        sumArr.push(sum)
        sumArr.sort()
    }
    // console.log("sumArr" , sumArr);

    
    return sumArr[0]
}

maxWealth(accounts)

