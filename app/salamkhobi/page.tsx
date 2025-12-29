import UserPanelComingReservation from "@/Features/components/UserPanel/UserPanelComingReservation";
import UserPanelGeneralities from "@/Features/components/UserPanel/UserPanelGeneralities";
import UserPanelHeader from "@/Features/components/UserPanel/UserPanelHeader";
import UserPanelRecentReservations from "@/Features/components/UserPanel/UserPanelRecentReservations";
import React from "react";

function page() {
  return (
    <div className="flex flex-col justify-center items-center pt-10">
      <UserPanelHeader />
      <UserPanelGeneralities />
      <UserPanelComingReservation />
      <UserPanelRecentReservations />
    </div>
  );
}

export default page;
