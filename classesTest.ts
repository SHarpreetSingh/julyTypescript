// Classes

// Class with Methods: Create a class Car with properties make (string) and model (string). Include a method getCarDetails that returns a string with the car's make and model.

// Inheritance: Create a subclass ElectricCar that extends Car and adds a new property batteryLife (number). Include a method getBatteryLife that returns the battery life.

// Access Modifiers: Modify the Car class to make the properties make and model private. Add getter and setter methods to access and modify these properties.

class Car {
    private make: string
    private model: string

    constructor(make: string, model: string) {
        this.make = make
        this.model = model
    }

    getProp() {
        return `${this.make},${this.model}`
    }

    setProp(make: string, model: string) {
        this.make = make
        this.model = model
    }

    getCarDetails() {
        return `${this.make},${this.model}`
    }
}

class ElectricCar extends Car {
    batterLife: number

    constructor(batterLife: number, make: string, model: string) {
        super(make, model);
        this.batterLife = batterLife
    }

    getBatteryLife() {
        return this.batterLife
    }
}