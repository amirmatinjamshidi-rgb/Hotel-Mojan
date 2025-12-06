import Image from "next/image";
import React from "react";
import Dummy from "@/public/Dummy.jpg";
import Button from "@/components/ui/button";

const OffCard = () => {
  return (
    <div className="w-[424px] h-[500px] border rounded-lg border-[#D8E3E780] flex flex-col">
      <div className="w-[424px] h-[321px]">
        <Image src={Dummy} width={424} height={321} alt="dummy" />
      </div>
      <div>
        <div>
          <span>اتاق دونفره استاندارد</span>
        </div>
        <div></div>
        <div>
          <div>
            <span>۲٬۸۰۰٬۰۰۰ تومان </span>
            <span>برای هرشب</span>
          </div>
          <div>
            <Button color="orange2" size="medium" radius="md" />.
          </div>
        </div>
      </div>
    </div>
  );
};

export default OffCard;
