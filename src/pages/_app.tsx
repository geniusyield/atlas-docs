import type { AppProps } from "next/app";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

import "../styles/globals.css";

import { getTheme } from "../lib/theme/theme";
import { mutateFontSizeResponsiveness } from "../lib/theme/responsiveTypography";

function App({ Component, pageProps }: AppProps) {
  const [activeMode, setActiveMode] = useState("light");

  let theme = createTheme(getTheme(activeMode as "light" | "dark"));
  theme = mutateFontSizeResponsiveness(theme);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} setActiveMode={setActiveMode} />
    </ThemeProvider>
  );
}
export default App;
