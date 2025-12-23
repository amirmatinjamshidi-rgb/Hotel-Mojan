import React from "react";
import Image from "next/image";

type BenefitCardItem = {
  icon?: string;
  title: string;
};

interface BenefitCardProps {
  item: BenefitCardItem;
}

function BenefitCard({ item }: BenefitCardProps) {
  const iconSrc =
    item.icon && item.icon.trim() !== "" ? item.icon : "/placeholder.png";

  return (
    <div
      className="
      border border-primaryBorder
      bg-textOnText
      rounded-xl
      flex flex-col items-center justify-center
      p-2S
      aspect-square
      hover:shadow-md hover:shadow-primaryBorder
      transition-all duration-300
    "
    >
      <Image src={iconSrc} alt={item.title} width={40} height={40} />
      <p className="mt-3 text-sm sm:text-base font-medium text-textPrimary text-center">
        {item.title}
      </p>
    </div>
  );
}

export default BenefitCard;
