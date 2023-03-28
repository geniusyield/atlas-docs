import React from "react";
import { styled } from "@mui/material";

interface Props {
  children: React.ReactNode;
  styles?: any;
  id?: string;
}

const LargeContainer = ({ children, styles, id }: Props) => (
  <Wrapper style={styles} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled("div")(({ theme }) => ({
  width: "783px",
  maxWidth: "90%",
  margin: "0 auto",
  zIndex: 9999,

  [theme.breakpoints.down(769)]: {
    width: "468px",
  },
}));

export default LargeContainer;