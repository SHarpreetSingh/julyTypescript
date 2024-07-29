//type gaurd 

function isString(a: string) {
    if (typeof a === "string") {
        console.log(a)
        return a;
    }
}

function checkString(a: string | number) {
    if (typeof a === "string")
        isString(a)
    if (typeof a === "number") {
       console.log(a) 
    }
}