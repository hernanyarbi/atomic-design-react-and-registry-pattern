import { VehicleConditionSection } from "../components/molecules/sections/VehicleConditionSection";
import { VehicleElectricSection } from "../components/molecules/sections/VehicleElectricSection";
import { VehicleGeneralInfoSection } from "../components/molecules/sections/VehicleGeneralInfoSection";
import { Vehicle } from "../interfaces/vehicle";
import { VehicleSection } from "../interfaces/vehicleSection.interface";

const VehicleSectionRegistry: VehicleSection[] = [
  {
    component: VehicleGeneralInfoSection,
    isVisible: () => true,
  },
  {
    component: VehicleElectricSection,
    isVisible: (vehicle: Vehicle) => !!(vehicle.flags.isElectric && vehicle?.electricDetails),
  },
  {
    component: VehicleConditionSection,
    isVisible: () => true,
  },
];

export const getVisibleVehicleSections = (vehicle?: Vehicle): VehicleSection[] => {
  if (!vehicle) return [];
  return VehicleSectionRegistry.filter((section) => section.isVisible(vehicle));
}