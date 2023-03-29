/* eslint-disable @next/next/no-img-element */
import { styled, Typography } from "@mui/material";
import React from "react";

import Button from "../../../components/Button/Button";
import LargeContainer from "../../../components/Container/LargeContainer";

const cards = [
  { id: 1, icon: "/images/partnersSection/mlabs.svg", href: "https://mlabs.city/" },
  { id: 2, icon: "/images/partnersSection/well-typed.svg", href: "https://well-typed.com/" },
  { id: 3, icon: "/images/partnersSection/plank.svg", href: "https://www.joinplank.com/lab/web3" },
];

const PartnersSection = () => (
  <LargeContainer>
    <Wrapper>
      <Typography fontWeight="600" fontSize="36px" lineHeight="44px" color="white">
        Partners
      </Typography>
      <CardWrapper>
        {cards.map(({ id, icon, href }) => (
          <Card key={id}>
            <img src={icon} alt="" />
            <a href={href} target="_blank">
              <Button color="secondary">
                <Typography fontWeight="700" fontSize="12px" lineHeight="14px" color="#0B2599">
                  Partner
                </Typography>
              </Button>
            </a>
          </Card>
        ))}
      </CardWrapper>
    </Wrapper>
  </LargeContainer>
);

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "140px",
  marginBottom: "127px",
  position: "relative",
  zIndex: 10,

  [theme.breakpoints.down(769)]: {
    "& .MuiTypography-root": {
      fontSize: "24px",
      lineHeight: "24px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    marginTop: "83px",
    marginBottom: "91px",

    "& .MuiTypography-root": {
      fontSize: "26px",
      lineHeight: "33px",
    },
  },
}));

const CardWrapper = styled("div")(({ theme }) => ({
  marginTop: "31px",
  display: "flex",
  alignItems: "stretch",
  justifyContent: "space-between",
  width: "100%",

  [theme.breakpoints.down("sm")]: {
    marginTop: "34px",
  },
}));

const Card = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "16px",
  width: "100%",
  maxWidth: "223px",

  a: {
    marginTop: "auto",
    maxWidth: "105px",

    button: {
      background: "#8298FF",
    },
  },

  img: {
    marginTop: "auto",
  },

  [theme.breakpoints.down(769)]: {
    maxWidth: "133px",

    img: {
      maxHeight: "64px",
      maxWidth: "142px",
    },

    a: {
      maxWidth: "85px",

      "& .MuiTypography-root": {
        fontSize: "12px",
        lineHeight: "10px",
      },
    },
  },

  [theme.breakpoints.down("sm")]: {
    maxWidth: "97px",

    img: {
      maxHeight: "45px",
      maxWidth: "103px",
    },

    a: {
      maxWidth: "77px",
      padding: "8px 16px",

      "& .MuiTypography-root": {
        lineHeight: "13px",
      },
    },
  },
}));

export default PartnersSection;
