import Image from "next/image";
import React from "react";
import Dummy from "@/public/Dummy.jpg";

const InfoCard = () => {
  return (
    <div className="w-[984px] h-[158px] border rounded-lg border-primaryBorder hover:shadow-md ">
        <div className="py-4 px-6">
      <div className="w-[935px] h-[126px] border border-amber-400">
        <div >
          <Image
            src={Dummy}
            width={193}
            height={96}
            alt="dummy"
            className="rounded-lg"
          />
        </div> 
      </div>
      </div>
    </div>
  );
};

export default InfoCard;
