// A class decorator is applied to the class constructor and can be used to observe, modify, or replace a class definition.

function sealed(constructor: Function) {
    Object.seal(constructor);
    Object.seal(constructor.prototype);
}

@sealed
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return `Hello, ${this.greeting}`;
    }
}

const greeter = new Greeter("Worls")
console.log(greeter.greet())

/*
    Attempt to add a new property
    This should fail in strict mode if Object.seal works correctly
*/

// greeter.abc = "abc"
// console.log(greeter.abc);

