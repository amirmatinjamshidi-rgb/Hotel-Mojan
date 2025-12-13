import { Calendar, ConciergeBell, HeartPlus, PaintBucket } from "lucide-react";

const cardInfo = [
  {
    id: 1,
    icon: <Calendar className="stroke-secondary" />,
    description: "افتتاح هتل در سال ۱۴۰۰",
  },
  {
    id: 2,
    icon: <ConciergeBell className="stroke-secondary" />,
    description: "اضافه شدن رستوران اصلی",
  },
  {
    id: 3,
    icon: <HeartPlus className="stroke-secondary" />,
    description: "ساخت مجموعه اسپا و تندرستی",
  },
  {
    id: 4,
    icon: <PaintBucket className="stroke-secondary" />,
    description: "نوسازی لابی و فضاهای عمومی",
  },
];

const IntroCard = () => {
  return (
    <div className="w-[536px] h-[195px] grid-cols-2 grid">
      {cardInfo.map((card) => {
        return (
          <div
            key={card.id}
            className="w-[264px] h-[93px] flex flex-col justify-center items-center gap-2 bg-white  rounded-lg border border-primaryBorder shadow hover:shadow-md">
            <div>{card.icon}</div>
            <div>{card.description}</div>
          </div>
        );
      })}
    </div>
  );
};

export default IntroCard;
