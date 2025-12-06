import { Mail, MapPinIcon, Wheat } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import Button from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";

function Footer() {
  return (
    <div>
      <footer className="sticky bottom-full">
        <div className="bg-cyan-800 min-w-full h-20 flex justify-between">
          <div className=" flex align-middle gap-4 mt-6 mr-8">
            <PhoneIcon className="" /> ۰۵۴-۳۲۱۲۴۵۶۷
          </div>{" "}
          <div>
            <p className="mt-6 mr-8">
              © 2025 هتل ساحلی موجان | طراحی و توسعه توسط Mojan Studioَ
            </p>
          </div>
          <div className=" flex align-middle gap-4 mt-6 ml-4">
            <MapPinIcon />
            چابهار، بلوار ساحل — روبه‌روی اسکله ماهی‌گیری
          </div>
        </div>
        <div className="min-w-full h-[340px] flex justify-between ">
          <div className="min-w-[424px] text-gray-700 mr-8">
            <Image alt="logo" src="/Logo.png" width={100} height={128} />
            <p>
              در موجان، اقامتی دلپذیر را با چشم‌انداز بی‌نظیر دریا، نسیم آرام
            </p>
            <p> ساحل و صدای دلنشین موج‌ها تجربه کنید.</p>
            <p>ینجا جایی‌ست که آرامش و مهمان‌نوازی در کنار هم جمع شده‌اند.</p>
          </div>
          <div className=" flex justify-between gap-12">
            <div className="w-[89px] h-148px gap-2 text-black   ">
              <h1 className="font-bold mb-4"> دسترسی سریع</h1>{" "}
              <div className="grid grid-cols-1">
                <Link href="/Home" className="gap-2 not-only-of-type:">
                  خانه
                </Link>
                <Link href="/Rooms" className="gap-2">
                  اتاق ها
                </Link>
                <Link href="/Resturant" className="gap-2">
                  رستوران هتل
                </Link>
                <Link href="/About" className="gap-2">
                  درباره ما
                </Link>
              </div>
            </div>

            <div>
              <div className="w-[89px] h-148px gap-2 text-black   ">
                <h1 className="font-bold mb-4 ">شبکه‌های‌اجتماعی</h1>{" "}
                <div className="grid grid-cols-1">
                  <Link href="/Home" className="gap-2 flex align-middle">
                    <Send className="size-4 mb-2" /> تلگرام
                  </Link>
                  <Link href="/Rooms" className="gap-2 flex align-middle">
                    <Instagram className=" size-4" /> اینستاگرام
                  </Link>
                  <Link href="/Resturant" className="gap-2 flex align-middle">
                    <Wheat className="size-2 mb-2" /> واتساپ
                  </Link>
                  <Link href="/About" className="gap-2 flex align-middle">
                    <Mail className="size-4 mb-2" /> ایمیل
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[552px] h-148px gap-2 text-black   ">
                <h1 className="font-bold mb-4 "> عضویت در خبرنامه موجان</h1>
                <div className="grid grid-cols-1"></div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
