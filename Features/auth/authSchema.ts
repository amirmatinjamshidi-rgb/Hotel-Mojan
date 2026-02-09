import { z } from "zod";

export const phoneSchema = z.object({
  phoneNumber: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل نامعتبر است (مثال: 09123456789)"),
});

export const otpSchema = z.object({
  otp: z.string().length(6, "کد تایید باید ۶ رقم باشد"),
});

export const passwordSchema = z.object({
  password: z
    .string()
    .min(8, "پسورد حداقل ۸ کاراکتر باشد")
    .max(16, "پسورد حداکثر ۱۶ کاراکتر باشد")
    .regex(/[A-Z]/, "حداقل یک حرف بزرگ داشته باشد")
    .regex(/[a-z]/, "حداقل یک حرف کوچک داشته باشد")
    .regex(/\d/, "حداقل یک عدد داشته باشد")
    .regex(/[@#$%^&*!]/, "حداقل یک کاراکتر خاص داشته باشد"),
});

export type PhoneFormValues = z.infer<typeof phoneSchema>;
export type OtpFormValues = z.infer<typeof otpSchema>;
export type PasswordFormValues = z.infer<typeof passwordSchema>;
                          