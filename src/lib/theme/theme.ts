import { PaletteColor, PaletteMode } from "@mui/material";

import { typography } from "./typography";
import { borderRadius } from "./borders";
import { breakpoints } from "./breakpoints";
import { lightPalette } from "./lightPalette";

export const getTheme = () => ({
  palette: lightPalette,
  breakpoints,
  borderRadius,
  typography,
});

declare module "@mui/material/Typography" {
  export interface TypographyPropsVariantOverrides {
    title1: true;
    title2: true;
    title3: true;
    title4: true;
    title5: true;
    title6: true;
    title7: true;
    title8: true;
    text1: true;
    text2: true;
    text3: true;
    text4: true;
    text5: true;
    text6: true;
    text7: true;
    text8: true;
  }
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
  export interface TypographyVariants {
    title1: any;
    title2: any;
    title3: any;
    title4: any;
    title5: any;
    title6: any;
    title7: any;
    title8: any;
    text1: any;
    text2: any;
    text3: any;
    text4: any;
    text5: any;
    text6: any;
    text7: any;
    text8: any;
  }

  export interface TypographyVariantsOptions {
    title1: any;
    title2: any;
    title3: any;
    title4: any;
    title5: any;
    title6: any;
    title7: any;
    title8: any;
    text1: any;
    text2: any;
    text3: any;
    text4: any;
    text5: any;
    text6: any;
    text7: any;
    text8: any;
  }

  interface CustomPalette {
    accent: {
      main: string;
      dark: string;
      bluePink: string;
      grey02Transparency: string;
      grey01Transparency: string;
      offWhite: string;
      black08Transparency: string;
      blueLinearGradient: string;
      blueBlackLinearGradient: string;
      offBlack: string;
      linearGreyShadowBigScreens: string;
      linearGreyShadowMediumScreens: string;
      offWhiteBlue: string;
      blue: string;
      blueGreyLinearGradient: string;
      blueGreyLinearGradient2: string;
      pinkBlueLinearGradient: string;
      main08Transparency: string;
      offWhite2: string;
      offWhite3: string;
      blueRadialGradient: string;
      blueRadialGradient2: string;
      whiteLinearGradient: string;
      offWhiteLinearGradient: string;
      offWhiteBlue2: string;
    };
  }

  export interface Palette extends CustomPalette {}
  export interface PaletteOptions extends CustomPalette {}
}
