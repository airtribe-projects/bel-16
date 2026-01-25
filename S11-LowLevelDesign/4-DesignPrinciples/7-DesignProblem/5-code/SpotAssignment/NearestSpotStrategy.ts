import { ParkingFloor } from "../ParkingFloor";
import { ParkingSpot } from "../ParkingSpot";
import { Vehicle } from "../Vehicle";
import { SpotAssignmentStrategy } from "./SpotAssignmentStrategy";

export class NearestSpotStrategy implements SpotAssignmentStrategy {
  assignSpot(floors: ParkingFloor[], vehicle: Vehicle): ParkingSpot | null {
    for (const floor of floors) {
      const spot = floor.findNearestAvailable(vehicle.getVehicleType());
      if (spot) return spot;
    }
    return null;
  }
}
