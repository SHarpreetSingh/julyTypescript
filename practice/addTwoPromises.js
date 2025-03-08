
// let promise1=  new Promise(resolve => setTimeout(() => resolve(2), 20))
// let promise2=  new Promise(resolve => setTimeout(() => resolve(5), 60))

var addTwoPromises = async function (promise1, promise2) {
    console.log("ans", promise1)
    let n1 = await promise1
    console.log("nq", n1)

    let n2 = await promise2
    console.log("promise1", n1 + n2)

    return n1 + n2;
};

addTwoPromises(Promise.resolve(2), Promise.resolve(5))
    .then(console.log); // 4


