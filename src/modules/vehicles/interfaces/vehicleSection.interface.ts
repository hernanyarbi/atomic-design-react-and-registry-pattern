import { FC } from "react";
import { Vehicle } from "./vehicle";
import { PropsWithVehicle } from "./propsWithVehicle";

export interface VehicleSection {
  component: FC<PropsWithVehicle>;
  isVisible: (vehicle: Vehicle) => boolean;
}
