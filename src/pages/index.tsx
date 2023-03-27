import React from "react";
import HaskellSection from "../module/home/components/HaskellSection";
import TitleSection from "../module/home/components/TitleSection";
import { Grid } from "@mui/material";

const Home = ({ setActiveMode }: any) => {
  return (
    <Grid flex="true" flexDirection="column">
      <TitleSection />
      <HaskellSection />
    </Grid>
  );
};

export default Home;
