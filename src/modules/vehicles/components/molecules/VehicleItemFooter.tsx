import { Chip } from "@/modules/common/components/atoms/Chip";
import Link from "next/link";
import React from "react";

type VehicleItemFooterProps = {
  vehicleId: string;
  licensePlate: string;
};

export const VehicleItemFooter = ({
  vehicleId,
  licensePlate,
}: VehicleItemFooterProps) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <Chip>{licensePlate}</Chip>
      <Link
        href={`/vehicles/${vehicleId}`}
        className="text-[#0474C4] hover:underline"
      >
        See details
      </Link>
    </div>
  );
};
