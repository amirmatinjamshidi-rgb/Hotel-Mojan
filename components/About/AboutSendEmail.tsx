import React from "react";
import Button from "../ui/button";
import { TextField, Typography } from "@mui/material";
import { UserRound } from "lucide-react";

const AboutSendEmail = () => {
  return (
    <div className="h-[392px] w-[536px] flex flex-col gap-6 " dir="rtl">
      <TextField
        id="outlined-basic"
        label="نام و نام خانوادگی"
        variant="outlined"
      />
      <TextField
        id="outlined-basic"
        label="شماره تماس"
        variant="outlined"
        dir="rtl"
      />
      <TextField id="outlined-basic" label="ایمیل " variant="outlined" />
      <TextField
        id="outlined-multiline-static"
        label="پیام خود را اینجا بنویسید..."
        multiline
        rows={2}
      />
      <Button
        color="orange1"
        radius="md"
        border="orange"
        type="submit"
        className="w-full flex flex-row justify-center gap-2 items-center">
        <UserRound /> <Typography>درخواست پشتیبانی</Typography>
      </Button>
    </div>
  );
};

export default AboutSendEmail;
