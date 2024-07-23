interface Person {
    name: string;
    age: number;
}

function introduce(person: Person): string {
    return `Hello, my name is ${person.name} and I am ${person.age} years old.`;
}

let alice: Person = { name: "Alice", age: 30 };
console.log(introduce(alice));

