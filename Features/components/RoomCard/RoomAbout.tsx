import { Circle } from "lucide-react";

function RoomAbout() {
  return (
    <div className="w-full max-w-[984px] mx-auto">
      <div className="flex flex-col gap-6">
        <h1 className="flex items-center gap-2">
          <Circle
            className="stroke-secondary bg-secondary rounded-full"
            size={15}
          />
          درباره اتاق دو تخته نخل اکونومی
        </h1>

        <div className="p-6 border border-gray-300 rounded-2xl bg-textOnText space-y-4">
          <p>
            اتاق دو تخته نخل اکونومی، انتخابی هوشمندانه برای اقامت راحت و
            مقرون‌به‌صرفه در هتل ساحلی موجان است.
          </p>

          <p className="max-w-none lg:max-w-[800px]">
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
