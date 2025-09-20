"use client";
import { Card } from "@/modules/common/components/atoms/Card";
import { Container } from "@/modules/common/components/atoms/Container";
import { FC } from "react";
import { VehicleImage } from "../components/atoms/VehicleImage";
import { useVehicle } from "../hooks/useVehicle";
import { Chip } from "@/modules/common/components/atoms/Chip";
import { VehicleHeaderSection } from "../components/molecules/sections/VehicleHeaderSection";
import { VehicleGeneralInfoSection } from "../components/molecules/sections/VehicleGeneralInfoSection";
import { VehicleConditionSection } from "../components/molecules/sections/VehicleConditionSection";
import { VehicleElectricSection } from "../components/molecules/sections/VehicleElectricSection";

type VehicleViewProps = {
  id: string;
};
export const VehicleView: FC<VehicleViewProps> = ({ id }) => {
  const { vehicle } = useVehicle(id);
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
          <VehicleGeneralInfoSection vehicle={vehicle} />
          {vehicle.flags.isElectric && vehicle?.electricDetails && (
            <VehicleElectricSection vehicle={vehicle}/>
          )}
          <VehicleConditionSection vehicle={vehicle}/>
        </div>
      </div>
    </Container>
  );
};
