/* eslint-disable @next/next/no-img-element */
import { Button, Drawer, Grid, styled, Typography } from "@mui/material";
import { ReactNode, useState } from "react";
import Link from "next/link";

import IconButton from "../Button/IconButton";
import { CloseIcon, MenuIcon } from "../Icons/Icons";

interface Props {
  navbar: {
    icon: ReactNode;
    title: string;
    link: string;
  }[];
}

const MobileNavigation = ({ navbar }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Grid display={{ xs: "flex", md: "none" }} onClick={() => setOpen(!open)}>
      <IconButtonStyled>{!open ? <MenuIcon /> : <CloseIcon />}</IconButtonStyled>
      <DrawerStyled anchor="top" open={open}>
        <Nav>
          {navbar.map(({ title, link, icon }) => (
            <Link key={title} href={link}>
              <NavItem key={title}>
                {icon}
                <Typography
                  fontFamily="Inter, sans-serif"
                  fontWeight="400"
                  fontSize="16px"
                  lineHeight="19px"
                  color="#FFFFFF">
                  {title}
                </Typography>
              </NavItem>
            </Link>
          ))}
        </Nav>
        <ButtonStyled variant="contained">
          <Typography className="title8" variant="title8">
            Get Started{" "}
            <img className="doubleArrows" alt="doubleArrows" src={"/images/titleSection/DoubleArrows.png"} />
            <img
              className="doubleArrowsShadow"
              alt="doubleArrowsShadow"
              src={"/images/titleSection/DoubleArrowsShadow.png"}
            />
          </Typography>
        </ButtonStyled>
      </DrawerStyled>
    </Grid>
  );
};

const IconButtonStyled = styled(IconButton)({
  width: "28px",
  height: "28px",
});

const DrawerStyled = styled(Drawer)(({ theme }) => ({
  gap: "42px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  "& .MuiPaper-root": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    width: "100%",
    height: "100%",
  },

  "& .MuiBackdrop-root": {
    top: "81px",
    backdropFilter: "blur(20px)",
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiBackdrop-root": {
      top: "74px",
    },
  },

  [theme.breakpoints.up("md")]: {
    display: "none",
  },
}));

const Nav = styled("ul")({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  gap: "36px",
});

const NavItem = styled("li")({
  display: "flex",
  alignItems: "center",
  gap: "8px",
  cursor: "pointer",
});

const ButtonStyled = styled(Button)(({ theme }) => ({
  width: "204px",
  height: "68px",
  margin: "40px auto 0",
  background: theme.palette.accent.blueLinearGradient,
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

export default MobileNavigation;
