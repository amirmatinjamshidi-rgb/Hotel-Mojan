/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { usePathname, useRouter } from "next/navigation";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import {
  Users,
  CreditCard,
  CheckCircle,
  Ticket,
  ClipboardCheck,
} from "lucide-react";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { styled } from "@mui/material/styles";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.grey[300],
    borderRadius: 1,
  },
}));

const icons = [CheckCircle, Users, ClipboardCheck, CreditCard, Ticket];

function StepIcon(props: any) {
  const { active, completed, icon } = props;
  const Icon = icons[Number(icon) - 1];

  return (
    <Icon
      size={20}
      className={active || completed ? "text-primary" : "text-gray-400"}
    />
  );
}

const steps = [
  "انتخاب اتاق",
  "مشخصات مسافران",
  "تایید اطلاعات",
  "پرداخت",
  "دریافت واچر",
];

const stepRoutes = [
  "/booking/rooms",
  "/booking/userInfo",
  "/booking/confirm",
  "/booking/checkout",
  "/booking/voucher",
];

export default function CustomStepper() {
  const pathname = usePathname();
  const router = useRouter();
  const getActiveStep = () => {
    if (pathname.endsWith("/rooms")) return 0;
    if (pathname.includes("/userInfo")) return 1;
    if (pathname.endsWith("/confirm")) return 2;
    if (pathname.endsWith("/checkout")) return 3;
    if (pathname.endsWith("/voucher")) return 4;
    return 0;
  };

  const activeStep = getActiveStep();

  return (
    <Box sx={{ width: "75%" }}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<ColorlibConnector />}
      >
        {steps.map((label, index) => {
          const isClickable = index < activeStep;

          return (
            <Step key={label} completed={index < activeStep}>
              <StepLabel
                StepIconComponent={StepIcon}
                onClick={() => isClickable && router.push(stepRoutes[index])}
                sx={{
                  cursor: isClickable ? "pointer" : "default",
                  color: index <= activeStep ? "primary.main" : "text.disabled",
                }}
              >
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
