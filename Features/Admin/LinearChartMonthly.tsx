"use client";

import { LineChart } from "@mui/x-charts/LineChart";
import Box from "@mui/material/Box";
import { formatFaNumber } from "../utils/formatNumber";

const pData: number[] = [40, 28, 85, 60, 12, 55, 63, 4, 68, 74, 30, 95];

const xLabels: string[] = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

export default function OccupancyStatistics() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 508,
        height: 282,
        mx: "auto",
        border: 1,
        borderRadius: "8px",
        padding: "4px",
        borderColor: "#eaeaeb",
      }}
    >
      <p className="flex justify-start font-medium">درآمد ماهیانه</p>

      <LineChart
        series={[
          {
            data: pData,
            id: "occupancy",
            label: "درآمد(تومان)",
            area: true,
            showMark: false,
            valueFormatter: (v) =>
              v == null ? "" : formatFaNumber(v * 1000000),
            curve: "linear",
          },
        ]}
        xAxis={[
          {
            data: xLabels,
            scaleType: "point",
            tickLabelStyle: {
              fontSize: 8,
              fontFamily: "Tahoma",
            },
          },
        ]}
        yAxis={[
          {
            min: 1,
            max: 100,
            tickInterval: [20, 40, 60, 80, 100],

            valueFormatter: (v: number) => formatFaNumber(v * 1000000),
            tickLabelStyle: {
              fontSize: 8,
            },
          },
        ]}
        grid={{ horizontal: true, vertical: true }}
        slots={{ legend: () => null }}
        margin={{ top: 30, right: 30, bottom: 40, left: 10 }}
        sx={{
          "& .MuiLineElement-root": {
            stroke: "#E9B872",
            strokeWidth: 2,
            strokeDasharray: "4 3",
          },
          "& .MuiAreaElement-root": {
            fill: "url(#areaGradient)",
          },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
            display: "none",
          },
          "& .MuiChartsAxis-left .MuiChartsAxis-line": {
            display: "none",
          },
          "& .MuiChartsAxis-tick": {
            display: "none",
          },
        }}
      >
        <defs>
          <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="rgba(233, 184, 114, 0.7)" />
            <stop offset="100%" stopColor="rgba(233, 184, 114, 0)" />
          </linearGradient>
        </defs>
      </LineChart>
    </Box>
  );
}
