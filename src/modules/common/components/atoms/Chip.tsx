import React, { FC, PropsWithChildren } from "react";

export const Chip: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="inline-block bg-[#A8C4EC] rounded-xl px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
      {children}
    </div>
  );
};
