import { CSSProperties } from "react";
import { PaletteColor, PaletteMode } from "@mui/material";

import { typography } from "./typography";
import { borderRadius } from "./borders";
import { breakpoints } from "./breakpoints";
import { lightPalette } from "./lightPalette";
import { darkPalette } from "./darkPalette";

export const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === "light" ? lightPalette : darkPalette),
  },
  breakpoints,
  borderRadius,
  typography,
});

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {}
}

declare module "@mui/material/styles" {
  export interface ThemeOptions {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      md: string;
      lg: string;
    };
  }
  export interface Theme {
    borderRadius: {
      xxs: string;
      xs: string;
      sm: string;
      ms: string;
      md: string;
      lg: string;
    };
  }
  export interface TypographyVariants {}

  export interface TypographyVariantsOptions {}

  interface AdditionalTextColorProps {
    offBlack: any;
    main08Transparency: any;
    offWhite2: any;
    offWhite3: any;
    blueRadialGradient: any;
    blueRadialGradient2: any;
    whiteLinearGradient: any;
    offWhiteLinearGradient: any;
    offWhiteBlue: any;
  }

  interface CustomPalette {
    textColor: PaletteColor & AdditionalTextColorProps;
    primary: {
      main: any;
      grey02Transparency: any;
      grey01Transparency: any;
      offWhite: any;
      black08Transparency: any;
      blueLinearGradient: any;
      offBlack: any;
      linearGreyShadowBigScreens: any;
      linearGreyShadowMediumScreens: any;
      offWhiteBlue: any;
      blue: any;
      blueGreyLinearGradient: any;
      blueGreyLinearGradient2: any;
      pinkBlueLinearGradient: any;
    };
  }

  export interface Palette extends CustomPalette {}
  export interface PaletteOptions extends CustomPalette {}
}
