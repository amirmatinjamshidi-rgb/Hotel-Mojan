"use client";
import Image from "next/image";
import Button from "@/components/ui/button";

type OffCardItem = {
  image: string;
  discount?: string;
  title: string;
  oldPrice: string;
  price: string;
  buttonText: string;
};

interface OffCardProps {
  item: OffCardItem;
}

const OffCard = ({ item }: OffCardProps) => {
  return (
    <div className="w-full max-w-[311px] h-[400px] border rounded-lg border-primaryBorder flex flex-col relative mx-auto">
      {item.discount && (
        <div className="w-[51px] h-6 bg-primaryAccent rounded-2xl z-10 absolute top-4 right-4 flex justify-center items-center">
          <span className="mt-1.5 text-xs">{item.discount}</span>
        </div>
      )}

      <div className="relative w-full h-[220px]">
        <Image
          src={item.image}
          fill
          alt={item.title}
          className="rounded-t-lg object-cover"
        />
      </div>

      <div className="flex flex-col p-4 grow justify-between">
        <div className="flex flex-row justify-between items-center">
          <span className="text-xl text-textPrimary">{item.title}</span>
          <Button
            className="bg-secondary hover:bg-secondaryHover active:bg-secondaryActive text-textPrimary! w-[84px]! h-10!"
            radius="md"
          >
            {item.buttonText}
          </Button>
        </div>

        <div className="flex flex-row justify-between pt-4 text-[16px]">
          <p className="line-through text-textSecondary">{item.oldPrice}</p>
          <p>
            {item.price} <span className="text-textSecondary">برای هر شب</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OffCard;
