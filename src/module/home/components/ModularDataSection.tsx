/* eslint-disable @next/next/no-img-element */
import { FC, ReactElement } from "react";
import { Grid, styled, Typography } from "@mui/material";

interface ProviderProps {
  content: string;
  image: ReactElement;
}

const Provider: FC<ProviderProps> = ({ content, image }) => (
  <ProviderContainer
    container
    display="flex"
    flexDirection="column"
    alignItems="center"
    position="relative"
    width="300px"
    height="300px">
    <CheckMarkWrapper>
      <img className="checkmark" alt="checkmark" src={"/images/modularDataSection/Checkmark.png"} />
    </CheckMarkWrapper>
    <Grid display="flex" flexDirection="column" position="relative">
      <>{image}</>
    </Grid>

    <Typography textAlign="center" className="title6" variant="title6" marginTop="15px">
      {content}
    </Typography>
  </ProviderContainer>
);

const ProviderContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(992)]: {
    height: "200px",
  },
}));

const CheckMarkWrapper = styled(Grid)(({ theme }) => ({
  width: "100%",
  display: "flex",
  justifyContent: "flex-end",

  "& > .checkmark": {
    width: "65px",
    position: "relative",
    top: "0px",
    right: "0px",
  },

  [theme.breakpoints.down(992)]: {
    "& > .checkmark": {
      width: "45px",
    },
  },
}));

const ModularDataSection: FC = () => (
  <ModularDataSectionContainer
    container
    width="100%"
    flex="true"
    flexDirection="column"
    overflow="hidden"
    alignItems="center">
    <Typography textAlign="center" className="title4" variant="title4" width="440px">
      Modular Data Providers
    </Typography>

    <Typography textAlign="center" className="text1" variant="text1" width="440px" marginTop="10px">
      Atlas supports multiple providers of blockchain data
    </Typography>

    <ProvidersContainer
      container
      display="flex"
      maxWidth="1220px"
      padding="100px 90px"
      flexDirection="row"
      justifyContent="center">
      <Provider
        content="Maestro"
        image={<img className="maestro" alt="maestro" src={"/images/modularDataSection/Maestro.png"} />}
      />
      <Provider
        content="Cardano"
        image={<img className="cardano" alt="cardano" src={"/images/modularDataSection/Cardano.png"} />}
      />
      <Provider
        content="Local Node"
        image={<img className="localNode" alt="localNode" src={"/images/modularDataSection/LocalNode.png"} />}
      />
    </ProvidersContainer>
  </ModularDataSectionContainer>
);

const ModularDataSectionContainer = styled(Grid)(({ theme }) => ({
  background: "black",
  position: "relative",
  backgroundSize: "100% 100%",
  overflow: "hidden",

  [theme.breakpoints.down(992)]: {
    "& .title4": {
      fontSize: "24px",
      lineHeight: "22px",
    },

    "& .text1": {
      fontSize: "14px",
      lineHeight: "16px",
    },
  },

  [theme.breakpoints.down(576)]: {
    "& .text1": {
      width: "60%",
    },
  },
}));

const ProvidersContainer = styled(Grid)(({ theme }) => ({
  position: "relative",

  "& .maestro": {
    height: "86px",
    width: "max-content",
    margin: "0 auto ",
  },

  "& .cardano": {
    height: "86px",
    width: "max-content",
    margin: "0 auto",
  },

  "& .localNode": {
    height: "86px",
    width: "max-content",
    margin: "-5px auto 0",
  },

  "& > .MuiGrid-container": {
    width: "270px",
  },

  [theme.breakpoints.down(992)]: {
    "& .maestro": {
      height: "61px",
      width: "max-content",
    },

    "& .cardano": {
      height: "61px",
      width: "max-content",
    },

    "& .localNode": {
      height: "61px",
      width: "max-content",
      margin: "-3px auto 0",
    },

    "& > .MuiGrid-container": {
      width: "190px",
    },

    "& .title6": {
      fontSize: "16px",
      lineHeight: "20px",
    },
  },

  [theme.breakpoints.down(776)]: {
    "& > .MuiGrid-container": {
      width: "180px",
    },
  },

  [theme.breakpoints.down(560)]: {
    flexDirection: "column",
    alignItems: "center",
    padding: "50px 0px",
  },
}));

export default ModularDataSection;
