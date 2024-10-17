let timePoints = ["02:39", "10:26", "21:43"] //["00:00", "04:00", "22:00"] //["23:59", "00:00"] //["02:39", "10:26", "21:43"] //  //  //

// timePoints = ["23:59","00:00","00:00"]

var findMinDifference = function (timePoints) {
    const enumObj = {
        twentyFourhrs: "00:00"
    }

    timePoints = timePoints.sort((a, b) => (parseInt(a) - parseInt(b)))
    console.log("timePoints", timePoints);

    timePoints = timePoints.map((v, i, timeArr) => {
        console.log("convertH2M(v)", convertH2M(v));
        return convertH2M(v) != 0 ? convertH2M(v) : convertH2M(enumObj.twentyFourhrs)
    })
    timePoints = timePoints.sort((a, b) => (parseInt(a) - parseInt(b)))
    timePoints.push(1440)
    console.log("tt", timePoints);

    let diff, arr = []
    for (let index = 0; index < timePoints.length; index++) {
        const minLeft = timePoints[index];
        // console.log(element, convertH2M(element));
        for (let j = index + 1; j < timePoints.length; j++) {
            const minRight = timePoints[j];
            console.log("nested", minRight, minLeft, minRight - minLeft);
            diff = Math.abs(minRight - minLeft)
            console.log("diff", diff)
            arr.push(diff)
        }
    }
    console.log("final diff", arr)
    return Math.min(...arr)
};

function convertH2M(timeInHour) {
    var timeParts = timeInHour.split(":");
    return Number(timeParts[0]) * 60 + Number(timeParts[1]);
}


let m = findMinDifference(timePoints)
console.log(m);
