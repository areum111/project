import { createGlobalStyle} from "styled-components";
import DelIco from "images/ico/ico_del.svg";
import RedDelIco from "images/ico/ico_del_r.svg";

const GlobalStyle = createGlobalStyle`
    body,textarea,input,button,select, input{
        color: ${(props) => props.theme.black1};
    }
    body {
        background-color: ${(props) => props.theme.white1};
    }
    .inner {
        width: 120rem;
        margin: 0 auto;
    }
    // 스크롤 커스텀
    .custom_scroll {
        padding-right: 1rem !important;
        & .scroll_inner {
            max-height: calc(80vh - 11.2rem);
            height: 45rem;
            padding-right: 2.6rem;
            overflow-y: auto;
            &::-webkit-scrollbar {
                position: absolute;
                right: 0;
                top: 0;
                width: 5px;
                height: 5px;
                border-radius: 15px;
                cursor: pointer;
            }
            &::-webkit-scrollbar-thumb {
                background-color: #E0E0E0;
            }
            &::-webkit-scrollbar-track {
                background-color: transparent;
            }
        }
    }

    .dimmed {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 9000;
    }

    .swiper {
        width: 100%;
        height: 100%;
    }
      
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
    }
    @media screen and (max-width:1199px) {
        .inner {
            width: 100%;
            padding: 0 2rem;
        }
    }
    @media screen and (max-width:767px) {
        .inner {
            width: 100%;
            padding: 0 2rem;
        }
    }
`;

export default GlobalStyle;