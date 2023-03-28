import React from "react";
import { styled } from "@mui/material";

interface Props {
  children: React.ReactNode;
  styles?: any;
  id?: string;
}

const Container = ({ children, styles, id }: Props) => (
  <Wrapper style={styles} id={id}>
    {children}
  </Wrapper>
);

const Wrapper = styled("div")(({ theme }) => ({
  width: "1464px",
  maxWidth: "90%",
  margin: "0 auto",
  zIndex: 9999,

  [theme.breakpoints.down("xl")]: {
    width: "1220px",
  },

  // [theme.breakpoints.down("lg")]: {
  //   width: "1000px",
  // },
}));

export default Container;