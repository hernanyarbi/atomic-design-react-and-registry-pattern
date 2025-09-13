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
  condition: VehicleCondition;
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


export type VehicleCondition =
  | CarCondition
  | TruckCondition
  | BusCondition
  | MotorbikeCondition;

interface CarCondition {
  kind: 'car';
  mileage: number;
  fuelType: 'gasoline' | 'diesel' | 'electric';
  doors: number;
}

interface TruckCondition {
  kind: 'truck';
  loadCapacityKg: number;
  trailerAttached: boolean;
}

interface BusCondition {
  kind: 'bus';
  routeName: string;
  seats: number;
}

interface MotorbikeCondition {
  kind: 'motorbike';
  engineCC: number;
  helmetRequired: boolean;
}