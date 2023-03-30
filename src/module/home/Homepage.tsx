import { styled } from "@mui/material";
import { Global, css } from "@emotion/react";

import React from "react";

import Footer from "src/components/Footer/Footer";
import Navigation from "src/components/Navigation/Navigation";
import AboutSection from "./components/AboutSection";
import DescriptionSection from "./components/DescriptionSection";
import DevelopedBySection from "./components/DevelopedBySection";
import FeaturesSection from "./components/FeaturesSection";
import HaskellSection from "./components/HaskellSection";
import ModularDataSection from "./components/ModularDataSection";
import PartnersSection from "./components/PartnersSection";
import TitleSection from "./components/TitleSection";

const Homepage = () => {
  return (
    <Wrapper>
      {globalStyles}
      <TitleSection />
      <HaskellSection />
      <ModularDataSection />
      <DescriptionSection />
      <FeaturesSection />
      <HighlihtedSections>
        <AboutSection />
        <DevelopedBySection />
        <PartnersSection />
        <Footer />
      </HighlihtedSections>
    </Wrapper>
  );
};

const globalStyles = (
  <Global
    styles={css`
      .nextra-nav-container {
        position: fixed !important;
        top: 0;
      }

      html body .nextra-nav-container div.nextra-nav-container-blur {
        background-color: transparent !important;
      }

      nav {
        width: 1464px !important;
        max-width: 90% !important;
        padding: 0 !important;
      }

      @media (max-width: 1601px) {
        nav {
          width: 1220px !important;
        }
      }
    `}
  />
);

const Wrapper = styled("div")({
  width: "100%",
  minHeight: "100vh",
  background: "black",
});

const HighlihtedSections = styled("div")({
  position: "relative",
  overflow: "hidden",
});

export default Homepage;
