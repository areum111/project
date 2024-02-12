import React from "react";
import NotFoundImg from "images/ico/ico_404.svg";
import styled from "styled-components";
import Button from "components/Button/Button"

const NotFound = () => {
    return (
        <NotFoundWrap>
            <div className="inner">
                <div>
                    <p><img src={NotFoundImg} alt="" /></p>
                    <h2>요청하신 페이지를 찾을 수 없습니다.</h2>
                    <p className="desc">주소가 잘못 입력되었거나, 변경 혹은 삭제되어 페이지를 찾을 수 없습니다.<br />입력하신 주소가 정확한지 다시 한번 확인해주세요.</p>
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
        text-align: center;
        padding: 4rem;
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

export default NotFound;