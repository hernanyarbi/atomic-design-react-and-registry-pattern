import React from "react";
import { useVehicles } from "../../hooks/useVehicles";
import { VehicleItem } from "./VehicleItem";

export const Vehicles = () => {
  const { vehicles } = useVehicles();
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {vehicles.map((vehicle) => (
        <VehicleItem key={vehicle.id} vehicle={vehicle} />
      ))}
    </ul>
  );
};
