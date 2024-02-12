import React from "react";
import Logo from "images/ico/logo_connect.svg";
import Filter from "components/SelectBox/Filter";
import UserIco from "images/ico/ico_user2.svg";
import EyeIco from "images/ico/ico_eye.svg";
import PwdIco from "images/ico/ico_password.svg";
import Checkbox from "components/Checkbox/Checkbox";
import Button from "components/Button/Button";
import { Link } from "react-router-dom";
import { LoginWrap } from "styles/main.styled";

const Login0 = () => {
    const options = [
        { value: 'kor', label: "한국어" },
        { value: 'eng', label: "영어" },
    ];

    return (
        <LoginWrap>
            <div className="login_inner">
                <div className="left_area">
                    <h1><img src={Logo} alt="connect" /></h1>
                    <h2>복잡한 비즈니스 시스템,<br />커넥트 서비스로 연결해보세요.</h2>
                    <button type="button">자세히 보기 ></button>
                </div>
                <div className="right_area">
                    <div></div>
                    <div>
                        <div className="select_wrap"><Filter options={options} value={options[0]} className="select medium" /></div>
                        <div className="login_wrap">
                            <h2>LOG IN</h2>
                            <div className="id_input"><img src={UserIco} alt="" /><input type="text" placeholder="아이디를 입력해주세요." /></div>
                            <div className="id_input pw_input"><img src={PwdIco} alt="" /><input type="password" placeholder="비밀번호를 입력해주세요." /><button type="button"><img src={EyeIco} alt="" /></button></div>
                            <div className="login_util">
                                <Checkbox label="로그인 상태 유지" />
                                <div className="right">
                                    <Link to="/">아이디 찾기</Link>
                                    <Link to="/">비밀번호 찾기</Link>
                                </div>
                            </div>
                            <div className="button_wrap">
                                <Button className="full disabled">로그인</Button>
                                <Button className="full outline">회원가입</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="copy">Copyright © INSPIEN All rights reserved.</p>
        </LoginWrap>
    );
}

export default Login0;