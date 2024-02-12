import React, {useState} from "react";
import styled from "styled-components";
import LogoImg from "images/logo_wh.svg";
import CartIco from "images/ico/ico_cart.svg";
import ManIco from "images/ico/ico_man.svg";
import Filter from "components/SelectBox/Filter";
import { Link } from "react-router-dom";
import SwitchToggle from "../components/SwitchToggle/SwitchToggle";

const Header = () => {
    const [visibleUserInfo, setVisibleUserInfo] = useState(false);
    const options = [
        { value: 'kor', label: "한국어" },
        { value: 'eng', label: "영어" },
    ];

    return (
        <Container>
            <div className="logo"><h1><img src={LogoImg} alt="BACK OFFICE" /></h1></div>
            <div className="right">
                <div className="user_info_wrap">
                    {/*고객 관리자 이용자에만 표시되는 장바구니*/}
                    <div><Link to="/cart/cart1"><img src={CartIco} alt="장바구니" /></Link></div>
                    <div
                        className="user_info"
                        onMouseEnter={() => setVisibleUserInfo(true)}
                        onMouseLeave={() => setVisibleUserInfo(false)}
                    >
                        <Link to="/mypage/myinfo1">
                            <div className="text">
                                <span className="ico_label">관리자</span>
                                <span>고객사명</span>
                                <img src={ManIco} alt="프로필" />
                            </div>
                        </Link>
                        <div className={visibleUserInfo ? "user_info_layer on" : "user_info_layer"}>
                            <div className="top_info">
                                <span className="ico_label main">관리자</span>
                            </div>
                            <div className="user_name">
                                <span>인스피언</span>
                                <span>김인스</span>
                            </div>
                            <p>inspien_operation</p>
                            <p>inspien_operation@mail.com</p>
                            <div className="bottom_info">

                                {/*인스피언 헤더*/}
                                <button type="button">로그아웃</button>
                                {/*인스피언 헤더*/}

                                {/*파트너사 헤더*/}
                                {/*<button type="button" className="text_deco">고객으로 전환하기</button>*/}
                                {/*<button type="button">로그아웃</button>*/}
                                {/*파트너사 헤더*/}

                                {/*고객사 헤더*/}
                                {/*<button type="button" className="text_deco">파트너로 전환하기</button>*/}
                                {/*<button type="button">로그아웃</button>*/}
                                {/*고객사 헤더*/}
                            </div>
                        </div>
                    </div>
                    <div><Filter options={options} value={options[0]} className="select medium" /></div>
                </div>
            </div>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    width: 100%;
    height: 8rem;
    background-color: ${(props) => props.theme.main1};
    z-index: 9000;
    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 8rem;
        h1 {
            color: ${(props) => props.theme.white1};
        }   
    }
    .right {
        display: flex;        
        align-items: center;
        margin-left: auto;
        padding-right: 5.2rem;
        height: 100%;
        & .user_info_wrap {
            display: flex;
            align-items: center;
            height: 100%;
            & > div {
                display: flex;
                align-items: center;
                position: relative;
                height: 100%;
                & + div {
                    margin-left: 1.6rem;
                    padding-left: 1.6rem;
                    &::before {
                        position: absolute;
                        content: "";
                        left: 0;
                        top: 50%;
                        transform: translateY(-50%);
                        width: 1px;
                        height: 1.6rem;
                        background-color: ${(props) => props.theme.white1};
                    }
                }
                &.user_info {
                    & .text {
                        display: flex;
                        align-items: center;
                        & > span {
                            margin-right: 0.8rem;
                            color: ${(props) => props.theme.white1};
                        }
                    }
                }
            }
        }
        
        .user_info_layer {
            display: none;
            position: absolute;
            top: 8rem;
            left: -3rem;
            width: 32rem;
            padding: 2rem;
            border-radius: 0 0 2rem 2rem;
            box-shadow: 0 0 4px rgba(0,0,0,0.15);
            background-color: ${(props) => props.theme.white1};
            &.on {
                display: block;
            }
            & .top_info {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 0.4rem;
            }
            & .user_name {
                margin-bottom: 1.2rem;
                & span {
                    font-weight: 500;
                    &:first-child {
                        position: relative;
                        padding-right: 0.8rem;
                        margin-right: 0.8rem;
                        font-size: 1.6rem;
                        font-weight: 500;
                        &::after{
                            content: "";
                            position: absolute;
                            right: 0;
                            top: 0.5rem;
                            width: 1px;
                            height: 1.6rem;
                            background-color: ${(props) => props.theme.gray2};
                        }
                    }
                }
            }
            & > p + p {
                margin-top: 0.4rem;
            }
            & .bottom_info {
                display: flex;
                align-items: center;
                margin-top: 1.6rem;
                padding-top: 1.6rem;
                border-top: 1px solid ${(props) => props.theme.gray2};
                & .text_deco {
                    color: ${(props) => props.theme.gray4};
                    font-size: 1.2rem;
                    text-decoration: underline;
                }
                & .toggle_label {
                    margin-left: 0.8rem;
                    font-size: 1rem;
                    font-weight: 500;
                    color: ${(props) => props.theme.gray4};
                }
                & button:last-child {
                    padding: 0.4rem 1.2rem;
                    margin-left: auto;
                    font-weight: 500;
                    color: ${(props) => props.theme.gray4};
                }
            }
        }
    }
`;

export default Header;