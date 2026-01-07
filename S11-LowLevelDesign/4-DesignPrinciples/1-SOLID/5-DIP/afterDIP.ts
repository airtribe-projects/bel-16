interface Engine {
    start(): void;
}

class PetrolEngineDIP implements Engine {
    start() {
        console.log("Petrol engine started");
    }
}

class DieselEngineDIP implements Engine {
    start() {
        console.log("Diesel engine started");
    }
}

class CarDIP {
    private engine: Engine;

    constructor(engine: Engine) {
        this.engine = engine;
    }    

    startCar() {
        this.engine.start();
        console.log("Car started");
    }
}    


let petrolEngine = new PetrolEngineDIP();
let dieselEngine = new DieselEngineDIP()

let merc: Car =  new Car(petrolEngine);
merc.start;

let bmw: Car =  new Car(dieselEngine);
bmw.start;

// Dependency Injection is achieved via dependency inversion princple


