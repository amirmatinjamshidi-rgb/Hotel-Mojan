import Image from "next/image";
import Button from "@/components/ui/button";
import { Hamburger, Star, Users } from "lucide-react";

type NormalCardItem = {
  image: string;
  tag?: string;
  title: string;
  beds: string;
  breakfast?: boolean;
  rating: number;
  price: string;
  buttonText: string;
};

interface NormalCardProps {
  item: NormalCardItem;
}

const NormalCard = ({ item }: NormalCardProps) => {
  return (
    <div className="w-[424px] h-[500px] border rounded-lg border-primaryBorder flex flex-col relative">
      <div className="min-w-[424px] h-[321px] relative">
        {item.tag && (
          <div className="w-[97px] h-[34px] bg-primaryAccent rounded-2xl z-10 absolute mt-4 mr-4 flex justify-center items-center">
            <span>{item.tag}</span>
          </div>
        )}

        <Image
          src={item.image}
          width={422}
          height={321}
          alt={item.title}
          className="rounded-t-lg object-cover"
        />
      </div>

      <div className="p-6">
        <span className="text-[22px] text-textPrimary">{item.title}</span>

        <div className="flex justify-between pt-4">
          <div className="flex gap-1">
            <Users className="stroke-textSecondary" />
            <span className="text-textSecondary">{item.beds}</span>
          </div>

          <div className="h-4 w-0.5 bg-textSecondary"></div>

          <div className="flex gap-1">
            <Hamburger className="stroke-textSecondary" />
            <span className="text-textSecondary">
              {item.breakfast ? "صبحانه دارد" : "بدون صبحانه"}
            </span>
          </div>

          <div className="h-4 w-0.5 bg-textSecondary"></div>

          <div className="flex gap-1">
            <Star className="fill-secondary stroke-secondary" />
            <span className="text-textSecondary">{item.rating}</span>
          </div>
        </div>

        <div className="flex justify-between p-6">
          <p>
            {item.price} <span>برای هر شب</span>
          </p>

          <Button
            className="bg-secondary hover:bg-secondaryHover active:bg-secondaryActive text-textPrimary w-[84px] h-12"
            radius="md"
          >
            {item.buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NormalCard;
