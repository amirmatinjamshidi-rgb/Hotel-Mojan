"use client";
import { Bell, Wallet } from "lucide-react";
import Image from "next/image";
import { useAuthStore } from "@/Features/auth/AuthStore";



const UserPanelHeader = () => {
  const { user } = useAuthStore();

  return (
    <div className="w-[70%] bg-white border border-primaryBorder rounded-lg h-16 flex flex-row items-center justify-between px-4 py-2">
      <div className="flex flex-row gap-2 items-center">
        <Image width={40} height={40} src={user?.avatar ?? ""} alt="remy" className="h-10 w-10 rounded-[100%] " />
        <span>{user?.name}</span>
      </div>
      <div className="flex flex-row gap-1">
        <div className="w-10 h-10 rounded-lg flex justify-center items-center hover:cursor-pointer">
          <Wallet className="stroke-primary w-4 h-4 hover:cursor-pointer" />
        </div>
        <div className="w-10 h-10 bg-primary rounded-lg flex justify-center items-center hover:bg-primaryHover hover:cursor-pointer">
          <Bell className="w-4 h-4 stroke-white" />
        </div>
      </div>
    </div>
  );
};

export default UserPanelHeader;
