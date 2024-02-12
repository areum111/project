import styled from "styled-components";
import BackImg from "images/login_bg.jpg";

export const LoginWrap = styled.div`
    position: relative;
    min-height: 100vh;
    background: url(${BackImg}) no-repeat center;
    background-size: cover;
    
    & .inner {
        padding: 12rem 5.4rem 4rem 13rem;
    }

    & .login_inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 100rem;
        max-width: 150rem;
        min-height: 100vh;
        margin: 0 auto;
    }

    & .left_area {
        & h1 {
            margin-bottom: 2.5rem;
        }
        & h2 {
            font-size: 4.2rem;
            font-weight: 700;
            color: ${(props) => props.theme.white1};
        }
        & button {
            padding: 0.6rem 2.4rem;
            margin-top: 4rem;
            background-color: ${(props) => props.theme.white1};
            border-radius: 2rem;
            color: ${(props) => props.theme.main1};
            font-size: 1.6rem;
            font-weight: 500;
        }
    }

    & .right_area {
        display: flex;
        align-items: center;
        min-height: 100vh;
        padding: 9rem 0;

        & .select_wrap {
            padding-right: 0.2rem;
            text-align: right;
        }

        & .login_wrap {
            width: 56rem;
            padding: 8rem;
            margin-top: 3.2rem;
            border-radius: 2rem;
            background-color: ${(props) => props.theme.white1};

            & h2 {
                margin-bottom: 3.6rem;
                text-align: center;
                font-size: 3.2rem;
                font-weight: 700;
            }

            & .id_input {
                width: 100%;
                margin-bottom: 1.6rem;
                & input {
                    width: 100%;
                }
            }
            
            & .pw_input {
                button img {
                    opacity: 0.4;
                    vertical-align: middle;
                }
            }

            & .login_util {
                display: flex;
                justify-content: space-between;
                margin-bottom: 3.6rem;

                & .right {
                    display: flex;
                    & a {
                        padding: 0.4rem 1.2rem;
                        color: ${(props) => props.theme.gray4};
                    }
                    & a + a {
                        position: relative;
                        margin-left: 2.4rem;
                        &::before {
                            content: "";
                            position: absolute;
                            left: -1.2rem;
                            top: 0.6rem;
                            width: 1px;
                            height: 1.6rem;
                            background: ${(props) => props.theme.gray4};
                        }
                    }
                }
            }

            & .button_wrap {
                & button + button {
                    margin-top: 1.6rem;
                }
            }

            & .dot_msg {
                margin: -2.6rem 0 1rem;
            }
        }
    }

    & .copy {
        position: absolute;
        right: 6%;
        bottom: 6%;
        text-align: right;
        color: ${(props) => props.theme.white3};
        font-size: 1.2rem;
    }
`;

export const MemberWrap = styled.div`
    & .join_inner {
        padding: 12rem 13rem 4rem;
    }
    & .inner {
        padding: 12rem 5.4rem 4rem 13rem;
    }
    
    .content {
        h3 {
            font-size: 2rem;
            font-weight: 700;
        }

        .check_agree {
            display: flex;
            align-items: center;
            & p {
                margin-left: 0.8rem;
                color: ${(props) => props.theme.gray4};
            }
        }

        & > .check_agree {
            padding-top: 1.6rem;
            border-top: 1px solid ${(props) => props.theme.gray2};
            margin: 1.6rem 0 1.2rem;
        }
        
        & .agree_box {
            padding-top: 2rem;
            & .agree_toggle {
                margin-left: auto;
                & svg {
                    margin-top: 0.5rem;
                }
            }
            .agree_desc {
                padding-right: 0 !important;
                margin-top: 2.4rem;
                .scroll_inner {
                    max-height: 22rem;
                }
            }
            &.close {
                padding-bottom: 2rem;
                .agree_desc {
                    display: none;
                }
            }
        }
        
        & .member_box {
            & input[type="text"],
            & input[type="number"],
            & input[type="password"]{
                flex: 1 1 68rem;
                max-width: 68rem;
                & + * {
                    margin-left: 3rem;
                }
            }
            & .pw_input {
                width: 68rem;
                & + * {
                    margin-left: 3rem;
                }
            }
            & .time_input {
                width: 57.2rem;
                margin-right: 3rem;
                & input {
                    width: 100%;
                }
            }
            &.company_info {
                .radio_wrap {
                    &:last-child {
                        margin-right: 0;
                    }
                }
                .company_search {
                    margin-left: 3rem;
                }
                .company_name {
                    position: relative;
                    padding-left: 1.2rem;
                    margin-left: 1.2rem;
                    border-left: 1px solid ${(props) => props.theme.gray2};
                    line-height: 2.4rem;
                    font-weight: 500;
                    &:empty {
                        margin: 0;
                        padding: 0;
                    }
                }
            }
        }
        
    }
    .button_wrap {
        display: flex;
        justify-content: center;
        margin-top: 3.2rem;
        & button + button {
            margin-left: 2rem;
        }
    }
    .check_wrap + .form_tb{
        margin-top: 2rem; 
    }
    .cont_title .right_btn {
        padding: 0.6rem 2.4rem;
        margin-left: auto;
        font-size: 1.6rem;
        font-weight: 500;
        color: ${(props) => props.theme.main1};
    }
`;

export const MainWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding: 5rem 0;

    & .inner {
        padding: 12rem 13rem 4rem;
    }
    
    & h2 {
        margin-bottom: 7.5rem;
        font-size: 4.2rem;
        font-weight: 700;
        text-align: center;
    }
    & .service_wrap {
        display: flex;
        & .box {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 52rem;
            width: 42rem;
            padding: 0 2.8rem;
            border-radius: 1rem;
            background-color: ${(props) => props.theme.white1};
            box-shadow: 0 0 0.4rem rgba(0,0,0,0.15);
            text-align: center;
            & img {
                margin-bottom: 2rem;
            }
            
            h3 {
                margin-bottom: 0.8rem;
                font-size: 3.2rem;
                font-weight: 700;
                color: ${(props) => props.theme.main1};
            }
            
            p {
                color: ${(props) => props.theme.gray4};
            }
            
            button {
                margin-top: 3.2rem;
                padding-left: 1.6rem;
                padding-right: 1.6rem;
                & svg {
                    margin-left: 0.8rem;
                }
            }
            & + .box {
                margin-left: 4.2rem;
            }
        }
    }
    
    .text_wrap {
        text-align: center;
        img {
            margin-bottom: 4rem;
        }
        
        h2 {
            margin-bottom: 2rem;
            font-size: 2.8rem;
            font-weight: 700;
            color: ${(props) => props.theme.black1};
        }
        
        p {
            font-size: 2rem;
            font-weight: 500;
            color: ${(props) => props.theme.gray4};
        }
        
        button {
            margin-top: 8rem;
        }
    }
`;