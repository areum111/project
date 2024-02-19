import styled from "styled-components";

export const MainWrapper = styled.div`
    .swiper-container {
        height: 100vh;
    }
    .video_wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: -1;
        .video {
            width: 175vw !important;
            min-width: 175vw;
            height: 116vh !important;
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

export const Intro = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    .title {
        text-align: center;
        color: ${(props) => props.theme.white1};
    }
`;