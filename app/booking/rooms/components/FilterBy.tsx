"use client";

import React, { useState } from "react";
import Button from "@/components/ui/button";
import { CircleX } from "lucide-react";

const filterItems = [
  { id: 1, name: "پیش‌فرض" },
  { id: 2, name: "پیشنهادی" },
  { id: 3, name: "صبحانه" },
  { id: 4, name: "اتاق استاندارد" },
];

function FilterBy() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleClick = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="w-full">
      <h4 className="font-sans mb-3 text-sm font-bold text-primary">
        مرتب سازی:
      </h4>
      <div className="flex flex-wrap gap-2">
        {filterItems.map((cat) => {
          const isActive = selectedId === cat.id;

          return (
            <Button
              key={cat.id}
              radius="md"
              onClick={() => handleClick(cat.id)}
              className={`
    flex items-center gap-2 px-4 py-2 text-sm transition-colors
    border-2 border-solid
    ${
      isActive
        ? "bg-primaryAccent! text-primaryActive! border-primaryActive hover:bg-primaryAccent!"
        : "bg-white text-primary border-gray-200 hover:bg-gray-50 "
    }
  `}
            >
              {cat.name}
              {isActive && <CircleX size={16} />}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export default FilterBy;
