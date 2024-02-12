import React from "react";
import { MainWrap } from "styles/main.styled"
import infoImg from "images/ico/ico_info_big.svg";
import Button from "components/Button/Button";

const Main2 = () => {
    return (
        <MainWrap>
            <div className="text_wrap">
                <img src={infoImg} alt="" />
                <h2>추가 정보를 입력하고 승인을 요청해주세요.</h2>
                <p>관리자 회원은 인스피언의 승인을 통해 서비스 이용이 가능합니다.</p>
                <Button type="button" className="large" onClick={() => window.location.href = '/main/main3'}>승인 요청하러 가기</Button>
            </div>
        </MainWrap>
    )
};

export default Main2;
