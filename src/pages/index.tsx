import { styled } from "@mui/material";
import React from "react";
import Footer from "../components/Footer/Footer";
import Navigation from "../components/Navigation/Navigation";
import AboutSection from "../module/home/components/AboutSection";
import DevelopedBySection from "../module/home/components/DevelopedBySection";
import FeaturesSection from "../module/home/components/FeaturesSection";
import PartnersSection from "../module/home/components/PartnersSection";
import TitleSection from "../module/home/components/TitleSection";

const Home = ({ setActiveMode }: any) => {
  return (
    <Wrapper>
      <Navigation />
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

export default Home;
