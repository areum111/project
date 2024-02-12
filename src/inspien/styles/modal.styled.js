import styled from "styled-components";

export const ModalWrap = styled.div`
    .top_area {
        margin-bottom: 3.2rem;
            
        .sub_text,
        .sub_title {
            margin-bottom: 0.4rem;
            font-size: 1.6rem;
            font-weight: 500;
            color: ${(props) => props.theme.gray4};
            text-align: center;
        }
    
        .main_text {
            font-weight: 700;
            font-size: 2rem;
            text-align: center;
        }
    }
    
    .bottom_area {
        border-top: 1px solid ${(props) => props.theme.gray2};
    }
    
    .time_input {
        position: relative;
        margin: 3.2rem 0;
        & input {
            width: 100%;
        }
    }
    
    .guide_wrap {
        padding: 1.2rem;
        background-color: ${(props) => props.theme.gray1};
        font-size: 1.2rem;
        & p {
            color: ${(props) => props.theme.gray4};
            & b {
                color: ${(props) => props.theme.black2};
                font-weight: 500;
            }
        }
    }
    
    .button_wrap {
        display: flex;
        justify-content: center;
        margin-top: 3.2rem;
        padding-bottom: 0.4rem;
        & button + button {
            margin-left: 1.6rem;
        }
    }
    
    table.form_tb {
        & > tr {
            & > th {
                width: 11.5rem;
            }
            & > th,
            & > td {
                min-height: 5.6rem;
                padding: 1.6rem 2.4rem;
            }
            & > td {
                width: calc(100% - 11.5rem);
                input[type="text"] {
                    margin: -0.4rem -1.6rem;
                    width: calc(100% + 3.2rem);
                    max-width: calc(100% + 3.2rem);
                }
            }
        }
    }

    .dialog_inner table.data_tb {
        margin-bottom: 0;
        & tr {
            & > th,
            & > td {
                height: 4.8rem;
                padding: 1.4rem 2.4rem;
            }
        }
    }
    
    //로그인 2차 인증 팝업
    &.login_modal {
        .guide_wrap {
            padding: 2rem;
        }   
    }
    
    //가입 승인 거절 팝업
    &.join_reject_modal {
        .main_text {
            display: flex;
            align-items: center;
            padding-bottom: 1.6rem;
            margin-bottom: 4rem;
            border-bottom: 1px solid ${(props) => props.theme.gray2};
            font-size: 2rem;
            font-weight: 700;
            span {
                margin-left: 0.8rem;
                font-size: 1.2rem;
                color: ${(props) => props.theme.gray4};
                font-weight: 400;
            }
        }
        .textarea_wrap {
            display: flex;
            margin-bottom: 5.2rem;
            span {
                display: block;
                flex: 0 0 11rem;
                font-size: 1.6rem;
                font-weight: 500;
                color: ${(props) => props.theme.black1};
                text-align: center;
            }
            textarea {
                overflow-y: auto;
                max-height: 9rem;
                height: auto;
            }
        }
    }
    
    //사용자 권한 설정 팝업
    &.auth_modal {
        .title_wrap {
            background-color: ${(props) => props.theme.gray5};
        }
        .main_text {
            margin: 2rem 0 1.6rem;
            font-size: 2rem;
            font-weight: 700;
        }
    }

    //장바구니 주문완료 팝업
    &[class*="complete_"] {
        .gray_box {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 1.2rem;
            margin: 1.6rem 0;
            background: ${(props) => props.theme.gray1};
            .dot_msg {
                display: inline-block;
                color: ${(props) => props.theme.black2};
            }
        }
        .modal_text {
            .sub_text {
                font-size: 1.2rem;
                & a {
                    color: ${(props) => props.theme.main1};
                    font-weight: 500;
                    text-decoration: underline;
                }
            }
        }
        .button_wrap {
            margin-top: 2.8rem;
        }
    }
    
    //회원정보 수정 -> 대체관리자 선택 팝업
    &.select_tb_modal,
    &.select_admin_modal,
    &.select_company_modal {
        .title_wrap {
            background-color: ${(props) => props.theme.gray5};
        }
        .search_input {
            position: relative;
            margin: 2rem 0 3.2rem;
            input {
                padding-right: 5rem;
            }
            button {
                position: absolute;
                top: 1.2rem;
                right: 2rem;
            }
        }
        .data_wrap {
            .cnt {
                margin-bottom: 1.2rem;
                font-size: 1.6rem;
            }
            td {
                text-align: center;
            }
            .user_name,
            .company_name {
                color: ${(props) => props.theme.main1};
                border-bottom: 1px solid ${(props) => props.theme.main1};
            }
        }
    }
    
    // 회원 탈퇴 팝업
    &.out_user_modal {
        .dialog_inner {
            .modal_text {
                .sub_title {
                    margin-bottom: 0.4rem;
                    font-size: 1.6rem;
                    font-weight: 500;
                    color: ${(props) => props.theme.gray4};
                }
                .sub_text {
                    margin-top: 1.2rem;
                    font-size: 1.2rem;
                }
            }
            .gray_box {
                margin: 3.2rem 0 1.2rem;
                padding: 1.2rem;
                background-color: ${(props) => props.theme.gray1};
                .dot_msg {
                    font-size: 1.2rem;
                    color: ${(props) => props.theme.black2};
                    b {
                        font-weight: 500;
                    }
                }
            }
            .check_wrap label {
                font-size: 1.2rem;
            }   
        }
    }
    
    //이용 상품 -> 이용상태 변경 내역
    &.use_state_popup {
        .title_wrap {
            background-color: ${(props) => props.theme.gray5};
        }
        .main_text {
            margin: 2rem 0 1.6rem;
            font-size: 2rem;
            font-weight: 700;
        }
        th {
            width: 50%;
        }
    }
    
    //정산 -> 입금 확인
    &.deposit_check_modal {
        .modal_text {
            .sub_title {
                margin-bottom: 0.4rem;
                font-size: 1.6rem;
                color: ${(props) => props.theme.gray4};
                font-weight: 500;
            }
            .sub_text {
                margin-top: 1.2rem;
            }   
        }
        .guide_wrap {
            display: flex;
            justify-content: center;
            margin-top: 3.2rem;
            .guide_inner {
                .dot_msg {
                    color: ${(props) => props.theme.black2};
                    &::before {
                        background-color: ${(props) => props.theme.black2};
                    }
                }   
            }
        }
    }
    
    //입력 팝업
    &.submit_modal {
        .title_wrap {
            background-color: ${(props) => props.theme.gray5};
        }
        .main_text {
            margin: 2rem 0 1.6rem;
            font-size: 2rem;
            font-weight: 700;
        }
        th {
            display: inline-flex;
            align-items: center;
        }
        .guide_wrap {
            margin-top: 1.6rem;
        }
    }
    
    //안내 팝업
    &.guide_modal {
        .guide_wrap {
            margin-top: 3.2rem;
            .dot_msg li {
                color: ${(props) => props.theme.black2};
            }
        }
        .check_wrap {
            margin-top: 1.2rem;
            label {
                font-size: 1.2rem;
            }
        }
    }
    
    //고객관리 -> 관리 팝업
    &.customer_mileage_popup {
        .company_info {
            padding: 2rem 0 1.6rem;
            border-bottom: 1px solid ${(props) => props.theme.gray2};
            p {
                display: flex;
                align-items: center;
                font-size: 2rem;
                font-weight: 700;
                span {
                    margin-left: 0.8rem;
                    font-size: 1.2rem;
                    font-weight: 500;
                    color: ${(props) => props.theme.gray4};
                }   
            }
        }
        .data_wrap {
            margin-top: 2.4rem;
            .tb_top {
                p {
                    font-size: 1.6rem;
                    font-weight: 500;
                    span {
                        margin-left: 0.8rem;
                        color: ${(props) => props.theme.main1};
                    }
                }
            }
            table.data_tb {
                margin-bottom: 0;
                & tr {
                    & > th,
                    & > td {
                        height: 4.8rem;
                        padding: 0.6rem 1.8rem;
                    }
                    td {
                        input[type="text"],
                        input[type="number"] {
                            padding: 0.8rem;
                            height: 3.6rem;
                            font-size: 1.4rem;
                            &::placeholder {
                                font-size: 1.4rem;
                            }
                            &.mileage {
                                text-align: center;
                            }
                        }
                        .td_wrap {
                            display: flex;
                            .select_wrap {
                                flex: 0 0 12.4rem;
                                margin-right: 0.8rem;
                                .select__control {
                                    padding-left: 1.6rem;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`