"use client";

import Image from "next/image";

type Props = {
  item: {
    icon?: string;
    title: string;
  };
};

export default function FacilitiesDatailComponent({ item }: Props) {
  const iconSrc =
    item.icon && item.icon.trim() !== "" ? item.icon : "/placeholder.png";

  return (
    <div className="  w-[120px] h-[120px] flex flex-col items-center justify-center p-4">
      <Image src={iconSrc} alt={item.title} width={16} height={16} />
      <p className="mt-3 text-lg font-medium text-textPrimary text-center">
        {item.title}
      </p>
    </div>
  );
}
