/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Button, Grid, styled, Typography } from "@mui/material";

const TitleSection: FC = () => {
  return (
    <TitleSectionContainer container width="100%" display="flex" overflow="hidden" justifyContent="center">
      <img className="purpleTopShadow" alt="purpleTopShadow" src={"/images/titleSection/PurpleTopShadow.png"} />
      <img className="blueTopShadow" alt="blueTopShadow" src={"/images/titleSection/BlueTopShadow.png"} />

      <img
        className="atlasHoldingGalaxy"
        alt="atlasHoldingGalaxy"
        src={"/images/titleSection/AtlasHoldingGalaxy.png"}
      />

      <TitleContainer container display="flex" marginTop="191px" flexDirection="column">
        <Typography className="title1" variant="title1" textAlign="center">
          Making dApps easy
        </Typography>

        <Grid container display="flex" flexDirection="column" marginTop="20px">
          <Subtitle className="title5" variant="title5" textAlign="center">
            An all-in-one open source solution to build on Cardano
          </Subtitle>
        </Grid>

        <TitleButton variant="contained">
          <Typography className="title8" variant="title8">
            Get Started
            <img className="doubleArrows" alt="doubleArrows" src={"/images/titleSection/DoubleArrows.png"} />
            <img
              className="doubleArrowsShadow"
              alt="doubleArrowsShadow"
              src={"/images/titleSection/DoubleArrowsShadow.png"}
            />
          </Typography>
        </TitleButton>
      </TitleContainer>

      <BrowserContainer
        container
        display="flex"
        flexDirection="column"
        width="1220px"
        padding="0 60px"
        margin="660px auto 0">
        <img className="browserSection" alt="browserSection" src={"/images/titleSection/BrowserSection.png"} />
        <img
          className="browserSectionMobile"
          alt="browserSectionMobile"
          src={"/images/titleSection/BrowserSectionMobile.png"}
        />

        <img className="browserAtlasLogo" alt="browserAtlasLogo" src={"/images/titleSection/AtlasLogo.png"} />

        <BrowserText container display="flex" marginTop="200px" flexDirection="row" justifyContent="flex-start">
          <img className="blueBrowserTabs" alt="blueBrowserTabs" src={"/images/titleSection/BlueBrowserTabs.png"} />

          <Grid container display="flex" marginTop="40px" flexDirection="column">
            <Typography className="title4" variant="title4" width="440px">
              Build transactions and execute smart contracts with ease
            </Typography>
          </Grid>
          <Grid container display="flex" marginTop="30px" flexDirection="column">
            <Typography className="text1" variant="text1" width="440px">
              Leverage Atlas intuitive API to abstract away the complexity around building transactions, balancing
              UTxOs, and interfacing with Plutus smart contracts.
            </Typography>
          </Grid>

          <img className="codeMobile" alt="codeMobile" src={"/images/titleSection/CodeMobile.png"}></img>
        </BrowserText>
      </BrowserContainer>
    </TitleSectionContainer>
  );
};

const TitleSectionContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.accent.dark,
  position: "relative",
  backgroundSize: "100% 100%",
  backgroundPosition: "0px 0px,0px 0px,0px 0px,0px 0px,0px 0px",
  background: "black",
  overflow: "hidden",

  "& > .purpleTopShadow": {
    position: "absolute",
    top: "0px",
    left: "0px",
  },

  "& > .blueTopShadow": {
    position: "absolute",
    top: "0px",
    right: "0px",
  },

  "& > .atlasHoldingGalaxy": {
    position: "absolute",
    left: "50%",
    top: "42%",
    transform: "translate(-50%, -50%)",
    maxWidth: "1481px",
    width: "100%",
  },

  [theme.breakpoints.down(992)]: {
    "& > .atlasHoldingGalaxy": {
      top: "48%",
    },
  },

  [theme.breakpoints.down(650)]: {
    "& > .atlasHoldingGalaxy": {
      top: "46%",
    },
  },

  [theme.breakpoints.down(560)]: {
    "& > .atlasHoldingGalaxy": {
      top: "91vw",
    },
  },

  [theme.breakpoints.down(520)]: {
    "& > .atlasHoldingGalaxy": {
      top: "96vw",
    },
  },

  [theme.breakpoints.down(490)]: {
    "& > .atlasHoldingGalaxy": {
      top: "97vw",
    },
  },

  [theme.breakpoints.down(470)]: {
    "& > .atlasHoldingGalaxy": {
      top: "102vw",
    },
  },

  [theme.breakpoints.down(450)]: {
    "& > .atlasHoldingGalaxy": {
      top: "107vw",
    },
  },

  [theme.breakpoints.down(430)]: {
    "& > .atlasHoldingGalaxy": {
      top: "115vw",
    },
  },

  [theme.breakpoints.down(410)]: {
    "& > .atlasHoldingGalaxy": {
      top: "122vw",
    },
  },

  [theme.breakpoints.down(390)]: {
    "& > .atlasHoldingGalaxy": {
      top: "126vw",
    },
  },

  [theme.breakpoints.down(380)]: {
    "& > .atlasHoldingGalaxy": {
      top: "129vw",
    },
  },

  [theme.breakpoints.down(380)]: {
    "& > .atlasHoldingGalaxy": {
      top: "132vw",
    },
  },
}));

const TitleContainer = styled(Grid)(({ theme }) => ({
  zIndex: "2",

  "& .title5": {
    width: "480px",
    margin: "0 auto",
  },

  [theme.breakpoints.down(992)]: {
    "& .title1": {
      fontSize: "60px",
    },

    "& .title5": {
      fontSize: "20px",
      width: "100%",
    },
  },

  [theme.breakpoints.down(776)]: {
    "& .title1": {
      fontSize: "34px",
      lineHeight: "41px",
    },

    "& .title5": {
      fontSize: "16px",
      lineHeight: "16px",
      width: "270px",
    },

    "& .title8": {
      fontSize: "14px",
      lineHeight: "16px",
    },
  },
}));

const Subtitle = styled(Typography)(({}) => ({
  background:
    "radial-gradient(63.67% 100% at 50% 100%, #073bf44f 0%, #0d41f600 100%), linear-gradient(180deg, #ffffff8a 0%, #FFFFFF 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const TitleButton = styled(Button)(({ theme }) => ({
  width: "204px",
  height: "68px",
  margin: "40px auto 0",
  background: `${theme.palette.accent.blueLinearGradient} !important`,
  borderRadius: theme.borderRadius.sm,
  border: `1px solid ${theme.palette.accent.grey01Transparency}`,
  boxShadow: `inset 0px 1px 0px ${theme.palette.accent.grey02Transparency}`,

  "& > .MuiTypography-root": {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    position: "relative",

    "& > .doubleArrowsShadow": {
      position: "absolute",
      right: "0px",
    },
  },

  [theme.breakpoints.down(776)]: {
    width: "174px",
    height: "65px",
  },
}));

const BrowserContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  zIndex: "2",

  "& > .browserSectionMobile": {
    display: "none",
  },

  "& .codeMobile": {
    display: "none",
  },

  "& > .browserSection": {
    position: "absolute",
    left: "50%",
    top: "50%",
    maxWidth: "1220px",
    width: "90%",
    margin: "0 auto",
    transform: "translate(-50%, -50%)",
  },

  "& > .browserAtlasLogo": {
    width: "fit-content",
    zIndex: "3",
    position: "absolute",
    left: "50%",
    top: "100px",
    transform: "translate(-50%, -50%)",
  },

  [theme.breakpoints.down(1500)]: {
    marginTop: "44vw",
  },

  [theme.breakpoints.down(1250)]: {
    marginTop: "39vw",

    "& .browserAtlasLogo": {
      top: "15%",
    },
  },

  [theme.breakpoints.down(1150)]: {
    marginTop: "34vw",

    "& .browserAtlasLogo": {
      top: "20%",
    },
  },

  [theme.breakpoints.down(1050)]: {
    marginTop: "34vw",

    "& .browserAtlasLogo": {
      top: "23%",
    },
  },

  [theme.breakpoints.down(992)]: {
    marginTop: "28vw",

    "& .browserSection": {
      top: "71%",
    },

    "& .browserAtlasLogo": {
      top: "36%",
      width: "66px",
    },
  },

  [theme.breakpoints.down(950)]: {
    marginTop: "28vw",

    "& .browserSection": {
      top: "40vw",
    },

    "& .browserAtlasLogo": {
      top: "19vw",
    },
  },

  [theme.breakpoints.down(767)]: {
    marginTop: "28vw",

    "& .browserSection": {
      top: "10vw",
      left: "30px",
      width: "1000px",
      margin: "0",
      transform: "none",
    },

    "& .browserAtlasLogo": {
      top: "21vw",
    },
  },

  [theme.breakpoints.down(650)]: {
    "& .browserSection": {
      top: "8vw",
    },
  },

  [theme.breakpoints.down(560)]: {
    "& .codeMobile": {
      display: "inline-block",
    },
  },

  [theme.breakpoints.down(450)]: {
    "& .browserSection": {
      left: "20vw",
    },
  },

  [theme.breakpoints.down(420)]: {
    "& .browserSection": {
      left: "25vw",
    },
  },

  [theme.breakpoints.down(380)]: {
    "& .browserSection": {
      left: "35vw",
    },
  },

  [theme.breakpoints.down(360)]: {
    "& .browserSectionMobile": {
      display: "inline-block",
      position: "absolute",
      left: "29vw",
      top: "1vw",
    },

    "& .browserSection": {
      display: "none",
    },

    "& .codeMobile": {
      display: "none",
    },

    "& .browserAtlasLogo": {
      display: "none",
    },
  },
}));

const BrowserText = styled(Grid)(({ theme }) => ({
  zIndex: "3",
  padding: "0 0 180px 30px",

  [theme.breakpoints.down(992)]: {
    marginTop: "24vw",
    padding: "0 0 100px 10px",

    "& .MuiGrid-container": {
      marginTop: "20px",
    },

    "& .blueBrowserTabs": {
      width: "40px",
    },

    "& .title4": {
      fontSize: "20px",
      lineHeight: "28px",
      width: "285px",
    },

    "& .text1": {
      fontSize: "14px",
      lineHeight: "18px",
      width: "320px",
    },
  },

  [theme.breakpoints.down(767)]: {
    "& .title4": {
      lineHeight: "24px",
    },

    "& .text1": {
      lineHeight: "16px",
    },
  },

  [theme.breakpoints.down(650)]: {
    paddingLeft: "0px",
    paddingBottom: "130px",
  },

  [theme.breakpoints.down(450)]: {
    paddingLeft: "9vw",
  },

  [theme.breakpoints.down(450)]: {
    paddingLeft: "15vw",
  },

  [theme.breakpoints.down(380)]: {
    paddingLeft: "24vw",
  },

  [theme.breakpoints.down(360)]: {
    paddingLeft: "16vw",
    paddingBottom: "360px",
  },

  [theme.breakpoints.down(350)]: {
    paddingBottom: "370px",
  },
}));

export default TitleSection;
