"use client";

import Modal from "@mui/material/Modal";
import { useState } from "react";
import { StepPhone } from "./StepPhone";
import { StepOtp } from "./StepOtp";
import { StepPassword } from "./StepPassword";
import {  FakeUserType } from "@/Features/auth/fakeUsers";
import { useAuthStore } from "@/Features/auth/AuthStore";

interface BasicModalProps {
  open: boolean;
  onClose: () => void;
}

export default function BasicModal({ open, onClose }: BasicModalProps) {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [currentUser, setCurrentUser] = useState<FakeUserType | null>(null);

  const login = useAuthStore((state) => state.login);

  const handlePhoneSuccess = (user: FakeUserType) => {
    setCurrentUser(user);
    setStep(2);
  };

  const handleOtpSuccess = () => setStep(3);

  const handlePasswordSuccess = () => {
    if (!currentUser) return;
    login(currentUser);
    alert(`خوش آمدید ${currentUser.name}`);
    onClose();
    setStep(1);
    setCurrentUser(null);
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div>
        {step === 1 && <StepPhone onSuccess={handlePhoneSuccess} onClose={onClose} />}
        {step === 2 && currentUser && (
          <StepOtp user={currentUser} onSuccess={handleOtpSuccess} onClose={onClose} />
        )}
        {step === 3 && currentUser && (
          <StepPassword user={currentUser} onSuccess={handlePasswordSuccess} onClose={onClose} />
        )}
      </div>
    </Modal>
  );
}
