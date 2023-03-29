import { styled } from "@mui/material";
import React from "react";

import Footer from "src/components/Footer/Footer";
import Navigation from "src/components/Navigation/Navigation";
import AboutSection from "./components/AboutSection";
import DevelopedBySection from "./components/DevelopedBySection";
import FeaturesSection from "./components/FeaturesSection";
import PartnersSection from "./components/PartnersSection";
import TitleSection from "./components/TitleSection";

const Homepage = () => {
  return (
    <Wrapper>
      {/* <Navigation /> */}
      <TitleSection />
      <FeaturesSection />
      <AboutSection />
      <DevelopedBySection />
      <PartnersSection />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  width: "100%",
  minHeight: "100vh",
  background: "black",
});

export default Homepage;
