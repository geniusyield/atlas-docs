import React from "react";
import { Grid } from "@mui/material";
import HaskellSection from "../module/home/components/HaskellSection";
import TitleSection from "../module/home/components/TitleSection";
import ModularDataSection from "../module/home/components/ModularDataSection";

const Home = ({ setActiveMode }: any) => {
  return (
    <Grid flex="true" flexDirection="column">
      <TitleSection />
      <HaskellSection />
      <ModularDataSection />
    </Grid>
  );
};

export default Home;
