/* eslint-disable @next/next/no-img-element */
import { FC, ReactElement } from "react";
import { Grid, styled, Typography } from "@mui/material";

interface TextWithIconProps {
  title: string;
  subtitle: string;
  image: ReactElement;
}

const TextWithIcon: FC<TextWithIconProps> = ({ title, subtitle, image }) => (
  <TextContainer container display="flex" flexDirection="column" gap="30px" width="100%">
    <Grid container>{image}</Grid>

    <Grid container display="flex" flexDirection="column" gap="20px" width="100%">
      <Typography className="title4" variant="title4">
        {title}
      </Typography>
      <Typography className="text1" variant="text1" maxWidth="430px">
        {subtitle}
      </Typography>
    </Grid>
  </TextContainer>
);

const TextContainer = styled(Grid)(({ theme }) => ({
  zIndex: 2,

  [theme.breakpoints.down(992)]: {
    "& .blueLogo": {
      width: "40px",
      height: "40px",
    },

    "& .title4": {
      fontSize: "20px",
      lineHeight: "24px",
    },

    "& .text1": {
      fontSize: "14px",
      lineHeight: "18px",
    },
  },
}));

const DescriptionSection: FC = () => (
  <DescriptionSectionContainer
    container
    width="100%"
    flex="true"
    flexDirection="column"
    overflow="hidden"
    alignItems="center"
    padding="0px 90px 30px"
    gap="30px">
    <FirstColumn
      container
      display="flex"
      flexDirection="row"
      maxWidth="1464px"
      width="90%"
      padding="50px"
      overflow="hidden">
      <TextWithIcon
        title="Always up to date"
        subtitle="Benefit from Cardano's latest innovations such as Reference Inputs, Inline Datum and Reference Scripts."
        image={<img className="blueLogo" alt="alwaysUpToDate" src={"/images/descriptionSection/AlwaysUpToDate.png"} />}
      />

      <img className="code" alt="code" src={"/images/descriptionSection/Code.png"} />
    </FirstColumn>

    <SecondColumn
      container
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      maxWidth="1464px"
      width="90%"
      gap="30px">
      <LeftRow container flexDirection="column" padding="0 50px" width="48%" overflow="hidden">
        <img className="blueTopShadow" alt="blueTopShadow" src={"/images/descriptionSection/BlueTopShadow.png"} />

        <IllustrationWrapper>
          <img
            className="integrationTestsIllustration"
            alt="integrationTestsIllustration"
            src={"/images/descriptionSection/IntegrationTestsIllustration.png"}
          />
        </IllustrationWrapper>

        <TextWithIcon
          title="Unit tests"
          subtitle="Write realistic tests true to onchain behavior with Atlas' test harness framework based on Plutus Simple Model."
          image={
            <img className="blueLogo" alt="integrationTests" src={"/images/descriptionSection/IntegrationTests.png"} />
          }
        />
      </LeftRow>

      <RightRow container flexDirection="column" padding="0 50px" width="48%" overflow="hidden">
        <img className="pinkTopShadow" alt="pinkTopShadow" src={"/images/descriptionSection/PinkTopShadow.png"} />

        <IllustrationWrapper>
          <img
            className="unitTestsIllustration"
            alt="unitTestsIllustration"
            src={"/images/descriptionSection/UnitTestsIllustration.png"}
          />
        </IllustrationWrapper>

        <TextWithIcon
          title="Integration tests"
          subtitle="Execute integration tests on a real private node in a simulated environment."
          image={<img className="blueLogo" alt="unitTests" src={"/images/descriptionSection/UnitTests.png"} />}
        />
      </RightRow>
    </SecondColumn>
  </DescriptionSectionContainer>
);

const DescriptionSectionContainer = styled(Grid)(({ theme }) => ({
  background: "black",
  position: "relative",
  backgroundSize: "100% 100%",

  [theme.breakpoints.down(776)]: {
    padding: "0px 50px 30px",
  },
}));

const FirstColumn = styled(Grid)(({ theme }) => ({
  background: "linear-gradient(180deg, #ffffff14 0%, #00000000 95.31%), #ffffff03",
  borderRadius: theme.borderRadius.md,
  position: "relative",

  "& > img": {
    position: "absolute",
    top: "0px",
    right: "50px",
    maxWidth: "800px",
    width: "64vw",
  },

  [theme.breakpoints.down(776)]: {
    height: "450px",

    "& > .code": {
      bottom: "0px",
      top: "unset",
      maxWidth: "495px",
      width: "100%",
    },
  },
}));

const SecondColumn = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down(776)]: {
    flexDirection: "column",
  },
}));

const LeftRow = styled(Grid)(({ theme }) => ({
  background: "linear-gradient(180deg, #ffffff14 0%, #00000000 95.31%), #ffffff03",
  borderRadius: theme.borderRadius.md,
  position: "relative",
  mixBlendMode: "screen",
  paddingBottom: "40px",

  "& > .MuiGrid-root": {
    "& > img": {
      width: "29vw",
      maxWidth: "445px",
      position: "relative",
      zIndex: "2",
    },
  },

  "& > .blueTopShadow": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -350px)",
    maxWidth: "700px",
    width: "100%",
  },

  [theme.breakpoints.down(992)]: {
    width: "47%",
  },

  [theme.breakpoints.down(776)]: {
    width: "100%",

    "& > .MuiGrid-root": {
      "& > img": {
        width: "100%",
      },
    },
  },
}));

const RightRow = styled(Grid)(({ theme }) => ({
  background: "linear-gradient(180deg, #ffffff14 0%, #00000000 95.31%), #ffffff03",
  borderRadius: theme.borderRadius.md,
  position: "relative",
  mixBlendMode: "screen",
  paddingBottom: "40px",

  "& > .MuiGrid-root": {
    "& > img": {
      width: "29vw",
      maxWidth: "445px",
      position: "relative",
      zIndex: "2",
    },
  },

  "& > .pinkTopShadow": {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -350px)",
    maxWidth: "700px",
    width: "100%",
  },

  [theme.breakpoints.down(992)]: {
    width: "47%",
  },

  [theme.breakpoints.down(776)]: {
    width: "100%",

    "& > .MuiGrid-root": {
      "& > img": {
        width: "100%",
      },
    },
  },
}));

const IllustrationWrapper = styled(Grid)(({}) => ({
  margin: "0 auto",
}));

export default DescriptionSection;
