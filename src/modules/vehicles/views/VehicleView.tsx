"use client";
import { Container } from "@/modules/common/components/atoms/Container";
import { FC, useMemo } from "react";
import { useVehicle } from "../hooks/useVehicle";
import { getVisibleVehicleSections } from "../registries/vehicleSection.registry";
import { VehicleHeaderSection } from "../components/molecules/sections/VehicleHeaderSection";

type VehicleViewProps = {
  id: string;
};
export const VehicleView: FC<VehicleViewProps> = ({ id }) => {
  const { vehicle } = useVehicle(id);
  const visibleSections = useMemo(
    () => getVisibleVehicleSections(vehicle),
    [vehicle]
  );
  if (!vehicle) return <div>Loading...</div>;
  return (
    <Container className="py-8">
      <div className="flex flex-col gap-6">
        <VehicleHeaderSection
          brand={vehicle.brand}
          model={vehicle.model}
          flags={vehicle.flags}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleSections.map(({ component: ComponentSection }, index) => (
            <ComponentSection vehicle={vehicle} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};
