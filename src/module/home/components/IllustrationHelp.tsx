import { styled, Typography } from '@mui/material';
import React from 'react';

import Chip from '../../../components/Chip/Chip';
import Button from '../../../components/Button/Button';
import Pagination from '../../../components/Pagination/Pagination';
import { HistoryIcon, SavedIcon } from '../../../components/Icons/Icons';

const illustrationItems = [
    { 
        id: 1, 
        icon: <SavedIcon />, 
        items: [
            { 
                id: 1, 
                value: <Chip label="#Atlas" /> 
            },
            { 
                id: 2, 
                value: <Chip label="#onchain" />
            },
            { 
                id: 3, 
                value: <Chip label="#problem" />
            },
        ],
    },
    { 
        id: 2, 
        icon: <HistoryIcon />, 
        items: [
            { 
                id: 1, 
                value:  <Button color="transparent">
                            <Typography fontWeight="400" fontSize="13px" lineHeight="24px" color="rgb(255, 255, 255, 0.8)">Share</Typography>
                        </Button> 
            },
            { 
                id: 2, 
                value:  <Button color="transparent">
                            <Typography fontWeight="400" fontSize="13px" lineHeight="24px" color="rgb(255, 255, 255, 0.8)">Improve this question</Typography>
                        </Button>
            },
            { 
                id: 3, 
                value:  <Button color="transparent">
                            <Typography fontWeight="400" fontSize="13px" lineHeight="24px" color="rgb(255, 255, 255, 0.8)">Follow</Typography>
                        </Button>
            },
        ],
    },
]

const IllustrationHelp = () => (
    <Wrapper>
        <Header>
            <Pagination />
            <Typography
                fontWeight="400"
                lineHeight="24px"
                fontSize="17px"
                color="rgba(255, 255, 255, 0.8)"
            >
                I have a question about
            </Typography>
            <Chip label="#Atlas" size="medium" color="primary" />
        </Header>
        <Content>
        {illustrationItems.map(({ id, icon, items }) => (
            <ItemWrapper key={id} >
                {icon}
                <Items variant={id === 2 ? "button" : ""}>
                    {items.map(({ id: order, value }) => <div key={order}>{value}</div>)}
                </Items>
            </ItemWrapper>
        ))}
        </Content>
    </Wrapper>
);

const Wrapper = styled("div")(({ theme }) => ({
    width: "100%",
    maxWidth: "436px",
    position: "absolute",
    bottom: 0,
    right: "68px",
    padding: "26px 37px 26px 42px",
    filter: "drop-shadow(0px -3.8527px 15.4108px rgba(0, 0, 0, 0.1))",
    background: "linear-gradient(112.29deg, #1833F5 2.34%, #0094FF 84.24%)",
    backdropFilter: "blur(7.22382px)",
    borderRadius: "11.5px 11.5px 0px 0px",
    zIndex: 5,

    [theme.breakpoints.down(1221)]: {
        padding: "13px 24px",
    },

    [theme.breakpoints.down(992)]: {
        maxWidth: "335px",
        right: "47px",
    },

    [theme.breakpoints.down(801)]: {
        maxWidth: "246px",
    },

    [theme.breakpoints.down(721)]: {
        maxWidth: "90%",
        right: "50%",
        transform: "translateX(50%)",
    },
}));

const Header = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "15px",

    [theme.breakpoints.down(992)]: {
        gap: "8px",

        "& .MuiTypography-root": {
            fontSize: "14px",
            lineHeight: "16px",
        },
    },

    [theme.breakpoints.down(801)]: {
        "& .MuiTypography-root": {
            fontSize: "9px",
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

const Content = styled("div")(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    gap: 20,
    marginTop: "43px",

    [theme.breakpoints.down(992)]: {
        gap: 10,
        marginTop: "25px",
    },

    [theme.breakpoints.down("sm")]: {
        gap: 12.5,
    },
}));

const ItemWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "26px",

    [theme.breakpoints.down(992)]: {
        gap: 16,

        svg: {
            maxWidth: "10px",
            maxHeight: "10px",
        }
    },
}));

const Items = styled("div")<{ variant?: string }>(({ variant, theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "3px",

    ...(variant === "button" && {
        gap: 0,

        "& > div, & > div > button": {
            padding: "0 12.5px",
            borderRight: "1px solid rgba(255, 255, 255, 0.15)",
            width: "auto",
            minWidth: "auto",

            "&:first-of-type": {
                paddingLeft: 0,
            },

            "&:last-of-type": {
                paddingRight: 0,
                border: "none",
            },
        },

        [theme.breakpoints.down(992)]: {
            "& > div": {
                padding: "0 7px",
            },
        },

        [theme.breakpoints.down(801)]: {
            "& > div": {
                "& .MuiTypography-root": {
                    fontSize: "7px",
                    lineHeight: "13px",
                },
            },
        },

        [theme.breakpoints.down("sm")]: {
            "& > div": {
                "& .MuiTypography-root": {
                    fontSize: "8.5px",
                    lineHeight: "15px",
                },
            },
        },
    })
}));

export default IllustrationHelp;