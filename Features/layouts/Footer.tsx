/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { Controller } from "react-hook-form";
import { Mail, MapPinIcon, PhoneIcon, Instagram, Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Button from "@/Features/ui/button";
import Link from "next/link";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TextField from "@mui/material/TextField";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Alert from "../ui/ErrorMassages";
import ScrollButton from "./ScrollButton";
import { useWatch } from "react-hook-form";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";

const schema = z.object({
  email: z
    .string()
    .min(1, { message: "ایمیل الزامی است." })
    .email({ message: "لطفاً یک ایمیل معتبر وارد کنید." }),
});

type FormData = z.infer<typeof schema>;
type AlertStatus = "success" | "fail";

function Footer() {
  const [showAlert, setShowAlert] = useState(false);
  const [alertStatus] = useState<AlertStatus>("fail");
  const [focused, setFocused] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
    defaultValues: { email: "" },
  });

  const email = useWatch({ control, name: "email" });

  const onSubmit = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div dir="rtl" className="w-full">
      {showAlert && (
        <div className="fixed top-6 right-6 z-50">
          <Alert
            color={alertStatus}
            iconType={alertStatus}
            textType={alertStatus}
          />
        </div>
      )}

      <footer className="relative w-full bg-white border-t border-gray-100 mt-20">
        <ScrollButton />

        <div className="max-w-[1320px] mx-auto px-4 lg:px-0 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="flex flex-col gap-4">
              <Image
                alt="logo"
                src="/Logo.png"
                width={100}
                height={128}
                className="object-contain "
              />
              <div className="text-gray-600 text-sm leading-relaxed">
                <p>
                  در موجان، اقامتی دلپذیر را با چشم‌انداز بی‌نظیر دریا، نسیم
                  آرام ساحل و صدای دلنشین موج‌ها تجربه کنید.
                </p>
                <p className="mt-2">
                  اینجا جایی‌ست که آرامش و مهمان‌نوازی در کنار هم جمع شده‌اند.
                </p>
              </div>
            </div>

            <div>
              <h1 className="font-bold text-black mb-6">دسترسی سریع</h1>
              <nav className="flex flex-col gap-3 text-gray-700 text-sm">
                <Link
                  href="/Home"
                  className="hover:text-primary transition-colors"
                >
                  خانه
                </Link>
                <Link
                  href="/Rooms"
                  className="hover:text-primary transition-colors"
                >
                  اتاق ها
                </Link>
                <Link
                  href="/Resturant"
                  className="hover:text-primary transition-colors"
                >
                  رستوران هتل
                </Link>
                <Link
                  href="/About"
                  className="hover:text-primary transition-colors"
                >
                  درباره ما
                </Link>
              </nav>
            </div>

            <div>
              <h1 className="font-bold text-black mb-6">شبکه‌های‌اجتماعی</h1>
              <nav className="flex flex-col gap-3 text-gray-700 text-sm">
                <Link
                  href="#"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Send className="size-4" /> تلگرام
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Instagram className="size-4" /> اینستاگرام
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <WhatsAppIcon sx={{ fontSize: 18 }} /> واتساپ
                </Link>
                <Link
                  href="#"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <Mail className="size-4" /> ایمیل
                </Link>
              </nav>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-black">عضویت در خبرنامه موجان</h1>
              <p className="text-gray-500 text-sm leading-relaxed">
                با وارد کردن ایمیل خود، از جدیدترین پیشنهادها و تخفیف‌های ویژه
                باخبر شوید.
              </p>

              <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center bg-gray-100 rounded-xl overflow-hidden h-12 border border-transparent focus-within:border-primary transition-all"
              >
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      type="text"
                      placeholder="ایمیل خود را بنویسید..."
                      onFocus={() => setFocused(true)}
                      onBlur={() => setFocused(false)}
                      InputProps={{
                        endAdornment: field.value ? (
                          <IconButton
                            size="small"
                            onClick={() => field.onChange("")}
                            sx={{
                              color: red[500],
                              borderRadius: "50%",
                              width: 28,
                              height: 28,
                              marginRight: "4px",
                            }}
                          >
                            <HighlightOffIcon sx={{ fontSize: 20 }} />
                          </IconButton>
                        ) : null,
                      }}
                      sx={{
                        flex: 1,
                        "& .MuiInputBase-root": {
                          height: "100%",
                          fontSize: "14px",
                        },
                        "& .MuiOutlinedInput-notchedOutline": {
                          border: "none",
                        },
                      }}
                    />
                  )}
                />

                <Button
                  type="submit"
                  color="orange1"
                  className="h-full px-4 text-xs whitespace-nowrap disabled:opacity-50"
                  disabled={!isValid || !email}
                >
                  تماس با ما
                </Button>
              </form>
            </div>
          </div>
        </div>

        <div className="bg-cyan-900 text-white py-6 px-4">
          <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-center gap-6 text-xs sm:text-sm text-center">
            <div className="flex items-center gap-2">
              <PhoneIcon className="size-4 text-secondary" />
              <span dir="ltr">۰۵۴-۳۲۱۲۴۵۶۷</span>
            </div>
            <p className="opacity-80">
              © 2025 هتل ساحلی موجان | طراحی و توسعه توسط Mojan Studio
            </p>
            <div className="flex items-center gap-2">
              <MapPinIcon className="size-4 text-secondary" />
              <span>چابهار، بلوار ساحل — روبه‌روی اسکله ماهی‌گیری</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
