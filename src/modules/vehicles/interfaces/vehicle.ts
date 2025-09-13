export interface Vehicle {
  id: string;
  flags: VehicleFlags;

  brand: string;
  model: string;
  year: number;
  vin?: string;
  licensePlate?: string;

  mileage?: number;
  seats?: number;
  cargoCapacityKg?: number;
  trailer?: boolean;
  helmetProvided?: boolean;
  hasTachograph?: boolean;
}

export type VehicleFlags = {
  isElectric?: boolean;
  isHybrid?: boolean;
  isSUV?: boolean;
  isCar?: boolean;
  isSportCar?: boolean;
  isTruck?: boolean;
  isBus?: boolean;
  isMotorbike?: boolean;
  needsPeriodicInspection?: boolean;
  hasTrailer?: boolean;
  isLuxury?: boolean;
  requiresSpecialLicense?: boolean;
};
