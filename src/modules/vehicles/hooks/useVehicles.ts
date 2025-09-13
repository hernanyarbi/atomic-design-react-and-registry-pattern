import { useEffect, useState } from "react";
import { Vehicle } from "../interfaces/vehicle";
import { vehicleService } from "../services/vehicle.service";

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const getVehicles = async () => {
    const vehiclesResponse = await vehicleService.getAllVehicles();
    setVehicles(vehiclesResponse);
  };

  useEffect(() => {
    if (vehicles.length === 0) {
      getVehicles();
    }
  }, []);

  return { vehicles };
};
