"use client";

import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { House } from "lucide-react";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 170,
    },
  },
  autoWidth: false,
  anchorOrigin: {
    vertical: "bottom" as const,
    horizontal: "left" as const,
  },
  transformOrigin: {
    vertical: "top" as const,
    horizontal: "left" as const,
  },
};

const rooms = [
  { id: 1, name: "استاندارد" },
  { id: 2, name: "اقتصادی" },
  { id: 3, name: "خانوادگی" },
  { id: 4, name: "سوئیت" },
];

export default function RoomNameSearch() {
  const theme = useTheme();
  const [selectedRooms, setSelectedRooms] = React.useState<string[]>([]);

  const handleChange = (event: SelectChangeEvent<typeof selectedRooms>) => {
    const {
      target: { value },
    } = event;
    setSelectedRooms(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <FormControl
      sx={{
        width: 170,
        background: "white",
        borderRadius: "8px",
        "& .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          border: "none",
        },
      }}
    >
      <Select
        IconComponent={(props) => <KeyboardArrowDownOutlinedIcon {...props} />}
        multiple
        displayEmpty
        value={selectedRooms}
        onChange={handleChange}
        input={<OutlinedInput />}
        renderValue={(selected) => {
          if ((selected as string[]).length === 0) {
            return (
              <em className="flex gap-4">
                <House className="stroke-secondary" /> نوع اتاق
              </em>
            );
          }
          return (selected as string[]).join(", ");
        }}
        MenuProps={MenuProps}
      >
        {rooms.map((room) => (
          <MenuItem
            key={room.id}
            value={room.name}
            sx={{
              fontWeight: selectedRooms.includes(room.name)
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
            }}
          >
            {room.name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
