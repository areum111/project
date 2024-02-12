import React, { useEffect } from "react";
import { MemberWrap } from "styles/main.styled";
import { MypageWrap } from "styles/mypage.styled"
import Button from "components/Button/Button";
import { customerTheme } from "theme";
import MypageMenu from "layouts/mypageMenu";


const Myinfo1 = ({ setTheme }) => {
    // 메인컬러 변경
    useEffect(() => {
        setTheme(customerTheme);
    });

    return (
        <MypageWrap>
            <MemberWrap>
                <div className="inner">
                    <MypageMenu menu={"회원 정보 수정"} />
                    <div className="content">
                        <div className="title_area">
                            <h2>마일리지</h2>
                            <span className="path">홈 > 마이페이지 > 회원 정보 수정</span>
                        </div>
                        <div className="guide_box">
                            <p className="main_text">소중한 개인정보 보호를 위해 비밀번호를 한번 더 입력해주세요.</p>
                        </div>
                        <div className="cont_box">
                            <div className="outline_box member_box">
                                <table className="form_tb">
                                    <caption>비밀번호 확인</caption>
                                    <tbody>
                                        <tr>
                                            <th>비밀번호</th>
                                            <td>
                                                <input type="password" placeholder="비밀번호 입력" className="ssm" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="button_wrap">
                            <Button type="button" className="large">확인</Button>
                        </div>
                    </div>
                </div>
            </MemberWrap>
        </MypageWrap>
    )
};

export default Myinfo1;