import React, { FC } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: React.ReactNode;
  className?: string;
}

export const Chip: FC<ChipProps> = ({ children, className }) => {
  return (
    <div 
      className={cn(
        "inline-block bg-[#A8C4EC] rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2",
        className
      )}
    >
      {children}
    </div>
  );
};
