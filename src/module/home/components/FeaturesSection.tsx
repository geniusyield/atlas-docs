import { styled, Typography } from "@mui/material";
import React from "react";
import Button from "../../../components/Button/Button";
import Chip from "../../../components/Chip/Chip";
import Container from "../../../components/Container/Container";
import { GitHubIcon, HistoryIcon, SavedIcon, StarIcon } from "../../../components/Icons/Icons";
import Pagination from "../../../components/Pagination/Pagination";
import Tooltip from "../../../components/Tooltip/Tooltip";
import IllustrationHelp from "./IllustrationHelp";

const FeaturesSection = () => {
  const sections = [
    {
      title: "Contribute",
      subtitle: "Join an open source community of top Haskell / Plutus developers and contribute to Atlas.",
      action: (
        <ButtonWrapper>
          <Button>
            <GitHubIcon />
            <Typography fontWeight="400" fontSize="19px" lineHeight="24px" color="#FFFFFF" component="span">
              Atlas App
            </Typography>
          </Button>
        </ButtonWrapper>
      ),
    },
    {
      title: "Do you need help?",
      subtitle:
        "If you're having any issue with developing with Atlas you can ask your questions in the Cardano Stackexchange community using the tag #Atlas",
      action: <IllustrationHelp />,
    },
  ];

  return (
    <Wrapper>
      <Container>
        <Content>
          {sections.map(({ title, subtitle, action }) => (
            <Section key={title}>
              <TextWrapper>
                <Typography fontWeight="600" fontSize="40px" lineHeight="30px" color="#FFFFFF">
                  {title}
                </Typography>
                <Typography fontWeight="400" fontSize="22px" lineHeight="34px" color="rgb(193, 206, 241,0.8)">
                  {subtitle}
                </Typography>
              </TextWrapper>
              {action}
            </Section>
          ))}
          <GradientTop />
          <GradientBottom />
        </Content>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled("div")({
  position: "relative",
  overflow: "hidden",
});

const GradientTop = styled("div")({
  position: "absolute",
  width: "985px",
  height: "985px",
  right: "-200px",
  top: "-200px",
  background: "linear-gradient(73.7deg, #0029FF 31.41%, #074DFF 75.29%)",
  filter: "blur(296px)",
});

const GradientBottom = styled("div")({
  position: "absolute",
  width: "617px",
  height: "557px",
  left: "39px",
  bottom: "-298px",
  background: "linear-gradient(45.47deg, #FF00D6 2.3%, #4440FF 74.84%)",
  filter: "blur(192px)",
});

const Content = styled("div")(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  padding: "100.5px 68px 64px 62px",
  background:
    "linear-gradient(288.85deg, rgba(255, 255, 255, 0) 40.28%, rgba(255, 255, 255, 0.2) 53.33%, rgba(255, 255, 255, 0.2) 75.53%, rgba(255, 255, 255, 0) 95.75%)",
  backgroundBlendMode: "screen",
  borderRadius: "40px",
  display: "flex",
  flexDirection: "column",
  gap: "76px",

  ".pattern": {
    position: "absolute",
    maxWidth: "680px",
    width: "100%",

    "&.one": {
      top: "40px",
      right: "-26px",
    },

    "&.two": {
      bottom: "7px",
      right: "-36px",
    },
  },

  [theme.breakpoints.down(992)]: {
    padding: "48px 46px 35px 50px",
    gap: "31px",
    borderRadius: "24px",
  },

  [theme.breakpoints.down(721)]: {
    minHeight: "616px",
  },

  [theme.breakpoints.down("sm")]: {
    padding: "41px 25px 0 30px",
    gap: "35px",
  },
}));

const Section = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "end",
  justifyContent: "space-between",
  position: "relative",
  zIndex: "10",

  "&:first-of-type": {
    paddingBottom: "71px",
    borderBottom: "1px solid rgba(255, 255, 255, 0.15)",
  },

  [theme.breakpoints.down(992)]: {
    "&:first-of-type": {
      paddingBottom: "36px",
    },
  },

  [theme.breakpoints.down(721)]: {
    flexDirection: "column",
    alignItems: "start",
    gap: "38px",
  },

  [theme.breakpoints.down("sm")]: {
    position: "static",

    "&:first-of-type": {
      paddingBottom: "55px",
    },
  },
}));

const TextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "28.5px",
  maxWidth: "532px",

  [theme.breakpoints.down(1221)]: {
    maxWidth: "400px",
  },

  [theme.breakpoints.down(1101)]: {
    gap: "15px",
    maxWidth: "282px",

    "& .MuiTypography-root:first-of-type": {
      fontSize: "30px",
    },

    "& .MuiTypography-root:last-of-type": {
      fontSize: "18px",
      lineHeight: "24px",
    },
  },

  [theme.breakpoints.down(992)]: {
    "& .MuiTypography-root:first-of-type": {
      fontSize: "20px",
      lineHeight: "17px",
    },

    "& .MuiTypography-root:last-of-type": {
      fontSize: "14px",
      lineHeight: "19px",
    },
  },

  [theme.breakpoints.down(721)]: {
    gap: "18px",
    maxWidth: "100%",

    "& .MuiTypography-root:first-of-type": {
      fontSize: "24px",
      lineHeight: "30px",
    },
  },
}));

const ButtonWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  maxWidth: "338px",
  zIndex: 5,

  [theme.breakpoints.down(992)]: {
    maxWidth: "191px",

    "& .MuiTypography-root": {
      fontSize: "10px",
      lineHeight: "13px",
    },

    svg: {
      width: "21px",
      height: "21px",
    },

    button: {
      padding: "6px",
      borderRadius: "8px",
      gap: "13px",
    },
  },

  [theme.breakpoints.down(721)]: {
    maxWidth: "100%",

    "& .MuiTypography-root": {
      fontSize: "12px",
      lineHeight: "15px",
    },
  },
}));

export default FeaturesSection;
