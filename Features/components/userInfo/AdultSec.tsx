"use client";
import React from "react";
import { useState } from "react";
import DynamicInput from "@/Features/ui/Inputs";
import { formatFaNumber } from "@/Features/utils/formatNumber";
import GenderChoose from "./GenderChoose";

function AdultSec() {
  const [name, setName] = useState("");
  return (
    <div className="w-5/8 border rounded-2xl p-4 allBorder flex flex-col">
      <h1 className="font-bold text-xl">{formatFaNumber(2)}.بزرگسال</h1>

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

export default AdultSec;
