"use client";

import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import TextField from "@mui/material/TextField";

const MIN = 100_000;
const MAX = 100_000_000;
const STEP = 1_000;
const toPersian = (value: number) => value.toLocaleString("fa-IR");

import InputAdornment from "@mui/material/InputAdornment";

type PriceInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function PriceInput({ label, value, onChange }: PriceInputProps) {
  return (
    <TextField
      value={value ?? ""}
      onChange={onChange}
      variant="outlined"
      sx={{
        width: 164,
        "& .MuiOutlinedInput-root": {
          height: 32,
          padding: "4px 16px",
          borderRadius: "8px",
          backgroundColor: "#F9FCFD",
          fontSize: 14,
          borderColor: "#E6F4F7",
        },
        "& fieldset": {
          borderColor: "#D0D5DD",
        },
      }}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={{ fontSize: 12, color: "#667085" }}
          >
            {label}
          </InputAdornment>
        ),
        inputProps: {
          style: {
            textAlign: "left",
            direction: "ltr",
          },
        },
      }}
    />
  );
}

const fromPersian = (value: string) =>
  Number(
    value
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString())
      .replace(/,/g, "")
  );

export default function PriceRange() {
  const [range, setRange] = React.useState<number[]>([MIN, MAX]);

  return (
    <Box sx={{ width: "100%" }}>
      <h4>قیمت:</h4>

      <Box sx={{ display: "flex", gap: 2, mt: 2, flexWrap: "wrap" }}>
        <PriceInput
          label="حداقل"
          value={toPersian(range[0])}
          onChange={(e) => {
            const v = fromPersian(e.target.value);
            if (!isNaN(v) && v <= range[1]) setRange([v, range[1]]);
          }}
        />

        <PriceInput
          label="حداکثر"
          value={toPersian(range[1])}
          onChange={(e) => {
            const v = fromPersian(e.target.value);
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
