"use client";

type WhyCardsItem = {
  icon: React.ReactNode;
  description: string;
  head: string;
};

interface WhyCardsProps {
  items: WhyCardsItem[];
}

function WhyCard({ items }: WhyCardsProps) {
  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, i) => (
        <div
          key={i}
          className="
            hover:shadow-md hover:shadow-primaryBorder 
            transition-all ease-out duration-300 
            border-primaryBorder border rounded-xl 
            w-full max-w-[648px] 
            min-h-28 h-auto 
            flex items-center gap-4 p-4
          "
        >
          <div className="bg-secondary rounded-2xl w-12 h-12 shrink-0 flex items-center justify-center">
            <div className="scale-75 sm:scale-100">{item.icon}</div>
          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-sm sm:text-base leading-tight mb-1">
              {item.head}
            </h1>
            <p className="text-textSecondary text-xs sm:text-sm leading-relaxed">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyCard;
