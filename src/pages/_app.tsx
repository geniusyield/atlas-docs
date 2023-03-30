import type { AppProps } from "next/app";
import Script from "next/script";
import { createTheme, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";

import { getTheme } from "../lib/theme/theme";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(getTheme());

  return (
    <>
      {/* GTM Integration */}
      <Script
        id="tagmanager-main"
        strategy="afterInteractive"
        async
        src={`https://www.googletagmanager.com/gtag/js?id="GTM-PVJFBVL"`}
      />
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
      <Helmet>
        <meta
          httpEquiv="Content-Security-Policy"
          content="
            default-src 'self';
            img-src 'self' data: *.google-analytics.com *.google.co.uk *.google.com *.googleusercontent.com *.gstatic.com;
            script-src 'self' 'unsafe-inline' 'unsafe-eval' www.google.com *.google.com *.googleapis.com *.google-analytics.com *.googletagmanager.com;
            connect-src 'self' *.google-analytics.com analytics.google.com *.analytics.google.com doubleclick.net *.doubleclick.net *.google.com;
            style-src 'self' 'unsafe-inline';
          "
        />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Referrer-Policy" content="no-referrer" />
      </Helmet>
      <Component {...pageProps} />
    </ThemeProvider>
    </>
  );
}
export default App;
