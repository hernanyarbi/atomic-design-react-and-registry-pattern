import { Chip } from "@/modules/common/components/atoms/Chip";
import { VehicleSection } from "./VehicleSection";
import { PropsWithVehicle } from "@/modules/vehicles/interfaces/propsWithVehicle";
import { FC } from "react";

export const VehicleElectricSection: FC<PropsWithVehicle> = ({ vehicle }) => {
  return (
    <VehicleSection
      headerSection={
        <h2 className="text-xl font-bold border-b border-gray-700 pb-3">
          Electric Details ⚡
        </h2>
      }
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Battery</span>
          <Chip className="bg-background text-[var(--foreground)]">
            {vehicle?.electricDetails?.batteryCapacityKWh} kWh
          </Chip>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Range</span>
          <Chip className="bg-background text-[var(--foreground)]">
            {vehicle?.electricDetails?.estimatedRangeKm?.toLocaleString()} km
          </Chip>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Charge Level</span>
          <Chip
            className={
              vehicle.electricDetails?.stateOfChargePercent
                ? vehicle.electricDetails.stateOfChargePercent > 80
                  ? "bg-green-600 text-white"
                  : vehicle.electricDetails.stateOfChargePercent > 20
                  ? "bg-yellow-600 text-white"
                  : "bg-red-600 text-white"
                : "bg-gray-600 text-white"
            }
          >
            {vehicle.electricDetails?.stateOfChargePercent ?? "N/A"}
            {vehicle.electricDetails?.stateOfChargePercent ? "%" : ""}
          </Chip>
        </div>
        {vehicle?.electricDetails?.chargingPorts && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Charging</span>
            <div className="flex gap-2">
              {vehicle.electricDetails.chargingPorts.map((port, idx) => (
                <Chip
                  key={idx}
                  className="bg-background text-[var(--foreground)]"
                >
                  {port.type}
                  {port.maxPowerKW && ` (${port.maxPowerKW}kW)`}
                </Chip>
              ))}
            </div>
          </div>
        )}
      </div>
    </VehicleSection>
  );
};
