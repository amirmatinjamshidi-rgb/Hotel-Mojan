import { Mail, MapPin, Phone } from "lucide-react";
import React from "react";

const VoucherFooter = () => {
  return (
    <div className="flex flex-row justify-between">
      <div className="flex flex-row items-center gap-2 text-textPrimary">
        <MapPin className="stroke-textPrimary w-4 h-4" />
        <span>چابهار، بلوار ساحل — روبه‌روی اسکله ماهی‌گیری</span>
      </div>
      <div className="flex flex-row items-center gap-2 text-textPrimary">
        <Phone className="stroke-textPrimary w-4 h-4" />
        <span>۰۵۴-۳۲۱۲۴۵۶۷</span>
      </div>
      <div className="flex flex-row items-center gap-2 text-textPrimary">
        <Mail className="stroke-textPrimary w-4 h-4" />
        <span>support@mojanhotel.com </span>
      </div>
    </div>
  );
};

export default VoucherFooter;
