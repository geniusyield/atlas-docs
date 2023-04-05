import { useEffect } from "react";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Script from "next/script";
import { createTheme, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";

import { pageview } from "../lib/gtm/gtm";
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

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <>
      {/* GTM Integration */}
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer', 'GTM-PVJFBVL');
          `,
        }}
      />
      <ThemeProvider theme={theme}>
        <Helmet>
          <meta httpEquiv="Content-Security-Policy" content={cspContent} />
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
