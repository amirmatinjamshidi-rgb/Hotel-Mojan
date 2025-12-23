"use client";

import CustomStepper from "../../Features/components/userInfo/Stepper";

export default function BookingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <CustomStepper />
      {children}
    </>
  );
}
