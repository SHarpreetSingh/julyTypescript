// traverse through row one by one add total beam count to of each row to queue and subsequently,
// multiply totalbeam in previous row with next row total beam. all add product resul in one var and ALL SET!

// prB*2+ prB*nextRowTotalBeams+ prB*1
// 3*2+2 = 8

// 0+0x3+0


var numberOfBeams = function (bank) {
    let   pre = 1, arr = [],sum = 0
    for (let index = 0; index < bank.length; index++) {
        const floor = bank[index];
        // console.log(floor);
        let cuurrBeam = 0
        for (let index = 0; index < floor.length; index++) {
            const element = floor[index];
            if (parseInt(element) === 1) {
                cuurrBeam++
                // console.log("count,", element);
            }
        }
        
        if (cuurrBeam) {
            console.log("cuurrBeam,", cuurrBeam);
            pre = cuurrBeam * pre
            console.log("pre,", pre, cuurrBeam);
            arr.push(cuurrBeam)
        }
    }
    console.log("arr", arr);
    if(arr.length == 1)  return false
      
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if(index > 0) {
            sum = sum +arr[index-1]*element
            console.log("sum",sum);
        }
    }
    return sum 
};

numberOfBeams(["000","111","000"])

// arr.map((v,i,a)=>{
//     if(i>1){
//         console.log(v,i);
        
//     }
// })
