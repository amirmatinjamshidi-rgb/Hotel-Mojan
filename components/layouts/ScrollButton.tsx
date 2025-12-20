"use client";
import { Button } from "@mui/material";
import { useState, useEffect } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);

    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(scrolled > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!mounted || !visible) return null;

  return (
    <Button
      onClick={scrollToTop}
      variant="contained"
      sx={{
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translate(-50%, -50%)",
        borderRadius: "20%",
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
