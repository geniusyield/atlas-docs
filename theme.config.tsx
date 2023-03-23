import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Head } from "components/Head";
import { useNextSeoProps } from "config/useNextSeoProps";
import { atlasRepoURL, docsRepoURL } from 'config/constants'
import { Logo } from "components/Logo";

const config: DocsThemeConfig = {
  logo: <Logo />,
  project: {
    link: atlasRepoURL,
  },
  chat: {
    link: 'https://discord.gg/TNHf4fs626',
  },
  docsRepositoryBase: docsRepoURL,  // TODO: To suffix with `tree/main`?
  footer: {
    text: "Made by Genius Yield",
  },
  head: Head,
  feedback: {
    content: () => <>Question? Give me feedback →</>,
    labels: "feedback",
  },
  sidebar: {
    toggleButton: true,
  },
  useNextSeoProps,
  i18n: [],
};

export default config;
