"use client";

import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BasicModal({ open, onClose }: BasicModalProps) {
  return (
    <Modal open={open} onClose={onClose}>
      <div className="bg-white p-6 rounded-md max-w-md mx-auto mt-40 outline-none flex flex-col gap-4">
        <Typography variant="h6">ورود | ثبت نام</Typography>

        <Typography>اینجا فرم لاگین یا ثبت‌نام قرار می‌گیرد</Typography>

        <Button variant="contained" color="primary" onClick={onClose}>
          بستن
        </Button>
      </div>
    </Modal>
  );
}
