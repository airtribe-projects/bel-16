// ParkingLot.ts
import { ParkingFloor } from "./ParkingFloor";
import { EntryPanel } from "./EntryPanel";
import { ExitPanel } from "./ExitPanel";
import { Vehicle } from "./Vehicle";
import { ParkingTicket } from "./ParkingTicket";
import { ParkingSpot } from "./ParkingSpot";
import { SpotAssignmentStrategy } from "./SpotAssignment/SpotAssignmentStrategy";

export class ParkingLot {
  private parkingFloors: ParkingFloor[] = [];

  constructor(
    private readonly parkingLotId: string,
    private readonly parkingLotName: string,
    private readonly address: string,
    private readonly totalFloors: number,
    private readonly entryPanel: EntryPanel,
    private readonly exitPanel: ExitPanel,
    private spotAssignmentStrateby: SpotAssignmentStrategy
  ) {}

  isFull(): boolean {
    return this.parkingFloors.every(floor => floor.isFull());
  }

  addParkingFloor(parkingFloor: ParkingFloor): void {
    this.parkingFloors.push(parkingFloor);
  }

  // OCP 
  parkVehicle(vehicle: Vehicle): ParkingTicket {
    // const spot = this.entryPanel.getSpotToParkOn(this.parkingFloors, vehicle.getVehicleType());
    const spot = this.spotAssignmentStrateby.assignSpot(this.parkingFloors, vehicle);
    
    const ticket = this.entryPanel.generateParkingTicket(vehicle, spot);
    
    console.log( `Vehicle ${vehicle.getVehicleId()} is parked with ticketId ${ticket.getTicketId()}`);
    return ticket;
  }

  exitVehicle(ticket: ParkingTicket): void {
    const updatedTicket = this.exitPanel.checkout(ticket);
    console.log(
      `Vehicle exited with ticketId ${updatedTicket.getTicketId()} amount ${updatedTicket.getAmount()}`
    );

    const parkedSpot:ParkingSpot = ticket.getParkingSpot();
    parkedSpot.removeVehicle();
  }
}
