import React from "react";
import Img403 from "images/ico/ico_403.svg";
import styled from "styled-components";
import Button from "components/Button/Button"

const Error403 = () => {
    return (
        <NotFoundWrap>
            <div className="inner">
                <div>
                    <p><img src={Img403} alt="403" /></p>
                    <h2>요청하신 페이지를 볼 수 있는 권한이 없습니다.</h2>
                    <p className="desc">권한이 없거나, 사용할 수 없는 페이지입니다.<br />권한이 있음에도 문제가 발생할 경우 고객센터에 문의해주세요.</p>
                    <div className="button_wrap">
                        <Button className="large outline">이전으로 가기</Button>
                        <Button className="large">메인으로 가기</Button>
                    </div>
                </div>
            </div>
        </NotFoundWrap>
    )
};

const NotFoundWrap = styled.div`
    .inner {
        display: flex;
        min-height: 100vh;
        padding: 4rem;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    h2 {
        margin: 4rem 0 2rem;
        font-size: 2.8rem;
        font-weight: 700;
        color: ${(props) => props.theme.black1};
    }
    .desc {
        font-size: 2rem;
        font-weight: 500;
        color: ${(props) => props.theme.gray4};
    }
    .button_wrap {
        margin-top: 8rem;
        & button + button {
            margin-left: 1.2rem;
        }
    }
`

export default Error403;