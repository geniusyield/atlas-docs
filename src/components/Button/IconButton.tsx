import { IconButton as MuiIconButton, IconButtonProps as MuiIconButtonProps, styled, Theme } from "@mui/material";
import React from "react";

interface IconButtonCustomProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  variant?: "transparent" | "contained";
}

export type IconButtonProps = MuiIconButtonProps & IconButtonCustomProps;

const IconButton = ({ children, href, variant = "transparent", ...props }: IconButtonProps) => (
  <MuiIconButtonStyled variant={variant} {...props}>
    <SocialRef target="_blank" href={href}>
      {children}
    </SocialRef>
  </MuiIconButtonStyled>
);

const SocialRef = styled("a")({
  height: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const MuiIconButtonStyled = styled(MuiIconButton)<{ variant?: "transparent" | "contained" }>(({ variant }) => ({
  ...(variant === "contained" && {
    padding: "12px 13px",
    background: "linear-gradient(214.76deg, #3360FF 20.48%, #002AC0 88.06%)",
    borderRadius: "10px",
    border: "1px solid rgba(255, 255, 255, 0.8)",
    maxHeight: "40px",
    maxWidth: "40px",
  }),
}));

export default IconButton;
