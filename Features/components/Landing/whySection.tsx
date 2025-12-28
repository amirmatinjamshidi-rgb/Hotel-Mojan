"use client";
import { Circle } from "lucide-react";
const WhyCard = dynamic(() => import("@/Features/ui/WhyCard"), { ssr: false });
import Image from "next/image";
import dynamic from "next/dynamic";
const WhyCardsItems = [
  {
    icon: <Image src="/routing.png" alt="routing" width={38} height={38} />,
    head: "چشم‌انداز مستقیم به دریا",
    description:
      "فقط چند قدم تا ساحل! هر صبح با صدای موج‌ها و منظره طلوع آفتاب بیدار شوید.",
  },
  {
    icon: <Image src="/crown.png" alt="" width={38} height={38} />,
    head: "تجربه لوکس با خدمات VIP",
    description:
      "از استقبال فرودگاهی تا سرویس اتاق ۲۴ ساعته. موجان برای آسایش شما آماده است.",
  },
  {
    icon: <Image src="/crown.png" alt="" width={38} height={38} />,
    head: "ترکیب فضای مدرن و آرامش ساحلی",
    description:
      "فضاهای داخلی الهام‌گرفته از رنگ‌های دریا و طبیعت، برای ایجاد حس آرامش و انرژی مثبت.",
  },
  {
    icon: <Image src="/Vector.png" alt="" width={38} height={38} />,
    head: "از رستوران ساحلی تا رویدادهای شبانه",
    description: "از رستوران ساحلی تا رویدادهای شبانه",
  },
];

function WhySection() {
  return (
    <section className="w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between gap-10 px-4 lg:px-0">
      <div className="w-full lg:w-1/2 flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="flex items-center gap-2 text-xl sm:text-2xl font-bold">
            <Circle
              className="stroke-secondary bg-secondary rounded-full"
              size={12}
            />
            چرا هتل ساحلی موجان، انتخاب اول مسافران است؟
          </h1>
          <p className="text-textSecondary leading-relaxed text-sm sm:text-base">
            در هتل موجان همه‌چیز با دقت و عشق طراحی شده تا اقامت شما
            به‌یادماندنی باشد. از موقعیت ساحلی و طراحی مدرن تا خدمات اختصاصی و
            آرامش واقعی کنار دریا.
          </p>
        </div>

        <div className="w-full">
          <WhyCard items={WhyCardsItems} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col gap-4 sm:gap-6">
        <div className="relative w-full h-[250px] sm:h-[309px]">
          <Image
            src="/image(2).png"
            alt="Main hotel view"
            fill
            className="rounded-2xl object-cover"
          />
        </div>

        <div className="flex gap-4 sm:gap-6">
          <div className="relative w-1/2 h-[150px] sm:h-[305px]">
            <Image
              src="/image(3).png"
              alt="Hotel interior"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
          <div className="relative w-1/2 h-[150px] sm:h-[305px]">
            <Image
              src="/image(4).png"
              alt="Hotel facility"
              fill
              className="rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhySection;
