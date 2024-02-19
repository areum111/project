import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive'

const Header = () => {
    const nowLink = window.location.href;
    const [fixed, setFixed] = useState(false);
    const [worksPage, setWorksPage] = useState(false);
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        if(nowLink.indexOf('detail') > -1 || nowLink.indexOf('works') > -1){
            setWorksPage(true);
            if(nowLink.indexOf('detail') > -1){
                setFixed(true);
            }
        }else{
            setWorksPage(false);
        }
    },[worksPage]);

    return (
        <HeaderContainer className={fixed ? "fixed header" : "header"}>
            <div className="inner">
                <h1 onClick={() => setWorksPage(false)}><Link to="/">AREUM</Link></h1>
                <div className="gnb_wrap">
                    <ul>
                        <li onClick={() => setWorksPage(false)} className={worksPage ? "" : "active"}><Link to="/"><span>HOME</span></Link></li>
                        <li onClick={() => setWorksPage(true)} className={worksPage ? "active" : ""}><Link to="/works"><span>WORKS</span></Link></li>
                    </ul>
                </div>
            </div>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    color: ${(props) => props.theme.black1};
    z-index: 9999;
    transition: .3s;
    .inner {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
    &.fixed {
        background: ${(props) => props.theme.white_transparent9};
        box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.05);
    }
    h1 {
        font-weight: 600;
        font-size: 2rem;
    }
    .gnb_wrap {
        display: flex;
        align-items: center;
    }
    ul {
        display: flex;
        li {
            padding: 0 1rem;
            font-size: 1.6rem;
            &.active {
                span {
                    font-weight: 700;
                }
            }
            span {
                display: inline-block;
                min-width: 6rem;
                text-align: center;
                &:hover {
                    cursor: pointer;
                    font-weight: 700;
                }
            }
        }
    }
    .mode {
        display: flex;
        align-items: center;
        margin-left: 5rem;
        & > span {
            display: inline-block;
            margin: 0 0.4rem;
        }
        svg {
            display: inline-block;
            vertical-align: middle;
        }
    }
    @media screen and (max-width:767px) {
        height: 5rem;
        h1 {
            font-size: 1.4rem;
        }
        ul {
            li {
                padding: 0 1rem;
                font-size: 1.4rem;
                &:last-child {
                    padding-right: 0;
                }
                span {
                    min-width: auto;
                    &:hover {
                        font-weight: 700;
                    }
                }
            }
        }
    }
`;

export default Header;