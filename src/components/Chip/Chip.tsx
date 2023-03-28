import { Chip as MuiChip, ChipProps as MUIChipProps, styled, Theme } from "@mui/material";
import { FC } from "react";

type CustomChipColor = "default" | "primary";
type CustomChipSize = "small" | "medium";

interface CustomChipProps {
  color?: CustomChipColor;
  size?: CustomChipSize;
}
export type ChipProps = Omit<MUIChipProps, "color"> & CustomChipProps;

const Chip: FC<ChipProps> = ({ color = "default", size = "small", ...props }) => {
  const StyledChip = styled(MuiChip)(({ theme }) => ({

    ...getCustomSize(theme)[size as CustomChipSize],
    ...getCustomColor(theme)[color as CustomChipColor],

    "& .MuiChip-label": {
      padding: 0,
      opacity: 0.8,
    },
  }));

  return <StyledChip {...props} />;
};

const getCustomColor = (theme: Theme) => ({
  default: {
    backgroundColor: "#001045",
    color: "#fff",
    boxShadow: "0px 1.01161px 1.01161px rgba(0, 0, 0, 0.25)",
    borderRadius: "4px",
  },
  primary: {
    background: "#B5C5FF",
    color: "#0B1E61",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    boxShadow: "0px 1.01161px 2.02321px rgba(0, 0, 0, 0.15)",
    borderRadius: "8px",
  },
});

const getCustomSize = (theme: Theme) => ({
  medium: {
    padding: "9px 25px",
    maxHeight: "38.5px",

    "& .MuiChip-label": {
      fontFamily: 'JetBrains Mono, sans-serif',
      fontWeight: 500,
      fontSize: "16px",
      lineHeight: "20px",
    },

    [theme.breakpoints.down(801)]: {
      padding: "5px 14px",
      maxHeight: "22px",

      "& .MuiChip-label": {
        fontSize: "9px",
        lineHeight: "11px",
      },
    },

    [theme.breakpoints.down("sm")]: {
      padding: "6px 16px",
      maxHeight: "24px",

      "& .MuiChip-label": {
        fontSize: "10px",
        lineHeight: "12px",
      },
    },
  },
  small: {
    padding: "0 10px",
    maxHeight: "24px",

    "& .MuiChip-label": {
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: "13px",
        lineHeight: "24px",
    },

    [theme.breakpoints.down(801)]: {
      padding: "0 5px",
      maxHeight: "14px",

      "& .MuiChip-label": {
        fontSize: "7px",
        lineHeight: "13px",
      },
    },

    [theme.breakpoints.down("sm")]: {
      padding: "0 6px",
      maxHeight: "15px",

      "& .MuiChip-label": {
        fontSize: "8.5px",
        lineHeight: "15px",
      },
    },
  },
});

export default Chip;