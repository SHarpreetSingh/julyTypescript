
let arr = []
var theMaximumAchievableX = function (num, t) {
    // console.log(x);
    let x1,x2;

            sum1 = num + t; x1 = sum1 + t
            sum1 = num + t; x2 = sum1 - t
           
            console.log("ddd", sum1, num,x1,x2);
            sum1 = num - t; x3 = sum1 + t
            sum1 = num - t; x4 = sum1 - t
            console.log("===>", sum1, x1,x2);

        arr.push(x1)
        arr.push(x2)
        arr.push(x3)
        arr.push(x4)
        arr.sort((a,b)=>a-b)
    console.log("arr", arr,arr[arr.length-1]);
    return arr[arr.length-1]
};

theMaximumAchievableX(4, 1)

// num+1 =5, x-1=5 then x=6;
// num-1= 3,x+1=3, x=2
// num+1= 5,x+1=5, x=4
// num-1=3, x-1=3,4


// sum1=num+t;  x1=sum1+1
// sum2=num+t;  x2=sum2+1
// sum3=num-t;  x3=sum3-1
// sum4=num-t;  x4=sum4-1
n = 4+1-3