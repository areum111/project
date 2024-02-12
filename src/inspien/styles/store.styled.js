import styled, { keyframes } from "styled-components";

const slideLeft = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-55rem);
    }
`;

const slideRight = keyframes`
    from {
        transform: translateX(-55rem);
    }
    to {
        transform: translateX(0);
    }
`;
export const ProductListWrap = styled.div`
    .inner {
        min-height: 100vh;
    }
    .tab_menu_wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .top_button_wrap {
        display: flex;
        padding-top: 2rem;
        border-top: 1px solid ${(props) => props.theme.gray2};
        .right {
            margin-left: auto;
            button {
                margin-left: 1.6rem;
            }
        }
    }
    
    .filter_wrap {
        position: relative;
        .filter_btn {
            padding: 0.8rem 2.4rem 0.8rem 2rem;
            font-size: 2rem;
            font-weight: 500;
            text-decoration: underline;
        }
    }
    
    .product_list {
        display: flex;
        flex-wrap: wrap;
        li {
            position: relative;
            width: calc((100% - 6rem) / 4);
            padding: 2rem 2rem 2.2rem 2rem;
            margin-top: 2rem;
            border: 1px solid ${(props) => props.theme.gray2};
            background-color: ${(props) => props.theme.white1};
            border-radius: 1rem;
            
            & + li {
                margin-left: 2rem;
            }
            &:nth-child(4n + 1) {
                margin-left: 0;
            }
            
            &.disabled {
                background-color: #F2F2F2;
            }
            &.selected {
                border-color: ${(props) => props.theme.main1};
            }
            
            .check_wrap {
                position: absolute;
                top: 2rem;
                right: 2rem;
            }
            .prd_name {
                display: -webkit-box;
                overflow: hidden;
                width: calc(100% - 2.4rem);
                margin-top: 0.8rem;
                text-overflow: ellipsis;
                -webkit-line-clamp: 1;
                -webkit-box-orient: vertical;
                font-size: 1.8rem;
                font-weight: 500;
                color: ${(props) => props.theme.black1};
            }
            .selling {
                margin-top: 0.8rem;
                color: ${(props) => props.theme.gray3};
            }
            .company {
                margin-top: 1.8rem;
                text-align: right;
                font-weight: 500;
                color: ${(props) => props.theme.gray4};
            }
            .store_date {
                display: flex;
                justify-content: space-between;
                margin-top: 0.4rem;
                color: ${(props) => props.theme.gray4};
                .store {
                    font-weight: 500;
                }
            }
            .bottom_info {
                display: flex;
                align-content: center;
                justify-content: space-between;
                margin-top: 1.2rem;
                padding-top: 1.2rem;
                border-top: 1px solid ${(props) => props.theme.gray2};
                & > span {
                    white-space: nowrap;
                    font-size: 1.2rem;
                }
                .pay_info {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    padding-left: 1rem;
                    .pay_type {
                        display: inline-flex;
                        padding: 0.1rem 0.8rem 0.2rem;
                        border: 1px solid ${(props) => props.theme.black2};
                        border-radius: 3.2rem;
                        font-size: 1.2rem;
                        font-weight: 500;
                    }
                    .price {
                        margin-left: 0.8rem;
                        white-space: nowrap;
                        font-weight: 500;
                        span {
                            color: ${(props) => props.theme.gray4};
                        }
                    }
                }
            }
        }
    }
    
    .paging {
        margin-top: 2rem;
    }
    
    .inner {
        display: flex;
        flex-direction: column;
    }
    .content,
    .cont_box,
    .outline_box{
        display: flex;
        flex-direction: column;
        flex: 1;
        .no_data {
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .main_text {
                font-size: 2rem;
                font-weight: 500;
            }
            .sub_text {
                margin-top: 2rem;
                color: ${(props) => props.theme.gray4};
                .link {
                    color: #4F63E3;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .product_list {
            display: flex;
            flex-wrap: wrap;
            padding: 0 6.2rem;

            li {
                position: relative;
                width: calc((100% - 2rem) / 2);
                padding: 2rem 2rem 2.2rem 2rem;
                margin-top: 2rem;
                border: 1px solid ${ (props) => props.theme.gray2 };
                background-color: ${ (props) => props.theme.white1 };
                border-radius: 1rem;

                &:nth-child(2n + 1) {
                    margin-left: 0;
                }
            }
        }
    }
`;

export const FilterLayer = styled.div`
    position: fixed;
    top: 0;
    right: -55rem;
    width: 55rem;
    height: 100vh;
    background-color: ${(props) => props.theme.white1};
    box-shadow: 2px 0px 35px 0px rgba(0, 0, 0, 0.2);
    z-index: 9999;

    animation-duration: 0.25s;
    animation-timing-function: ease-out;
    animation-fill-mode: forwards;
    animation-name: ${ slideRight };
    
    &.open {
        animation-name: ${ slideLeft };
    }
    
    &.custom_scroll {
        padding: 0 !important;
        .scroll_inner {
            padding: 4.2rem 3.6rem;
            max-height: 100%;
            height: 100%;
        }   
    }
    
    .main_title {
        position: relative;
        font-size: 2rem;
        font-weight: 700;
    }
    
    .close {
        position: absolute;
        top: 0;
        right: 0;
    }

    .filter {
        margin-top: 3.2rem;
    }
    
    .title {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.2rem;
        span {
            font-weight: 500;
            font-size: 1.6rem;
        }
        .no_border {
            width: 10.7rem;
            .select__control {
                padding: 0 0.8rem 0 1.6rem;
            }
            .select__single-value {
                color: ${(props) => props.theme.black2};
            }
        }
    }
    
    .finder {
        display: flex;
        justify-content: space-between;
        .select_wrap {
            flex: 0 0 13rem;
        }
        input[type="text"] {
            max-width: calc(100% - 14.2rem);
            &.full {
                max-width: 100%;
            }
        }
        ul {
            display: flex;
            flex-wrap: wrap;
            margin-top: -1.2rem;
            li {
                padding: 0.4rem 1.2rem;
                margin-right: 1.2rem;
                margin-top: 1.2rem;
                border: 1px solid ${(props) => props.theme.gray2};
                border-radius: 1.8rem;
                color: ${(props) => props.theme.gray3};
                font-weight: 500;
                white-space: nowrap;
                &.selected {
                    border-color: ${(props) => props.theme.main1};
                    color: ${(props) => props.theme.main1};
                }
            }
        }
        &.date {
            align-items: center;
            .react-datepicker__input-container input{
                width: 100%;
                max-width: 100%;
            }
        }
    }
    
    .slider {
        width: calc(100% - 2.5rem);
        margin: 0.5rem 0 2rem 1rem;
        height: 4px;
        .track {
            height: 4px;
            &.track-1 {
                background-color: ${(props) => props.theme.main1};
            }
            &.track-0,
            &.track-2 {
                background-color: ${(props) => props.theme.gray2};
            }
        }
        
        .thumb {
            display: flex;
            justify-content: center;
            top: -0.4rem;
            width: 1.2rem;
            padding-top: 1.5rem;
            outline: none;
            &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0;
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                background-color: ${(props) => props.theme.main1};
            }
            span {
                white-space: nowrap;
                font-size: 1.2rem;
            }
        }
    }
    
    .center_button_wrap button {
        width: 12rem;
    }
`

export const RegProductWrap = styled.div`
    .select_wrap {
        width: 100%;
    }

    .family_input {
        margin-top: 2.2rem;
    }
    
    .radios {
        padding: 1.2rem 0;
    }
    
    .input_cnt {
        margin-right: 3rem; 
    }
    
    .dot_msg {
        margin-top: 1.2rem;
        &::before {
            top: 1rem;
        }
    }
    
    .price_wrap {
        display: flex;
        align-items: center;
        margin-top: 2.4rem;
        .country {
            dipslay: inline-block;
            width: 16rem;
            padding: 0 2.4rem;
            font-weight: 500;
        }
        input[type="text"] {
            width: 36.6rem;
        }
        .monthly {
            margin-left: 0.8rem;
            font-size: 1.4rem;
            color: ${(props) => props.theme.gray4};
        }
        .unit {
            margin-left: 3rem;
            font-size: 1.4rem;
        }
    }
    
    .attach {
        padding-top: 2.4rem;
        padding-bottom: 2.4rem;
        .file_name {
            margin-right: 0.8rem;
        }
        & > p {
            margin-top: 0.8rem;
            font-size: 1.2rem;
            color: ${(props) => props.theme.gray4};   
        }
    }
`

export const ProductDetailWrap = styled.div`
    .title_area {
        position: relative;
        padding-bottom: 3rem;
    }
    .shop_name {
        position: absolute;
        bottom: 0;
        left: 0;
        font-size: 1.8rem;
        font-weight: 500;
        color: ${(props) => props.theme.gray3};
    }
    .top_detail {
        display: flex;
        .prd_detail {
            display: flex;
            flex: 2;
        }
        .price_detail {
            flex: 1;
            min-width: 45rem;
            margin-left: 4rem;
            .title {
                justify-content: center;
                margin-bottom: 2rem;
                font-size: 2rem;
                color: ${(props) => props.theme.black1};
                font-weight: 700;
            }
            .price_info{
                border-top: 1px solid ${(props) => props.theme.gray2};
                & > div {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 2rem 2.4rem;
                    font-size: 1.6rem;
                    & + div {
                        border-top: 1px solid ${(props) => props.theme.white3};
                    }
                    &.total {
                        padding: 2.4rem;
                        border-top: 1px solid ${(props) => props.theme.gray2};
                        font-size: 2rem;
                        .info_title {
                            font-weight: 700;  
                        }
                        .info_text {
                            font-weight: 700;
                            .unit {
                                font-size: 1.8rem;
                                font-weight: 500;
                            }
                        }
                    }
                    
                    .info_title {
                        font-weight: 500;
                        color: ${(props) => props.theme.black1};
                    }
                    .info_text {
                        text-align: right;
                        .unit {
                            margin-left: 1rem;
                            span {
                                font-size: 1.4rem;
                                color: ${(props) => props.theme.gray4};
                            }
                        }
                        .dot_msg {
                            margin-top: 0.4rem;
                            font-size: 1rem;
                            &::before {
                                top: 0.6rem;
                            }
                        }
                    }
                }
                .radios {
                    display: flex;
                    align-items: center;
                    .radio_wrap {
                        margin: 0;
                        &:not(:first-child) {
                            margin: 0 0 0 3rem;
                        }
                    }
                }
                .pay_detail {
                    display: block;
                    padding: 0.4rem 2.4rem;
                    background: ${(props) => props.theme.gray1};
                    border-top: 1px solid ${(props) => props.theme.gray2};
                    text-align: right;
                    &.close {
                        display: none;
                    }
                    & p {
                        display: flex;
                        align-items: center;
                        justify-content: flex-end;
                        padding: 1rem 0;
                        span {
                            display: inline-block;
                            white-space: nowrap;
                            font-size: 1.4rem;
                            input {
                                height: 3.6rem;
                                margin-right: 1.2rem;
                                font-size: 1.4rem;
                            }
                            &.percent {
                                margin-left: 2.6rem;
                                input {
                                    width: 7rem;
                                    text-align: center;
                                }
                            }
                            &.installment {
                                margin-left: 3rem;
                                input {
                                    width: 11.8rem;
                                    text-align: right;
                                }
                            }
                        }
                    }
                }
            }
            button.full {
                margin-top: 2.8rem;
            }
        }
    }
    
    .link {
        color: #4F63E3;
        text-decoration: underline;
        cursor: pointer;
    }
    
    .side_info_text {
        font-size: 1.6rem;
    }
  
    .guide_box {
        padding: 2rem 3.6rem;
        margin-top: 2.8rem;
        margin-bottom: 0;
        font-size: 1.4rem;
        & > p {
            margin-bottom: 1.2rem;
            
            &:first-child {
                font-weight: 500;
            }

            &.red_txt {
                font-weight: 500;
            }

            &:last-child {
                margin-bottom: 0;
            }
        }
        .bottom_guide {
            p:first-child {
                margin-bottom: 0.8rem;
                font-weight: 500;
                color: ${(props) => props.theme.black1};
            }
          
            p:not(.dot_msg) + p:not(.dot_msg) {
              margin-top: 1.2rem;
            }

            .dot_msg {
                color: ${(props) => props.theme.black1};
            }
            .link {
                color: #4F63E3;
                text-decoration: underline;
            }
        }
    }
    .no_data {
        padding: 6rem 0;
        border-top: 1px solid ${(props) => props.theme.gray2};
        font-size: 1.6rem;
        font-weight: 500;
        color: ${(props) => props.theme.gray4};
        text-align: center;
    }

    & .option_box {
        position: relative;
        padding: 15px;
        background: #f6f6f6;

        &:first-child {
            margin-top: 20px;
        }

        &:not(:first-child) {
            margin-top: 10px;
        }
        & p {
            display: inline-block;
            max-width: 440px;
            padding-right: 22px;
            color: #222;
            font-size: 0.938rem;
            line-height: 22.5px;
        }
    }
    .count_box {
        display: flex;
        overflow: hidden;
        border-radius: 0.4rem;
        border: 1px solid ${(props) => props.theme.gray2};
        & button {
            display: inline-flex;
            flex: 0 0 2.8rem;
            align-items: center;
            justify-content: center;
            height: 2.8rem;
            width: 2.8rem;
            background: ${(props) => props.theme.gray1};
            font-size: 1.5rem;
            color: ${(props) => props.theme.gray4};
        }
        & label {
            display: inline-block;
            width: 3.2rem;
            height: 2.8rem;
            border-left: 1px solid ${(props) => props.theme.gray2};
            border-right: 1px solid ${(props) => props.theme.gray2};
            background: ${(props) => props.theme.white1};
            font-size: 1.4rem;
            line-height: 2.8rem;
            text-align: center;
            font-weight: 400;
        }
    }
`