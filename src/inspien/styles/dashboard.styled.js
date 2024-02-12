import styled from "styled-components";
import ChartBg from "images/chart_bg.jpg";

export const DashboardWrap = styled.div`
    .content {
        display: flex;
        &.full {
            & .cont_box {
                max-width: 100%;
                & .outline_box {
                    position: relative;
                    padding: 4.5rem 4rem 4.5rem 7rem;
                }   
            }
        }
        & + .content {
            margin-top: 6rem;
        }

        .cont_title {
            align-items: baseline;
            & span {
                font-size: 1.6rem;
                color: ${(props) => props.theme.gray4};
            }
            & .select_wrap {
                margin-left: auto;
                width: 10.8rem;
            }
        }

        .cont_box {
            display: flex;
            flex-direction: column;
            flex: 1 1 100%;
            max-width: 50%;
            min-width: calc((100% - 8rem) / 3);
            & + .cont_box {
                margin: 0 0 0 4rem;
            }
            .outline_box {
                display: flex;
                justify-content: space-between;
                height: 100%;
                padding: 2.4rem;
                & .cnt_box {
                    flex: 1 1 100%;
                    position: relative;
                    padding: 0.4rem 0;
                    text-align: center;
                    & + .cnt_box {
                        border-left: 1px solid ${(props) => props.theme.gray3};
                    }
                    & .title {
                        margin-bottom: 0.4rem;
                        font-size: 1.6rem;
                        font-weight: 500;
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
        }
        
        .lank_box {
            flex-direction: column;
            & .lank {
                display: flex;
                justify-content: space-between;
                & .left {
                    overflow: hidden;
                    height: 2.4rem;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    font-size: 1.6rem;
                    & .num {
                        display: inline-block;
                        width: 2.6rem;
                        margin-right: 1rem;
                        font-weight: 500;
                    }
                }
                & .price {
                    flex: 0 0 12rem;
                    color: ${(props) => props.theme.gray4};
                    font-weight: 500;
                    text-align: right;
                }
                & + .lank {
                    margin-top: 1.6rem;
                }
                &:nth-child(-n+3) {
                    & .num {
                        color: ${(props) => props.theme.main1};
                    }
                }
            }
        }
    }

    .chart_box {
        align-items: center;
    }
    .chart_wrap {
        position: relative;
        flex: 1 1 30rem;
        max-width: 30rem;
        & > div {
            position: relative;
        }
        & canvas {
            width: 100% !important;
            height: 100% !important;
        }
        & .total_cnt {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-weight: 700;
            text-align: center;
            p:first-child {
                font-size: 2rem;
            }
            p:last-child {
                font-size: 2.8rem;
            }
        }
    }
    .line_chart_wrap {
        display: flex;
        position: relative;
        height: 30rem;
        .no_data {
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 2.5rem;
            left: 3rem;
            width: calc(100% - 3rem);
            border: 1px solid ${(props) => props.theme.white3};
            background: #fff;
            color: ${(props) => props.theme.gray4};
        }
    }

    .chart_label {
        padding-left: 2rem;
        & p {
            position: relative;
            padding-left: 1.8rem;
            font-size: 1.6rem;
            font-weight: 500;
            & + p {
                margin-top: 3rem;
            }
            &::before {
                content: "";
                display: inline-block;
                position: absolute;
                top: 0.7rem;
                left: 0;
                width: 1.2rem;
                height: 1.2rem;
                border-radius: 50%;
                background-color: #4F63E3;
            }
            &.partner::before {
                background-color: #9963F7;
            }
            &.customer::before {
                background-color: #00BF85;
            }
        }
    }
    
    .chart_title {
        padding: 1.8rem 0;
        margin-bottom: 2rem;
        background-color: ${(props) => props.theme.gray1};
        text-align: center;
        font-weight: 500;
    }
    
    & .title_area {
        position: relative;
        & .content.customer_info {
            display: inline-flex;
            margin-left: auto;
            flex: 0 0 84.6rem;
            max-width: 65%;
            & .cont_box {
                max-width: 100%;
                width: 84.6rem;
                & .cnt {
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: #0DBF89;
                }
            }
        }
    }
    
    .base_label {
        padding: 0.2rem 0.4rem;
        border-radius: 2rem;
        background: #0DBF89;
        font-weight: 500;
        color: #fff;
        font-size: 1.2rem;
    }
    
    .noti_wrap {
        width: 100%;
        height: calc(100% + 9rem);
        padding: 11rem 0 7rem;
        margin-top: -4.5rem;
        margin-left: -1.5rem;
        text-align: center;
        background: url(${ChartBg}) no-repeat center;
        img {
            margin-bottom: 1.4rem;
        }
        .main_txt {
            margin-bottom: 1.6rem;
            font-size: 2.8rem;
            font-weight: 700;
        }
        .sub_txt {
            font-size: 2rem;
            font-weight: 500;
        }
    }
`;