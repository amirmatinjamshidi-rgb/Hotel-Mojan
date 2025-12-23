import Image from "next/image";
import React from "react";
import Qrcode from "@/public/QRcode.jpg";

const VoucherHeader = () => {
  return (
    <div className="flex flex-row justify-between w-full ">
      <div className="flex flex-col justify-between">
        <div>
          <span>شماره واچر: VCR-2025-4582</span>
        </div>
        <div>
          <span>تاریخ صدور: ۱۴۰۳/۰۷/۱۰</span>
        </div>
      </div>
      <div className="flex flex-col justify-between">
        <Image
        width={103}
        height={64}
          src="/Logo.png"
          alt="mojan hotel logo"
          className="object-contain w-[103px] h-16"
        />
        <span>هتل ساحلی موجان چابهار</span>
      </div>
      <div>
        <Image
          src={Qrcode}
          width={108}
          height={108}
          alt="mojan hotel logo"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default VoucherHeader;
