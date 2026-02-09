"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneFormValues, phoneSchema } from "@/Features/auth/authSchema";
import { fakeUsers, FakeUserType } from "@/Features/auth/fakeUsers";
import { CircleX } from "lucide-react";
import { Divider, TextField } from "@mui/material";
import Image from "next/image";
import Button from "@/Features/ui/button";
import Logo from "@/public/circularLogo.png";

interface StepPhoneProps {
  onSuccess: (user: FakeUserType) => void;
  onClose: () => void;
}

export function StepPhone({ onSuccess, onClose }: StepPhoneProps) {
  const form = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: { phoneNumber: "" },
  });

  const onSubmit = (data: PhoneFormValues) => {
    const user = fakeUsers.find((u) => u.phone === data.phoneNumber);
    if (!user) return alert("شماره موبایل پیدا نشد!");
    onSuccess(user);
  };

  return (
    <div className="bg-white w-120 h-[590px] rounded-2xl max-w-md mx-auto mt-40 border border-primaryBorder py-8 px-10">
      <div className="w-full h-full flex flex-col">
        <div className="flex justify-start">
          <CircleX
            className="stroke-primary hover:cursor-pointer hover:fill-primary hover:stroke-white w-6 h-6"
            onClick={onClose}
          />
        </div>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-center gap-2">
            <Image src={Logo} alt="Mojan Hotel" width={96} height={96} className="w-24 h-24" />
            <span className="text-textPrimary text-[18px]">ورود/ثبت نام</span>
          </div>

          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full flex flex-col gap-7 items-center">
            <Controller
              name="phoneNumber"
              control={form.control}
              render={({ field, fieldState }) => (
                <TextField
                  {...field}
                  label="شماره موبایل"
                  variant="outlined"
                  required
                  fullWidth
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                />
              )}
            />

            <Button type="submit" className="py-3.5 px-20 w-full bg-secondary rounded-lg">
              ادامه
            </Button>
          </form>

          <span className="text-textPrimary whitespace-nowrap text-[12px] text-center">
            با ورود یا ثبت نام، شرایط و قوانین سایت را می‌پذیرم.{" "}
            <span className="text-primary cursor-pointer" onClick={onClose}>شرایط و قوانین</span>
          </span>

          <Divider className="w-full h-1 text-textSecondary">
            <span className="p-1 text-[15px] text-textSecondary">یا</span>
          </Divider>

          <Button text="orange" border="orange" className="py-3.5 px-20 w-full bg-white hover:bg-gray-100 rounded-lg">
            ورود با حساب گوگل
          </Button>
        </div>
      </div>
    </div>
  );
}
