import { Vehicle } from "../interfaces/vehicle";

const mockVehicles: Vehicle[] = [
  // Coches eléctricos
  {
    id: "1",
    flags: {
      isElectric: true,
      isCar: true,
      isLuxury: true,
    },
    condition: {
      kind: "car",
      mileage: 15000,
      fuelType: "electric",
      doors: 4,
    },
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    seats: 5,
    mileage: 15000,
    licensePlate: "ECO-2024",
    electricDetails: {
      batteryCapacityKWh: 100,
      usableBatteryKWh: 95,
      stateOfChargePercent: 85,
      estimatedRangeKm: 560,
      onboardChargerKW: 11.5,
      maxDCChargeKW: 250,
      fastChargeSupported: true,
      chargingPorts: [
        { type: 'Tesla', maxPowerKW: 250 },
        { type: 'CCS', maxPowerKW: 250, connectorNotes: 'With included adapter' }
      ],
      batteryHealthPercent: 98,
      thermalManagement: true,
      supportsV2G: true
    }
  },
  {
    id: "2",
    flags: {
      isElectric: true,
      isSUV: true,
      isCar: true,
    },
    condition: {
      kind: "car",
      mileage: 25000,
      fuelType: "electric",
      doors: 5,
    },
    brand: "Volkswagen",
    model: "ID.4",
    year: 2023,
    seats: 5,
    mileage: 25000,
    licensePlate: "ECO-2023",
    electricDetails: {
      batteryCapacityKWh: 82,
      usableBatteryKWh: 77,
      stateOfChargePercent: 70,
      estimatedRangeKm: 420,
      onboardChargerKW: 11,
      maxDCChargeKW: 135,
      fastChargeSupported: true,
      chargingPorts: [
        { type: 'Type2', maxPowerKW: 11 },
        { type: 'CCS', maxPowerKW: 135 }
      ],
      batteryHealthPercent: 96,
      thermalManagement: true,
      supportsV2G: false
    }
  },

  // Coches híbridos
  {
    id: "3",
    flags: {
      isHybrid: true,
      isCar: true,
      isSUV: true,
    },
    condition: {
      kind: "car",
      mileage: 30000,
      fuelType: "gasoline", // Híbrido gasolina
      doors: 5,
    },
    brand: "Toyota",
    model: "RAV4 Hybrid",
    year: 2024,
    seats: 5,
    mileage: 30000,
    licensePlate: "HYB-2024",
  },

  // Coches deportivos
  {
    id: "4",
    flags: {
      isCar: true,
      isSportCar: true,
      isLuxury: true,
    },
    condition: {
      kind: "car",
      mileage: 5000,
      fuelType: "gasoline",
      doors: 2,
    },
    brand: "Porsche",
    model: "911",
    year: 2024,
    seats: 2,
    mileage: 5000,
    licensePlate: "SPT-911",
  },

  // Motos
  {
    id: "5",
    flags: {
      isMotorbike: true,
      requiresSpecialLicense: true,
    },
    condition: {
      kind: "motorbike",
      engineCC: 1750,
      helmetRequired: true,
    },
    brand: "Harley-Davidson",
    model: "Street Glide",
    year: 2024,
    seats: 2,
    helmetProvided: true,
    licensePlate: "MTB-2024",
  },
  {
    id: "6",
    flags: {
      isMotorbike: true,
      isElectric: true,
    },
    condition: {
      kind: "motorbike",
      engineCC: 0, // Moto eléctrica
      helmetRequired: true,
    },
    brand: "Zero",
    model: "SR/F",
    year: 2024,
    seats: 1,
    helmetProvided: true,
    licensePlate: "EMTB-24",
    electricDetails: {
      batteryCapacityKWh: 14.4,
      usableBatteryKWh: 12.6,
      stateOfChargePercent: 90,
      estimatedRangeKm: 180,
      onboardChargerKW: 3.3,
      maxDCChargeKW: undefined,
      fastChargeSupported: false,
      chargingPorts: [
        { type: 'Type2', maxPowerKW: 3.3 }
      ],
      batteryHealthPercent: 99,
      thermalManagement: true,
      supportsV2G: false
    }
  },

  // Camiones
  {
    id: "7",
    flags: {
      isTruck: true,
      requiresSpecialLicense: true,
      needsPeriodicInspection: true,
      hasTrailer: true,
    },
    condition: {
      kind: "truck",
      loadCapacityKg: 25000,
      trailerAttached: true,
    },
    brand: "Volvo",
    model: "FH16",
    year: 2023,
    cargoCapacityKg: 25000,
    trailer: true,
    hasTachograph: true,
    licensePlate: "TRK-2023",
  },

  // Autobuses
  {
    id: "8",
    flags: {
      isBus: true,
      requiresSpecialLicense: true,
      needsPeriodicInspection: true,
    },
    condition: {
      kind: "bus",
      routeName: "Ciudad-Aeropuerto",
      seats: 55,
    },
    brand: "Mercedes-Benz",
    model: "Tourismo",
    year: 2023,
    seats: 55,
    hasTachograph: true,
    licensePlate: "BUS-2023",
  },

  // SUV de lujo
  {
    id: "9",
    flags: {
      isSUV: true,
      isCar: true,
      isLuxury: true,
    },
    condition: {
      kind: "car",
      mileage: 10000,
      fuelType: "diesel",
      doors: 5,
    },
    brand: "Range Rover",
    model: "Autobiography",
    year: 2024,
    seats: 5,
    mileage: 10000,
    licensePlate: "LUX-2024",
  },

  // Furgoneta
  {
    id: "10",
    flags: {
      isTruck: true,
      hasTrailer: false,
      needsPeriodicInspection: true,
    },
    condition: {
      kind: "truck",
      loadCapacityKg: 3500,
      trailerAttached: false,
    },
    brand: "Ford",
    model: "Transit",
    year: 2023,
    cargoCapacityKg: 3500,
    seats: 3,
    licensePlate: "VAN-2023",
  },
];

export const vehicleService = {
  getAllVehicles: async (): Promise<Vehicle[]> => {
    // Simulamos un delay de red
    await new Promise((resolve) => setTimeout(resolve, 800));
    return mockVehicles;
  },

  getVehicleById: async (id: string): Promise<Vehicle | undefined> => {
    await new Promise((resolve) => setTimeout(resolve, 400));
    return mockVehicles.find((vehicle) => vehicle.id === id);
  },

  getVehiclesByType: async (
    type: keyof Vehicle["flags"]
  ): Promise<Vehicle[]> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return mockVehicles.filter((vehicle) => vehicle.flags[type]);
  },

  // Nuevo método para filtrar por tipo de condición
  getVehiclesByConditionKind: async (
    kind: "car" | "truck" | "bus" | "motorbike"
  ): Promise<Vehicle[]> => {
    await new Promise((resolve) => setTimeout(resolve, 600));
    return mockVehicles.filter((vehicle) => vehicle.condition.kind === kind);
  },
};
