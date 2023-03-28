import { styled, Typography } from "@mui/material";
import React, { useState } from "react";
import IconButton from "../Button/IconButton";
import { ArrowIcon } from "../Icons/ArrowIcon";

const Pagination = () => {
  const [count, setCount] = useState(0);

  const handleAddCount = () => setCount((count) => count + 1);

  const handleMinusCount = () => {
    if (count > 0) setCount((count) => count - 1);
  };

  return (
    <Wrapper>
      <IconButtonStyled onClick={handleAddCount}>
        <ArrowIcon />
      </IconButtonStyled>
      <Typography fontWeight="500" fontSize="18px" lineHeight="25px" color="rgb(255, 255, 255, 0.8)">
        {count}
      </Typography>
      <IconButtonStyled rotate="true" onClick={handleMinusCount}>
        <ArrowIcon />
      </IconButtonStyled>
    </Wrapper>
  );
};

const Wrapper = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "14px",
  marginRight: "10px",
  minWidth: "25px",

  [theme.breakpoints.down(992)]: {
    minWidth: "15px",
    gap: "10px",
    marginRight: "6px",
  },

  [theme.breakpoints.down(801)]: {
    "& .MuiTypography-root": {
      fontSize: "10px",
      lineHeight: "13px",
    },
  },

  [theme.breakpoints.down("sm")]: {
    "& .MuiTypography-root": {
      fontSize: "11px",
      lineHeight: "15px",
    },
  },
}));

const IconButtonStyled = styled(IconButton)<{ rotate?: string }>(({ rotate, theme }) => ({
  padding: 0,
  height: "6px",

  ...(rotate === "true" && {
    transform: "rotate(180deg)",
  }),

  [theme.breakpoints.down(801)]: {
    height: "3px",
  },
}));

export default Pagination;
