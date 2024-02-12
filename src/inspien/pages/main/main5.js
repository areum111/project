import React, { useState } from "react";
import { MainWrap } from "../../styles/main.styled";
import infoImg from "../../images/ico/ico_info_big.svg";

const Main5 = () => {
    return (
        <MainWrap>
            <div className="text_wrap">
                <img src={infoImg} alt="" />
                <h2>인스피언의 승인을 기다리고 있습니다.</h2>
                <p>관리자 회원은 인스피언의 승인을 통해 서비스 이용이 가능합니다.</p>
            </div>
        </MainWrap>
    )
};

export default Main5;