"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Theme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { formatFaNumber } from "@/Features/utils/formatNumber";
import Button from "@/Features/ui/button";

const names = [
  "8-9 شب همان روز",
  "9-10 شب همان روز",
  "10-11 شب همان روز",
  "11-12 شب همان روز",
];

function getStyles(name: string, selected: string[], theme: Theme) {
  return {
    fontWeight: selected.includes(name)
      ? theme.typography.fontWeightMedium
      : theme.typography.fontWeightRegular,
  };
}

export default function SideBarBox() {
  const theme = useTheme();
  const [arrival, setArrival] = React.useState<string[]>([]);
  const [departure, setDeparture] = React.useState<string[]>([]);

  const handleArrival = (event: SelectChangeEvent<typeof arrival>) => {
    const { value } = event.target;
    setArrival(typeof value === "string" ? value.split(",") : value);
  };

  const handleDeparture = (event: SelectChangeEvent<typeof departure>) => {
    const { value } = event.target;
    setDeparture(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <div className="flex flex-col w-full max-w-[344px] mx-auto gap-8 border allBorder rounded-xl p-4">
      <FormControl
        fullWidth
        sx={{
          background: "rgba(230,244,247,0.2)",
          "& .MuiOutlinedInput-root": {
            width: { xs: "100%", sm: 40, lg: 300 },
            height: { xs: 48, sm: 40 },
            borderRadius: "8px",
            paddingRight: "8px",
          },
          "& fieldset": {
            borderColor: "rgba(216,227,231,0.5)",
          },
        }}
      >
        <InputLabel sx={{ fontSize: 12 }}>انتخاب ساعت ورود</InputLabel>
        <Select
          value={arrival}
          onChange={handleArrival}
          input={<OutlinedInput label="انتخاب ساعت ورود" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, arrival, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl
        fullWidth
        sx={{
          background: "rgba(230,244,247,0.2)",
          "& .MuiOutlinedInput-root": {
            width: { xs: 48, sm: 40, lg: 300 },
            height: { xs: 48, sm: 40 },
            borderRadius: "8px",
            paddingRight: "8px",
          },
          "& fieldset": {
            borderColor: "rgba(216,227,231,0.5)",
          },
        }}
      >
        <InputLabel sx={{ fontSize: 12 }}>انتخاب ساعت خروج</InputLabel>
        <Select
          value={departure}
          onChange={handleDeparture}
          input={<OutlinedInput label="انتخاب ساعت خروج" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, departure, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <div className="flex flex-col gap-3 items-center">
        <div className="flex items-center gap-1 text-lg">
          <span className="text-primary">{formatFaNumber(10500000)}</span>
          <span>تومان</span>
        </div>

        <Button
          className="w-full"
          color="orange1"
          radius="none"
          size="medium"
          border="none"
        >
          رزرو اتاق
        </Button>
      </div>
    </div>
  );
}
