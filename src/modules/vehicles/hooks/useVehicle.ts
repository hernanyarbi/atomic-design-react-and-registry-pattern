import { useEffect, useState } from "react";
import { Vehicle } from "../interfaces/vehicle";
import { vehicleService } from "../services/vehicle.service";

export const useVehicle = (vehicleId: string) => {
  const [vehicle, setVehicle] = useState<Vehicle>();

  const getVehicle = async (id: string) => {
    const vehicleResponse = await vehicleService.getVehicleById(id);
    if (!vehicleResponse) return; //redirect with next/navigation
    setVehicle(vehicleResponse);
  }

  useEffect(() => {
    if (!vehicle && vehicleId) {
      getVehicle(vehicleId);
    }
  }, [vehicleId]);

  return { vehicle }
}
