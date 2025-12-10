import React from "react";

const missions = [
  {
    id: 1,
    description:
      "تبدیل‌شدن به برترین هتل ساحلی جنوب کشور در زمینه مهمان‌نوازی و خدمات رزرو آنلاین",
    Adad: "01",
  },
  {
    id: 2,
    description: "خلق تجربه‌ای آرام، اصیل و مدرن از اقامت در سواحل مکران",
    Adad: "02",
  },
  {
    id: 3,
    description:
      "ارائه خدمات مهمان‌نوازی برتر بر پایه فناوری‌های هوشمند رزرو و کیفیت پایدار",
    Adad: "03",
  },
  {
    id: 4,
    description:
      "ساخت اقامتی خاطره‌ساز در کنار آرامش دریا و الویت قرار دادن راحتی مهمانان",
    Adad: "04",
  },
];

const AboutMission = () => {
  return (
    <div className="h-[573px] w-[1320px] flex flex-row">
      <div>
        <div className="flex flex-row gap-2">
          <div className="rounded-[100px] bg-secondary w-4 h-4 mt-1.5"></div>
          <span className="text-[22px] text-textPrimary font-bold">
            ماموریت و چشم‌انداز هتل ساحلی موجان
          </span>
        </div>
        <div className="w-[648px] h-[505px] flex flex-col gap-8">
          {missions.map((card) => {
            return (
              <div key={card.id} className="bg-white rounded-lg border border-primaryBorder shadow hover:shadow-md">
                <div className="p-6  flex flex-row gap-4 w-[648px] h-26">
                    <span className="text-[#D6A25FCC] text-[45px] ">{card.Adad}</span>
                    <span className="text-[16px] whitespace-nowrap text-textPrimary mt-4">{card.description}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
  );
};

export default AboutMission;
