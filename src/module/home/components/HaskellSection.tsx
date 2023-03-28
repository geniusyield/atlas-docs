/* eslint-disable @next/next/no-img-element */
import { FC } from "react";
import { Grid, styled, Typography } from "@mui/material";

const Bullet: FC<{ content: string }> = ({ content }) => (
  <Grid container display="flex" flexDirection="row" alignItems="center" position="relative">
    <StarsWrapper position="absolute">
      <img
        className="shootingStars shootingStarLeft"
        alt="shootingStar"
        src={"/images/haskellSection/ShootingStar.png"}></img>
      <img
        className="shootingStars shootingStarRight"
        alt="shootingStar"
        src={"/images/haskellSection/ShootingStar.png"}></img>
    </StarsWrapper>

    <Typography className="text1" variant="text1" width="440px" marginLeft="65px">
      {content}
    </Typography>
  </Grid>
);

const StarsWrapper = styled(Grid)(({ theme }) => ({
  top: "0.5px",

  "& .shootingStars": {
    width: "80%",
  },

  "& .shootingStarRight": {
    position: "absolute",
    right: "15px",
    transform: "rotate(90deg)",
  },

  [theme.breakpoints.down(992)]: {
    top: "-2px",

    "& .shootingStars": {
      width: "60%",
    },

    "& .shootingStarRight": {
      right: "30px",
    },
  },
}));

const HaskellSection: FC = () => {
  const firstBulletContent = "Harness the power and security of Haskell's functional programming";
  const secondBulletContent = "Leverage native interoperability with Plutus primitives and Cardano nodes";
  const thirdBulletContent = "Enjoy a streamlined and efficient interface between on-chain & off-chain code";

  return (
    <HaskellSectionContainer container width="100%" display="flex" overflow="hidden" justifyContent="center">
      <div className="linearStrokeGradient" />

      <img className="blueLightBg" alt="blueLightBg" src={"/images/haskellSection/BlueLightBg.png"} />
      <img className="blueLightBg2" alt="blueLightBg2" src={"/images/haskellSection/BlueLightBg2.png"} />
      <img className="pattern" alt="pattern" src={"/images/haskellSection/Pattern.png"} />

      <SectionContainer container display="flex" maxWidth="1220px" padding="100px 90px" flexDirection="row">
        <LeftContainer container display="flex" flexDirection="row" justifyContent="flex-start" width="60%">
          <img
            className="firstClassHaskell"
            alt="firstClassHaskell"
            width="68px"
            height="69px"
            src={"/images/haskellSection/FirstClassHaskell.png"}
          />

          <Grid container display="flex" flexDirection="column">
            <Typography className="title4" variant="title4" width="440px">
              First class Haskell
            </Typography>
          </Grid>
          <BulletsContainer container display="flex" flexDirection="column" gap="20px">
            <Bullet content={firstBulletContent}></Bullet>
            <Bullet content={secondBulletContent}></Bullet>
            <Bullet content={thirdBulletContent}></Bullet>
          </BulletsContainer>

          <img className="codeMobile" alt="codeMobile" src={"/images/haskellSection/CodeMobile.png"}></img>
        </LeftContainer>

        <RightContainer container width="40%">
          <img
            className="codeWithAtlasLogo"
            alt="codeWithAtlasLogo"
            src={"/images/haskellSection/CodeWithAtlasLogo.png"}
          />
        </RightContainer>
      </SectionContainer>
    </HaskellSectionContainer>
  );
};

const HaskellSectionContainer = styled(Grid)(({ theme }) => ({
  background: "black",
  position: "relative",
  backgroundSize: "100% 100%",
  overflow: "hidden",

  "& > .linearStrokeGradient": {
    position: "relative",
    height: "1px",
    width: "100vw",
    background:
      "radial-gradient(circle, rgba(116,146,255,1) 30%, rgba(155,177,255,0.7) 60%, rgba(155,177,255,0.5) 75%, rgba(155,177,255,0.4) 0%)",
    top: "0px",
    left: "0px",
  },

  "& > .blueLightBg": {
    position: "absolute",
    width: "80%",
    height: "80%",
    left: "50%",
    top: "0px",
    transform: "translate(-69%, 0%)",
  },

  "& > .blueLightBg2": {
    position: "absolute",
    width: "80%",
    height: "80%",
    left: "50%",
    top: "0px",
    transform: "translate(-30%, 0%)",
  },

  "& > .pattern": {
    position: "absolute",
    left: "50%",
    top: "0px",
    transform: "translate(-26%, 0%)",
  },
}));

const SectionContainer = styled(Grid)(({ theme }) => ({
  position: "relative",

  [theme.breakpoints.down(992)]: {
    padding: "100px 70px",
  },

  [theme.breakpoints.down(776)]: {
    flexDirection: "column",
    padding: "100px 70px 0 100px",
  },

  [theme.breakpoints.down(576)]: {
    padding: "75px 55px 0 55px",
  },

  [theme.breakpoints.down(450)]: {
    padding: "75px 40px 0 40px",
  },
}));

const LeftContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(992)]: {
    height: "fit-content",
    gap: "30px",

    "& .firstClassHaskell": {
      width: "40px",
      height: "40.5px",
    },

    "& > .MuiGrid-container": {
      marginTop: "0",
      height: "fit-container",
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

  [theme.breakpoints.down(776)]: {
    width: "100%",
  },
}));

const BulletsContainer = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(992)]: {
    "& .MuiTypography-root": {
      marginLeft: "50px",
    },
  },
}));

const RightContainer = styled(Grid)(({ theme }) => ({
  position: "relative",
  top: "-55px",
  left: "-70px",

  [theme.breakpoints.down(992)]: {
    left: "-105px",

    "& img": {
      width: "500px",
    },
  },

  [theme.breakpoints.down(776)]: {
    left: "-50px",
  },
}));

export default HaskellSection;
