"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const names = ["زن", "مرد", "کروسان"];

export default function GenderChoose() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
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
      }}
    >
      <InputLabel
        id="gender-label"
        sx={{
          top: "-6px",
          fontSize: 12,
        }}
      >
        جنسیت
      </InputLabel>

      <Select
        labelId="gender-label"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="جنسیت" />}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            sx={{
              fontWeight: personName.includes(name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
            }}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
