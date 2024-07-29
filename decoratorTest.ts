

// function logging() {
//     console.log("loging")
// }

// @logging()
// class EmployeeR {
//     id: string
//     name: string
// }

// const empR = new EmployeeR()

class Flyable {
    fly() {
        console.log("fly");

    }
}

class Swimmable {
    Swim() {
        console.log("Swim");
    }
}

class Duck {

}

applyMixins(Duck, [Flyable, Swimmable]);

const duck= new Duck();


