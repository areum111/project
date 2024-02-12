import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Mousewheel, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ReactPlayer from 'react-player/lazy';
import ThumbnailImg from 'images/thumbnail.jpeg';

const Main = () => {
    

    return (
        <MainWrapper>
            <Swiper
                direction={{ vertical: true }}
                pagination={{
                    clickable: true,
                }}
                mousewheel={true}
                navigation={true}
                modules={[Mousewheel, Navigation]}
                className="swiper-container"
            >
                <SwiperSlide>
                    <div className="video_wrap">
                        <div className="video"><img src={ThumbnailImg} alt="" /></div>
                        <ReactPlayer
                            className="video"
                            url="https://player.vimeo.com/video/898860227?h=9f1c3afb20"
                            muted
                            playing
                            loop
                        />
                        
                        <div className="video_dimmed"></div>
                    </div>
                    <Intro className="intro">
                        <p className="title">
                            프론트엔드를 향해 나아가는
                            퍼블리셔 김아름입니다.
                        </p>
                    </Intro>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
        </MainWrapper>
    );
}

const MainWrapper = styled.div`
    .swiper-container {
        height: 100vh;
    }
    .video_wrap {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        .video {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 140vw !important;
            height: 100% !important;
        }
        .video_dimmed {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background: rgba(0,0,0,0.5);
            z-index: 1;
        }
    }
    .swiper-slide {
        &:first-child {
            background: skyblue;
        }
        &:second-child {
            background: red;
        }
    }
`

const Intro = styled.div`
    background: skyblue;
    .title {
        text-align: center;
    }
`;

export default Main;