/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";

import { formatFaNumber, fromFaNumber } from "@/Features/utils/formatNumber";
const MIN = 100_000;
const MAX = 100_000_000;
const STEP = 1_000;

function PriceInput({ label, value, onChange }: any) {
  return (
    <TextField
      value={value}
      onChange={onChange}
      sx={{
        width: 164,
        "& .MuiOutlinedInput-root": {
          height: 32,
          padding: "4px 16px",
          borderRadius: "8px",
          backgroundColor: "#F9FCFD",
          fontSize: 14,
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end" sx={{ fontSize: 12 }}>
            {label}
          </InputAdornment>
        ),
        inputProps: {
          textAlign: "left",
          direction: "ltr",
        },
      }}
    />
  );
}

export default function PriceRange() {
  const [range, setRange] = React.useState<number[]>([MIN, MAX]);

  return (
    <Box sx={{ width: "100%" }}>
      <h4>قیمت:</h4>

      <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
        <PriceInput
          label="حداقل"
          value={formatFaNumber(range[0])}
          onChange={(e: { target: { value: string } }) => {
            const v = fromFaNumber(e.target.value);
            if (!isNaN(v) && v <= range[1]) setRange([v, range[1]]);
          }}
        />

        <PriceInput
          label="حداکثر"
          value={formatFaNumber(range[1])}
          onChange={(e: { target: { value: string } }) => {
            const v = fromFaNumber(e.target.value);
            if (!isNaN(v) && v >= range[0]) setRange([range[0], v]);
          }}
        />
      </Box>

      <Slider
        value={range}
        min={MIN}
        max={MAX}
        step={STEP}
        onChange={(_, v) => setRange(v as number[])}
        sx={{ mt: 2 }}
      />
    </Box>
  );
}
