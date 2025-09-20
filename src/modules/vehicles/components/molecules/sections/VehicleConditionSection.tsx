import { PropsWithVehicle } from "@/modules/vehicles/interfaces/propsWithVehicle";
import React, { FC } from "react";
import { VehicleSection } from "./VehicleSection";
import { Chip } from "@/modules/common/components/atoms/Chip";

export const VehicleConditionSection: FC<PropsWithVehicle> = ({ vehicle }) => {
  return (
    <VehicleSection
      headerSection={
        <h2 className="text-xl font-bold border-b border-gray-700 pb-3">
          Vehicle Condition
        </h2>
      }
    >
      <div className="flex flex-col gap-3">
        <div className="flex justify-between items-center">
          <span className="text-gray-400">Type</span>
          <Chip className="bg-background capitalize">
            {vehicle.condition.kind}
          </Chip>
        </div>
        {vehicle.condition.kind === "car" && (
          <>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Fuel Type</span>
              <Chip className="bg-background capitalize">
                {vehicle.condition.fuelType}
              </Chip>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Doors</span>
              <Chip className="bg-background">{vehicle.condition.doors}</Chip>
            </div>
          </>
        )}
        {vehicle.seats && (
          <div className="flex justify-between items-center">
            <span className="text-gray-400">Seats</span>
            <Chip className="bg-background">{vehicle.seats}</Chip>
          </div>
        )}
      </div>
    </VehicleSection>
  );
};
