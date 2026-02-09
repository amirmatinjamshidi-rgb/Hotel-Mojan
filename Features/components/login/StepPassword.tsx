"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@/Features/ui/button";
import { CircleX } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/circularLogo.png";
import { TextField } from "@mui/material";
import { FakeUserType } from "@/Features/auth/fakeUsers";
import { PasswordFormValues, passwordSchema } from "@/Features/auth/authSchema";

interface StepPasswordProps {
  user: FakeUserType;
  onSuccess: () => void;
  onClose: () => void;
}

export function StepPassword({ user, onSuccess, onClose }: StepPasswordProps) {
  const form = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: { password: "" },
  });

  const handleSubmit = (data: PasswordFormValues) => {
    if (data.password !== user.password) return alert("پسورد اشتباه است!");
    onSuccess();
  };

  return (
    <div className="bg-white w-120 h-[590px] rounded-2xl max-w-md mx-auto mt-40 border border-primaryBorder py-8 px-10">
      <div className="flex justify-start">
        <CircleX className="stroke-primary w-6 h-6" onClick={onClose} />
      </div>

      <div className="flex flex-col gap-10 items-center">
        <Image src={Logo} alt="Mojan Hotel" width={96} height={96} className="w-24 h-24" />
        <h2 className="text-xl font-bold">پسورد خود را وارد کنید</h2>
        <p className="text-sm text-center">برای ادامه لطفاً پسورد {user.name} را وارد کنید</p>

        <form onSubmit={form.handleSubmit(handleSubmit)} className="flex flex-col gap-4 w-full items-center mt-4">
          <TextField
            type="password"
            label="پسورد"
            placeholder="پسورد خود را وارد کنید"
            fullWidth
            {...form.register("password")}
            error={!!form.formState.errors.password}
            helperText={form.formState.errors.password?.message}
          />

          <Button type="submit" className="mt-6 py-3.5 px-20 w-full bg-primary-500 hover:bg-primary-400 text-white rounded-lg">
            تایید
          </Button>
        </form>
      </div>
    </div>
  );
}
