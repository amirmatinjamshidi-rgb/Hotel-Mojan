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
    <div className="w-full max-w-[1094px] mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="flex items-center gap-2 font-light">
          <Circle
            size={15}
            className="bg-secondary rounded-full stroke-secondary"
          />
          امکانات اتاق دو تخته نخل اکونومی
        </h1>

        <div className="p-4 bg-textOnText border border-teal-100 rounded-2xl">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {serviceItems.map((item, index) => (
              <FacilitiesDatailComponent key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
