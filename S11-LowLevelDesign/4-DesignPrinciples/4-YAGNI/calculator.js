// Requirement: Calculator with a feature of Add and Substract

class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
    
    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }
    
    multiply(a, b) {
        this.result = a * b;
        return this.result;
    }
    
    divide(a, b) {
        if (b === 0) {
        throw new Error("Cannot divide by zero");
        }
        this.result = a / b;
        return this.result;
    }
}


class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(a, b) {
        this.result = a + b;
        return this.result;
    }
    
    subtract(a, b) {
        this.result = a - b;
        return this.result;
    }

}