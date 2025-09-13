import React from "react";
import { Vehicle } from "../../interfaces/vehicle";
import { ItemList } from "@/modules/common/components/atoms/ItemList";
import { VehicleItemHeader } from "../molecules/VehicleItemHeader";
import { VehicleImage } from "../atoms/VehicleImage";
import { VehicleItemFooter } from "../molecules/VehicleItemFooter";

type VehiclesViewProps = {
  vehicle: Vehicle;
};
export const VehicleItem = ({ vehicle }: VehiclesViewProps) => {
  return (
    <ItemList
      header={
        <VehicleItemHeader
          brand={vehicle.brand}
          model={vehicle.model}
          year={vehicle.year}
        />
      }
      footer={
        <VehicleItemFooter
          vehicleId={vehicle.id}
          licensePlate={vehicle.licensePlate as string}
        />
      }
    >
      <div>
        <VehicleImage
          flags={vehicle.flags}
          brand={vehicle.brand}
          model={vehicle.model}
        />
      </div>
    </ItemList>
  );
};
