import { Card } from "@/modules/common/components/atoms/Card";
import { VehicleImage } from "../../atoms/VehicleImage";
import { VehicleFlags } from "@/modules/vehicles/interfaces/vehicle";
import { FC } from "react";
import { Chip } from "@/modules/common/components/atoms/Chip";

type VehicleHeaderSectionProps = {
  brand: string;
  model: string;
  flags: VehicleFlags;
};

export const VehicleHeaderSection: FC<VehicleHeaderSectionProps> = ({
  brand,
  model,
  flags,
}) => {
  return (
    <Card className="bg-[var(--secondary)] border-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-2">
        <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
          <div>
            <h1 className="text-5xl font-bold mb-2">{brand}</h1>
            <div className="flex items-center gap-3">
              <p className="text-2xl text-gray-400">{model}</p>
              {flags.isElectric && (
                <Chip className="bg-green-600/20 text-green-400">
                  Electric ⚡
                </Chip>
              )}
              {flags.isLuxury && (
                <Chip className="bg-purple-600/20 text-purple-400">
                  Luxury 👑
                </Chip>
              )}
              {flags.isSportCar && (
                <Chip className="bg-red-600/20 text-red-400">Sport 🏎️</Chip>
              )}
            </div>
          </div>
        </div>
        <VehicleImage
          flags={flags}
          width={120}
          height={120}
          className="bg-background rounded-2xl p-4 shadow-lg"
        />
      </div>
    </Card>
  );
};
