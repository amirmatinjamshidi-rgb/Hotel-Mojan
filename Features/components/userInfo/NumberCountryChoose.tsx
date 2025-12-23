"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Box from "@mui/material/Box";
import Image from "next/image";
import { formatFaNumber } from "@/Features/utils/formatNumber";
const countries = [
  { name: "آمریکا", flag: "/flags/US.png" },
  { name: "استرالیا", flag: "/flags/AU.png" },
  { name: "ترکیه", flag: "/flags/turkey.png" },
  { name: "ایران", flag: "/flags/Iran.png" },
];

export default function NumberCountryChoose() {
  const theme = useTheme();
  const [value, setValue] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof value>) => {
    const {
      target: { value },
    } = event;
    setValue(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl
      sx={{
        width: 200,
        background: "rgba(230,244,247,0.2)",
        "& .MuiOutlinedInput-root": {
          height: 40,
          borderRadius: "8px",

          paddingRight: "8px",
        },
        "& fieldset": {
          borderColor: "rgba(216,227,231,0.5)",
        },
      }}>
      <InputLabel
        id="gender-label"
        sx={{
          top: "-6px",
          fontSize: 16,
        }}>
        کشور {formatFaNumber(98)}+ IR
      </InputLabel>

      <Select
        labelId="gender-label"
        multiple
        value={value}
        onChange={handleChange}
        input={<OutlinedInput label="کشور" />}>
        {countries.map((item) => (
          <MenuItem
            key={item.name}
            value={item.name}
            sx={{
              fontWeight: value.includes(item.name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
            }}>
            <Box display="flex" alignItems="center" gap={1}>
              <Image src={item.flag} alt={"flags"} width={12} height={12} />
              <span>{item.name}</span>
            </Box>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
