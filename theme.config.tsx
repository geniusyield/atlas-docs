import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Logo from "src/components/logo"

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: 'https://github.com/geniusyield/atlas',
  },
  chat: {
    link: 'https://discord.gg/TNHf4fs626',
  },
  docsRepositoryBase: 'https://github.com/geniusyield/atlas-docs/tree/main',
  useNextSeoProps() {
    return {
      titleTemplate: "Atlas | %s",
      description: "Solution to easily build on Cardano",
      canonical: "https://atlas-app.io",
      siteName: "Atlas",
      // TODO: Need to add for openGraph later
      twitter: {
        handle: "@GeniusyieldO",
        site: "https://www.geniusyield.co",
        cardType: "summary_large_image"
      }
    }
  },
  head: (
    <>
      {/* TODO: add favicon here */}
      <meta property="og:title" content="Atlas" />
      <meta property="og:description" content="Solution to easily build on Cardano" />
    </>
  ),
  footer: {
    component: <></>
  },
  sidebar: {
    toggleButton: true,
  },
};

export default config;
