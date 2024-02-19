import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AOS from "aos";
import "aos/dist/aos.css";
import { ReactTyped } from "react-typed";
import thermosImg from 'images/works/thermos.jpg';
import infigoImg from 'images/works/infigo.jpg';
import inspienImg from 'images/works/inspien.jpg';
import moyeImg from 'images/works/moye.jpg';
import ododocImg from 'images/works/ododoc.jpg';
import ohoraImg from 'images/works/ohora.jpg';
import physiogelImg from 'images/works/physiogel.jpg';
import purcellImg from 'images/works/purcell.jpg';
import varramImg from 'images/works/varram.jpg';
import mixsoonImg from 'images/works/mixsoon.jpg';
import { useMediaQuery } from 'react-responsive';

const Works = () => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const [ScrollY, setScrollY] = useState(0);
    const [ScrollActive, setScrollActive] = useState(false); 

    function handleScroll() { 
        if(ScrollY > 10) {
            setScrollY(window.pageYOffset);
            setScrollActive(true);
            document.getElementsByClassName("header")[0].classList.add("fixed");
        } else {
            setScrollY(window.pageYOffset);
            setScrollActive(false);
            document.getElementsByClassName("header")[0].classList.remove("fixed");
        }
    }
    useEffect(() => {
        function scrollListener() {  window.addEventListener("scroll", handleScroll); }
        scrollListener();
        return () => { window.removeEventListener("scroll", handleScroll); };
    });

    return (
        <WorksList>
            <div className="title_wrap">
                <div className="inner">
                    <h2>
                        <ReactTyped
                            strings={["WORKS"]}
                            typeSpeed={90} //타이핑 속도
                            style={{
                                color: `${(props) => props.theme.black2}`,
                                fontSize: `${isMobile ? "3rem" : "5rem"}`,
                                alignItems: "center",
                                fontWeight: "600"
                            }}
                        />
                    </h2>
                </div>
            </div>
            <ul className="inner">
                <li>
                    <Link to="/detail/thermos">
                        <p className="img_wrap"><img src={thermosImg} alt="써모스" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">THERMOS</p>
                        <div className="tag">
                            <span>Cafe24</span>
                            <span>유지보수</span>
                            <span>운영</span>
                            <span>전체 리뉴얼</span>
                            <span>부분 개발</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/varram">
                        <p className="img_wrap"><img src={varramImg} alt="바램펫" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">VARRAM</p>
                        <div className="tag">
                            <span>React</span>
                            <span>신규 구축</span>
                            <span>퍼블리싱</span>
                            <span>반응형</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/ohora">
                        <p className="img_wrap"><img src={ohoraImg} alt="오호라" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">ohora</p>
                        <div className="tag">
                            <span>Cafe24</span>
                            <span>부분 리뉴얼</span>
                            <span>부분 개발</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/moye">
                        <p className="img_wrap"><img src={moyeImg} alt="모두의 예체능" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">모두의 예체능</p>
                        <div className="tag">
                            <span>React Native</span>
                            <span>신규 구축</span>
                            <span>퍼블리싱</span>
                            <span>MOBILE APP</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/ododoc">
                        <p className="img_wrap"><img src={ododocImg} alt="오도독" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">OdoDOC</p>
                        <div className="tag">
                            <span>퍼블리싱</span>
                            <span>eDM</span>
                            <span>PC</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/inspien">
                        <p className="img_wrap"><img src={inspienImg} alt="인스피언" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">INSPIEN BACKOFFICE</p>
                        <div className="tag">
                            <span>React</span>
                            <span>신규 구축</span>
                            <span>퍼블리싱</span>
                            <span>PC</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/infigo">
                        <p className="img_wrap"><img src={infigoImg} alt="인피고" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">infigo</p>
                        <div className="tag">
                            <span>PHP</span>
                            <span>유지보수</span>
                            <span>퍼블리싱</span>
                            <span>PC</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/physiogel">
                        <p className="img_wrap"><img src={physiogelImg} alt="피지오겔" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">PHYSIOGEL</p>
                        <div className="tag">
                            <span>Cafe24</span>
                            <span>퍼블리싱</span>
                            <span>부분 개발</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/purcell">
                        <p className="img_wrap"><img src={purcellImg} alt="퍼셀" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">PURCELL</p>
                        <div className="tag">
                            <span>Cafe24</span>
                            <span>퍼블리싱</span>
                            <span>부분 리뉴얼</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/detail/mixsoon">
                        <p className="img_wrap"><img src={mixsoonImg} alt="믹순" /></p>
                    </Link>
                    <div className="text_wrap">
                        <p className="brand">MIXSOON</p>
                        <div className="tag">
                            <span>Cafe24</span>
                            <span>퍼블리싱</span>
                            <span>부분 리뉴얼</span>
                            <span>PC + MOBILE</span>
                        </div>
                    </div>
                </li>
            </ul>
        </WorksList>
    );
}

const WorksList = styled.div`
    padding-bottom: 10rem;
    .title_wrap {
        padding: 15rem 0 5rem;
        background: ${(props) => props.theme.white_gradient};
        background-size: 150% 150%;
        animation: gradient 10s ease infinite;
    }
    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 00% 50%;
        }
    }
    h2 {
        margin-bottom: 2rem;
        font-weight: 600;
    }
    ul {
        display: flex;
        flex-wrap: wrap;
        li {
            width: calc((100% - 6rem) /  4);
            margin-bottom: 5rem;
            margin-left: 2rem;
            &:nth-child(4n + 1) {
                margin-left: 0;
            }
            .img_wrap {
                overflow: hidden;
                box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.05);
                border-radius: 1rem;
                transition: 0.3s;
                &:hover {
                    box-shadow: 1px 2px 5px 5px rgba(0,0,0,0.1);
                }
            }
        }
    }
    .text_wrap {
        margin-top: 2rem;
        .brand {
            font-size: 1.8rem;
            font-weight: 600;
        }
        .tag {
            margin-top: 1rem;
            span {
                position: relative;
                display: inline-block;
                margin-right: 0.5rem;
                font-size: 1.3rem;
                color: ${(props) => props.theme.gray4};
                &::after {
                    display: inline-flex;
                    align-items: center;
                    justify-content: flex-end;
                    content: "·";
                    padding-left: 0.5rem;
                }
                &:last-child::after {
                    content: none;
                }
            }
        }
    }
    @media screen and (max-width:1023px) {
        
    }
    @media screen and (max-width:767px) {
        padding-bottom: 5rem;
        .title_wrap {
            padding: 10rem 0 3rem;
        }
        h2 {
            margin-bottom: 0;
            span {
                font-size: 3rem;
            }
        }
        ul {
            li {
                width: calc((100% - 2rem) /  2);
                margin-bottom: 3rem;
                margin-left: 2rem;
                &:nth-child(2n + 1) {
                    margin-left: 0;
                }
                .img_wrap {
                    &:hover {
                        box-shadow: 1px 2px 3px 1px rgba(0,0,0,0.05);
                    }
                }
            }
        }
        .text_wrap {
            margin-top: 1.5rem;
            .brand {
                font-size: 1.6rem;
            }
            .tag {
                margin-top: 0.5rem;
                span {
                    font-size: 1.1rem;
                }
            }
        }
    }
`

export default Works;