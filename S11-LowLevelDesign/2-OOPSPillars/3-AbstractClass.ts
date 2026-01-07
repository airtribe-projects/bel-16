abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    abstract start(): void;

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
}

// Ab abstract class can never be intialized 


class Bus extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model);
    }
    start(): void {
        console.log("Bus is starting");
    }
}

class Train extends Vehicle {
    constructor(make: string, model: string) {
        super(make, model);
    }
}


// let car: Vehicle = new Car("Toyota", "Camry");
// car.start(); // Output: Starting the car: Toyota Camry with 4 doors

let car: Vehicle = new Vehicle("Maruti", "Fronx");