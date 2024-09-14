

function logging(constructor: Function) {
    console.log("loging class emplyoee")
}

@logging
class EmployeeR {
    id: number
    name: string

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }
}

const empR = new EmployeeR(1,"makan")

class Flyable {
    fly() {
        console.log("fly");

    }
}

class Swimmable {
    swim() {
        console.log("Swim");
    }
}

class Duck implements Flyable, Swimmable {
    fly: () => void;
    swim: () => void;
}

function applyMixins1(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}

applyMixins1(Duck, [Flyable, Swimmable]);

const duck= new Duck();
duck.fly()

