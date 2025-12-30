import UserPanelGeneralities from "@/Features/components/UserPanel/Dashboard/UserPanelGeneralities";
import UserPanelHeader from "@/Features/components/UserPanel/Dashboard/UserPanelHeader";
import React from "react";

function page() {
  return (
    <div className="flex flex-col">
      <UserPanelHeader />
      <UserPanelGeneralities />
    </div>
  );
}

export default page;
