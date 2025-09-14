import Image from "next/image";
import { VehicleFlags } from "../../interfaces/vehicle";
import { FC } from "react";

interface VehicleImageProps {
  flags: VehicleFlags;
  brand?: string;
  model?: string;
  width?: number;
  height?: number;
  className?: string;
}

export const VehicleImage: FC<VehicleImageProps> = ({
  flags,
  brand,
  model,
  width,
  height,
  className,
}) => {
  const getVehicleImage = (): string => {
    if (flags.isMotorbike) return "/assets/motorbike.png";
    if (flags.isBus) return "/assets/bus.png";
    if (flags.isTruck) return "/assets/truck.png";
    if (flags.isSportCar) return "/assets/sport-car.png";
    if (flags.isSUV) return "/assets/suv.png";
    if (flags.isCar) return "/assets/car.png";

    return "/assets/default-vehicle.png";
  };

  const getAltText = (): string => {
    if (brand && model) return `${brand} ${model}`;
    return "Vehicle Image";
  };

  return (
    <Image
      src={getVehicleImage()}
      alt={getAltText()}
      width={width || 500}
      height={height || 300}
      className={`${className}`}
    />
  );
};
