/**
 * Define two interfaces Shape with a property area (number) and 
 * Colored with a property color (string). Create an intersection 
 * type ColoredShape that combines both interfaces.
 */

interface Shape {
    area: number
}

interface Colored {
    color: string
}


type ColoredShape = Shape & Colored

function printId(arg: string | number) {
    if (typeof arg === "string") {
        console.log(arg.toUpperCase())
    }
    if(typeof arg === "number")
        console.log(arg * arg);

}
