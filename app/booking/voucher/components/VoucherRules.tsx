"use client";

import { Divider } from "@mui/material";
import { Clock } from "lucide-react";
import Button from "@/components/ui/button";
import { Circle } from "lucide-react";
type TimeItem = {
  id: number;
  name: string;
  time: string;
};

type rules = {
  id: number;
  rule: string;
};

type RuleItem = {
  id: number;
  head: string;
  rules: rules[];
};

const Time: TimeItem[] = [
  { id: 1, name: "ساعت ورود", time: "14:00" },
  { id: 2, name: "ساعت خروج", time: "15:00" },
];

const RulesDetails: RuleItem[] = [
  {
    id: 1,
    head: "قوانین کنسلی",
    rules: [
      {
        id: 1,
        rule: "مهمان می‌تواند رزرو خود را لغو کند و ۸۰٪ از مبلغ پرداختی عودت داده خواهد شد. مبلغی که کسر می‌شود شامل هزینه‌های اداری و آماده‌سازی می‌باشد.",
      },
      {
        id: 2,
        rule: "در این حالت، ۵۰٪ از مبلغ رزرو قابل بازگشت خواهد بود. باقیمانده به‌عنوان خسارت لغو دیرهنگام در نظر گرفته می‌شود. ",
      },
      {
        id: 3,
        rule: "امکان استرداد وجه وجود ندارد و هیچ مبلغی بازگردانده نخواهد شد. این مورد به دلیل آماده‌سازی اتاق، مسدودسازی ظرفیت و جلوگیری از رزرو مجدد اعمال می‌شود.",
      },
      {
        id: 4,
        rule: "در صورت عدم مراجعه مهمان بدون اطلاع قبلی، رزرو به‌طور کامل سوخت می‌شود و وجهی بازگشت داده نمی‌شود.",
      },
      {
        id: 5,
        rule: "تغییر تاریخ فقط تا ۷۲ ساعت قبل از ورود و در صورت وجود ظرفیت امکان‌پذیر است",
      },
    ],
  },
  {
    id: 2,
    head: "قوانین اقامت",
    rules: [
      {
        id: 1,
        rule: "مهمان می‌تواند رزرو خود را لغو کند و ۸۰٪ از مبلغ پرداختی عودت داده خواهد شد. مبلغی که کسر می‌شود شامل هزینه‌های اداری و آماده‌سازی می‌باشد.",
      },
      {
        id: 2,
        rule: "در این حالت، ۵۰٪ از مبلغ رزرو قابل بازگشت خواهد بود. باقیمانده به‌عنوان خسارت لغو دیرهنگام در نظر گرفته می‌شود. ",
      },
      {
        id: 3,
        rule: "امکان استرداد وجه وجود ندارد و هیچ مبلغی بازگردانده نخواهد شد. این مورد به دلیل آماده‌سازی اتاق، مسدودسازی ظرفیت و جلوگیری از رزرو مجدد اعمال می‌شود.",
      },
      {
        id: 4,
        rule: "در صورت عدم مراجعه مهمان بدون اطلاع قبلی، رزرو به‌طور کامل سوخت می‌شود و وجهی بازگشت داده نمی‌شود.",
      },
      {
        id: 5,
        rule: "تغییر تاریخ فقط تا ۷۲ ساعت قبل از ورود و در صورت وجود ظرفیت امکان‌پذیر است",
      },
      {
        id: 6,
        rule: "در این حالت، ۵۰٪ از مبلغ رزرو قابل بازگشت خواهد بود. باقیمانده به‌عنوان خسارت لغو دیرهنگام در نظر گرفته می‌شود. ",
      },
      {
        id: 7,
        rule: "امکان استرداد وجه وجود ندارد و هیچ مبلغی بازگردانده نخواهد شد. این مورد به دلیل آماده‌سازی اتاق، مسدودسازی ظرفیت و جلوگیری از رزرو مجدد اعمال می‌شود.",
      },
      {
        id: 8,
        rule: "در صورت عدم مراجعه مهمان بدون اطلاع قبلی، رزرو به‌طور کامل سوخت می‌شود و وجهی بازگشت داده نمی‌شود.",
      },
      {
        id: 9,
        rule: "تغییر تاریخ فقط تا ۷۲ ساعت قبل از ورود و در صورت وجود ظرفیت امکان‌پذیر است",
      },
    ],
  },
];

export default function VoucherRules() {
  return (
    <div>
      {" "}
      <h1 className="flex items-center gap-2">
        <Circle
          className="stroke-secondary bg-secondary rounded-full"
          size={15}
        />
        قوانین و شرایط رزرو
      </h1>
      <div className="w-full flex gap-8">
        <div> </div>
        <div className="flex flex-col gap-6 min-w-[140px]">
          {Time.map((cat) => (
            <div key={cat.id} className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 font-medium">
                <Clock size={15} />
                {cat.name}
              </h3>

              <Button
                color="gray"
                radius="md"
                size="small"
                border="none"
                className="w-24">
                {cat.time}
              </Button>
            </div>
          ))}
        </div>

        <Divider orientation="vertical" flexItem />

        <div className="flex flex-col gap-6">
          {RulesDetails.map((cat) => (
            <div key={cat.id}>
              <h2 className="font-semibold mb-2">{cat.head}</h2>

              <ul className="list-disc list-inside space-y-1 text-sm leading-6">
                {cat.rules.map((rule) => (
                  <li key={rule.id}>{rule.rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
