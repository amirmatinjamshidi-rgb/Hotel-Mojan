"use client";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import { faIR } from "@mui/material/locale";

const theme = createTheme({}, faIR);

export default function MuiProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
