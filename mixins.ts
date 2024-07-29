class Jumpable {
    jump() {
        console.log("Jump");
    }
}

class Runnable {
    run() {
        console.log("Run");
    }
}

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

class Person {
    // jump:() => void;
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

applyMixins(Person, [Jumpable, Runnable]);

const Hperson = new Person("a");
Hperson.jump(); // Output: Jump
Hperson.run();  // Output: Run


