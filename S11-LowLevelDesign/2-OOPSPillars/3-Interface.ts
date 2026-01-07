abstract class Vehicle {
    make: string;
    model: string;

    constructor(make: string, model: string) {
        this.make = make;
        this.model = model;
    }

    start(): void {
        console.log(`Starting the vehicle: ${this.make} ${this.model}`);
    }

    stop(): void {
        console.log(`Stopping the vehicle: ${this.make} ${this.model}`);
    }
}

interface drivable {
    drive(): void;
}

interface flyable {
    takeoff(): void;
    cruise(): void;
    land(): void;
}

interface rowable {
    row(): void;
}

interface xyz extends drivable {
    speak(): void;
}

class SmartCar extends Vehicle implements xyz {
    speak(): void {
        throw new Error("Method not implemented.");
    }
    drive(): void {
        throw new Error("Method not implemented.");
    }
}


class Bus extends Vehicle implements drivable {
    constructor(make: string, model: string) {
        super(make, model);
    }
    
    drive(): void {
        console.log("Bus is driving on the road");
    }
}

class Train extends Vehicle  implements drivable{
    constructor(make: string, model: string) {
        super(make, model);
    }

    drive(): void {
        console.log("Bus is driving on the road");
    }
}

class Car extends Vehicle implements drivable, flyable, rowable {
    constructor(make: string, model: string) {
        super(make, model);
    }
    
    row(): void {
        throw new Error("Method not implemented.");
    }
    
    takeoff(): void {
        throw new Error("Method not implemented.");
    }

    cruise(): void {
        throw new Error("Method not implemented.");
    }

    land(): void {
        throw new Error("Method not implemented.");
    }

    drive(): void {
        console.log("Bus is driving on the road");
    }
}



// let car: Vehicle = new Car("Toyota", "Camry");
// car.start(); // Output: Starting the car: Toyota Camry with 4 doors

let car: Vehicle = new Vehicle("Maruti", "Fronx");



