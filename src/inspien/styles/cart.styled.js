import styled from "styled-components";

export const CartWrap = styled.div`
    .content {
        display: flex;
        .order_list_wrap {
            display: flex;
            flex-direction: column;
            flex: 1;
            width: 66.6%;
            .cont_title {
                label {
                    font-weight: inherit;
                    font-size: inherit;
                }
                button {
                    margin-left: auto;
                }
            }
            .outline_box {
                padding: 2.8rem 3.5rem;
                &.unavailable {
                    background-color: #F2F2F2;
                }
            }
            .no_data {
                display: flex;
                flex: 1;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100%;
                p {
                    margin-bottom: 1.6rem;
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: ${(props) => props.theme.gray4};
                }
            }
        }
        .price_wrap {
            width: 33.3%;
            margin-left: 4rem;
            margin-top: 0;
            .title {
                margin-bottom: 2rem;
                font-size: 2rem;
                font-weight: 700;
                color: ${(props) => props.theme.black1};
                text-align: center;
            }
            .price_info {
                margin-bottom: 3.2rem;
                border-top: 1px solid ${(props) => props.theme.gray2};
                & > div {
                    display: flex;
                    justify-content: space-between;
                    padding: 2.4rem;
                    border-bottom: 1px solid ${(props) => props.theme.gray2};
                    font-size: 1.6rem;
                    color: ${(props) => props.theme.black1};
                    .info_title {
                        font-weight: 500;
                    }
                }
                .price {
                    b {
                        font-weight: 500;
                    }
                }
            }
            .pay_agree {
                margin-bottom: 3.2rem;
                padding: 2.4rem 1.2rem;
                background-color: ${(props) => props.theme.gray1};
                border-radius: 2rem;
                .all_agree {
                    padding-bottom: 1.2rem;
                    border-bottom: 1px solid ${(props) => props.theme.gray2};
                }
                .agree {
                    border-bottom: 1px solid ${(props) => props.theme.gray2};
                    .agree_chk {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        padding: 1rem 0;
                        .more_btn {
                            padding: 0.4rem 1.2rem;
                            font-size: 1.4rem;
                            color: ${(props) => props.theme.gray4};
                            font-weight: 500;
                            text-decoration: underline;
                        }
                        label {
                            color: ${(props) => props.theme.gray4};
                        }
                    }
                    .agree_text {
                        display: none;
                        margin-bottom: 0.8rem;
                        padding: 0.8rem 2rem;
                        background-color: #F2F2F2;
                        color: ${(props) => props.theme.gray4};
                        font-size: 1rem;
                        font-weight: 500;
                        .scroll_inner {
                            max-height: 14rem !important;
                        }
                        &.on {
                            display: block;
                        }
                    }
                }
                .check_wrap {
                    label {
                        font-size: 1.2rem;
                    }
                }
            }
            .button_wrap {
                button + button {
                    margin-top: 1.6rem;
                }
            }
            .desc {
                display: flex;
                margin-top: 3.2rem;
                .dot_msg {
                    display: inline-block;
                    margin-left: auto;
                    font-size: 1.2rem;
                    font-weight: 400;
                    span {
                        font-weight: 500;
                        color: ${(props) => props.theme.black2};
                        text-decoration: underline;
                    }
                }
            }
        }
    }
`;

export const ProductListWrap = styled.div`
    .order_list_title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        p {
            display: flex;
            align-items: center;
            font-size: 2rem;
            font-weight: 700;
            img {
                margin-right: 0.8rem;
            }
        }
        .desc {
            margin-left: 1.2rem;
            font-size: 1.4rem;
            font-weight: 400;
            color: ${(props) => props.theme.gray4};
        }
        & > div {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            &:last-child {
                flex-wrap: nowrap;   
            }
        }
    }
    
    .toggle_wrap {
        &.close {
            display: none;
        }
    }
    .order_list {
        margin-top: 2rem;
        border-bottom: 1px solid ${(props) => props.theme.gray2};
        
        .list {
            display: flex;
            align-items: center;
            flex-wrap: nowrap;
            padding: 1.5rem 0;
            border-top: 1px solid ${(props) => props.theme.gray2};
            & > * {
                display: inline-block;
                padding: 0 1.2rem;
            }
            .check_wrap {
                width: 4.4rem;
            }
            .company {
                display: -webkit-box;
                padding: 0 2rem;
            }
            .pay_type {
                padding-right: 3rem;
            }
            .del_btn {
                width: 5rem;
                color: ${(props) => props.theme.gray4};
                svg {
                    vertical-align: middle;
                }
            }
        }
        .list_detail {
            background: ${(props) => props.theme.gray1};
            border-top: 1px solid ${(props) => props.theme.gray2};
            text-align: right;
            &.close {
                display: none;
            }
            & p {
                padding: 1.6rem 5rem 1.6rem 0;
                span {
                    display: inline-block;
                    padding: 0 1.2rem;
                    font-size: 1.2rem;
                    input[type="text"] {
                        width: 8rem;
                        height: 3.2rem;
                        padding: 0.8rem 0.6rem;
                        text-align: right;
                        font-size: 1.2rem;
                        &:disabled {
                            border-color: #cacaca;
                        }
                    }
                    &.installment {
                        width: 15%;
                        font-weight: 500;
                        input[type="text"] {
                            width: 8rem;
                        }
                    }
                    &.percent {
                        width: 10.2%;
                        padding-right: 3rem;
                        color: ${(props) => props.theme.gray4};
                        input[type="text"] {
                            width: 4rem;
                        }
                    }
                    &.pay_date {
                        width: 16%;
                        color: ${(props) => props.theme.gray4};
                    }
                }
            }
        }
    }
    .order_total {
        margin-top: 2rem;
        text-align: right;
        color: ${(props) => props.theme.gray4};
        .total_cnt {
            margin-right: 1.2rem;
            font-size: 1.6rem;
            b {
                font-weight: 500;
                color: ${(props) => props.theme.black2};
            }
        }
        .total_price {
            margin-left: 1.2rem;
            font-weight: 700;
            font-size: 1.8rem;
            color: ${(props) => props.theme.black2};
            .gray_txt {
                font-weight: 500;
            }
        }
        .desc {
            margin-top: 0.8rem;
            font-size: 1.2rem;
            color: ${(props) => props.theme.gray3};
        }
    }

    .company {
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        width: 13%;
        max-height: 4rem;
        padding: 0 2rem;
        text-align: center;
    }
    .product {
        flex: 1;
        text-align: left;
        .name {
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            max-height: 2rem;
            max-width: 32rem;
            margin-bottom: 0.2rem;
            font-weight: 500;
            text-decoration: underline;
            span[class^="label"] {
                display: inline-block;
                padding: 0 0.4rem;
                margin-right: 0.8rem;
                border-radius: 3px;
                border-style: solid;
                border-width: 1px;
                font-size: 1.2rem;
                line-height: 1.6rem;
                &.label_package {
                    border-color: #EBCFFC;
                    background: #F5E7FD;
                    color: #AE3FF3;
                }
                &.label_workspace {
                    border-color: #D3F2CF;
                    background: #EEFDEB;
                    color: #32BF1B;
                }
            }
        }
    }
    .price {
        width: 16%;
        text-align: right;
        font-weight: 500;
        .gray_txt {
            font-weight: 400;
        }
    }
    .pay_type {
        width: 12%;
        padding-right: 3rem;
        text-align: right;
        color: ${(props) => props.theme.gray4};
        button {
            color: inherit;
            svg {
                vertical-align: middle;
                color: inherit;
            }
        }
    }
    .start_date {
        width: 13%;
        color: ${(props) => props.theme.gray4};
        text-align: right;
    }

    .del_all {
        margin-top: -0.5rem;
        margin-right: 2.2rem;
        font-size: 1.2rem;
        color: ${(props) => props.theme.warn1};
        white-space: nowrap;
        text-decoration: underline;
    }
    
    .state {
        text-decoration: underline;
        &.ing {
            color: #4F63E3;
        }
    }
    .stop_date {
        display: block;
        font-size: 1.2rem;
        color: ${(props) => props.theme.gray3};
    }
    .manage_btn {
        margin: 0 -0.4rem;
        button {
            margin: 0.4rem !important;
        }
    }
`