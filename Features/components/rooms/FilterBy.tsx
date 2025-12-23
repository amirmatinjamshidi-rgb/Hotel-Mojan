"use client";

import React, { useState } from "react";
import Button from "@/Features/ui/button";
import { CircleX } from "lucide-react";

const filterItems = [
  { id: 1, name: "پیش فرض" },
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
    <div>
      <h4 className="font-sans mb-2">مرتب سازی:</h4>
      <div className="flex gap-2 flex-wrap">
        {filterItems.map((cat) => (
          <Button
            key={cat.id}
            radius="md"
            border={selectedId === cat.id ? "blue" : "gray"}
            className={`flex items-center gap-2 hover:bg-white focus:bg-cyan-200 ${
              selectedId === cat.id
                ? "bg-cyan-200 text-primaryActive"
                : "bg-white text-primary"
            }`}
            onClick={() => handleClick(cat.id)}
          >
            {cat.name}
            {selectedId === cat.id && <CircleX size={16} />}
          </Button>
        ))}
      </div>
    </div>
  );
}

export default FilterBy;
