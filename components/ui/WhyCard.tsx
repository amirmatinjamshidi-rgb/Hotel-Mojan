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
    <div className="flex flex-col gap-4">
      {items.map((item, i) => (
        <div
          key={i}
          className="hover:shadow-md hover:shadow-primaryBorder transition-all ease-out duration-300 border-primaryBorder border rounded-xl w-[648px] h-28 flex items-center gap-4 p-4"
        >
          <div className="bg-secondary rounded-2xl w-9 h-9 flex items-center justify-center">
            {item.icon}
          </div>

          <div>
            <h1 className="font-bold">{item.head}</h1>
            <p className="text-shadow-textSecondary">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default WhyCard;
