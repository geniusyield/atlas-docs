import type { AppProps } from "next/app";
import Script from "next/script";
import { createTheme, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";

import { getTheme } from "../lib/theme/theme";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(getTheme());

  const isDevelopment = process.env.NODE_ENV === "development";

  const cspContent = isDevelopment
    ? ""
    : `
    default-src 'self';
    img-src 'self' data: *.google-analytics.com *.google.com *.googleusercontent.com *.gstatic.com
    *.google.com.ar *.google.com.au *.google.com.br *.google.ca *.google.ch *.google.cl
    *.google.cn *.google.co.id *.google.co.il *.google.co.in *.google.co.jp *.google.co.kr
    *.google.co.th *.google.co.uk *.google.co.za *.google.co.ve *.google.com.hk *.google.com.mx
    *.google.com.my *.google.com.ng *.google.com.pe *.google.com.ph *.google.com.pk
    *.google.com.sg *.google.com.tr *.google.com.tw *.google.com.ua *.google.com.vn
    *.google.de *.google.es *.google.fr *.google.it *.google.nl *.google.pl *.google.pt
    *.google.ru;
    script-src 'self' 'unsafe-inline' 'unsafe-eval' www.google.com *.google.com *.googleapis.com *.google-analytics.com *.googletagmanager.com;
    connect-src 'self' *.google-analytics.com analytics.google.com *.analytics.google.com *.doubleclick.net *.doubleclick.net *.google.com;
    style-src 'self' 'unsafe-inline' fonts.googleapis.com;
    font-src 'self' fonts.gstatic.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
  `;

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
            content={cspContent}
          />
          <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
          <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
          <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
          <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        </Helmet>

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
export default App;
