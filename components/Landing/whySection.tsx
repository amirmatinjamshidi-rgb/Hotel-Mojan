import { Circle } from "lucide-react";
import WhyCard from "../ui/WhyCard";
import Image from "next/image";
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
    icon: <Image src="/reverse.png" alt="" width={38} height={38} />,
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
    <section className="w-[1320px] h-[729px] flex justify-between ">
      <div className="w-[648px] h-[729px] gap-10">
        <div className="flex flex-col gap-7">
          {" "}
          <h1 className="flex items-center gap-2">
            <Circle
              className="stroke-secondary bg-secondary rounded-full"
              size={15}
            />
            چرا هتل ساحلی موجان، انتخاب اول مسافران است؟
          </h1>
          <p className="">
            در هتل موجان همه‌چیز با دقت و عشق طراحی شده تا اقامت شما
            به‌یادماندنی باشد. از موقعیت ساحلی و طراحی مدرن تا خدمات اختصاصی و
            آرامش واقعی کنار دریا.
          </p>
        </div>
        <div className="flex gap-6 justify-between flex-col">
          <WhyCard items={WhyCardsItems} />
        </div>
      </div>
      <div className="w-[648px] h-[729px] gap-5">
        <div className="flex">
          {" "}
          <Image
            src="/image(2).png"
            alt=""
            width={648}
            height={309}
            className="rounded-md"
          />
        </div>
        <div className="flex gap-6">
          <Image
            src="/image(3).png"
            alt=""
            width={312}
            height={305}
            className="rounded-md"
          />
          <Image
            src="/image(4).png"
            alt=""
            width={312}
            height={305}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
}

export default WhySection;
