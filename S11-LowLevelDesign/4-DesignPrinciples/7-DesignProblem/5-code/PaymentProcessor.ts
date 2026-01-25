export interface PaymentProcessor {
    processPayment(amount: number): void;
}

// razorPay: 3%, Paytm: 1% 
export class RazorPayGateway implements PaymentProcessor {
  processPayment(amount: number): void {
    console.log(`Deducting amount ${amount / 100}`);
  }
}

export class PaytmGateway {
  executePayment(amountInPaisa: number): void {
    console.log(`Deducting amount ${amountInPaisa / 100}`);
  }
}

export class PaymentAdapter implements PaymentProcessor{
  private newPaymentProcessor: PaytmGateway;

  constructor(newPaymentProcessor: PaytmGateway) {
    this.newPaymentProcessor = newPaymentProcessor;
  }

  processPayment(amount: number): void {
    this.newPaymentProcessor.executePayment(amount * 100);
  }
}



