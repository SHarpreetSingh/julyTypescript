/** 
 * Effect of the Decorator -
    By setting descriptor.enumerable = value;, you control whether the greet method will be included in enumerations over the properties of instances of Hello.
* */

function enumerable1(value:boolean) {
    return (descriptortarget: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        descriptor.enumerable = value
    }
}

class dec {
    arg:string
    
    constructor(arg: string) {
        this.arg = arg
    }
    
    @enumerable1(true)
    greet() {
        `hello ${this.arg}`
    }

    greting() {
        console.log("dd");
    }
}

const decortorClassInitiated = new dec("world")

for (let k in decortorClassInitiated) {
    console.log(k);
}

