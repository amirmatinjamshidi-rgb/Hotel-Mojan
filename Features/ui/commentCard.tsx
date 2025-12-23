"use client";

import Divider from "@mui/material/Divider";
import Image from "next/image";
import RatingStars from "../smallThings/RatingStars";

function CommentCard() {
  const rating = 4;

  return (
    <div
      className="
      w-full max-w-[424px] h-56 rounded-md hover:shadow-md 
      hover:shadow-primaryBorder transition-all duration-300 
       border-primaryBorder flex  border  flex-col p-6 text-white bg-white
    "
    >
      <div className="flex-1 flex items-center justify-center">
        <p className="line-clamp-3 text-black font-medium text-start leading-relaxed">
          “بهترین اقامت عمرم بود! منظره دریا از بالکن اتاق فوق‌العاده بود و
          کارکنان واقعاً رفتار دوستانه‌ای داشتن. قطعاً دوباره برمی‌گردم. زیاد
          پیشنهاد میکنم.”
        </p>
      </div>

      <Divider
        sx={{
          my: 1,
          "&::before": { width: "0%" },
          "&::after": { width: "70%" },
        }}
      />

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-1">
        <div className="flex items-center gap-3 shrink-0">
          <Image
            src="/Dummy.jpg"
            alt="dummy"
            className="rounded-full object-cover"
            width={50}
            height={50}
          />
          <div>
            <h1 className="font-bold text-black">سارا کاظمی</h1>
            <p className="text-textSecondary">تهران</p>
          </div>
        </div>

        <div className="flex items-center gap-2 md:gap-4 shrink-0">
          <RatingStars rating={rating} />
          <span className="text-black font-semibold text-sm sm:text-base">
            4.9
          </span>
        </div>
      </div>
    </div>
  );
}

export default CommentCard;
