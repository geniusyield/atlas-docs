import {
    styled,
    TextField as MuiTextField,
    TextFieldProps as MUITextFieldProps,
    Theme,
  } from "@mui/material";
  import { FC, ReactElement } from "react";
  
  type CustomTextFieldColor = "primary";
  type CustomTextFieldSize = "medium";
  
  export interface CustomTextFieldProps {
    color?: CustomTextFieldColor;
    size?: CustomTextFieldSize;
  }
  
  export type TextFieldProps = Omit<
    MUITextFieldProps,
    "color" | "size"
  > &
    CustomTextFieldProps;
  
  const Textfield: FC<TextFieldProps> = ({
    color = "primary",
    size = "medium",
    ...props
  }): ReactElement => (
    <TextFieldStyled color={color} size={size} {...props} />
  );
  
  const TextFieldStyled = styled(
    ({ color, size, ...props }: TextFieldProps) => (
      <MuiTextField {...props} />
    )
  )(({ theme, color, size }) => ({
    "& .Mui-error fieldset": {
      borderColor: theme.palette.error.main,
      borderWidth: "1px !important",
    },
    "& .MuiOutlinedInput-input": {
      padding: "0px",
      height: "100%",
    },
  
    ...getCustomColor(theme)[color as CustomTextFieldColor],
    ...getCustomSize(theme)[size as CustomTextFieldSize],
  }));
  
  const getCustomColor = (theme: Theme) => ({
    primary: {
      background: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      borderRadius: "12px",

      "& fieldset": {
        borderWidth: "0px",
      },
      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        border: "none",
      },
      "& input": {
        zIndex: 1,
        color: "#FFFFFF",
        fontSize: "14px", 
        fontWeight: 400,
      },
      "& input::placeholder": {
        fontFamily: "Inter, sans-serif",
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: "14px", 
        lineHeight: "20px",
        color: "#FFFFFF",
        opacity: 1,
      },
    },
  });
  
  const getCustomSize = (theme: any) => ({
    medium: {
      width: "100%",
      maxWidth: "320px",
  
      "& .MuiOutlinedInput-root": {
        padding: "12px 8px 12px 16px",
      },
  
      "& input.MuiOutlinedInput-input": {
        fontSize: "14px", 
        lineHeight: "20px",
        zIndex: 1,
        fontWeight: 400,
      },
    },
  });
  
  export default Textfield;