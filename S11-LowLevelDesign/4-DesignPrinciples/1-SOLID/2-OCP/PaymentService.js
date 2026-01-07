class PaymentService {
    processPayment(paymentType, amount) {
        // Logic to process payment
        if (paymentType == "creditcard") {
            // Logic to process credit card payment
            console.log("Processing credit card payment of amount:", amount);
        } else if (paymentType == "debitcard") {
            // Logic to process debit card payment
            console.log("Processing debit card payment of amount:", amount);
        } else {
            console.log("Invalid Payment Type. Unable to process payment");
        }
    }
}


// Main Code // Violates OCP
// PM --> SRP, OCP? Adding new payment type warrants modifying the code
const ps = new PaymentService();
ps.processPayment("creditcard", 100);


class PaymentMethod {
    processPayment(amount) {
        throw new Error("processPayment method should be implemented");
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

// Has-A (Weak) ==> Aggregation
class PaymentService {
    constructor(paymentMethod) {
        this.paymentMethod = paymentMethod;
    }

    deductAmount(amount) {
        this.paymentMethod.processPayment(amount);
    }
}

const creditCardPayment = new CreditCardPayment();
const bitcoinPayment = new BitcoinPayment();
const debitCardPayment = new DebitCardPayment();

const paymentService = new PaymentService(creditCardPayment);
paymentService.deductAmount(1000);



