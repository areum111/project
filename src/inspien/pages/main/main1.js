import React from "react";
import { MainWrap } from "styles/main.styled"
import ediImg from "images/service_edi.svg";
import officeImg from "images/service_office.svg";
import connectImg from "images/service_connect.svg";
import { BsChevronRight } from 'react-icons/bs';
import Button from "components/Button/Button";

const Main1 = () => {
    return (
        <MainWrap>
            <h2>환영합니다!<br />이용하실 서비스를 선택해주세요.</h2>
            <div className="service_wrap">
                <div className="box">
                    <img src={ediImg} alt="" />
                    <h3>WEB EDI</h3>
                    <p>WEB EDI에 대한 간략한 소개글이 2줄 정도로 들어가면 더 좋을거 같아요. </p>
                    <Button type="button" className="large" onClick={() => window.location.href="/main/main2"}>Go to Service<BsChevronRight size={25} /></Button>
                </div>
                <div className="box">
                    <img src={ officeImg } alt=""/>
                    <h3>BACK OFFICE</h3>
                    <p>WEB EDI에 대한 간략한 소개글이 2줄 정도로 들어가면 더 좋을거 같아요. </p>
                    <Button type="button" className="large" onClick={() => window.location.href="/main/main2"}>Go to Service<BsChevronRight size={25}/></Button>
                </div>
                <div className="box">
                    <img src={ connectImg } alt=""/>
                    <h3>CONNECT 2.0</h3>
                    <p>WEB EDI에 대한 간략한 소개글이 2줄 정도로 들어가면 더 좋을거 같아요. </p>
                    <Button type="button" className="large" onClick={() => window.location.href="/main/main2"}>Go to Service<BsChevronRight size={25}/></Button>
                </div>
            </div>
        </MainWrap>
    )
};

export default Main1;
