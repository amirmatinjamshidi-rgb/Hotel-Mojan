import React from "react";
import Button from "@/Features/ui/button";
import Image from "next/image";

interface EmptyItemsPanelProps {
  image: string;
  message: string;
  buttonPlaceholder: string;
}

function EmptyItemsPanel({
  image,
  message,
  buttonPlaceholder,
}: EmptyItemsPanelProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-12 text-center w-full max-w-[320px] mx-auto">
      <Image
        src={image}
        alt={message}
        width={120}
        height={120}
        className="object-contain"
      />
      <h3 className="text-xl font-medium text-gray-700">{message}</h3>
      <Button color="orange1" radius="none" size="medium">
        {buttonPlaceholder}
      </Button>
    </div>
  );
}

export default EmptyItemsPanel;

// {items.length === 0 ? (
//   <EmptyItemsPanel
//     image="/images/empty-cart.png"
//     message="سبد خرید شما خالی است"
//     buttonPlaceholder="شروع خرید"
//   />
// ) : (
//   <div className="">
//
//   </div>
// )}
