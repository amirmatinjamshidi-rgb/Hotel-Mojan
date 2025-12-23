"use client";

import { Circle } from "lucide-react";
import FacilitiesDatailComponent from "./FacilitiesDatailComponent";

const serviceItems = [
  { icon: "/DetailComponent.png", title: "وای فای" },
  { icon: "/DetailComponent.png", title: "فضای کار" },
  { icon: "/DetailComponent.png", title: "تلویزیون" },
  { icon: "/DetailComponent.png", title: "گاز" },
  { icon: "/DetailComponent.png", title: "قهوه‌ساز" },
  { icon: "/DetailComponent.png", title: "یخچال" },
  { icon: "/DetailComponent.png", title: "وای فای" },
  { icon: "/DetailComponent.png", title: "فضای کار" },
  { icon: "/DetailComponent.png", title: "تلویزیون" },
  { icon: "/DetailComponent.png", title: "گاز" },
  { icon: "/DetailComponent.png", title: "قهوه‌ساز" },
  { icon: "/DetailComponent.png", title: "یخچال" },
];

export default function FrequantQuestions() {
  return (
    <div className="w-[984px]">
      <div className="flex flex-col gap-7">
        <h1 className="flex items-center gap-2 mr-4 font-light">
          <Circle
            size={15}
            className="bg-secondary rounded-full stroke-secondary"
          />
          امکانات اتاق دو تخته نخل اکونومی
        </h1>

        <div className="p-4 bg-textOnText">
          <div className="flex flex-wrap gap-6 border border-teal-100 rounded-2xl">
            {serviceItems.map((item, index) => (
              <FacilitiesDatailComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
