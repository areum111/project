import React from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";

const Member7 = () => {
    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>비밀번호 재설정</h2>
                </div>
                <div className="content">
                    <div className="guide_box">
                        <p className="main_text">새로운 비밀번호를 입력해주세요.</p>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>비밀번호 재설정</caption>
                                <tbody>
                                <tr>
                                    <th>비밀번호</th>
                                    <td>
                                        <div className="td_wrap">
                                            <div className="pw_input">
                                                <input type="password" placeholder="비밀번호 입력" />
                                                <button type="button" className="view_btn">문자 보이기</button>
                                            </div>
                                            <span className="desc">(영문 대문자, 영문 소문자, 숫자, 특수문자 조합으로 8~20자)</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>비밀번호 확인</th>
                                    <td>
                                        <div className="pw_input">
                                            <input type="password" placeholder="비밀번호 확인 입력" />
                                            <button type="button" className="view_btn">문자 보이기</button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className="large disabled">비밀번호 재설정</Button>
                </div>
            </div>
        </MemberWrap>
    );
}

export default Member7;