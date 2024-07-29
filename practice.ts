interface Person {
    name: string
    age: number,
    address?: string
}

let myObj: Person = {
    name: "cow",
    age: 2,
}

/** */

/** Define an interface for a function type that takes two numbers and returns their sum.*/


interface SumInter {
    a: number
    b: number
}

function sum(sumObj: SumInter): number {
    let s = sumObj.a + sumObj.b
    return s;
}

let sumObj = {
    a: 1, b: 2
}

sum(sumObj)

// /char GPT Answer/

// Define the function type interface
interface SumFunction {
    (a: number, b: number): number;
}

// Implement the function according to the interface
const sumChatG: SumFunction = (a, b) => {
    return a + b;
};

// Use the function
console.log(sumChatG(1, 2)); // Output: 3

/** Create a class Car with properties make (string) and 
    model (string). Include a method getCarDetails that
    returns a string with the car's make and model.
    */

// class Car {
//     make: string
//     model: string

//     constructor(make:string,model:string){
//         this.make=make
//         this.model=model
//     }

//     getCarDetails() {
//         return  `${this.make},${this.model}`
//     }
// }


