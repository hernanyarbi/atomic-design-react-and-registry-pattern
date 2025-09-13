import Image from "next/image"
import { VehicleFlags } from "../../interfaces/vehicle"

interface VehicleImageProps {
  flags: VehicleFlags;
  brand?: string;
  model?: string;
}

export const VehicleImage = ({ flags, brand, model }: VehicleImageProps) => {
  const getVehicleImage = (): string => {
    if (flags.isMotorbike) return "/assets/motorbike.png"
    if (flags.isBus) return "/assets/bus.png"
    if (flags.isTruck) return "/assets/truck.png"
    if (flags.isSportCar) return "/assets/sport-car.png"
    if (flags.isSUV) return "/assets/suv.png"
    if (flags.isCar) return "/assets/car.png"
    
    return "/assets/default-vehicle.png"
  }

  const getAltText = (): string => {
    if (brand && model) return `${brand} ${model}`
    return "Vehicle Image"
  }

  return (
   <div className="bg-[#060B15] rounded-xl ">
     <Image
      src={getVehicleImage()}
      alt={getAltText()}
      width={500}
      height={300}
    />
   </div>
  )
}
