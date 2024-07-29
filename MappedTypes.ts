/* Mapped Types: Create a mapped type Readonly<T> that takes an object type T and makes all its properties readonly.*/

// type Readonly1<T> = {
//     readonly [P in keyof T]: T[P]
// }

interface Emp {
    name: string
    age: number
}


// const readonlyEmp: Readonly1<Emp> = {
//     name: "Aman",
//     age: 2
// }

// readonlyEmp.age=3 //  Error: Cannot assign to 'age' because it is a read-only property.

type readonly2<T> = {
    readonly [p in keyof T]: T[p]
}

const readonlyEmp1:readonly2<Emp> = {
    name: "aan",
    age: 2
}

// readonlyEmp1.age=3