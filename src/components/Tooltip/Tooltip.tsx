import { styled, Tooltip as MuiTooltip, TooltipProps} from "@mui/material";

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
    <MuiTooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    "& .MuiTooltip-tooltip": {
      background: "rgba(255, 255, 255, 0.2)",
      border: "1px solid rgba(255, 255, 255, 0.15)",
      color: '#FFFFFF',
      fontSize: "12px",
      fontWeight: "400",
      lineHeight: "20px",
      borderRadius: "8px",
      padding: "4px",
      display: "flex",
      alignItems: "center",
      gap: "2px",
    },

    "& .MuiTooltip-arrow": {
        color: "rgba(255, 255, 255, 0.2)",

        "&:before": {
            border: "1px solid rgba(255, 255, 255, 0.15)",
        },
    },
  }));

export default Tooltip;