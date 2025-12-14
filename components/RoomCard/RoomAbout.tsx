import React from "react";
import { Circle } from "lucide-react";
function RoomAbout() {
  return (
    <div className=" w-[984px] h-[174px]  ">
      <div className="flex flex-col gap-7">
        {" "}
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          درباره اتاق دو تخته نخل اکونومی
        </h1>
        <div className="h-[126px] p-7 border border-gray-400 rounded-2xl bg-textOnText">
          <p>
            اتاق دو تخته نخل اکونومی، انتخابی هوشمندانه برای اقامت راحت و
            مقرون‌به‌صرفه در هتل ساحلی موجان است.
          </p>
          <p className="w-[800px]">
            و این اتاق با طراحی ساده و الهام‌گرفته از بافت بومی جنوب، فضایی آرام
            و دلپذیر را فراهم کرده تا مهمانان بتوانند بعد از روزی پر از تفریح و
            آفتاب، در محیطی دنج استراحت کنند.
          </p>
        </div>
      </div>
    </div>
  );
}

export default RoomAbout;
