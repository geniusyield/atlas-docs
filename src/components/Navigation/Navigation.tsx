import { Box, InputAdornment, styled, Typography } from '@mui/material';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import Tooltip from '../Tooltip/Tooltip';
import Container from '../Container/Container';
import Textfield from '../Textfield/Textfield';
import { AboutIcon, DocumentationIcon, GitHubIcon, Logo, StarIcon } from '../Icons/Icons';
import MobileNavigation from './MobileNavigation';

const navbar = [
    { icon: <DocumentationIcon />, title: "Documentation", link: "#" },
    { icon: <AboutIcon />, title: "About", link: "#" },
]

const Navigation = () => {
    const [headerScroll, setHeaderScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY < 73) {
                return setHeaderScroll(false);
            } else if (window.scrollY > 70) {
                return setHeaderScroll(true);
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])
    
    return (
        <Wrapper scroll={headerScroll}>
            <Container>
                <Content>
                    <LogoWithNav>
                        <LogoWrapper>
                            <Logo />
                        </LogoWrapper>
                        <Nav>
                            {navbar.map(({ title, link, icon }) => (
                                <Link key={title} href={link}>
                                    <NavItem key={title}>
                                        {icon}
                                        <Typography 
                                            fontFamily="Inter, sans-serif" 
                                            fontWeight="400" 
                                            fontSize="17px" 
                                            lineHeight="21px" 
                                            color="rgba(255, 255, 255, 0.8)"
                                        >
                                            {title}
                                        </Typography>
                                    </NavItem>
                                </Link>
                            ))}
                        </Nav>
                    </LogoWithNav>
                    <ActionsWrapper>
                        <Textfield 
                            placeholder="Search documentation..." 
                            InputProps={{ 
                                endAdornment: 
                                <InputAdornment position="end">
                                    <Box padding="4px 14px" bgcolor="#050810" borderRadius="8px" border="1px solid rgba(255, 255, 255, 0.1)">
                                        <Typography
                                            fontFamily="Onest, sans-serif" 
                                            fontWeight="400" 
                                            fontSize="12px" 
                                            lineHeight="20px" 
                                            color="#FFFFFF"
                                        >
                                            ⌘ K
                                        </Typography>
                                    </Box>
                                </InputAdornment>
                            }} 
                        />
                        <GitHubWrapper>
                            <TooltipStyled
                                open={true}
                                placement="right"
                                title={
                                    <>
                                        <StarIcon />
                                        <Typography
                                            fontFamily="Inter, sans-serif" 
                                            fontWeight="400" 
                                            fontSize="12px" 
                                            lineHeight="20px" 
                                            color="#FFFFFF"
                                        >
                                            161
                                        </Typography>
                                    </>
                                }
                                arrow
                            >
                                <div><GitHubIcon /></div>
                            </TooltipStyled>
                        </GitHubWrapper>
                    </ActionsWrapper>
                    <MobileNavigation navbar={navbar} />
                </Content>
            </Container>
        </Wrapper>
    );
};

const Wrapper = styled("div")<{ scroll: boolean }>(({ scroll, theme })=> ({
    width: "100%",
    padding: "23px 0",
    background: "black",
    borderBottom: "1px solid rgba(0, 0, 0, 0.15)",
    position: "sticky",
    top: 0,
    left: 0,
    zIndex: 12,
    transition: "1s",

    ...(scroll && {
        background: "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(0, 0, 0, 0) 95.31%), rgba(255, 255, 255, 0.03)",
        backdropFilter: "blur(50px)",
    }),

    [theme.breakpoints.down("md")]: {
        padding: "18px 0",
    },

    [theme.breakpoints.down("sm")]: {
        padding: "15px 0 14px",
    },
}));

const Content = styled("div")({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
});

const LogoWithNav = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "61px",

    [theme.breakpoints.down(1001)]: {
        gap: "30px",
    },
}));

const LogoWrapper = styled("div")({
    cursor: "pointer",
});

const Nav = styled("ul")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "40px",

    [theme.breakpoints.down(1001)]: {
        gap: "15px",
    },

    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const NavItem = styled("li")({
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
});

const ActionsWrapper = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",

    "& .MuiOutlinedInput-root": {
        minWidth: "320px",
    },

    [theme.breakpoints.down("md")]: {
        display: "none",
    },
}));

const GitHubWrapper = styled("div")({
    display: "flex",
    alignItems: "center",
    gap: "11.4px",
});

const TooltipStyled = styled(Tooltip)(({ theme }) => ({
    [theme.breakpoints.down("md")]: {
        display: "none",
    }
}));

export default Navigation;