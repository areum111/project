import { createGlobalStyle} from "styled-components";
import DelIco from "images/ico/ico_del.svg";
import RedDelIco from "images/ico/ico_del_r.svg";

const GlobalStyle = createGlobalStyle`
    body,textarea,input,button,select, input{
        color: ${(props) => props.theme.black2};
    }
    body {
        background-color: ${(props) => props.theme.gray1};
    }
    .inner {
        overflow-x: auto;
        min-width: 118rem;
        padding: 12rem 5.4rem 4rem 13rem;
    }
    .error_msg {
        margin-top: 0.4rem;
        margin-left: 2rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.warn1};
        line-height: 1.5;
    }
    input[type="text"],
    input[type="number"],
    input[type="password"],
    textarea {
        width: 100%;
        max-width: 100%;
        padding: 0.8rem 2rem;
        height: 4.8rem;
        border: 1px solid ${(props) => props.theme.gray2};
        border-radius: 0.4rem;
        color: ${(props) => props.theme.black2};
        line-height: 1.5;
        font-size: 1.6rem;
        &::placeholder {
            color: ${(props) => props.theme.gray3};
        }
        &:focus {
            border-color: ${(props) => props.theme.gray3};
            outline: none;
            &::placeholder {
                color: transparent;
            }
        }
        &:disabled {
            border-color: ${(props) => props.theme.gray2};
            background-color: ${(props) => props.theme.gray1};
            color: ${(props) => props.theme.gray3};
            &::placeholder {
                color: ${(props) => props.theme.gray3};
            }
        }
        &.error {
            border-color: ${(props) => props.theme.warn1};
        }

        &.xs {
            flex: 1 1 20rem !important;
            max-width: 20rem;
        }
        &.s {
            flex: 1 1 48.7rem !important;
            max-width: 48.7rem;
        }
        &.ssm {
            flex: 1 1 57rem !important;
            max-width: 57rem !important;
        }
        &.sm {
            flex: 1 1 59.5rem !important;
            max-width: 59.5rem;
        }
        &.m {
            flex: 1 1 68rem !important;
            max-width: 66.4rem;
        }
        &.l {
            flex: 1 1 88rem !important;
            max-width: 88rem;
        }
        &.xl {
            flex: 1 1 66.4rem !important;
            max-width: 66.4rem;
        }
        &:only-child {
            flex: auto !important;
        }
    }
    textarea {
        resize: none;
    }
    .id_input {
        position: relative;

        & > img {
            position: absolute;
            left: 2rem;
            top: 1.2rem;
            z-index: 9;
        }

        & input {
            position: relative;
            padding-left: 5.6rem;
        }
    }
    .del_input {
        display: inline-block;
        position: relative;
        & button {
            position: absolute;
            display: inline-block;
            top: 1.2rem;
            right: 2rem;
            width: 2.4rem;
            height: 2.4rem;
            background-image: url(${DelIco});
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            text-indent: -9999px;
            z-index: 9;
        }
        & input:disabled + button {
            opacity: 0.4;
        }
        & input.error + button{
            background-image: url(${RedDelIco});
        }
    }
    .msg {
        margin-left: 2rem;
        color: ${(props) => props.theme.gray3};
        font-size: 1.2rem;
    }
    .vali_msg {
        margin: 0.4rem 0 0 2rem;
        color: ${(props) => props.theme.warn1};
        font-size: 1.2rem;
        &.pass {
            color: ${(props) => props.theme.main1};
        }
    }
    .error + .msg {
        color: ${(props) => props.theme.warn1};
    }
    .error.msg {
        color: ${(props) => props.theme.warn1};
    }
    .dot_msg > li,
    .dot_msg:not(ul){
        position: relative;
        padding-left: 1.8rem;
        color: ${(props) => props.theme.gray4};
        &::before {
            content: "";
            position: absolute;
            top: 0.8rem;
            left: 0.5rem;
            width: 0.4rem;
            height: 0.4rem;
            background-color: ${(props) => props.theme.gray4};
            border-radius: 50%;
        }

        &.error {
            color: ${(props) => props.theme.warn1};
            &::before {
                background-color: ${(props) => props.theme.warn1};
            }
        }
    }
    .red_txt {
        color: ${(props) => props.theme.warn1};
    }
    .bk_txt {
        color: ${(props) => props.theme.black2};
    }
    .gray_txt {
        color: ${(props) => props.theme.gray4};
    }
    .blue_txt {
        color: #4F63E3;
    }
    .title_area {
        display: flex;
        align-items: center;
        margin-bottom: 8rem;
        & h2 {
            margin-right: 1.6rem;
            font-size: 2.8rem;
            font-weight: 700;
        }
        .user_name {
            position: relative;
            padding-left: 1.6rem;
            font-size: 2.4rem;
            font-weight: 700;
            color: ${(props) => props.theme.gray4};
            &::before {
                content: "";
                position: absolute;
                top: 0.5rem;
                left: 0;
                height: 2.8rem;
                width: 1px;
                background: ${(props) => props.theme.gray2};
            }
        }
        .path {
            margin-left: auto;
            font-size: 1.6rem;
            color: ${(props) => props.theme.gray4};
        }
    }
    .outline_box {
        padding: 4rem 3.6rem;
        border-radius: 2rem;
        box-shadow: 0 0 4px rgba(0,0,0,0.15);
        background-color: ${(props) => props.theme.white1};
        & + .outline_box {
            margin-top: 2.8rem;
        }
        &.close {
            .title {
                margin-bottom: 0;
            }
            .toggle_wrap,
            .form_tb {
                display: none;
            }
        }
        & > .title {
            display: flex;
            align-items: center;
            margin-bottom: 2.4rem;
            h4 {
                margin-right: 0.8rem;
                font-size: 2rem;
                font-weight: 700;
            }
            .desc {
                color: ${(props) => props.theme.gray4};
            }
            .toggle {
                margin-left: auto;
            }
        }
        &.tab {
            padding-top: 0;
            padding-bottom: 0;
            .tab_menu {
                display: flex;
                li {
                    span {
                        display: inline-block;
                        padding: 2rem 3rem;
                        font-size: 1.8rem;
                        font-weight: 500;
                        color: ${(props) => props.theme.gray4};
                        cursor: pointer;
                    }
                    & + li {
                        margin-left :2rem;
                    }
                    &.on {
                        span {
                            color: ${(props) => props.theme.main1};
                            border-bottom: 3px solid ${(props) => props.theme.main1};
                        }
                    }
                }
            }
        }
    }
    .cont_box {
        & + .cont_box {
            margin-top: 4.8rem;
        }
        & .cont_title {
            display: flex;
            align-items: center;
            margin-bottom: 1.2rem;
            & h3 {
                font-size: 2rem;
                font-weight: 700;
                margin-right: 0.8rem;
            }
            & .dot_msg {
                font-size: 1.8rem;
                font-weight: 500;
                &::before {
                    top: 1.2rem;
                }
            }
        }
    }
    .pw_input {
        position: relative;
        max-width: 100%;
        & input {
            padding-right: 5rem;
        }
        & button {
            position: absolute;
            right: 2rem;
            top: 1.2rem;
        }
    }
    .time_input {
        position: relative;
        & span {
            position: absolute;
            top: 1.6rem;
            right: 2.9rem;
            font-size: 1.2rem;
            font-weight: 500;
        }
    }

    /* 테이블 */
    table.form_tb {
        display: block;
        width: 100%;
        font-size: 1.6rem;

        & tr {
            display: flex;
            & th,
            & td {
                display: inline-block;
                min-height: 7.2rem;
                b {
                    font-weight: 500;
                }
            }
            & th {
                padding: 2.4rem;
                color: ${(props) => props.theme.black1};
                text-align: left;
                font-weight: 500;
                vertical-align: top;
                & span {
                    font-weight: 400;
                    color: ${(props) => props.theme.gray4};
                }
            }
            & td {
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 1.2rem 3rem;
                & .td_wrap {
                    display: flex;
                    flex-wrap: nowrap;
                    align-items: center;
                    &.wrap {
                        flex-wrap: wrap;
                    }
                    & + .td_wrap {
                        margin-top: 1.6rem;
                    }
                }
                & .desc {
                    font-size: 1.4rem;
                    color: ${(props) => props.theme.gray4};
                }
            }
            &.col2 {
                & > td {
                    width: calc((100% - 42rem) / 2);
                }
            }
        }
        & tbody {
            display: block;
        }
        & > tbody > tr,
        & > tr {
            & > th,
            & > td {
                border-top: 1px solid ${(props) => props.theme.gray2};
            }
            & > th {
                width: 21rem;
                background-color: ${(props) => props.theme.gray1};
            }
            & > td {
                width: calc(100% - 21rem);
            }
            &:last-child {
                & > th,
                & > td {
                    border-bottom: 1px solid ${(props) => props.theme.gray2};
                }
            }
        }
        &.guide {
            & * {
                font-size: 1.4rem;
            }
            .guide_title {
                & + p {
                    margin-top: 0.6rem;
                }
                b {
                    font-weight: 500;
                }
            }
        }
        & + .form_tb {
            margin-top: 2.4rem;
        }
    }
    table.inner_tb {
        display: block;
        margin: -1.2rem -3rem;
        thead,
        tbody {
            & > tr {
                & > th,
                & > td {
                    border-bottom: 1px solid ${(props) => props.theme.gray2};
                }
                & > th {
                    width: 19.2rem;
                    padding-left: 5.6rem;
                }
                & > td {
                    width: calc(100% - 19.2rem);
                }
                &:last-child {
                    & > th,
                    & > td {
                        border-bottom: none;
                    }
                }
            }   
        }
    }

    //데이터테이블
    table.data_tb {
        width: 100%;
        border-bottom: 1px solid ${(props) => props.theme.gray2};
        & > thead th {
            background-color: ${(props) => props.theme.gray1};
            font-weight: 500;
        }
        & tr th,
        & tr td {
            padding: 1.7rem 1.2rem;
            height: 5.6rem;
            border-top: 1px solid ${(props) => props.theme.gray2};
            text-align: center;
            b {
                font-weight: 500;
            }
            &.no_data {
                padding: 4.7rem 0;
                color: ${(props) => props.theme.gray4};
                text-align: center !important;
            }
        }
        & tr.sub_row {
            td {
                background: ${(props) => props.theme.gray1};    
            }
            & + tr.sub_row {
                td {
                    border-top: none;
                }
            }
        }
        .link {
            color: ${(props) => props.theme.main1};
            text-decoration: underline;
            &.bk {
                color: ${(props) => props.theme.black2};
            }
        }
        & + .no_data {
            padding: 8.4rem 0;
            text-align: center;
            border-bottom: 1px solid ${(props) => props.theme.gray2};
            p {
                margin-bottom: 1.6rem;
                font-size: 1.6rem;
                font-weight: 500;
                color: ${(props) => props.theme.gray4};
            }
        }
    }

    //데이터테이블 상단
    .tb_top {
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 2rem;
        & .cnt {
            font-size: 1.6rem;
        }
        .right {
            display: flex;
        }
        & .select_wrap {
            width: 14.4rem;
            margin-left: 1.6rem;
        }
    }

    .guide_box {
        margin-bottom: 3.2rem;
        padding: 1.6rem 3.6rem;
        background-color: ${(props) => props.theme.white3};
        border-radius: 2rem;
        & .main_text {
            font-size: 2rem;
            font-weight: 700;
        }
        & .sub_text {
            margin-top: 1.2rem;
            font-size: 1.8rem;
            font-weight: 500;
            color: ${(props) => props.theme.gray4};
            & b {
                color: ${(props) => props.theme.black2};
                font-weight: inherit;
            }
            & strong {
                color: ${(props) => props.theme.main1};
                font-weight: 500;
            }
        }
    }

    //라벨 딱지
    .ico_label {
        display: inline-flex;
        padding: 0 0.8rem;
        border-radius: 0.4rem;
        border: 1px solid ${(props) => props.theme.white1};
        font-size: 1.3rem;
        font-weight: 500;
        color: ${(props) => props.theme.white1};
        &.main {
            border-color: ${(props) => props.theme.main1};
            color: ${(props) => props.theme.main1};
        }
    }

    //유저타입 딱지
    .ico_user_type {
        padding: 0.4rem 1rem;
        border-radius: 0.4rem;
        border: 1px solid ${(props) => props.theme.main1};
        font-size: 1.6rem;
        font-weight: 500;
        color: ${(props) => props.theme.main1};
    }

    .point_dot {
        display: inline-block;
        width: 0.7rem;
        height: 0.7rem;
        background: ${(props) => props.theme.main1};
        border-radius: 50%;
    }

    //tooltip
    #chartjs-tooltip {
        position: relative;
        width: 18rem;
        padding: 1.2rem;
        background-color: rgba(70, 70, 70, 0.95);
        border-radius: 1rem;
        &::before {
            content: "";
            position: absolute;
            top: 50%;
            left: -2rem;
            transform: translateY(-50%);
            border-left: 1rem solid transparent;
            border-top: 0.8rem solid transparent;
            border-bottom: 0.8rem solid transparent;
            border-right: 1rem solid rgba(70, 70, 70, 0.95);
            z-index: 0;
        }
        &::after {
            content: "";
        }
        &.left_tooltip {
            &::before {
                content: none;
            }
            &::after {
                content: "";
                position: absolute;
                top: 50%;
                right: -2rem;
                transform: translateY(-50%);
                border-right: 1rem solid transparent;
                border-top: 0.8rem solid transparent;
                border-bottom: 0.8rem solid transparent;
                border-left: 1rem solid rgba(70, 70, 70, 0.95);
                z-index: 0;
            }
        }
        & table {
            width: 100%;
            color: ${(props) => props.theme.gray1};
            font-size: 1.2rem;
            font-weight: 500;
            & tr {
                & td:first-child {
                    padding-right: 2rem;
                    white-space: nowrap;
                    & span {
                        position: relative;
                        padding-left: 1rem;
                        &::before {
                            content: "";
                            position: absolute;
                            left: 0;
                            top: 0.8rem;
                            width: 0.4rem;
                            height: 0.4rem;
                            border-radius: 50%;
                            background-color: #fff;
                        }
                    }
                }
                & td:last-child {
                    white-space: nowrap;
                    text-align: right;
                }
            }
        }
    }
    .date_dash {
        margin: 0 1.6rem;
        color: ${(props) => props.theme.gray3};
        font-size: 1.4rem;
    }
    .search_btn_wrap{
        display: flex;
        justify-content: center;
        margin-top: 3.2rem;
        button {
            width: 12rem;
            & + button {
                margin-left: 2rem;
            }
        }
    }

    .center_button_wrap {
        display: flex;
        justify-content: center;
        margin-top: 3.2rem;
        & button {
            margin: 0 1rem;
        }
    }

    .right_btn_wrap {
        display: flex;
        justify-content: end;
        padding-bottom: 2rem;
        margin-bottom: 2rem;
        border-bottom: 1px solid ${(props) => props.theme.gray2};
        & button {
            margin-left: 1.6rem;
        }
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
    .tab_menu_wrap {
        .tab_menu {
            display: flex;
            margin-bottom: 0.2rem;
            li {
                flex: 0 0 12.8rem;
                position: relative;
                padding: 2rem 1rem;
                background-color: ${(props) => props.theme.white1};
                border-top-left-radius: 1rem;
                border-top-right-radius: 1rem;
                box-shadow: 0 0 4px rgba(0,0,0,0.15);
                text-align: center;
                cursor: pointer;
                &::after {
                    content: "";
                    position: absolute;
                    left: 0;
                    bottom: -0.1rem;
                    width: 100%;
                    height: 0.1rem;
                    background-color: ${(props) => props.theme.white1};
                }
                span {
                    font-size: 1.8rem;
                    font-weight: 500;
                    color: ${(props) => props.theme.gray3};
                    white-space: nowrap;
                }
                &.on {
                    &::after {
                        content: "";
                        position: absolute;
                        left: 0;
                        bottom: -0.5rem;
                        width: calc(100% - 0.1rem);
                        height: 1rem;
                        background-color: ${(props) => props.theme.white1};
                    }
                    span {
                        color: ${(props) => props.theme.main1};
                    }
                }
            }
        }
        & + .outline_box {
            border-top-left-radius: 0;
        }
    }

    .dimmed {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
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
      
        /* Center slide text vertically */
        // display: flex;
        // justify-content: center;
        // align-items: center;
    }
`;

export default GlobalStyle;