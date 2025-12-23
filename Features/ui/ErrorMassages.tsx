import { cn } from "@/Features/lib/utils";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoNotDisturbAltIcon from "@mui/icons-material/DoNotDisturbAlt";

const AlertColor = {
  success: "bg-cyan-800 border-cyan-800",
  fail: "bg-red-200 border-red-200",
} as const;

const AlertIcon = {
  success: <CheckCircleIcon className="w-5 h-5 mr-2" />,
  fail: <DoNotDisturbAltIcon className="w-5 h-5 mr-2" />,
} as const;

const AlertRounded = {
  rounded: "rounded-2xl",
} as const;

const AlertMessage = {
  success: "پیام شما با موفقیت ارسال شد.",
  fail: "متاسفانه پیام شما با موفقیت ارسال نشد.",
} as const;

type AlertColorKey = keyof typeof AlertColor;
type AlertIconKey = keyof typeof AlertIcon;
type AlertRoundedKey = keyof typeof AlertRounded;
type AlertMessageKey = keyof typeof AlertMessage;

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: AlertColorKey;
  radius?: AlertRoundedKey;
  iconType?: AlertIconKey;
  textType?: AlertMessageKey;
  customText?: string;
  className?: string;
}

export default function Alert({
  color = "success",
  radius = "rounded",
  iconType = "success",
  textType = "success",
  customText,
  className,
  ...props
}: AlertProps) {
  const baseStyles = cn(
    "flex items-center p-4 border w-[258px] h-[56px]",
    AlertRounded[radius],
    AlertColor[color],
    className
  );

  const icon = AlertIcon[iconType];
  const text = customText || AlertMessage[textType];

  return (
    <div className={baseStyles} {...props}>
      {icon}
      <span>{text}</span>
    </div>
  );
}
