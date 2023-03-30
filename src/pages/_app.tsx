import type { AppProps } from "next/app";
import Script from "next/script";
import { createTheme, ThemeProvider } from "@mui/material";

import { getTheme } from "../lib/theme/theme";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(getTheme());

  return (
    <>
      <Script
        id="tagmanager-main"
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id="GTM-PVJFBVL"`}></Script>
      <Script
        id="tagmanager-setup"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GTM-PVJFBVL');
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
