"use client";
import { Controller } from "react-hook-form";
import { Mail, MapPinIcon, X } from "lucide-react";
import { PhoneIcon } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/components/ui/button";
import { Instagram } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Send } from "lucide-react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "ایمیل الزامی است." })
    .email({ message: "لطفاً یک ایمیل معتبر وارد کنید." }),
});
z.null({});
type FormData = z.infer<typeof schema>;

function Footer() {
  const [focused, setFocused] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const email = useWatch({
    control,
    name: "email",
  });

  const onSubmit = (data: FormData) => {
    console.log("Email submitted:", data.email);
  };

  return (
    <div dir="rtl">
      <footer className="">
        <div className="w-full py-10 flex justify-between">
          <div className="w-[424px] text-gray-700 mr-8">
            <Image alt="logo" src="/Logo.png" width={100} height={128} />
            <p>
              در موجان، اقامتی دلپذیر را با چشم‌انداز بی‌نظیر دریا، نسیم آرام
            </p>
            <p>ساحل و صدای دلنشین موج‌ها تجربه کنید.</p>
            <p>اینجا جایی‌ست که آرامش و مهمان‌نوازی در کنار هم جمع شده‌اند.</p>
          </div>
          <div className="flex justify-between gap-12">
            <div className="w-[89px] h-[148px] gap-2 text-black mt-5">
              <h1 className="font-bold mb-4">دسترسی سریع</h1>
              <div className="grid grid-cols-1">
                <Link href="/Home" className="block py-1">
                  خانه
                </Link>
                <Link href="/Rooms" className="block py-1">
                  اتاق ها
                </Link>
                <Link href="/Resturant" className="block py-1">
                  رستوران هتل
                </Link>
                <Link href="/About" className="block py-1">
                  درباره ما
                </Link>
              </div>
            </div>

            <div>
              <div className="w-[89px] h-[148px] gap-2 text-black mt-5">
                <h1 className="font-bold mb-4">شبکه‌های‌اجتماعی</h1>
                <div className="grid grid-cols-1">
                  <Link href="#" className="gap-2 flex items-center py-1">
                    <Send className="size-4 mr-2" /> تلگرام
                  </Link>
                  <Link href="#" className="gap-2 flex items-center py-1">
                    <Instagram className="size-4 mr-2" /> اینستاگرام
                  </Link>
                  <Link href="#" className="gap-2 flex items-center py-1">
                    <WhatsAppIcon className="size-4 mr-2" /> واتساپ
                  </Link>
                  <Link href="#" className="gap-2 flex items-center py-1">
                    <Mail className="size-4 mr-2" /> ایمیل
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <div className="w-[552px] h-[148px] gap-2 text-black mt-5">
                <h1 className="font-bold mb-4">عضویت در خبرنامه موجان</h1>
                <div className="grid grid-cols-1">
                  <p className="text-textOnTextSecondary">
                    با وارد کردن ایمیل خود، از جدیدترین پیشنهادها و تخفیف‌های
                    ویژه باخبر شود.
                  </p>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="flex justify-between bg-gray-200 h-[47px] rounded-xl overflow-hidden"
                >
                  <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        placeholder="ایمیل خود را بنویسید..."
                        error={!!errors.email}
                        helperText={errors.email?.message}
                        onFocus={() => setFocused(true)}
                        onBlur={() => setFocused(false)}
                        InputProps={{
                          endAdornment:
                            field.value && focused ? (
                              <button
                                type="button"
                                onClick={() => field.onChange("")}
                                className="h-6 w-6 rounded-full bg-red-500 flex items-center justify-center mr-2"
                              >
                                <X className="h-3 w-3 text-white" />
                              </button>
                            ) : null,
                        }}
                        sx={{
                          "& .MuiInputBase-root": {
                            height: "100%",
                            borderRadius: "12px",
                          },
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                          },
                          width: "502px",
                        }}
                      />
                    )}
                  />

                  <Button
                    type="submit"
                    color="orange1"
                    size="medium"
                    radius="md"
                    className="text-textPrimary w-24 h-full border-l disabled:opacity-50"
                    disabled={!isValid || !email}
                  >
                    تماس با ما
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-cyan-800 w-full py-5 flex justify-between items-center px-8">
          <div className="flex items-center gap-4">
            <PhoneIcon className="size-5" /> ۰۵۴-۳۲۱۲۴۵۶۷
          </div>
          <div>
            <p className="text-white">
              © 2025 هتل ساحلی موجان | طراحی و توسعه توسط Mojan Studio
            </p>
          </div>
          <div className="flex items-center gap-4">
            <MapPinIcon className="size-5" />
            چابهار، بلوار ساحل — روبه‌روی اسکله ماهی‌گیری
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
