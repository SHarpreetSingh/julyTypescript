type PhyStudent = {
    name: string
    age: number
    greet: () => string // method call signature
}

const phyStudent: PhyStudent = {
    name: "am",
    age: 12,
    greet: () => `hello there`
}

const introduction: (phyStudent: PhyStudent) => string = (phyStudent: PhyStudent) => {
    const { name, age } = phyStudent
    console.log(name)
    return name
}

