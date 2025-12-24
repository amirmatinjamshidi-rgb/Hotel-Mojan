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
    <div className="flex flex-row shrink-0 align-middle items-center w-4/5 ">
      {items.map((cat) => (
        <div key={cat.id} className="flex flex-col justify-between ">
          <span className="flex flex-row align-middle items-center gap-1">
            <span> {cat.icon} </span>
            <p>{cat.name}</p>
          </span>

          <h1 className="stroke-primary"> {formatFaNumber(cat.number)} </h1>
        </div>
      ))}{" "}
    </div>
  );
}

export default UserStatics;
