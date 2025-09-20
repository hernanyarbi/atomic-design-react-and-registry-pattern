import { Card } from "@/modules/common/components/atoms/Card";
import { FC, PropsWithChildren, ReactNode } from "react";

type VehicleSectionProps = PropsWithChildren & {
  headerSection: ReactNode;
};

export const VehicleSection: FC<VehicleSectionProps> = ({
  headerSection,
  children,
}) => {
  return (
    <Card
      variant="outlined"
      className="flex flex-col gap-4 bg-[var(--secondary)] border-gray-700"
    >
      <div>{headerSection}</div>
      <div>{children}</div>
    </Card>
  );
};
