import {
    Button as MuiButton,
    ButtonProps as MUIButtonProps,
    Theme,
  } from "@mui/material";
  import { styled } from "@mui/material/styles";
  import { FC } from "react";
  
  export interface CustomButtonProps {
    size?: "large";
    variant?: "contained" | "outlined";
    color?: "primary" | "secondary" | "transparent",
  }
  
  export type ButtonProps = Omit<
    MUIButtonProps,
    "size" | "variant" | "color"
  > &
    CustomButtonProps;
  
  const Button: FC<ButtonProps> = ({
    children,
    size = "large",
    variant = "contained",
    color = "primary",
    onClick,
    ...props
  }) => {
    const ButtonStyled = styled((props: MUIButtonProps) => (
      <MuiButton {...props} />
    ))(({ theme }) => ({
        display: "flex",
        alignItems: "center",
        gap: '24px',
        textTransform: "none",

      ...getCustomSize(theme)[size][variant],
      ...getCustomColor(theme)[color],
    }));
  
    return (
      <ButtonStyled {...props} onClick={onClick}>
        {children}
      </ButtonStyled>
    );
  };
  
  const getCustomSize = (theme: any) => ({
    large: {
      contained: {
        padding: "10.35px",
        width: "100%",
      },
      outlined: {

      },
    },
  });
  
  const getCustomColor = (theme: Theme) => ({
    primary: {
        background: "linear-gradient(112.29deg, #1833F5 2.34%, #0094FF 84.24%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0px -3.8527px 15.4108px rgba(0, 0, 0, 0.1)",
        borderRadius: "14px",
    },
    secondary: {
        background: "#8298FF",
        borderRadius: "20px",
        padding: "10px 30px",
    },
    transparent: {
        background: "none",
        padding: 0,
    }
  });
  
  export default Button;