"use client";

import React from "react";
import TextField from "@mui/material/TextField";

type DynamicInputProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

export default function DynamicInput({
  placeholder,
  value,
  onChange,
}: DynamicInputProps) {
  return (
    <TextField
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      variant="outlined"
      sx={{
        width: "45%",
        minWidth: "200px",
        "& .MuiOutlinedInput-root": {
          height: "40px",
          borderRadius: "8px",
          padding: "0 16px",
          backgroundColor: "rgba(230,244,247,0.2)",
          fontSize: "14px",
        },
        "& fieldset": {
          borderColor: "rgba(216,227,231,0.5)",
        },
        "&:hover fieldset": {
          borderColor: "rgba(216,227,231,0.8)",
        },
        "&.Mui-focused fieldset": {
          borderColor: "primary.main",
        },
      }}
      inputProps={{
        style: {
          padding: 0,
          height: "40px",
        },
      }}
    />
  );
}
