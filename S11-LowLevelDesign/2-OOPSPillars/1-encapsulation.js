class Car {
    #model;

    constructor(make, model, year) {
        this.make = make;
        this.#model = model;
        this.year = year;
    }

    start() {
        this.#injectFuelToEngine();
        console.log(`${this.make} ${this.#model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.make} ${this.#model} is driving at ${speed} km/h.`);
    }
    
    #injectFuelToEngine(fuelInml) {
        console.log(`${this.make} ${this.#model} is injecting fuel to engine`);   
    }
}

const myCar = new Car("Toyota", "Camry", 2023);

// myCar.#model = "Fortuner";
myCar.start();
myCar.drive(60);

// myCar.injectFuelToEngine(50)

// console.log(myCar.#model);

