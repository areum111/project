import React, { useEffect } from 'react';
import {Link} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MainWrapper, Intro, About, Skill, WORKS } from "styles/main.styled";
import { PiMouseSimpleThin } from "react-icons/pi";
import ProfileImg from 'images/profile.jpg';
import AOS from "aos";
import "aos/dist/aos.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
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

ChartJS.register(ArcElement, Tooltip, Legend);


const Main = ({ theme }) => {
    const isDesktop = useMediaQuery({ minWidth: 1024 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useEffect(() => {
        AOS.init();
    });

    const onSlideChange = (swiper) => {
        //console.log(swiper);
        const header = document.getElementsByClassName("header");
        let swiperIdx = swiper.activeIndex;
        if(swiperIdx === 0){
            header[0].classList.remove("fixed");
        }else{
            if(theme === 'whiteMode'){
                header[0].classList.add("fixed");
            }else{
                header[0].classList.remove("fixed");
            }
            if(swiperIdx === 1){
                document.getElementsByClassName("profile_img")[0].classList.add("fade_right");
                document.getElementsByClassName("about_title")[0].classList.add("fade_up1");
                document.getElementsByClassName("about_text")[0].classList.add("fade_up2");
            } else if(swiperIdx === 2){
                document.getElementsByClassName("skill_title")[0].classList.add("fade_up1");
                document.getElementsByClassName("skill_text")[0].classList.add("fade_up2");
                document.getElementsByClassName("doughnut_wrap")[0].classList.add("fade_left");
            }else if(swiperIdx === 3){
                document.getElementsByClassName("works_title")[0].classList.add("fade_up1");
                document.getElementsByClassName("work_swiper")[0].classList.add("fade_up2");
            }
        }
    }

    const data1 = {
        labels: ['', ''],
        datasets: [
            {
                data: [98, 2],
                backgroundColor: [
                    '#162946',
                    '#E0E0E0'
                ],
                borderWidth: 1,
                borderColor: '#DEEEF7',
                cutout: "75%",
            },
        ],
    };
    const data2 = {
        labels: ['', ''],
        datasets: [
            {
                data: [80, 20],
                backgroundColor: [
                    '#162946',
                    '#E0E0E0'
                ],
                borderWidth: 1,
                borderColor: '#DEEEF7',
                cutout: "75%",
            },
        ],
    };
    const data3 = {
        labels: ['', ''],
        datasets: [
            {
                data: [60, 40],
                backgroundColor: [
                    '#162946',
                    '#E0E0E0'
                ],
                borderWidth: 1,
                borderColor: '#DEEEF7',
                cutout: "75%",
            },
        ],
    };
    const data4 = {
        labels: ['', ''],
        datasets: [
            {
                data: [90, 10],
                backgroundColor: [
                    '#162946',
                    '#E0E0E0'
                ],
                borderWidth: 1,
                borderColor: '#DEEEF7',
                cutout: "75%",
            },
        ],
    };
    const data5 = {
        labels: ['', ''],
        datasets: [
            {
                data: [40, 60],
                backgroundColor: [
                    '#162946',
                    '#E0E0E0'
                ],
                borderWidth: 1,
                borderColor: '#DEEEF7',
                cutout: "75%",
            },
        ],
    };
    const data6 = {
        labels: ['', ''],
        datasets: [
            {
                data: [60, 40],
                backgroundColor: [
                    '#162946',
                    '#E0E0E0'
                ],
                borderWidth: 1,
                borderColor: '#DEEEF7',
                cutout: "75%",
            },
        ],
    };
    const chartOptions = {
        animation: {
            //loop: true,
            duration: 3000,
            delay: 1000,
        },
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: true,
            },
            tooltip: false,
        },
        responsive: true,
        maintainAspectRatio: true,
        aspectRatio: 2
    }

    const workLists = [
        {
            id: 1,
            image: thermosImg,
            brand: "Thermos",
            url: "/detail/thermos",
            tag: [
                {
                    id: 1,
                    name: "Cafe24"
                },
                {
                    id: 2,
                    name: "유지보수"
                },
                {
                    id: 3,
                    name: "운영"
                },
                {
                    id: 4,
                    name: "전체 리뉴얼"
                },
                {
                    id: 5,
                    name: "부분 개발"
                },
                {
                    id: 6,
                    name: "PC + MOBILE"
                },
            ]
        },
    ]

    return (
        <MainWrapper>
            <Swiper
                direction={{ vertical: true }}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                modules={[Mousewheel]}
                className="swiper-container"
                onSwiper={(swiper) => onSlideChange(swiper)}
                onSlideChange={(swiper) => onSlideChange(swiper)}
            >
                <SwiperSlide>
                    <Intro className="intro">
                        <div className="inner">
                            <div className="title_wrap">
                                <div className="border_box">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                    <h2 data-aos="flip-left">AREUM'S <span>PORTFOLIO
                                        <i
                                            data-aos="fade-right"
                                            data-aos-delay="1000"
                                            data-aos-duration="2000"
                                        ></i></span></h2>
                                    <p className="title">
                                        {isMobile ? <>
                                            <span data-aos="fade-up" data-aos-delay="500">퍼블리싱에 그치지 않고</span>
                                            <span data-aos="fade-up" data-aos-delay="600">프론트엔드를 향해 나아가는</span>
                                            <span data-aos="fade-up" data-aos-delay="700">도전적인 퍼블리셔 김아름입니다.</span>
                                        </> : <>
                                            <span data-aos="fade-up" data-aos-delay="500">퍼블리싱에 그치지 않고 프론트엔드를 향해 나아가는</span>
                                            <span data-aos="fade-up" data-aos-delay="700">도전적인 퍼블리셔 김아름입니다.</span>
                                        </>
                                        }
                                        
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="scroll">
                            <PiMouseSimpleThin size={isMobile ? "30" : "40"} />
                            <p>scroll down</p>
                        </div>
                    </Intro>
                </SwiperSlide>
                <SwiperSlide>
                    <About className="about">
                        <div className="inner">
                            <div className="left">
                                <div className="profile_img"><img src={ProfileImg} /></div>
                            </div>
                            <div className="right">
                                <h2 className="about_title">ABOUT <span>ME</span></h2>
                                <div className="about_text">
                                    <p>
                                        안녕하세요, 웹 퍼블리셔 김아름입니다.<br />
                                        항상 좋은 소스란 무엇일까 끊임없이 생각하고 고민하며 작업을 합니다.
                                    </p>
                                    <p>
                                        에이전시에서 많은 브랜드와 프로젝트를 담당하면서<br />
                                        React, React Native, NodeJS, PHP 등 다양한 언어를 다루었습니다.
                                    </p>
                                    <p>
                                        소통과 협업을 중요하게 생각하며 사용자의 입장에서 생각하려고 노력합니다.<br />
                                        맡은 프로젝트는 어떠한 경우에도 완수하며 신기술을 사용하는데 관심이 많습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flow_text">
                            <p className="flow-wrap">ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME</p>
                            <p className="flow-wrap">ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME</p>
                            <p className="flow-wrap">ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME ABOUT ME</p>
                        </div>
                    </About>
                </SwiperSlide>
                <SwiperSlide>
                    <Skill className="skill">
                        <div className="inner">
                            <div className="left">
                                <h2 className="skill_title">SKILL</h2>
                                <div className="skill_text">
                                    <p>카페24 브랜드 작업을 하면서<br />
                                    자바스크립트와 제이쿼리를 많이 사용했습니다.</p>
                                    <p>디자인 툴은 주로 피그마와 포토샵을 사용해<br />
                                    간단하게 다룰 줄 알며 퍼블리싱 작업하는데 익숙합니다.</p>
                                    <p>이 외에도 다양한 SI프로젝트 구축과 유지보수를 하며<br />
                                    React, NodeJS, PHP 언어를 다루었습니다.</p>
                                </div>
                            </div>
                            <div className="right doughnut_wrap">
                                <div className="doughnut">
                                    <div>
                                        <Doughnut
                                            data={data1}
                                            options={chartOptions}
                                        />
                                        <span>98</span>
                                    </div>
                                    <p>HTML</p>
                                </div>
                                <div className="doughnut">
                                    <div>
                                        <Doughnut
                                            data={data2}
                                            options={chartOptions}
                                        />
                                        <span>80</span>
                                    </div>
                                    <p>Javascript, jQuery</p>
                                </div>
                                <div className="doughnut">
                                    <div>
                                        <Doughnut
                                            data={data3}
                                            options={chartOptions}
                                        />
                                        <span>60</span>
                                    </div>
                                    <p>React</p>
                                </div>
                                <div className="doughnut">
                                    <div>
                                        <Doughnut
                                            data={data4}
                                            options={chartOptions}
                                        />
                                        <span>90</span>
                                    </div>
                                    <p>SCSS, CSS</p>
                                </div>
                                <div className="doughnut">
                                    <div>
                                        <Doughnut
                                            data={data5}
                                            options={chartOptions}
                                        />
                                        <span>40</span>
                                    </div>
                                    <p>PHP</p>
                                </div>
                                <div className="doughnut">
                                    <div>
                                        <Doughnut
                                            data={data6}
                                            options={chartOptions}
                                        />
                                        <span>60</span>
                                    </div>
                                    <p>Figma, Phptoshop</p>
                                </div>
                            </div>
                        </div>
                    </Skill>
                </SwiperSlide>
                <SwiperSlide>
                    <WORKS className="works">
                        <div className="works_wrap">
                            <h2 className="works_title">WORKS</h2>
                            <Swiper
                                slidesPerView={isMobile ? 1.5 : 2}
                                spaceBetween={isMobile ? 15 : 30}
                                navigation
                                pagination
                                loop
                                centeredSlides={true}
                                modules={[Navigation, Pagination]}
                                className="work_swiper"
                            >
                                <SwiperSlide>
                                    <Link to="/detail/thermos">
                                        <img src={thermosImg} alt="써모스" />
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
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/varram">
                                        <img src={varramImg} alt="바램펫" />
                                        <div className="text_wrap">
                                            <p className="brand">VARRAM</p>
                                            <div className="tag">
                                                <span>React</span>
                                                <span>신규 구축</span>
                                                <span>퍼블리싱</span>
                                                <span>반응형</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/ohora">
                                        <img src={ohoraImg} alt="오호라" />
                                        <div className="text_wrap">
                                            <p className="brand">ohora</p>
                                            <div className="tag">
                                                <span>Cafe24</span>
                                                <span>부분 리뉴얼</span>
                                                <span>부분 개발</span>
                                                <span>PC + MOBILE</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/moye">
                                        <img src={moyeImg} alt="모두의 예체능" />
                                        <div className="text_wrap">
                                            <p className="brand">모두의 예체능</p>
                                            <div className="tag">
                                                <span>React Native</span>
                                                <span>신규 구축</span>
                                                <span>퍼블리싱</span>
                                                <span>MOBILE APP</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/ododoc">
                                        <img src={ododocImg} alt="오도독" />
                                        <div className="text_wrap">
                                            <p className="brand">OdoDOC</p>
                                            <div className="tag">
                                                <span>퍼블리싱</span>
                                                <span>eDM</span>
                                                <span>PC</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/inspien">
                                        <img src={inspienImg} alt="인스피언" />
                                        <div className="text_wrap">
                                            <p className="brand">인스피언</p>
                                            <div className="tag">
                                                <span>React</span>
                                                <span>신규 구축</span>
                                                <span>퍼블리싱</span>
                                                <span>PC</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/infigo">
                                        <img src={infigoImg} alt="인피고" />
                                        <div className="text_wrap">
                                            <p className="brand">infigo</p>
                                            <div className="tag">
                                                <span>PHP</span>
                                                <span>유지보수</span>
                                                <span>퍼블리싱</span>
                                                <span>PC</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/physiogel">
                                        <img src={physiogelImg} alt="피지오겔" />
                                        <div className="text_wrap">
                                            <p className="brand">피지오겔</p>
                                            <div className="tag">
                                                <span>Cafe24</span>
                                                <span>퍼블리싱</span>
                                                <span>부분 개발</span>
                                                <span>PC + MOBILE</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/purcell">
                                        <img src={purcellImg} alt="퍼셀" />
                                        <div className="text_wrap">
                                            <p className="brand">퍼셀</p>
                                            <div className="tag">
                                                <span>Cafe24</span>
                                                <span>퍼블리싱</span>
                                                <span>부분 리뉴얼</span>
                                                <span>PC + MOBILE</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <Link to="/detail/mixsoon">
                                        <img src={mixsoonImg} alt="믹순" />
                                        <div className="text_wrap">
                                            <p className="brand">MIXSOON</p>
                                            <div className="tag">
                                                <span>Cafe24</span>
                                                <span>퍼블리싱</span>
                                                <span>부분 리뉴얼</span>
                                                <span>PC + MOBILE</span>
                                            </div>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </WORKS>
                </SwiperSlide>
            </Swiper>
        </MainWrapper>
    );
}

export default Main;