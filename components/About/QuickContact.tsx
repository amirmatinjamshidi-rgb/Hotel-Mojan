import { Globe, Mail, Phone } from "lucide-react";
import React from "react";

const ContactInfo = [
  {
    id: 1,
    icon: <Mail className="stroke-secondary" />,
    title: "ایمیل",
    description:
      "برای هرگونه سؤال، پیشنهاد یا درخواست پشتیبانی، تیم ما از طریق ایمیل پاسخگوی شماست.",
    info: "info@mojanhotel.com",
  },
  {
    id: 2,
    icon: <Phone className="stroke-secondary" />,
    title: "تماس تلفنی",
    description:
      "برای رزرو، پیگیری یا دریافت اطلاعات اتاق‌ها، با پذیرش هتل در تماس باشید.",
    info: "09123456789",
  },
  {
    id: 3,
    icon: <Globe className="stroke-secondary" />,
    title: "شبکه‌های اجتماعی",
    description:
      "ما را در شبکه‌های اجتماعی دنبال کنید و از آخرین اخبار، جشنواره‌ها و تخفیف‌ها باخبر شوید.",
    info: "@mojanhotel",
  },
];

const QuickContact = () => {
  return (
    <div className="h-[290px] w-[1320px] flex flex-col gap-8">
      <div className="flex flex-row gap-2">
        <div className="rounded-[100px] bg-secondary w-4 h-4 mt-1.5"></div>
        <span className="text-[22px] text-textPrimary font-bold">
          تماس سریع هتل ساحلی موجان
        </span>
      </div>
      <div className="h-[222px] flex flex-row justify-evenly">
        {ContactInfo.map((contact) => {
          return (
            <div
              key={contact.id}
              className="w-[424px] h-[222px] bg-white rounded-lg flex flex-row items-center justify-center border border-primaryBorder shadow hover:shadow-md">
              <div className="flex flex-col justify-center items-center p-16 w-[376px] h-[174px]">
                <div>{contact.icon}</div>
                <div> {contact.title}</div>
                <div>{contact.description}</div>
                <div> {contact.info}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuickContact;
