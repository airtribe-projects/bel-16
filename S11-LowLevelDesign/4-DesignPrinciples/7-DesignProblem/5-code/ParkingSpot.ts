// ParkingSpot.ts
import { ParkingSpotSize } from "./Enum";
import { Vehicle } from "./Vehicle";

export class ParkingSpot {
  private occupied: boolean = false;
  private isUnderMaintainence: boolean = false;
  private parkedVehicle: Vehicle | null = null;

  constructor(public readonly spotId: string, public readonly spotSize: ParkingSpotSize) {
    this.spotId = spotId;
    this.spotSize = spotSize;   
  }

  isOccupied(): boolean {
    return this.occupied;
  }

  putUnderMaintainence(): boolean {
    return this.isUnderMaintainence = true;
  }

  removeFromMaintainence(): boolean {
    return this.isUnderMaintainence = false;
  }

  getMaintenenceStatus(): boolean {
    return this.isUnderMaintainence;
  }

  parkVehicle(vehicle: Vehicle): boolean {
    if (this.occupied) {
      console.log("Parking spot is already occupied.");
      return false;
    }
    this.parkedVehicle = vehicle;
    this.occupied = true;
    console.log(`Vehicle ${vehicle.getVehicleId()} parked in ${this.spotId}`);
    return true;
  }

  removeVehicle(): boolean {
    if (!this.occupied) {
      console.log("Parking spot is already empty.");
      return false;
    }
    console.log(`Vehicle ${this.parkedVehicle!.getVehicleId()} removed from ${this.spotId}`);
    this.parkedVehicle = null;
    this.occupied = false;
    return true;
  }

  getSpotId(): string {
    return this.spotId;
  }

  getSpotSize(): ParkingSpotSize {
    return this.spotSize;
  }

  getVehicle(): Vehicle | null {
    return this.parkedVehicle;
  }
}
