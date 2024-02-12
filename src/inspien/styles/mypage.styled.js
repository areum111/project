import styled from "styled-components";

export const MypageWrap = styled.div`
    .inner {
        display: flex;
    }
    .content {
        flex: 5;
        .cont_title {
            align-items: flex-end;
        }
        .tb_text {
            margin-bottom: 3.2rem;
            font-size: 1.6rem;
            font-weight: 500;
            text-align: right;
            strong {
                font-size: 1.8rem;
                color: ${(props) => props.theme.main1};
            }
        }
        .mileage {
            color: #4F63E3;
            &.gray_txt {
                color: ${(props) => props.theme.gray4};
            }
        }
    }
    .member_box {
        .pw_input {
            max-width: 57rem;
        }
    }
    .out_user {
        margin-top: 0.8rem;
        text-align: right;
        button {
            padding: 0.6rem 2.4rem;
            color: ${(props) => props.theme.gray4};
            font-size: 1.6rem;
            font-weight: 500;
        }
    }
    
    // 주문내역 리스트
    .order_list_tb {
        .date {
            color: ${(props) => props.theme.main1};
            text-decoration: underline;
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
`;

export const MypageMenuWrap = styled.div`
    flex: 1;
    min-width: 11rem;
    h3 {
        font-size: 2rem;
        font-weight: 700;
    }
    ul {
        margin-top: 4rem;
        li {
            font-size: 1.8rem;
            font-weight: 500;
            color: ${(props) => props.theme.gray4};
            &.on {
                color: ${(props) => props.theme.main1};
            }
            & + li {
                margin-top: 1.2rem;
            }
        }
    }
`;