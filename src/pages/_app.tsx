import type { AppProps } from "next/app";
import { createTheme, ThemeProvider } from "@mui/material";
import { Helmet } from "react-helmet";

import "../styles/globals.css";

import { getTheme } from "../lib/theme/theme";
import { mutateFontSizeResponsiveness } from "../lib/theme/responsiveTypography";

function App({ Component, pageProps }: AppProps) {
  const theme = createTheme(getTheme());
  // theme = mutateFontSizeResponsiveness(theme);

  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Your Website Title</title>
        <meta name="description" content="Your website description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
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
  );
}
export default App;
