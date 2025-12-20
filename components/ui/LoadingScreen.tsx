"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

interface LoadingScreenProps {
  isExiting: boolean;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ isExiting }) => {
  return (
    <div
      className={`fixed inset-0 z-9999 flex items-center justify-center bg-white transition-opacity duration-700 ease-in-out ${
        isExiting ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-64 h-64 md:w-96 md:h-96">
        <DotLottieReact
          src="https://lottie.host/830dfdc8-8b77-4d23-899e-889ca71a3644/bkBNRwvMpB.lottie"
          loop
          autoplay
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
