import { styled, Typography } from "@mui/material";
import IconButton from "../Button/IconButton";
import Container from "../Container/Container";
import {
  ColorLogo,
  DiscordIcon,
  GeniusYieldLogo,
  InstagramIcon,
  MediumIcon,
  PoweredByGeniusYieldLogo,
  TelegramIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../Icons/Icons";

const socials = [
  { id: 1, icon: <TwitterIcon />, href: "#" },
  { id: 2, icon: <MediumIcon />, href: "#" },
  { id: 3, icon: <DiscordIcon />, href: "#" },
  { id: 4, icon: <InstagramIcon />, href: "#" },
  { id: 5, icon: <TelegramIcon />, href: "#" },
  { id: 6, icon: <YoutubeIcon />, href: "#" },
];

const Footer = () => (
  <Container>
    <Wrapper>
      <Column>
        <ColorLogo />
        <TextWrapper>
          <Typography fontWeight="400px" fontSize="14px" lineHeight="18px" color="#C1CEF1">
            Atlas is Licensed under <b style={{ textDecoration: "underline" }}>Apache 2.0</b>
          </Typography>
          <Typography fontWeight="400" fontSize="14px" lineHeight="18px" color="#C1CEF1">
            The all-in-one open source solution for writing off-chain code for on-chain Plutus smart contracts
          </Typography>
        </TextWrapper>
      </Column>
      <Column variant="right">
        <SocialWrapper>
          {socials.map(({ id, icon, href }) => (
            <IconButton key={id} href={href}>
              {icon}
            </IconButton>
          ))}
        </SocialWrapper>
        <GeniusYieldLogoWrapper>
          <Typography fontWeight="400" fontSize="16px" lineHeight="20px" color="#C1CEF1" textAlign="end">
            Powered by
          </Typography>
          <GeniusYieldLogo />
        </GeniusYieldLogoWrapper>
      </Column>
    </Wrapper>
  </Container>
);

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  padding: "52px 0",
  borderTop: "1px solid rgba(120, 157, 255, 0.15)",
  position: "relative",
  zIndex: 10,

  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
    gap: "51px",
    padding: "60px 0 35px",
  },
}));

const Column = styled("div")<{ variant?: string }>(({ variant, theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "32px",

  ...(variant === "right" && {
    alignItems: "end",
    gap: 0,
  }),

  [theme.breakpoints.down("sm")]: {
    alignItems: "center",
    textAlign: "center",
    gap: "28px",

    "& .MuiTypography-root": {
      fontSize: "12px",
    },

    ...(variant === "right" && {
      gap: "72px",
    }),
  },
}));

const SocialWrapper = styled("div")({
  display: "flex",
  alignItems: "center",
  gap: "10px",

  button: {
    maxWidth: "40px",
    height: "40px",
  },
});

const TextWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  maxWidth: "374px",

  [theme.breakpoints.down("sm")]: {
    maxWidth: "325px",
  },
}));

const GeniusYieldLogoWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  marginTop: "auto",

  svg: {
    width: "153px",
    height: "29px",
  },

  [theme.breakpoints.down("md")]: {
    "& .MuiTypography-root": {
      fontSize: "14px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-root": {
      fontSize: "12px",
      textAlign: "center",
    },
  },
}));

export default Footer;
