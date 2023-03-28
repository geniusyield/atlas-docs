import { styled, Typography } from '@mui/material';
import React from 'react';

import LargeContainer from '../../../components/Container/LargeContainer';
import { AboutSectionIcon } from '../../../components/Icons/AboutSectionIcon';

const AboutSection = () => (
    <LargeContainer>
        <Wrapper>
            <AboutSectionIcon />
            <Content>
                <Typography 
                    fontWeight="600" 
                    fontSize="60px" 
                    lineHeight="47px" 
                    letterSpacing="-0.02em"
                >
                    About Atlas
                </Typography>
                <Typography 
                    fontWeight="400" 
                    fontSize="24px" 
                    lineHeight="38px" 
                >
                    Atlas is an open source library that covers all functionalities that are needed to work with Plutus smart contracts and enables one to write the complete server side code in Haskell.
                </Typography>
            </Content>
        </Wrapper>
    </LargeContainer>
);

const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "15px",
    marginTop: "200px",

    [theme.breakpoints.down(769)]: {
        marginTop: "150px",
        gap: 0,

        svg: {
            width: "138px",
            height: "81px",
        }
    },

    [theme.breakpoints.down("sm")]: {
        marginTop: "120px",

        svg: {
            width: "150px",
            height: "100px",
        }
    },
}));

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    gap: "30px",

    "& .MuiTypography-root": {
        background: "linear-gradient(180deg, #F2F5FF 0%, rgba(245, 247, 255, 0.7) 100%)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        textFillColor: "transparent",
    },

    [theme.breakpoints.down(769)]: {
        gap: "21px",

        "& .MuiTypography-root:first-of-type": {
            fontSize: "30px",
            lineHeight: "23px",
        },

        "& .MuiTypography-root:last-of-type": {
            fontSize: "14px",
            lineHeight: "20px",
        },
    },

    [theme.breakpoints.down("sm")]: {
        "& .MuiTypography-root:first-of-type": {
            fontSize: "40px",
            lineHeight: "44px",
        },
    },
}));

export default AboutSection;