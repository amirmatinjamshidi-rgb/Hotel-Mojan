"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const names = [
  "8-9 شب همان روز",
  "10-9 شب همان روز",
  "11-10 شب همان روز",
  "12-11 شب همان روز",
];

function getStyles(name: string, personName: string[], theme: Theme) {
  return {
    fontWeight: personName.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function TimeChoose() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof personName>) => {
    const {
      target: { value },
    } = event;
    setPersonName(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div>
      <FormControl
        sx={{
          width: 300,
          background: "rgba(230,244,247,0.2)",
          "& .MuiOutlinedInput-root": {
            height: 40,
            borderRadius: "8px",
            borderColor: "borderAll",
            paddingRight: "8px",
          },
          "& fieldset": {
            borderColor: "rgba(216,227,231,0.5)",
          },
        }}
      >
        <InputLabel
          id="demo-multiple-name-label"
          sx={{
            top: "-5px",
            fontSize: 12,
          }}
        >
          انتخاب ساعت ورود
        </InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="انتخاب ساعت ورود" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
