import { Chip } from "@/modules/common/components/atoms/Chip";
import { VehicleSection } from "./VehicleSection";
import { FC } from "react";
import { PropsWithVehicle } from "@/modules/vehicles/interfaces/propsWithVehicle";

export const VehicleGeneralInfoSection: FC<PropsWithVehicle> = ({
  vehicle,
}) => {
  return (
    <VehicleSection
      headerSection={
        <h2 className="text-xl font-bold border-b border-gray-700 pb-3">
          General Information
        </h2>
      }
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Year</span>
          <Chip className="bg-background text-[var(--foreground)]">
            {vehicle.year}
          </Chip>
        </div>
        {vehicle.vin && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400">VIN</span>
            <Chip className="bg-background text-[var(--foreground)] font-mono">
              {vehicle.vin}
            </Chip>
          </div>
        )}
        {vehicle.licensePlate && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400">License Plate</span>
            <Chip className="bg-background text-[var(--foreground)]">
              {vehicle.licensePlate}
            </Chip>
          </div>
        )}
        {vehicle.mileage && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Mileage</span>
            <Chip className="bg-background text-[var(--foreground)]">
              {vehicle.mileage.toLocaleString()} km
            </Chip>
          </div>
        )}
      </div>
    </VehicleSection>
  );
};
