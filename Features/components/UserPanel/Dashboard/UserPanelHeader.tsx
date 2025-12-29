import { Avatar } from "@mui/material";
import { Bell, Wallet } from "lucide-react";
import React from "react";

const UserPanelHeader = () => {
  return (
    <div className="w-[70%] bg-white border border-primaryBorder rounded-lg h-16 flex flex-row items-center justify-between px-4 py-2">
      <div className="flex flex-row gap-2 items-center">
        <Avatar src="@/public/member3.png" alt="remy" />
        <span>مانی ملکان</span>
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
