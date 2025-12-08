import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Circle } from "lucide-react";
export default function Accordions() {
  return (
    <div className="w-[760px] h-20">
      <Accordion className="bg-white">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span" className="flex align-middle gap-3">
            <Circle
              color="#e9b872"
              strokeWidth={3}
              className="bg-secondary rounded-full"
            />
            چگونه می‌توانم اتاق رزرو کنم؟
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            کافیست تاریخ ورود و خروج و تعداد مهمانان را مشخص کنید تا اتاق‌های
            موجود نمایش داده شوند. پس از انتخاب اتاق، با ورود به حساب کاربری و
            پرداخت آنلاین، رزرو شما نهایی می‌شود.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
