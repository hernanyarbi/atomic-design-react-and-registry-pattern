import { FC } from "react";
import { Vehicle } from "./vehicle";

export interface VehicleSection {
  component: FC;
  isVisible: (vehicle: Vehicle) => boolean;
}
