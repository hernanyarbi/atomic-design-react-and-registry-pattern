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
  electricDetails?: ElectricDetails;
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

export interface ElectricDetails {
  // Batería y autonomía
  batteryCapacityKWh?: number; // capacidad nominal
  usableBatteryKWh?: number; // capacidad util (si se conoce)
  stateOfChargePercent?: number; // % batería actual
  estimatedRangeKm?: number; // autonomía estimada actual

  // Carga
  onboardChargerKW?: number; // potencia AC onboard
  maxDCChargeKW?: number; // max power aceptado en DC (fast charge)
  fastChargeSupported?: boolean;

  // Puertos / adaptadores disponibles en el vehículo
  chargingPorts?: ChargingPort[];

  // Salud / otros
  batteryHealthPercent?: number; // % salud batería
  lastFullChargeAt?: string; // ISO timestamp
  supportsV2G?: boolean; // vehicle-to-grid
  thermalManagement?: boolean; // circuito de gestión térmica
}

export interface ChargingPort {
  type: 'Type1' | 'Type2' | 'CCS' | 'CHAdeMO' | 'Tesla' | 'Other';
  maxPowerKW?: number;
  connectorNotes?: string; // p. ej. adaptador requerido
}

export type VehicleCondition =
  | CarCondition
  | TruckCondition
  | BusCondition
  | MotorbikeCondition;

interface CarCondition {
  kind: "car";
  mileage: number;
  fuelType: "gasoline" | "diesel" | "electric";
  doors: number;
}

interface TruckCondition {
  kind: "truck";
  loadCapacityKg: number;
  trailerAttached: boolean;
}

interface BusCondition {
  kind: "bus";
  routeName: string;
  seats: number;
}

interface MotorbikeCondition {
  kind: "motorbike";
  engineCC: number;
  helmetRequired: boolean;
}
