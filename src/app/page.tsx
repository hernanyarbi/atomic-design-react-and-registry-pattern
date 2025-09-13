import { VehiclesView } from "@/modules/vehicles/views/VehiclesView";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] min-h-screen p-4 sm:p-8 xl:p-16">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <VehiclesView />
      </main>
    </div>
  );
}
