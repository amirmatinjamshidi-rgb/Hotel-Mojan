import { Star } from "lucide-react";

interface RatingStarsProps {
  rating: number;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= rating;
        return (
          <Star
            key={star}
            size={22}
            className={`${isFilled ? "text-yellow-400" : "text-gray-400"} 
              ${star !== 1 ? "hidden sm:block" : ""}`}
            fill={isFilled ? "currentColor" : "none"}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
