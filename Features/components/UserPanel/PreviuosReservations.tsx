import React from "react";
import { formatFaNumber } from "@/Features/utils/formatNumber";
type PreviuosReservationItems = {
  id: number;
  head: string;
  tag: string;
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
            <span className=" bg-[#157A6E33] text-[#157A6E] max-w-[91px] max-h-[36px] mx-auto border border-emerald-800 rounded-lg">
              {cat.tag}
            </span>
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
