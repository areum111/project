import styled from "styled-components";
import ListIco from "images/ico/ico_list.svg";
import ListOnIco from "images/ico/ico_list_on.svg";
import ChartIco from "images/ico/ico_chart.svg";
import ChartOnIco from "images/ico/ico_chart_on.svg";

export const ReceiptListWrap = styled.div`
    & .outline_box.search_result {
        display: flex;
        justify-content: center;
        .cnt_box_wrap {
            display: flex;
            flex: 2;
            max-width: 92.4rem;
            padding: 2.8rem 0;
            border-radius: 1rem;
            background-color: ${(props) => props.theme.gray1};
            & .cnt_box {
                flex: 1 1 100%;
                position: relative;
                padding: 0.4rem 0;
                text-align: center;
                & + .cnt_box {
                    border-left: 1px solid ${(props) => props.theme.gray2};
                }
                & .title {
                    margin-bottom: 0.8rem;
                    font-size: 1.6rem;
                    & .point_dot {
                        margin-right: 0.8rem;
                    }
                }
                & .cnt {
                    font-size: 2rem;
                    font-weight: 700;
                    color: ${(props) => props.theme.black1};
                    & strong {
                        color: #4F63E3;
                    }
                }
            }
        }
        .price_wrap {
            display: flex;
            flex: 1;
            justify-content: flex-end;
            max-width: 59.2rem;
            padding-left: 2rem;
            table {
                width: 51.2rem;
                height: 100%;
                th {
                    text-align: left;
                    font-size: 1.6rem;
                }
                td {
                    text-align: right;
                    font-size: 2rem;
                    font-weight: 700;
                    color: ${(props) => props.theme.black1};
                }
            }
        }
        .pay_info {
            display: flex;
            flex: 1;
            align-items: center;
            max-width: 44.6rem;
            height: 12rem;
            .info_box {
                display: inline-flex;
                flex-direction: column;
                justify-content: center;
                flex: 0 0 41%;
                height: 100%;
                padding: 0 1rem;
                text-align: center;
                & + .info_box {
                    flex: 0 0 59%;
                    border-left: 1px solid ${(props) => props.theme.gray2};
                }
                .title {
                    margin-bottom: 0.8rem;
                }
                .text {
                    font-weight: 700;
                    font-size: 2rem;
                    color: ${(props) => props.theme.black1};
                    span {
                        display: block;
                        margin-top: 0.8rem;
                        font-size: 1.4rem;
                        color: ${(props) => props.theme.gray4};
                        font-weight: 400;
                    }
                }
            }
        }
    }
`;

export const ReceiptDetailWrap = styled.div`
    .date_info {
        margin-bottom: 4rem;
        th, td {
            padding: 1.2rem 2.4rem;
            font-size: 1.6rem;
        }
        th {
            width: 20rem;
            font-weight: 500;
            color: ${(props) => props.theme.black1};
            text-align: left;
        }
    }
    
    .company_info_wrap {
        display: flex;
        padding: 4rem 3.6rem;
        margin-left: -3.6rem;
        .company_info {
            flex: 1 1 62.8rem;
            max-width: 62.8rem;
            margin-right: 4rem;
            .name {
                padding-bottom: 1.2rem;
                margin-bottom: 1.2rem;
                border-bottom: 1px solid ${(props) => props.theme.gray2};
                font-weight: 700;
                font-size: 1.8rem;
                color: ${(props) => props.theme.black1};
            }
            .info {
                font-size: 1.6rem;
            }
        }
    }
    
    .pay_info {
        padding: 4.4rem 0;
        .pay_title {
            padding-bottom: 1.2rem;
            margin-bottom: 1.2rem;
            border-bottom: 1px solid ${(props) => props.theme.gray2};
            .title {
                margin-bottom: 0.6rem;
                font-weight: 700;
                font-size: 2.8rem;
                color: ${(props) => props.theme.black1};
            }
            .account {
                text-align: right;
                color: ${(props) => props.theme.gray4};
                font-size: 1.8rem;
                font-weight: 500;
            }
        }
        .price_info {
            & > div {
                display: flex;
                .title {
                    width: 14rem;
                    font-weight: 700;
                    font-size: 2rem;
                    color: ${(props) => props.theme.gray4};
                }
                .text {
                    display: flex;
                    align-items: center;
                    font-size: 2rem;
                    font-weight: 500;
                    span {
                        display: inline-flex;
                        margin: 0 1.6rem;
                    }
                }
                & + div {
                    margin-top: 1.2rem;
                }
            }
        }
    }

    h4 {
        margin-bottom: 5.2rem;
        font-size: 2rem;
        font-weight: 700;
    }
    .use_product_info {
        padding: 3.6rem 0 4rem;
        margin-bottom: 3.2rem;
        strong {
            font-weight: 500;
        }
        .total_price {
            background-color: ${(props) => props.theme.gray1};
            border-bottom: 1px solid ${(props) => props.theme.gray2};
            & > p {
                display: flex;
                justify-content: flex-end;
                padding: 1.6rem 0;
                marign: 0.4rem 0;
                text-align: center;
                font-size: 1.6rem;
                font-weight: 500;
                .title {
                    width: 30%;
                }
                .price {
                    width: 15%;
                }
            }
        }
    }
`

export const SalesWrap = styled.div`
    .date_wrap {
        max-width: 129.5rem;
        justify-content: space-between;
        .select_wrap {
            width: 100%;
            margin-right: 2%;
            .select.l {
                min-width: auto;
            }
        }
        .date_dash {
            margin: 0 2% 0 0;
        }
    }
    .tb_util {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-top: 2.6rem;
        margin-bottom: 2.6rem;
        border-top: 1px solid ${(props) => props.theme.gray2};
        .total_price {
            font-size: 1.8rem;
            font-weight: 500;
            strong {
                font-weight: 700;
                font-size: 2rem;
                color: ${(props) => props.theme.black1};
            }
        }
        .right_btn {
            display: flex;
            align-items: center;
            ul {
                display: flex;
                margin-right: 2rem;
                padding: 0.1rem;
                border-radius: 1rem;
                background-color: ${(props) => props.theme.white3};
                li {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    width: 3.7rem;
                    height: 3.4rem;
                    background-repeat: no-repeat;
                    background-position: center;
                    cursor: pointer;
                    text-indent: -9999px;
                    &.selected {
                        box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
                        border-radius: 1rem;
                        background-color: ${(props) => props.theme.white1};
                    }
                    &.list {
                        background-image: url(${ListIco});
                        &.selected {
                            background-image: url(${ListOnIco});
                        }
                    }
                    &.chart {
                        background-image: url(${ChartIco});
                        &.selected {
                            background-image: url(${ChartOnIco});
                        }
                    }
                    & + li {
                        margin-right: 0.1rem;
                    }
                }
            }
        }
    }
    .triangle {
        margin-left: 0.8rem;
        img {
            vertical-align: top;
        }
    }
`;

export const SalesHistoryWrap = styled.div`
    .product_name {
        display: flex;
        justify-content: center;
        align-items: center;
        a {
            display: -webkit-box;
            overflow: hidden;
            text-overflow: ellipsis;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            text-align: center;
        }
    }
    
    .link {
        //display: inline-block;
        //overflow: hidden;
        //height: 2.4rem;
        //text-overflow: ellipsis;
        //white-space: nowrap;
    }
`