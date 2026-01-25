// EntryPanel.ts
import { ParkingFloor } from "./ParkingFloor";
import { Vehicle } from "./Vehicle";
import { ParkingTicket } from "./ParkingTicket";
import { ParkingSpot } from "./ParkingSpot";
import { ParkingSpotSize } from "./Enum";
import { VehicleType } from "./Enum";

/**
 * EntryPanel: picks the first floor with an available spot (simple algorithm),
 * assigns a spot and returns a ParkingTicket. This mirrors your "no fancy algorithm" requirement.
 */
export class EntryPanel {
  
  private getAvialableSpot(parkingFloors: ParkingFloor[], spotSize: ParkingSpotSize): ParkingSpot | null {
    for (const floor of parkingFloors) {
      if (!floor.getMaintenenceStatus()) {
        return floor.getAvailableSpotForVehicle(spotSize);
      }
    }
    return null;
  }

  getSpotToParkOn (parkingFloors: ParkingFloor[], vehicleType: VehicleType): ParkingSpot | null {
    const spotType = this.generateSpotSizeBasedOnVehicleType(vehicleType);
    return this.getAvialableSpot(parkingFloors, spotType);
  }

  generateParkingTicket(vehicle: Vehicle, parkingSpot: ParkingSpot): ParkingTicket {
    
    const ticketId: string = `${vehicle.getVehicleId()}-${Date.now()}`;

    if (!parkingSpot) {
      throw new Error("No available spot on selected floor");
    }

    const parked = parkingSpot.parkVehicle(vehicle);
    if (!parked) {
      throw new Error("Failed to park on selected spot");
    }

    // OOPS Telescoping of Constructor
    // constructor (TicketId)
    // constructor (TicketId, vehicle)
    // constructor (TicketId, vehicle, parkingSpot)
    // constructor (TicketId, vehicle ParkingSpot, entryTime)
    //2.  Case of builder pattern
    /* 
    const ticket = new ParkingTicket(ticketId, vehicle, parkingSpot, new Date());
    // Start and end time provided upfront
    const ticket = new ParkingTicket(ticketId, vehicle, parkingSpot, new Date(), new Date());
    // Amount paid at the start
    const ticket = new ParkingTicket(ticketId, vehicle, parkingSpot, true);

    const ticket = new ParkingTicket.Builder()
                      .withTicketId(`T-${Date.now()}`)
                      .withVehicle(vehicle)
                      .withSpot(spot)
                      .withFloorId(floor.getFloorId())  
                      .withEntryTime(new Date())
                      .build();

    */

                      
    const ticket = new ParkingTicket(ticketId, vehicle, parkingSpot, new Date());
    return ticket;
  }

  private generateSpotSizeBasedOnVehicleType(vehicleType: VehicleType): ParkingSpotSize {
    switch (vehicleType) {
      case VehicleType.MOTORCYCLE:
      case VehicleType.BICYCLE:
        return ParkingSpotSize.SMALL;
      case VehicleType.BUS:
      case VehicleType.TRUCK:
        return ParkingSpotSize.BIG;
      case VehicleType.CAR:
      default:
        return ParkingSpotSize.COMPACT;
    }
  }
}
