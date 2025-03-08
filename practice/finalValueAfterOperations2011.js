
var defangIPaddr = function (str) {
    let withdefangIPaddr = ""
    for (let index = 0; index < str.length; index++) {
        const element = str[index];
        console.log(element);
        if (element === ".") {
            withdefangIPaddr = withdefangIPaddr + "[.]"
        } else {
            withdefangIPaddr = withdefangIPaddr + (element)
        }
    }
    return withdefangIPaddr
    // return str.replaceAll('.','[.]')
    
};

console.log("finalValueAfterOperations", defangIPaddr("255.100.50.0"));


