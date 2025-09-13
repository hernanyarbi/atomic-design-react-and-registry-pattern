import React, { FC, PropsWithChildren, ReactNode } from "react";
import { Card } from "./Card";

type ItemListProps = PropsWithChildren & {
  header?: ReactNode;
  footer?: ReactNode;
};

export const ItemList: FC<ItemListProps> = ({ header, footer, children }) => {
  return (
    <Card padding="large" className="w-full">
      <div className="flex flex-col gap-4">
        {header && <div className="font-bold">{header}</div>}
        <div className="flex-1">{children}</div>
        {footer && <div className="font-bold">{footer}</div>}
      </div>
    </Card>
  );
};
