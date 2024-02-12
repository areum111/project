import styled from "styled-components";
import ReplyIco from "images/ico/ico_reply.svg";

export const BoardWrap = styled.div`
    .subject {
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        span {
            display: inline-block;
            overflow: hidden;
            max-width: 80%;
            text-overflow: ellipsis;
            white-space: nowrap;
            margin-right: 0.2rem;
        }
    }
    .tb_sort {
        padding-bottom: 2rem;
        border-bottom: 1px solid ${(props) => props.theme.gray2};
        .right {
            margin-left: auto;
        }
    }
    .write_info {
        display: flex;
        position: relative;
        align-items: center;

        span {
            position: relative;

            & + span,
            & + .btn_wrap {
                padding-left: 1.2rem;
                margin-left: 1.2rem;

                &::before {
                    content: "";
                    position: absolute;
                    left: 0;
                    top: 2px;
                    width: 1px;
                    height: 2rem;
                    background-color: ${(props) => props.theme.gray2};
                }
            }

            &.writer {
                color: ${(props) => props.theme.black1};
                font-size: 1.6rem;
                font-weight: 500;
            }

            &.company_name {
                color: ${(props) => props.theme.gray4};
                font-size: 1.6rem;
            }

            &.reg_date {
                color: ${(props) => props.theme.gray3};
            }
        }
        .btn_wrap {
            position: relative;
            button {
                padding: 0.4rem 1.2rem;
                font-weight: 500;
                text-decoration: underline;
                &.mod_btn {
                    color: ${(props) => props.theme.gray4};
                }
                &.del_btn {
                    color: ${(props) => props.theme.warn1};
                }
                & + button {
                    margin-left: 0.4rem;
                }
            }
        }
        .no_data {
            font-size: 1.6rem;
        }
    }
    .comment_list {
        .write_info {
            padding: 2.2rem 2.4rem;
            border-top: 1px solid ${(props) => props.theme.gray2};
        }
        .text_wrap {
            padding: 1.2rem 2.4rem 3.6rem;
            border-top: 1px solid ${(props) => props.theme.gray2};
            font-size: 1.6rem;
            .reply_btn {
                margin-top: 5.6rem;
                background-color: ${(props) => props.theme.white1};
                border-color: ${(props) => props.theme.gray4};
                color: ${(props) => props.theme.gray4};
            }
        }
        .reply,
        .sub_reply {
            background-color: ${(props) => props.theme.gray1};
            .write_info {
                padding: 2.2rem 4.8rem;
                .writer {
                    padding-left: 3.6rem;
                    background: url(${ReplyIco}) no-repeat left center;
                }
            }
            .text_wrap {
                padding: 1.2rem 4.8rem 2.6rem;
                p {
                    padding-left: 2.4rem;
                    .name {
                        font-weight: 600;
                    }
                }
                .reply_btn {
                    background-color: ${(props) => props.theme.white3};
                }
            }
            .write_wrap {
                padding: 0 4.8rem 2.2rem;
            }
        }
        .sub_reply {
            padding-bottom: 2rem;
            .write_wrap {
                padding: 0 4.8rem;
            }
        }
    }
    .comment {
        .write_wrap {
            padding: 2.2rem 2.4rem;
            border-top: 1px solid ${(props) => props.theme.gray2};
        }
    }
    .write_comment {
        .write_wrap {
            margin-top: 1.2rem;
        }
    }
    .write_wrap {
        display: flex;
        flex-direction: column;
        textarea {
            resize: vertical;
            padding: 1.2rem 2rem;
            min-height: 8.8rem;
        }
        button {
            margin: 1.2rem 0 0 auto;
        }
    }
    .comment_view {
        padding: 3rem 3.2rem;
        font-size: 1.6rem;
    }
    .ql-container,
    .ql-editor {
        min-height: 28rem;
    }
`;

export const CustomerWrap = styled.div`
    .data_tb {
        td {
            .dark_gray.small {
                margin-left: 0.8rem;
            }
        }
    }
    // 주문내역 리스트
    .order_list_tb {
        .date {
            color: ${(props) => props.theme.main1};
            text-decoration: underline;
            cursor: pointer;
        }
        .order_name {
            span {
                color: ${(props) => props.theme.gray4};
            }
        }
        .price {
            display: flex;
            flex-wrap: wrap;
            max-width: 28rem;
            margin: 0 auto;
            p {
                display: flex;
                flex: 1 1 28rem;
                justify-content: space-between;
                span {
                    white-space: nowrap;
                    &.dot_msg {
                        padding-right: 1rem;
                    }
                }
                i {
                    color: ${(props) => props.theme.gray4};
                    font-style: normal;
                }
            }
        }
    }

    .move_link {
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${(props) => props.theme.main1};
    }
    .cont_title .move_link {
        padding: 0.6rem 2.4rem;
        margin-left: auto;
    }
    td .move_link {
        text-decoration: underline;
    }

    .order_list {
        .list {
            .shop,
            .company {
                width: 12%;
                text-align: center;
            }
            .price {
                width: 15%;
            }
            .pay_type{
                width: 10.5%;
                padding-right: 1.2rem;
            }
            .start_date{
                width: 14%;
                text-align: center;
            }
        }
        .list_detail p {
            padding-left: 0;
            padding-right: 0;
            span {
                &.percent {
                    width: 10.5%;
                }
                &.pay_date {
                    width: 14%;
                    text-align: center;
                }
            }
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
        }
    }
    .usage_box {
        .data_tb {
            tr {
                th:nth-last-child(2),
                td:nth-last-child(2):not(.no_data) {
                    padding-right: 0;
                    text-align: right;
                }
                th:last-child,
                td:last-child:not(.no_data) {
                    padding-left: 0.4rem;
                    text-align: left;
                }
            }
        }
    }
    
    .cont_box + .right_btn_wrap {
        margin-top: 4.8rem;
    }
`

export const UsageHistoryWrap = styled.div`

`;