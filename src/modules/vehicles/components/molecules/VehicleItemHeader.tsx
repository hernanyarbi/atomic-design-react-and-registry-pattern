import { Chip } from "@/modules/common/components/atoms/Chip";
import React, { FC } from "react";

type VehicleItemHeaderProps = {
  brand: string;
  model?: string;
  year?: number;
};

export const VehicleItemHeader: FC<VehicleItemHeaderProps> = ({
  brand,
  model,
  year,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <h2 className="text-lg font-bold">{brand}</h2>
      {model && <span className="text-gray-500">{model}</span>}
      {year && <Chip>{year}</Chip>}
    </div>
  );
};
