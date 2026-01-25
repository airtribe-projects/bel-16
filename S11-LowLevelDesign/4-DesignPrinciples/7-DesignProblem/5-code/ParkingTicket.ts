// ParkingTicket.ts
import { Vehicle } from "./Vehicle";
import { ParkingSpot } from "./ParkingSpot";

/**
 * ParkingTicket uses the Builder Pattern.
 *
 * Mandatory:
 *  - ticketId
 *  - vehicle
 *  - parkingSpot
 *  - floorId
 *  - entryTime
 *
 * Optional:
 *  - exitTime
 *  - amountPaid
 *  - isPaid
 *  - monthlyPassId
 */
export class ParkingTicket {
  private readonly ticketId: string;
  private readonly vehicle: Vehicle;
  private readonly parkingSpot: ParkingSpot;
  private readonly floorId: string;
  private readonly entryTime: Date;

  private exitTime?: Date;
  private amountPaid?: number;
  private isPaid: boolean = false;
  private monthlyPassId?: string;

  private constructor(builder: ParkingTicketBuilder) {
    this.ticketId = builder.ticketId;
    this.vehicle = builder.vehicle;
    this.parkingSpot = builder.parkingSpot;
    this.floorId = builder.floorId;
    this.entryTime = builder.entryTime;

    this.exitTime = builder.exitTime;
    this.amountPaid = builder.amountPaid;
    this.isPaid = builder.isPaid;
    this.monthlyPassId = builder.monthlyPassId;
  }

  getTicketId(): string { return this.ticketId; }
  getVehicle(): Vehicle { return this.vehicle; }
  getParkingSpot(): ParkingSpot { return this.parkingSpot; }
  getFloorId(): string { return this.floorId; }
  getEntryTime(): Date { return this.entryTime; }
  getExitTime(): Date | undefined { return this.exitTime; }
  getAmount(): number | undefined { return this.amountPaid; }
  getMonthlyPassId(): string | undefined { return this.monthlyPassId; }
  isTicketPaid(): boolean { return this.isPaid; }


  setExitTime(time: Date): this {
    this.exitTime = time;
    return this;
  }

  setAmount(amount: number): this {
    this.amountPaid = amount;
    return this;
  }

  markPaid(): this {
    this.isPaid = true;
    return this;
  }

  /** ======== BUILDER PATTERN ======== */

  static Builder = class ParkingTicketBuilder {
    ticketId!: string;
    vehicle!: Vehicle;
    parkingSpot!: ParkingSpot;
    floorId!: string;
    entryTime!: Date;

    exitTime?: Date;
    amountPaid?: number;
    isPaid: boolean = false;
    monthlyPassId?: string;

    withTicketId(id: string) {
      this.ticketId = id;
      return this;
    }

    withVehicle(v: Vehicle) {
      this.vehicle = v;
      return this;
    }

    withSpot(spot: ParkingSpot) {
      this.parkingSpot = spot;
      return this;
    }

    withFloorId(floorId: string) {
      this.floorId = floorId;
      return this;
    }

    withEntryTime(time: Date) {
      this.entryTime = time;
      return this;
    }

    withExitTime(time: Date) {
      this.exitTime = time;
      return this;
    }

    withAmount(amount: number) {
      this.amountPaid = amount;
      return this;
    }

    paid() {
      this.isPaid = true;
      return this;
    }

    withMonthlyPass(id: string) {
      this.monthlyPassId = id;
      return this;
    }

    build(): ParkingTicket {
      if (!this.ticketId || !this.vehicle || !this.parkingSpot || !this.floorId || !this.entryTime) {
        throw new Error("Missing mandatory fields for ParkingTicket");
      }
      return new ParkingTicket(this);
    }
  };
}



// Example Usages: 

// At entry:
// const ticket = new ParkingTicket.Builder()
//   .withTicketId(`T-${Date.now()}`)
//   .withVehicle(vehicle)
//   .withSpot(spot)
//   .withFloorId(floor.getFloorId())  
//   .withEntryTime(new Date())
//   .build();

// At exit
// ticket
//   .setExitTime(new Date())
//   .setAmount(100)
//   .markPaid();


// const ticket = new ParkingTicket.Builder()
//   .withTicketId(`T-${Date.now()}`)
//   .withVehicle(vehicle)
//   .withSpot(spot)
//   .withFloorId(floor.getFloorId())
//   .withEntryTime(entryTime)         // earlier stored entry time
//   .withExitTime(new Date())         // exit time filled now
//   .withAmount(150)                  // parking fee calculated by strategy
//   .paid()                           // mark ticket as paid
//   .build();

