import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Member2 = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const onConfirm = () => {
        setVisible(false);
        setVisible2(true);
    }

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
            <ConfirmDialog
                visible={visible}
                onConfirm={() => setVisible(false)}
                text={"입력하신 정보로 가입된 회원이 \n 존재하지 않습니다."}
            />
        </MemberWrap>
    );
}

export default Member2;