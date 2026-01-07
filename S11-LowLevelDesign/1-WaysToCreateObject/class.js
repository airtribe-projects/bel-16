// Via Object Literal
// const car = {
//     make: "Toyota", 
//     model: "Camary",
//     year: 2023, 
//     start: function(){
//         console.log(`${this.make} ${this.model} is starting...`)
//     },
//     drive: function(speed) {
//       console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
//     }
// }

// car.start();
// car.drive();

/* Problems
1. Data Integrity: Can access any values and change it
2. Code Duplication: 
3. Lacks Structure:
4. Extensible
*/

// Using Constructor function
// function Car(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
    
//     this.start = function() {
//       console.log(`${this.make} ${this.model} is starting...`);
//     };
  
//     this.drive = function(speed) {
//       console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
//     };
//   }

//     const myCar = new Car("Toyota", "Camry", 2023);

//   myCar.start();
//   myCar.drive(60);

  /* Problems
1. Data Integrity: Can access any values and change it
2. Code Duplication: Solved
3. Lacks Structure: Solved
4. Extensible: Problem
*/


// ES6
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    start() {
        console.log(`${this.make} ${this.model} is starting...`);
    }

    drive(speed) {
        console.log(`${this.make} ${this.model} is driving at ${speed} km/h.`);
    }   
}

const myCar = new Car("Toyota", "Camry", 2023);

myCar.model = "Fortuner";
myCar.start();
myCar.drive(60);

console.log(myCar.model);

class ElectricCar extends Car {

}

