import { ParkingTicket } from "./ParkingTicket";
import { PaymentProcessor } from "./PaymentProcessor";

export class ExitPanel {
    private paymentProcessor;
    constructor(paymentProcessor: PaymentProcessor) {
        this.paymentProcessor = paymentProcessor
    }
    // Usecase of strategypattern
    calculateAmount(parkingTicket: ParkingTicket): number {        
        const duration =
        parkingTicket.getExitTime().getTime() - parkingTicket.getEntryTime().getTime();
        const hours = Math.floor(duration / (1000 * 60 * 60));
        return hours * 10; // Assuming $10 per hour
    }

    checkout(parkingTicket: any): any {
        parkingTicket.setExitTime(new Date());
        const amount = this.calculateAmount(parkingTicket);
        parkingTicket.setAmount(amount);
        // Case of 
        this.paymentProcessor.processPayment(amount);
        parkingTicket.setPaid(true);
        return parkingTicket;
    }
}
