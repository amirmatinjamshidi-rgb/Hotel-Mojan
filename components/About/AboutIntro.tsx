import Image from "next/image";

import IntroCard from "./IntroCard";
import AboutBanner from "@/public/AboutBanner.png";

const AboutIntro = () => {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-col gap-[38px] ">
        <div className="flex flex-row gap-2">
          <div className="rounded-[100px] bg-secondary w-4 h-4 mt-1.5"></div>
          <span className="text-[22px] text-textPrimary font-bold">
            درباره هتل ساحلی موجان
          </span>
        </div>
        <div className="w-[536px] h-28 text-textPrimary text-[16px]">
          <span>
            هتل چابهار با الهام از طبیعت بکر و رنگ‌های آرامش‌بخش سواحل مکران، در
            سال ۱۴۰۰ فعالیت خود را آغاز کرد. ما این هتل را با رویکردی نو طراحی
            کردیم تا ترکیبی از معماری دل‌نشین، آرامش ساحل و استانداردهای روز
            مهمان‌نوازی را در کنار یکدیگر ارائه دهیم.
          </span>
        </div>
        <div className="grid-cols-2">
          <div>
            <IntroCard />
          </div>
        </div>
      </div>
      <div>
        <Image
          src={AboutBanner}
          width={760}
          height={411}
          alt="About banner"
          className="w-[900px] h-[411px] rounded-lg flex flex-strech"
        />
      </div>
    </div>
  );
};

export default AboutIntro;
