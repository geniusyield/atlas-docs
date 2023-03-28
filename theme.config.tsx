import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "src/components/logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/geniusyield/atlas",
  },
  chat: {
    link: "https://discord.gg/TNHf4fs626",
  },
  docsRepositoryBase: "https://github.com/geniusyield/atlas-docs/tree/main",
  useNextSeoProps() {
    const description = "Atlas is an all-in-one, open-sourced Haskell-native application backend for writing off-chain code for on-chain Plutus smart contracts. Designed by Genius Yield, in collaboration with MLabs, Well-Typed and Plank.";
    return {
      titleTemplate: "Atlas | %s",
      description,
      canonical: "https://atlas-app.io",
      openGraph: {
        url: "https://atlas-app.io",
        description,
        // TODO: Add for open-graph image.
      },
      siteName: "Atlas",
      twitter: {
        handle: "@GeniusyieldO",
        site: "https://www.geniusyield.co",
        cardType: "summary_large_image",
      },
    };
  },
  head: (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#ffffff" />
      {/* TODO: Add for twitter? */}
    </>
  ),
  footer: {
    component: <></>,
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
