"use client";
import React from "react";
import {
  LayoutGrid,
  CalendarDays,
  WalletCards,
  Mail,
  MessageSquare,
  UserRound,
  LogOut,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/button";

type sidebarProps = {
  id: number;
  name: string;
  route: string;
  icon: React.ReactNode;
};

const sidebarProps = [
  {
    id: 1,
    name: "داشبورد",
    route: "/UserPanel/Dashboard",
    icon: <LayoutGrid />,
  },
  {
    id: 2,
    name: "رزروها",
    route: "/UserPanel/Reservation",
    icon: <CalendarDays />,
  },
  { id: 3, name: "رستوران", route: "/UserPanel/Resturant", icon: <Mail /> },
  {
    id: 4,
    name: "پرداخت‌ها",
    route: "/UserPanel/Transactions",
    icon: <WalletCards />,
  },
  {
    id: 5,
    name: "امتیازات و نظرات",
    route: "/UserPanel/Scores",
    icon: <MessageSquare />,
  },
  { id: 6, name: "پیام‌ها", route: "/UserPanel/Massages", icon: <Mail /> },
  {
    id: 7,
    name: "حساب کاربری",
    route: "/UserPanel/AccountInfo",
    icon: <UserRound />,
  },
];
function SideBar() {
  return (
    <aside className="sticky top-0 right-0 w-64 p-4 allBorder border rounded-2xl shadow-2xl  transition-all ease-in-out duration-150 hover:shadow-gray-400">
      <div className="flex flex-col gap-12 ">
        <Image src="/NewLogo.png" alt="Logo" height={70} width={90} />

        <nav className="flex flex-col gap-2" dir="rtl">
          {sidebarProps.map((item) => (
            <Link key={item.id} href={item.route}>
              <Button
                radius="md"
                size="medium"
                color="white"
                className="
                  w-full flex flex-row items-center gap-3
                  justify-start
                  text-gray-400 hover:text-black
                  hover:bg-secondaryHover
                  focus:bg-secondaryActive focus:text-black
                "
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {item.icon}
                </span>

                <span className="text-sm font-medium">{item.name}</span>
              </Button>
            </Link>
          ))}
        </nav>
        <Button
          radius="md"
          size="medium"
          color="white"
          className="
                  w-full flex flex-row items-center gap-3
                  justify-start
                  text-gray-400 hover:text-black
                  hover:bg-secondaryHover
                  focus:bg-secondaryActive focus:text-black
                "
        >
          <span className="w-6 h-6 flex items-center justify-center">
            <LogOut />
          </span>

          <span className="text-sm font-medium">خروج</span>
        </Button>
      </div>
    </aside>
  );
}

export default SideBar;
