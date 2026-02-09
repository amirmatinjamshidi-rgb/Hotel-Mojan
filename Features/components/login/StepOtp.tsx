"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { otpSchema, OtpFormValues } from "@/Features/auth/authSchema";
import Button from "@/Features/ui/button";
import { CircleX } from "lucide-react";
import Image from "next/image";
import Logo from "@/public/circularLogo.png";
import { FakeUserType } from "@/Features/auth/fakeUsers";

interface StepOtpProps {
  user: FakeUserType;
  onSuccess: () => void;
  onClose: () => void;
}

export function StepOtp({ user, onSuccess, onClose }: StepOtpProps) {
  const form = useForm<OtpFormValues>({
    resolver: zodResolver(otpSchema),
    defaultValues: { otp: "" },
  });

  const [otpDigits, setOtpDigits] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return;
    const newDigits = [...otpDigits];
    newDigits[index] = value;
    setOtpDigits(newDigits);
    if (value && index < 5) inputsRef.current[index + 1]?.focus();
  };

  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>,
  ) => {
    if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (otpDigits.join("") !== user.otp)
      return alert("کد وارد شده اشتباه است!");
    onSuccess();
  };

  return (
    <div className="bg-white w-120 h-[590px] rounded-2xl max-w-md mx-auto mt-40 border border-primaryBorder py-8 px-10">
      <div className="flex justify-start">
        <CircleX className="stroke-primary w-6 h-6" onClick={onClose} />
      </div>

      <div className="flex flex-col gap-10 items-center">
        <Image
          src={Logo}
          alt="Mojan Hotel"
          width={96}
          height={96}
          className="w-24 h-24"
        />
        <h2 className="text-xl font-bold">کد تایید را وارد کنید</h2>
        <p className="text-sm text-center">
          کد ۶ رقمی به شماره {user.phone} ارسال شد
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex gap-2 justify-center mt-4"
        >
          {otpDigits.map((digit, i) => (
            <input
              key={i}
              type="text"
              maxLength={1}
              value={digit}
              // ref={(el) => (inputsRef.current[i] = el)}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
              className="w-12 h-12 text-center border rounded-lg text-lg focus:outline-none focus:border-primary"
            />
          ))}
        </form>

        <Button
          type="submit"
          onClick={handleSubmit}
          className="mt-6 py-3.5 px-20 w-full bg-primary-500 hover:bg-primary-400 text-white rounded-lg"
        >
          تایید
        </Button>
      </div>
    </div>
  );
}
