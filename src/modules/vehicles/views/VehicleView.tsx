"use client";
import { Card } from "@/modules/common/components/atoms/Card";
import { Container } from "@/modules/common/components/atoms/Container";
import { FC } from "react";
import { VehicleImage } from "../components/atoms/VehicleImage";
import { useVehicle } from "../hooks/useVehicle";
import { Chip } from "@/modules/common/components/atoms/Chip";

type VehicleViewProps = {
  id: string;
};
export const VehicleView: FC<VehicleViewProps> = ({ id }) => {
  const { vehicle } = useVehicle(id);
  if (!vehicle) return <div>Loading...</div>;
  return (
    <Container className="py-8">
      <div className="flex flex-col gap-6">
        {/* VehicleHeaderSection */}
        <Card className="bg-[var(--secondary)] border-none">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-2">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-4">
              <div>
                <h1 className="text-5xl font-bold mb-2">{vehicle.brand}</h1>
                <div className="flex items-center gap-3">
                  <p className="text-2xl text-gray-400">{vehicle.model}</p>
                  {vehicle.flags.isElectric && (
                    <Chip className="bg-green-600/20 text-green-400">Electric ⚡</Chip>
                  )}
                  {vehicle.flags.isLuxury && (
                    <Chip className="bg-purple-600/20 text-purple-400">Luxury 👑</Chip>
                  )}
                  {vehicle.flags.isSportCar && (
                    <Chip className="bg-red-600/20 text-red-400">Sport 🏎️</Chip>
                  )}
                </div>
              </div>
            </div>
            <VehicleImage
              flags={vehicle.flags}
              width={120}
              height={120}
              className="bg-[var(--background)] rounded-2xl p-4 shadow-lg"
            />
          </div>
        </Card>

        {/* Vehicle Information Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* General Information */}
          <Card variant="outlined" className="flex flex-col gap-4 bg-[var(--secondary)] border-gray-700">
            <h2 className="text-xl font-bold border-b border-gray-700 pb-3">General Information</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Year</span>
                <Chip className="bg-[var(--background)] text-[var(--foreground)]">{vehicle.year}</Chip>
              </div>
              {vehicle.vin && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">VIN</span>
                  <Chip className="bg-[var(--background)] text-[var(--foreground)] font-mono">{vehicle.vin}</Chip>
                </div>
              )}
              {vehicle.licensePlate && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">License Plate</span>
                  <Chip className="bg-[var(--background)] text-[var(--foreground)]">{vehicle.licensePlate}</Chip>
                </div>
              )}
              {vehicle.mileage && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Mileage</span>
                  <Chip className="bg-[var(--background)] text-[var(--foreground)]">{vehicle.mileage.toLocaleString()} km</Chip>
                </div>
              )}
            </div>
          </Card>

          {/* Electric Details */}
          {vehicle.flags.isElectric && vehicle?.electricDetails && (
            <Card variant="outlined" className="flex flex-col gap-4 bg-[var(--secondary)] border-gray-700">
              <h2 className="text-xl font-bold border-b border-gray-700 pb-3">Electric Details ⚡</h2>
              <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Battery</span>
                  <Chip className="bg-[var(--background)] text-[var(--foreground)]">
                    {vehicle.electricDetails.batteryCapacityKWh} kWh
                  </Chip>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Range</span>
                  <Chip className="bg-[var(--background)] text-[var(--foreground)]">
                    {vehicle.electricDetails.estimatedRangeKm?.toLocaleString()} km
                  </Chip>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Charge Level</span>
                  <Chip className={
                    vehicle.electricDetails?.stateOfChargePercent 
                      ? vehicle.electricDetails.stateOfChargePercent > 80
                        ? 'bg-green-600 text-white' 
                        : vehicle.electricDetails.stateOfChargePercent > 20
                          ? 'bg-yellow-600 text-white' 
                          : 'bg-red-600 text-white'
                      : 'bg-gray-600 text-white'
                  }>
                    {vehicle.electricDetails?.stateOfChargePercent ?? 'N/A'}
                    {vehicle.electricDetails?.stateOfChargePercent ? '%' : ''}
                  </Chip>
                </div>
                {vehicle.electricDetails.chargingPorts && (
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Charging</span>
                    <div className="flex gap-2">
                      {vehicle.electricDetails.chargingPorts.map((port, idx) => (
                        <Chip key={idx} className="bg-[var(--background)] text-[var(--foreground)]">
                          {port.type}{port.maxPowerKW && ` (${port.maxPowerKW}kW)`}
                        </Chip>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </Card>
          )}

          {/* Vehicle Condition */}
          <Card variant="outlined" className="flex flex-col gap-4 bg-[var(--secondary)] border-gray-700">
            <h2 className="text-xl font-bold border-b border-gray-700 pb-3">Vehicle Condition</h2>
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Type</span>
                <Chip className="bg-[var(--background)] capitalize">
                  {vehicle.condition.kind}
                </Chip>
              </div>
              {vehicle.condition.kind === "car" && (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Fuel Type</span>
                    <Chip className="bg-[var(--background)] capitalize">
                      {vehicle.condition.fuelType}
                    </Chip>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-400">Doors</span>
                    <Chip className="bg-[var(--background)]">
                      {vehicle.condition.doors}
                    </Chip>
                  </div>
                </>
              )}
              {vehicle.seats && (
                <div className="flex justify-between items-center">
                  <span className="text-gray-400">Seats</span>
                  <Chip className="bg-[var(--background)]">{vehicle.seats}</Chip>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};
