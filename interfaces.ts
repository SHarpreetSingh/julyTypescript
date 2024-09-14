interface Person {
    name: string;
    age: number;
}

function introduce(person: Person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

let alice: Person = { name: "Alice", age: 30 };
console.log(introduce(alice));

// async function fetchdata():Promise<unknown> {
//     const resp = await fetch('https://jsonplaceholder.typicode.com/todos')
//     const data = await resp.json()
//     return data
// }

// async function checkUnkownType() {
//     const resp = await fetchdata()

//     if(typeof resp === "boolean"){
//         console.log(resp);
//     }
// }




