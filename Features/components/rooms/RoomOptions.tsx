"use client";

import Image from "next/image";
import { useState } from "react";
import { ExpandMore, ExpandLess } from "@mui/icons-material";

const INITIAL_LIMIT = 6;

const OptionsButton = [
  { id: 1, name: "وای فای", icon: "/wifi.png" },
  { id: 2, name: "فضای کار", icon: "/DetailComponent.png" },
  { id: 3, name: "تلویزیون", icon: "/options/TV.png" },
  { id: 4, name: "یخچال", icon: "/options/laundry.png" },
  { id: 5, name: "گاز", icon: "/options/gas.png" },
  { id: 6, name: "قهوه‌ساز", icon: "/options/coffe.png" },
  { id: 7, name: "توالت فرنگی", icon: "/options/Toilet.png" },
  { id: 8, name: "حمام", icon: "/options/bath.png" },
  { id: 9, name: "لباسشویی", icon: "/options/laundry.png" },
  { id: 10, name: "روم سرویس", icon: "/options/RoomService.png" },
  { id: 11, name: "تهویه", icon: "/options/Tahvie.png" },
  { id: 12, name: "سرو غذا در اتاق", icon: "/options/serve.png" },
];

export default function RoomOptions() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [expanded, setExpanded] = useState(false);

  const handleClick = (id: number) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

  const visibleItems = expanded
    ? OptionsButton
    : OptionsButton.slice(0, INITIAL_LIMIT);

  return (
    <div className="w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {visibleItems.map((cat) => {
          const isActive = selectedId === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => handleClick(cat.id)}
              className={`
                flex flex-col items-center justify-center
                gap-2 py-2 px-3 rounded-lg border text-sm cursor-pointer
                transition-colors
                ${
                  isActive
                    ? "bg-primaryAccent! text-primaryActive! border-primaryActive hover:bg-primaryAccent!"
                    : "bg-white text-primary border-gray-200 hover:bg-gray-50"
                }
              `}
            >
              <Image src={cat.icon} alt={cat.name} width={20} height={20} />
              <span>{cat.name}</span>
            </div>
          );
        })}
      </div>

      <button
        onClick={() => setExpanded((p) => !p)}
        className="flex items-center justify-center gap-1 w-full mt-3 text-blue-500"
      >
        {expanded ? (
          <>
            <ExpandLess fontSize="small" />
            مشاهده کمتر
          </>
        ) : (
          <>
            <ExpandMore fontSize="small" />
            نمایش بیشتر
          </>
        )}
      </button>
    </div>
  );
}
