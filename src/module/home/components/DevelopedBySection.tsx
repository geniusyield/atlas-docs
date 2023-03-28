import { styled, Typography } from '@mui/material';
import React from 'react';
import IconButton from '../../../components/Button/IconButton';
import LargeContainer from '../../../components/Container/LargeContainer';
import { GeniusYieldLogo, LinkedInIcon } from '../../../components/Icons/Icons';

const DevelopedBySection = () => (
        <LargeContainer>
            <Wrapper>
                <Typography
                    fontWeight="600"
                    fontSize="36px"
                    lineHeight="44px"
                    color="white"
                    marginBottom="44px"
                >
                    Developed by
                </Typography>
                <GeniusYieldLogo />
                <TextWithButton>
                    <Typography
                        fontWeight="400"
                        fontSize="24px"
                        lineHeight="44px"
                        letterSpacing="-0.02em"
                        color="#C1CEF1"
                    >
                        Under the direction of Dr. Lars Brünjes
                    </Typography>
                    <IconButton variant="contained">
                        <LinkedInIcon />
                    </IconButton>
                </TextWithButton>
                <ImageWrapper>
                    <img src="/images/developedBySection/image.png" alt="" />
                </ImageWrapper>
            </Wrapper>
        </LargeContainer>
    );

const Wrapper = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
    alignItems: "center",
    marginTop: "160px",

    [theme.breakpoints.down(769)]: {
        marginTop: "140px",

        "& .MuiTypography-root": {
            fontSize: "24px",
            lineHeight: "25px",
            marginBottom: "20px"
        },

        svg: {
            width: "174px",
            height: "33px",
        }
    },

    [theme.breakpoints.down("sm")]: {
        marginTop: "120px",

        "& .MuiTypography-root": {
            fontSize: "26px",
            lineHeight: "33px",
            marginBottom: "36px"
        },

        svg: {
            width: "219px",
            height: "41px",
        }
    },
}));

const TextWithButton = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "16px",
    margin: "16px 0",

    [theme.breakpoints.down(769)]: {
        margin: "8px 0",
        gap: "8px",
    
        "& .MuiTypography-root": {
            fontSize: "14px",
            lineHeight: "25px",
            marginBottom: 0,
        },

        button: {
            width: "24px",
            height: "24px",
            borderRadius: "4px",

            svg: {
                width: "8px",
                height: "8px",
            }
        }
    },

    [theme.breakpoints.down("sm")]: {
        margin: "12.5px 0 11px",

        "& .MuiTypography-root": {
            lineHeight: "33px",
        },

        button: {
            width: "30px",
            height: "30px",
            borderRadius: "8px",

            svg: {
                width: "11px",
                height: "11px",
            }
        }
    },
}));

const ImageWrapper = styled("div")(({ theme }) => ({
    padding: "6px",
    border: "1.5px solid #3665FF",
    borderRadius: "50%",
    width: "100px",
    height: "100px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    img: {
        display: "block",
        width: "88px",
        height: "88px",
        borderRadius: "50%",
    },

    [theme.breakpoints.down(769)]: {
        width: "56px",
        height: "56px",
        padding: "3px",
        borderWidth: "1px",

        img: {
            width: "50px",
            height: "50px",
        },
 
    },

    [theme.breakpoints.down(769)]: {
        width: "76px",
        height: "76px",
        padding: "4px",
        borderColor: "rgba(54, 101, 255, 0.5)",

        img: {
            width: "68px",
            height: "68px",
        },
 
    },
}));

export default DevelopedBySection;