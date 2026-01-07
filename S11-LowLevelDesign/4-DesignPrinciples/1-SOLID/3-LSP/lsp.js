class PaymentMethod {
    processPayment(amount) {
        console.log("Processing default payment of amount:", amount);
    }
}

class CreditCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process credit card payment
        console.log("Processing credit card payment of amount:", amount);
    }
}

class DebitCardPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process debit card payment
        console.log("Processing debit card payment of amount:", amount);
    }
}

class BitcoinPayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process bitcoin payment
        console.log("Processing bitcoin payment of amount:", amount);
    }
}

class FreePayment extends PaymentMethod {
    processPayment(amount) {
        // Logic to process debit card payment
        throw new Error("Free payment doens't need to process payment");
    }
}


// Has-A (Weak) ==> Aggregation
class PaymentService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount) {
        this.paymentMethod.processPayment(amount);
    }
}


// PM --> Add Free payment
// Main
const creditCardPayment = new CreditCardPayment();
const bitcoinPayment = new BitcoinPayment();
const debitCardPayment = new DebitCardPayment();
const FreePayment = new FreePayment();

// Use case 1
const paymentService = new PaymentService(creditCardPayment);
paymentService.deductAmount(1000);


// Usecase 2
const ps = new PaymentService(FreePayment);
ps.deductAmount(0);
