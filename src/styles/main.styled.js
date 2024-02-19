import styled from "styled-components";

export const MainWrapper = styled.div`
    .swiper-container {
        height: 100vh;
    }
    .fade_right {
        animation-name: fadeRight;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
    .fade_left {
        animation-name: fadeLeft;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
    .fade_up1 {
        animation-name: fadeUp;
        animation-duration: 2s;
        animation-fill-mode: forwards;
    }
    .fade_up2 {
        animation-name: fadeUp;
        animation-duration: 2s;
        animation-fill-mode: forwards;
        animation-delay: 0.4s;
    }

    @keyframes fadeRight {
        from {
            transform: translateX(-10rem);
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeLeft {
        from {
            transform: translateX(10rem);
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fadeUp {
        from {
            transform: translateY(10rem);
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }
`

export const Intro = styled.div`
    display: flex;
    position: relative;
    height: 100vh;
    align-items: center;
    background: ${(props) => props.theme.main2};
    .dimmed {
        position: absolute;
        z-index: 10;
    }
    .title_wrap {
        position: relative;
        text-align: left;
        .border_box {
            position: relative;
            display: inline-block;
            padding: 5rem 7rem;
            & > span {
                position: absolute;
                border: 1px solid ${(props) => props.theme.black1};
                opacity: 0;
                &:nth-child(1) {
                    left: 2rem;
                    top: 2rem;
                    animation-name: rowDrift;
                    animation-duration: 0.5s;
                    animation-fill-mode: forwards;
                    animation-delay: 1s;
                }
                &:nth-child(2) {
                    right: 2rem;
                    top: 2rem;
                    animation-name: colDrift;
                    animation-duration: 0.5s;
                    animation-fill-mode: forwards;
                    animation-delay: 1.4s;
                }
                &:nth-child(3) {
                    right: 2rem;
                    bottom: 2rem;
                    animation-name: rowDrift;
                    animation-duration: 0.5s;
                    animation-fill-mode: forwards;
                    animation-delay: 1.8s;
                }
                &:nth-child(4) {
                    left: 2rem;
                    bottom: 2rem;
                    animation-name: colDrift;
                    animation-duration: 0.5s;
                    animation-fill-mode: forwards;
                    animation-delay: 2.1s;
                }
            }
        
            @-webkit-keyframes rowDrift {
                from {
                    width: 0;
                }
                to {
                    width: 100%;
                    opacity: 1;
                }
            }
            @keyframes rowDrift {
                from {
                    width: 0;
                }
                to {
                    width: 100%;
                    opacity: 1;
                }
            }
            @-webkit-keyframes colDrift {
                from {
                    height: 0;
                }
                to {
                    height: 100%;
                    opacity: 1;
                }
            }
            @keyframes colDrift {
                from {
                    height: 0;
                }
                to {
                    height: 100%;
                    opacity: 1;
                }
            }
        }
    }
    .text_box {
        text-align: center;
        color: ${(props) => props.theme.white1};
    }
    h2 {
        margin-bottom: 2rem;
        font-size: 8rem;
        span {
            position: relative;
            font-weight: 700;
            i {
                position: absolute;
                content: "";
                left: 0;
                bottom: 2rem;
                width: 100%;
                height: 2rem;
                background: ${(props) => props.theme.white1};
                z-index: -1;
            }
        }
    }
    .title {
        span {
            display: block;
            font-size: 3rem;
            color: ${(props) => props.theme.black2};
            line-height: 1.8;
        }
    }
    .scroll {
        display: flex;
        flex-direction: column;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        align-items: center;
        z-index: 9999;
        animation: down 0.7s linear infinite alternate;
        svg {
            fill: ${(props) => props.theme.black2};
        }
        p {
            margin-top: 0.5rem;
            color: ${(props) => props.theme.black1};
            font-weight: 300;
            font-size: 1.5rem;
        }
    }
    @keyframes down {
        from {
            bottom: 2.7rem;
        }
        to {
            bottom: 2rem;
        }
    }

    @media screen and (max-width:1199px) {
        padding: 0 2rem;
        h2 {
            font-size: 6rem;
        }
        .title span {
            font-size: 2.5rem;
        }
    }
    @media screen and (max-width:767px) {
        .inner {
            padding: 0;
        }
        .title_wrap {
            .border_box {
                padding: 3rem 4rem;
                & > span {
                    &:nth-child(1) {
                        left: 1rem;
                        top: 1rem;
                    }
                    &:nth-child(2) {
                        right: 1rem;
                        top: 1rem;
                        animation-name: colDrift;
                        animation-duration: 0.5s;
                        animation-fill-mode: forwards;
                        animation-delay: 1.4s;
                    }
                    &:nth-child(3) {
                        right: 1rem;
                        bottom: 1rem;
                    }
                    &:nth-child(4) {
                        left: 1rem;
                        bottom: 1rem;
                    }
                }
            }
        }
        h2 {
            padding-top: 0.5rem;
            margin-bottom: 1rem;
            line-height: 1;
            font-size: 4rem;
            span {
                i {
                    bottom: 0.5rem;
                    width: 100%;
                }
            }
        }
        .title span {
            font-size: 1.8rem;
        }
        .scroll {
            p {
                font-size: 1.3rem;
            }
        }
    }
`;

export const About = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10rem 0;
    height: 100%;
    background: ${(props) => props.theme.white1};
    .left {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40%;
    }
    .profile_img {
        overflow: hidden;
        //height: 40vh;
        max-width: 30rem;
        border-radius: 1rem;
        opacity: 0;
        img {
            height: 100%;
        }
    }
    .inner {
        display: flex;
        justify-content: center;
    }
    .right {
        width: 60%;
        padding-left: 5rem;
        text-align: left;
        h2 {
            margin-bottom: 2rem;
            font-size: 4rem;
            font-weight: 500;
            color: ${ (props) => props.theme.main1 };
            opacity: 0;
            span {
                font-weight: 700;
            }
        }
        .about_text {
            opacity: 0;
            p {
                text-align: left;
                font-size: 1.8rem;
                line-height: 1.8;
                & + p {
                    margin-top: 1.5rem;
                }
            }
        }
    }
    .flow_text {
        display: flex;
        flex: 0 0 auto;
        position: absolute;
        bottom: 1rem;
        white-space: nowrap;
        //will-change: transform;
        opacity: 0.2;
        color: ${(props) => props.theme.black2};
        p {
            margin: 0 1rem;
            animation: marquee 60s linear infinite;
            font-size: 10rem;
            font-weight: 700;
        }
    }

    @media screen and (max-width:767px) {
        display: flex;
        flex-direction: column;
        justify-content: left;
        padding: 10rem 0;
        .left {
            display: block;
            width: 100%;
        }
        .profile_img {
            display: flex;
            align-items: center;
            height: 20rem;
            max-width: 100%;
            opacity: 0;
            img {
                width: 100%;
                height: auto;
            }
        }
        .inner {
            flex-direction: column;
        }
        .right {
            width: 100%;
            margin-top: 1rem;
            padding-left: 0;
            h2 {
                margin-bottom: 0.5rem;
                font-size: 2.5rem;
            }
            .about_text {
                p {
                    font-size: 1.4rem;
                    & + p {
                        margin-top: 0.5rem;
                    }
                }
            }
        }
        .flow_text {
            bottom: 0.5rem;
            p {
                font-size: 6rem;
            }
        }
    }
`;

export const Skill = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10rem 0;
    background: ${(props) => props.theme.main2};
    .inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .left {
        text-align: left;
        h2 {
            margin-bottom: 2rem;
            color: ${(props) => props.theme.main1};
            font-size: 4rem;
            font-weight: 700;
            opacity: 0;
        }
        .skill_text  {
            opacity: 0;
            & p + p {
                margin-top: 1.5rem;
            }
        }
    }
    .right {
        display: flex;
        flex-wrap: wrap;
        width: 60%;
        .doughnut {
            width: calc(100% / 3);
            margin: 2rem 0;
            text-align: center;
            & > div {
                display: flex;
                align-items: center;
                justify-content: center;
                position: relative;
                height: "auto";
                width: "33%";
                canvas {
                    width: 100% !important;
                    height: auto !important;
                    margin: 0 auto;
                }
                span {
                    position: absolute;
                    font-size: 2rem;
                    font-weight: 600;
                    color: ${(props) => props.theme.main1};
                }
            }
            p {
                margin-top: 1rem;
                font-size: 1.4rem;
            }
        }
    }
    @media screen and (max-width:1023px) {
        .left {
            h2 {
                margin-bottom: 2rem;
                font-size: 3.5rem;
            }
            .skill_text  {
                opacity: 0;
                font-size: 1.6rem;
                & p + p {
                    margin-top: 1.5rem;
                }
            }
        }
    }
    @media screen and (max-width:767px) {
        flex-direction: column;
        align-items: center;
        padding: 8rem 0 2rem;
        .inner {
            flex-direction: column;
            align-items: flex-start;
        }
        .left {
            h2 {
                margin-bottom: 1rem;
                font-size: 2.5rem;
            }
            .skill_text  {
                font-size: 1.4rem;
                & p + p {
                    margin-top: 1rem;
                }
            }
        }
        .right {
            width: 100%;
            margin-top: 2rem;
            .doughnut {
                & > div {
                    span {
                        font-size: 1.4rem;
                    }
                }
                p {
                    margin-top: 1rem;
                    font-size: 1.2rem;
                }
            }
        }
    }
`;

export const WORKS = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
    padding: 10rem 0;
    background: ${(props) => props.theme.white1};
    .works_wrap{
        width: 100%;
        &.show {
            h2, .work_swiper {
                opacity: 1;
            }
        }
    }
    h2 {
        margin-bottom: 5rem;
        color: ${ (props) => props.theme.main1 };
        font-size: 4rem;
        font-weight: 700;
        text-align: center;
        opacity: 0;
    }
    .work_swiper {
        position: relative;
        height: auto;
        padding-bottom: 5rem;
        opacity: 0;
        .swiper-slide {
            position: relative;
            overflow: hidden;
            border-radius: 1rem;
            border: 1px solid ${(props) => props.theme.gray2};
            opacity: 0.3;
            cursor: pointer;
            &.swiper-slide-active {
                opacity: 1;
                img {
                    transition: transform 0.7s ease-in-out, filter 0.7s ease-in-out;
                }
                &:hover {
                    img {
                        transform: scale(1.1);
                        transition: transform 0.7s ease-in-out, filter 0.7s ease-in-out;
                    }
                    .text_wrap {
                        opacity: 1;
                        transition: opacity 0.7s ease-in-out;
                    }
                }
            }
            .text_wrap {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                position: relative;
                position: absolute;
                left: 0;
                right: 0;
                bottom: 0;
                top: 0;
                padding: 2rem 10rem;
                background: rgba(0,0,0,0.7);
                text-align: left;
                opacity: 0;
                transition: opacity 0.7s ease-in-out;
                .brand {
                    font-size: 4rem;
                    font-weight: 700;
                    color: #fff;
                }
                .tag {
                    display: flex;
                    justify-content: center;
                    flex-wrap: wrap;
                    margin-top: 1rem;
                    span {
                        display: inline-block;
                        margin: 0.5rem;
                        padding: 0.3rem 1rem;
                        border-radius: 1em;
                        border: 1px solid rgba(256,256,256,0.7);
                        font-size: 1.4rem;
                        color: #fff;
                    }
                }
            }
            img {
                width: 100%;
            }
        }
        .swiper-pagination {
            display: flex;
            padding: 0 2rem;
            justify-content: center;
            .swiper-pagination-bullet {
                margin: 0;
                height: 4px;
                width: 30px;
                max-width: calc((100% - 3.6rem) / 10);
                margin: 0 0.2rem;
                border-radius: 0;
                background: ${(props) => props.theme.gray2};
            }
            .swiper-pagination-bullet-active {
                background: ${(props) => props.theme.black2};
            }
        }
        [class*="swiper-button"] {
            color: ${(props) => props.theme.black2};
            &.swiper-button-prev {
                animation: left 0.7s ease-out infinite alternate;
            }
            &.swiper-button-next {
                animation: right 0.7s ease-out infinite alternate;
            }
        }
    }

    @media screen and (max-width:1023px) {
        h2 {
            font-size: 3.5rem;
        }
    }
    @media screen and (max-width:767px) {
        h2 {
            margin-bottom: 3rem;
            font-size: 2.5rem;
        }
        .work_swiper {
            padding-bottom: 4rem;
        }
    }

    @keyframes right {
        from {
            opacity: 0.7;
            right: 3rem;
        }
        to {
            opacity: 1;
            right: 2rem;
        }
    }
    @keyframes left {
        from {
            opacity: 0.7;
            left: 3rem;
        }
        to {
            opacity: 1;
            left: 2rem;
        }
    }
`;