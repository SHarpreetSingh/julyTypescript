let timePoints = ["02:39", "10:26", "21:43"]   //["00:00", "04:00", "22:00"] //["23:59", "00:00"] //["02:39", "10:26", "21:43"] //  //  //["23:59", "00:00", "00:00"]

var timeDiffernce = function () {
    // console.log(timePoints);
    let timeArry = []

    for (let index = 0; index < timePoints.length; index++) {
        const element = timePoints[index];
        console.log(element);
        // convertH2M(element)?convertH2M(element): convertH2M(element)
        timeArry.push(convertH2M(element));
        // console.log("timeArry",timeArry);
    }
    timeArry.sort((b, a) => b - a)
    timeArry.push(1440)

    for (let index = 0; index < timeArry.length; index++) {
        const element = timeArry[index];
        for (let jndex = index + 1; jndex < timeArry.length; jndex++) {
            const nextnum = timeArry[jndex];
            console.log("nextnum", nextnum, element,nextnum - element);
        }
    }

    console.log("timeArry", timeArry);

    function convertH2M(timePoint) {
        let splitedTm = timePoint.split(":")
        console.log("splitedTm", splitedTm[0]);
        splitedTm[0] = splitedTm[0] == "00" ? "24" : splitedTm[0]
        // console.log("splitedTm", splitedTm[0] == "00", splitedTm[0]);
        let mins = splitedTm[0] * 60 + parseInt(splitedTm[1])
        // console.log("mins", mins);
        return mins
    }
}

timeDiffernce()

