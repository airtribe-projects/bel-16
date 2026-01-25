import { ParkingFloor } from "../ParkingFloor";
import { ParkingSpot } from "../ParkingSpot";
import { Vehicle } from "../Vehicle";
import { SpotAssignmentStrategy } from "./SpotAssignmentStrategy";
import { NearestSpotStrategy } from "./NearestSpotStrategy";

import { VehicleType } from "../Enum";
class EVPriorityStrategy implements SpotAssignmentStrategy {
  
  assignSpot(floors: ParkingFloor[], vehicle: Vehicle): ParkingSpot | null {
    if (vehicle.isEV) {
      for (const floor of floors) {
        const evSpot = floor.findEVSpot();
        if (evSpot) return evSpot;
      }
    }
    return new NearestSpotStrategy().assignSpot(floors, vehicle);
  }
}
