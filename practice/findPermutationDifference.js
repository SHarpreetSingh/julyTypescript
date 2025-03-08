// Input: s = "abc", t = "bac"

var findPermutationDifference = function (s, t) {
    console.log(s, t)
    let arrStr = s.split("")
    let str2 = t.split("")
    let strLen = arrStr.length
    let findDiff = 0
    arrStr.map((v, i) => {
        console.log("v",v,i,str2.indexOf(v));
        findDiff = findDiff + Math.abs(i - str2.indexOf(v))
    })
    console.log("oo>", findDiff, "i")
};


findPermutationDifference("abcde", "edbac")




