class PetrolEngine {
  start() {
    console.log("Petrol engine started");
  }
}

class Kar {
  private engine: PetrolEngine;

  constructor() {
    this.engine = new PetrolEngine();
  }

  startCar() {
    this.engine.start();
    console.log("Car started");
  }
}


// Main (Not following DIP)
const maruti = new Kar();
maruti.startCar();

// PM --> 