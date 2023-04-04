import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "src/components/logo";
import { useRouter } from "next/router";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: "https://github.com/geniusyield/atlas",
    icon: (
      <Image
        src="https://img.shields.io/github/stars/geniusyield/atlas?label=&style=social"
        alt="Atlas GeniusYield Github repo stars"
        width="70"
        height="35"
      />
    ),
  },
  docsRepositoryBase: "https://github.com/geniusyield/atlas-docs/tree/main",
  useNextSeoProps() {
    const { asPath } = useRouter();
    const description = "All-in-one solution for writing off-chain code for Plutus contracts";
    return {
      titleTemplate: asPath === "/" ? "ATLAS Plutus Application Backend | by Genius Yield" : "Atlas | %s",
      description,
      canonical: "https://atlas-app.io",
      openGraph: {
        url: "https://atlas-app.io",
        description,
        images: [
          {
            url: "/open-graph.png",
            width: 1200,
            height: 630,
            alt: "Atlas - Application backend for Plutus smart contracts on Cardano",
            type: "image/png",
          },
        ],
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
    </>
  ),
  footer: {
    component: <></>,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
  darkMode: false,
  sidebar: {
    toggleButton: true,
  },
};

export default config;
