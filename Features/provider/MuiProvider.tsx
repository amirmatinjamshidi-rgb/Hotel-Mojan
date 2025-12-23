"use client";

import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "@/Features/theme/theme";
import rtlCache from "@/Features/theme/rtlCache";

type Props = {
  children: React.ReactNode;
};

export default function MuiProvider({ children }: Props) {
  return (
    <CacheProvider value={rtlCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}