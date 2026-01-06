import React from "react";
import { formatFaNumber } from "@/Features/utils/formatNumber";
type PreviuosReservationItems = {
  id: number;
  head: string;
  status: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  timeString: any[];
  timeNumber: number;
  icon: React.ReactNode[];
};
interface props {
  items: PreviuosReservationItems[];
}
function PreviuosReservations({ items }: props) {
  return (
    <>
      {items.map((cat) => (
        <div
          key={cat.id}
          className="w-full max-w-[496px] mx-auto grid grid-cols-1 lg:grid-cols-2 md-grid-cols-1 gap-3"
        >
          <h3 className="flex align-middle justify-between px-1">
            {cat.head}
            <div className="w-[1/5] bg-primaryThead p-1 rounded-lg">
              <span>
                {cat.status ? (
                  <span className="text-primary">پرداخت شده</span>
                ) : (
                  <span className="text-error">پرداخت نشده</span>
                )}
              </span>
            </div>
          </h3>
          <span className="flex align-middle justify-between px-1">
            <p className="flex flex-row align-middle gap-1 text-textSecondary">
              {cat.icon}
              {cat.timeString}
            </p>
            <p className="font-semibold">{formatFaNumber(cat.timeNumber)}</p>
          </span>
        </div>
      ))}
    </>
  );
}

export default PreviuosReservations;
