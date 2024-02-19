import React, { useState, useEffect } from 'react';
import Header from 'layouts/header'
import { GoSun } from "react-icons/go";
import { IoMoonOutline } from "react-icons/io5";
import styled from 'styled-components';
import { whiteTheme, darkTheme } from '../theme';
import { HiArrowSmallUp } from "react-icons/hi2";


const Layout = ({ children, setTheme }) => {
    const [ScrollY, setScrollY] = useState(0);
    const [darkMode, setDarkMode] = useState(false);
    const [showTopButton, setShowTopButton] = useState(false);

    const scrollToTop = () => {
        setScrollY(0);
        window.scroll({
            top: 0,
        });
    }

    const handleToggle = () => {
        setDarkMode(!darkMode);
        if(darkMode){
            setTheme(whiteTheme);
        }else{
            setTheme(darkTheme);
        }
    }

    function handleScroll(){
        console.log(ScrollY);
        if(ScrollY > 800) {
            setScrollY(window.pageYOffset);
            setShowTopButton(true);
        }else{
            setScrollY(window.pageYOffset);
            setShowTopButton(false);
        }
    }

    useEffect(() => {
        function scrollListener() {  window.addEventListener("scroll", handleScroll); }
        scrollListener();
        return () => { window.removeEventListener("scroll", handleScroll); };
    });

    return (
        <LayoutContainer>
            <Header setTheme={setTheme} />
            {children}
            {showTopButton &&
                <div className="top_btn">
                    <button type="button" onClick={scrollToTop}>
                        <HiArrowSmallUp  size="22" />
                    </button>
                </div>
            }
            <div className="mode_btn">
                <button
                    type="button"
                    onClick={handleToggle}
                    className={darkMode ? "dark" : null}
                >
                {darkMode ? <IoMoonOutline size="22" /> : <GoSun size="22" />}
            </button>
            </div>
        </LayoutContainer>
    )
}

const LayoutContainer = styled.div`
    .top_btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 8rem;
        right: 2rem;
        z-index: 9999;
        button {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            background: ${(props) => props.theme.white_transparent9};
            opacity: 0.7;
            box-shadow: ${(props) => props.theme.black_shadow};
            transition: .3s;
            &:hover {
                opacity: 1;
            }
            svg {
                fill: ${(props) => props.theme.black1};
                vertical-align: middle;
            }
        }
    }
    .mode_btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        z-index: 9999;
        button {
            width: 5rem;
            height: 5rem;
            border-radius: 50%;
            background: ${(props) => props.theme.white_transparent9};
            opacity: 0.7;
            box-shadow: ${(props) => props.theme.black_shadow};
            transition: .3s;
            &:hover {
                opacity: 1;
            }
            svg {
                fill: ${(props) => props.theme.black1};
                vertical-align: middle;
            }
        }
    }
`

export default Layout;