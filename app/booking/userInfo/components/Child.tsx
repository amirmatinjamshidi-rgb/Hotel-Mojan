"use client";
import { useState } from "react";
import DynamicInput from "@/components/ui/Inputs";
import { formatFaNumber } from "@/utils/formatNumber";
import GenderChoose from "./GenderChoose";

function Child() {
  const [name, setName] = useState("");
  return (
    <div className="w-5/8 border rounded-2xl p-4 allBorder flex flex-col">
      <h1 className="font-bold text-xl">{formatFaNumber(3)}.کودک دو ساله</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        <GenderChoose />

        <DynamicInput
          placeholder=" نام و نام خانوادگی"
          value={name}
          onChange={setName}
        />
        <DynamicInput placeholder="کد ملی" value={name} onChange={setName} />
      </div>
    </div>
  );
}

export default Child;
