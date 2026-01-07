class Animal {
    // Private field (only accessible inside the class)
    #name;
  
    constructor(name, sound) {
      this.#name = name;          // Private
      this.sound = sound;         // Public
    }
  
    // Public method
    speak() {
      console.log(`${this.#name} says ${this.sound}`);
    }
  
    // Getter for name (read-only access)
    getName() {
      return this.#name;
    }
  
    // Setter for name (controlled access)
    setName(newName) {
      if (typeof newName === 'string' && newName.length > 0) {
        this.#name = newName;
      } else {
        console.log('Invalid name!');
      }
    }

    breathe() {
        console.log("I am breathing");
    }
}

class Mammal extends Animal {
  constructor(name, sound, type) {
    super(name, sound);
    this.type = type;
  }
  
  // Explain super on function
  breathe() {
    super.breathe();
    console.log(`${this.type} ${this.getName()} is breathing... 🫁`);
  }
}

let cat = new Mammal("Cat", "Meow", "domestic");

// cat.speak(); 
// cat.breathe();

class Human extends Mammal {
    constructor(name, sound, type) {
        super( name, sound, type);
    }

    think() {
        console.log("Humans think");
    }

    // Law of Demeter
    test() {
        super.breathe();
    }
}

const akshay = new Human("Akshay", "speak", "Mammal");

akshay.test();




// A, B, C, D
/*
    A --> base Class
    B extends A
    C extends A
    D extends A, B --> Not possible in JS




*/