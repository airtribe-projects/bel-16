import { ParkingSpot } from "./ParkingSpot";
import { ParkingSpotSize } from "./Enum";

export class ParkingFloor {
  private spots: ParkingSpot[] = [];
  private readonly floorId: string;

  constructor(floorId: string) {
    this.floorId = floorId;
  }

  addSpot(spot: ParkingSpot): void {
    this.spots.push(spot);
  }

  getAvailableSpotForVehicle(spotSize: ParkingSpotSize): ParkingSpot | null {
    for (const spot of this.spots) {
        if (spot.getSpotSize() === spotSize && !(spot.isOccupied() || spot.getMaintenenceStatus())) {
          return spot;
        }
      }
      return null;
  }

  
  isFull(): boolean {
    return this.spots.length > 0 && this.spots.every((s) => s.isOccupied());
  }

  getFloorId(): string {
    return this.floorId;
  }

  getAllSpots(): ParkingSpot[] {
    return this.spots.slice();
  }
}
