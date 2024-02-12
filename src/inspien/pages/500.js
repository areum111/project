import React from "react";
import Img500 from "images/ico/ico_500.svg";
import styled from "styled-components";
import Button from "components/Button/Button"

const Error500 = () => {
    return (
        <NotFoundWrap>
            <div className="inner">
                <div>
                    <p><img src={Img500} alt="403" /></p>
                    <h2>요청하신 페이지를 표시할 수 없습니다.</h2>
                    <p className="desc">기술적인 문제로 서비스와 연결되지 않았습니다.<br />잠시 후 다시 확인해주세요.</p>
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
        align-items: center;
        justify-content: center;
        padding: 4rem;
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

export default Error500;