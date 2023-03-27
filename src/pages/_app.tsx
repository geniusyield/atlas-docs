import type { AppProps } from "next/app";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "../styles/globals.css";

import { getTheme } from "../lib/theme/theme";
import { mutateFontSizeResponsiveness } from "../lib/theme/responsiveTypography";

function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(getTheme());
  // theme = mutateFontSizeResponsiveness(theme);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;