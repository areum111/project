import React from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";

const Member1 = () => {
    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>아이디 찾기</h2>
                </div>
                <div className="content">
                    <div className="guide_box">
                        <p className="main_text">가입 정보를 입력해주세요.</p>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>가입 정보</caption>
                                <tbody>
                                <tr>
                                    <th>성명</th>
                                    <td>
                                        <input type="text" placeholder="성명 입력" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="text" placeholder="전화번호 입력" />
                                            <Button className="medium outline">인증하기</Button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className="large disabled">아이디찾기</Button>
                </div>
            </div>
        </MemberWrap>
    );
}

export default Member1;