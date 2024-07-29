/** 
 * Effect of the Decorator -
    By setting descriptor.enumerable = value;, you control whether the greet method will be included in enumerations over the properties of instances of Hello.
* */

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    };
}

class Hello {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    
    @enumerable(true)
    greet() {
        return "Hello, " + this.greeting;
    }
}

const helloClassInstantiate = new Hello("Planet")
// console.log(helo.greet())


// The greet method is enumerable because of the decorator
for (let key in helloClassInstantiate) {
    console.log(key); // This will log 'greeting' and 'greet', if @enumerable(true) is true
}

