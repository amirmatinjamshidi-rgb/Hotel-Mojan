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
    <div className="hover:shadow-md  hover:shadow-primaryBorder transition-all ease-out duration-300 border-primaryBorder bg-textOnText border rounded-xl w-[200px] h-[200px] flex items-center justify-center p-4">
      <div className="flex flex-col items-center justify-center">
        <Image src={iconSrc} alt={item.title} width={41} height={41} />
        <p className="font-medium font-weight: 500 text-lg text-textPrimary mt-3">
          {item.title}
        </p>
      </div>
    </div>
  );
}

export default BenefitCard;
