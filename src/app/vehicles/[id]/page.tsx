import { VehicleView } from "@/modules/vehicles/views/VehicleView";
import React from "react";

const VehiclePage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return <VehicleView id={id} />;
};

export default VehiclePage;
