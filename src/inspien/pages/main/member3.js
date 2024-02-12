import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import DialogCheck from "images/ico/ico_check_bg.svg";
import Dialog from "components/Modal/Dialog";

const Member3 = () => {
    const [visible, setVisible] = useState(true);

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
                                            <Button className="medium outline">재전송</Button>
                                        </div>
                                        <div className="td_wrap">
                                            <div className="time_input"><input type="number" placeholder="인증번호 입력" /><span>02:59</span></div>
                                            <Button className="medium outline">확인</Button>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className="large" onClick={() => setVisible(true)}>아이디찾기</Button>
                </div>
            </div>
            <Dialog visible={visible} size="small" onCancel={() => setVisible(false)}>
                <div className="modal_text">
                    <img src={DialogCheck} alt="" />
                    <p className="main_text">아이디 찾기가 완료되었습니다.</p>
                    <p className="sub_text">회원님의 아이디는<br /><b>abcdef</b> 입니다.</p>
                </div>
                <div className="button_wrap">
                    <Button type="button" className="large outline" onClick={() => window.location.href = '/main/member4'}>비밀번호 찾기</Button>
                    <Button type="button" className="large" onClick={() => window.location.href = '/'}>로그인하기</Button>
                </div>
            </Dialog>
        </MemberWrap>
    );
}

export default Member3;