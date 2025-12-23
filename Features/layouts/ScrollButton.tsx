"use client";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const toggleVisible = () => {
      const scrolled =
        document.documentElement.scrollTop || document.body.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    toggleVisible();

    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    if (typeof window === "undefined") return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="contained"
      sx={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        borderRadius: "50%",
        minWidth: "50px",
        width: "50px",
        height: "50px",
        boxShadow: 3,
        zIndex: 50,
        backgroundColor: "#e9b872",
        "&:hover": { backgroundColor: "#d4a35f" },
      }}
    >
      <ArrowUpwardIcon sx={{ color: "white" }} />
    </Button>
  );
};

export default ScrollButton;
