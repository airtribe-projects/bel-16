import { VehicleType, VehiclePass } from "./Enum";
export class Vehicle {
  constructor(
    private readonly registrationNumber: string,  
    private readonly vehicleType: VehicleType,
    private pass: VehiclePass = VehiclePass.NONE
  ) {}

  getVehicleId(): string { return this.registrationNumber; }
  getVehicleType(): VehicleType { return this.vehicleType; }
  getRegistrationNumber(): string { return this.registrationNumber; }
}
