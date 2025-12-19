"use client";

import CustomStepper from "./userInfo/components/Stepper";

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
