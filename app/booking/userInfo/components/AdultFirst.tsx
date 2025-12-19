"use client";
import { useState } from "react";
import DynamicInput from "@/components/ui/Inputs";
import { formatFaNumber } from "@/utils/formatNumber";
import GenderChoose from "./GenderChoose";
import NumberCountryChoose from "./NumberCountryChoose";

function AdultFirst() {
  const [name, setName] = useState("");
  return (
    <div className="w-5/8 border rounded-2xl p-4 allBorder flex flex-col">
      <h1 className="font-bold text-xl">{formatFaNumber(1)}.بزرگسال</h1>
      <span>سرپرست</span>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        <GenderChoose />
        <DynamicInput
          placeholder=" نام و نام خانوادگی"
          value={name}
          onChange={setName}
        />
        <DynamicInput placeholder="کد ملی" value={name} onChange={setName} />
        <DynamicInput placeholder="ایمیل" value={name} onChange={setName} />
        <DynamicInput
          placeholder="شماره تماس"
          value={name}
          onChange={setName}
        />
        <NumberCountryChoose />
      </div>
    </div>
  );
}

export default AdultFirst;
