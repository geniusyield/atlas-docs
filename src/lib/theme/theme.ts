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
  }

  interface CustomPalette {
    textColor: PaletteColor | AdditionalTextColorProps;
  }

  export interface Palette extends CustomPalette {}
  export interface PaletteOptions extends CustomPalette {}
}
