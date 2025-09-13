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
    brand: "Tesla",
    model: "Model S",
    year: 2024,
    seats: 5,
    mileage: 15000,
    licensePlate: "ECO-2024",
  },
  {
    id: "2",
    flags: {
      isElectric: true,
      isSUV: true,
      isCar: true,
    },
    brand: "Volkswagen",
    model: "ID.4",
    year: 2023,
    seats: 5,
    mileage: 25000,
    licensePlate: "ECO-2023",
  },

  // Coches híbridos
  {
    id: "3",
    flags: {
      isHybrid: true,
      isCar: true,
      isSUV: true,
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
    brand: "Zero",
    model: "SR/F",
    year: 2024,
    seats: 1,
    helmetProvided: true,
    licensePlate: "EMTB-24",
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
    brand: "Ford",
    model: "Transit",
    year: 2023,
    cargoCapacityKg: 3500,
    seats: 3,
    licensePlate: "VAN-2023",
  }
];

export const vehicleService = {
  getAllVehicles: async (): Promise<Vehicle[]> => {
    // Simulamos un delay de red
    await new Promise(resolve => setTimeout(resolve, 800));
    return mockVehicles;
  },

  getVehicleById: async (id: string): Promise<Vehicle | undefined> => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockVehicles.find(vehicle => vehicle.id === id);
  },

  getVehiclesByType: async (type: keyof Vehicle['flags']): Promise<Vehicle[]> => {
    await new Promise(resolve => setTimeout(resolve, 600));
    return mockVehicles.filter(vehicle => vehicle.flags[type]);
  }
};