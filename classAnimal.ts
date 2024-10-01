class Animal {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    public makeSound(): void {
        console.log(`${this.name} makes a sound.`);
    }
}

let dog = new Animal("Dog");
dog.makeSound();

