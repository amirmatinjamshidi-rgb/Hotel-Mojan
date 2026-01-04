"use client";
import React from "react";
import { formatFaNumber } from "@/Features/utils/formatNumber";
type StaticDetail = {
  id: number;
  name: string;
  icon: React.ReactNode;
  number: number;
};
interface StaticDetailProps {
  items: StaticDetail[];
}
function UserStatics({ items }: StaticDetailProps) {
  return (
    <div className="flex flex-row shrink-0 border px-6 py-4 allBorder rounded-md  align-middle items-center w-full mx-auto max-w-[1016px] justify-between max-h-[100px] ">
      {items.map((cat) => (
        <div
          key={cat.id}
          className="flex flex-col justify-between items-center "
        >
          <span className="flex flex-row align-middle items-center gap-2">
            <span className="text-secondary"> {cat.icon} </span>
            <p className="text-textSecondary">{cat.name}</p>
          </span>

          <h1 className="text-primary flex items-center text-xl font-semibold">
            {" "}
            {formatFaNumber(cat.number)}{" "}
          </h1>
        </div>
      ))}
    </div>
  );
}

export default UserStatics;
