"use client";

import { Divider } from "@mui/material";
import { Clock, Circle } from "lucide-react";
import Button from "@/Features/ui/button";

type RuleSection = {
  id: number;
  head: string;
  rules: string[];
};

type TimeItem = {
  id: number;
  name: string;
  time: string;
};

type Props = {
  items: RuleSection[];
};

const TIME_ITEMS: TimeItem[] = [
  { id: 1, name: "ساعت ورود", time: "14:00" },
  { id: 2, name: "ساعت خروج", time: "15:00" },
];

export default function ReservationRulesComponent({ items }: Props) {
  return (
    <div>
      <h1 className="flex items-center gap-2 mb-6">
        <Circle
          className="stroke-secondary bg-secondary rounded-full"
          size={15}
        />
        قوانین و اطلاعات اتاق
      </h1>

      <div className="max-w-[984px] w-full mx-auto flex flex-col md:flex-row gap-6 md:gap-8">
        <div className="flex flex-row md:flex-col gap-4 md:gap-6 md:min-w-[140px]">
          {TIME_ITEMS.map((item) => (
            <div key={item.id} className="flex flex-col gap-2">
              <h3 className="flex items-center gap-2 font-medium text-sm">
                <Clock size={15} />
                {item.name}
              </h3>

              <Button
                color="gray"
                radius="md"
                size="small"
                border="none"
                className="w-24"
              >
                {item.time}
              </Button>
            </div>
          ))}
        </div>

        <Divider orientation="vertical" flexItem className="hidden md:block" />

        <Divider className="md:hidden" />

        <div className="flex flex-col gap-6">
          {items.map((section) => (
            <div key={section.id}>
              <h2 className="font-semibold mb-2">{section.head}</h2>

              <ul className="list-disc list-inside space-y-1 text-sm leading-6">
                {section.rules.map((rule, index) => (
                  <li key={index}>{rule}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
