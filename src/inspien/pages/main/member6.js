import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import Dialog from "components/Modal/Dialog";
import { ModalWrap } from "styles/modal.styled";
import ConfirmDialog from "../../components/Modal/ConfirmDialog";

const Member6 = () => {
    const [visible, setVisible] = useState(true);
    const [resend, setResend] = useState(false);

    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>비밀번호 찾기</h2>
                </div>
                <div className="content">
                    <div className="guide_box">
                        <p className="main_text">가입 정보를 입력해주세요.</p>
                        <p className="sub_text">입력하신 이메일로 비밀번호 재설정 안내 메일이 전송됩니다.</p>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>가입 정보</caption>
                                <tbody>
                                <tr>
                                    <th>아이디</th>
                                    <td>
                                        <input type="text" placeholder="아이디 입력" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>
                                        <input type="text" placeholder="이메일 입력" />
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className="large" onClick={() => setVisible(true)}>비밀번호찾기</Button>
                </div>
            </div>
            {visible &&
                <ConfirmDialog
                    visible={visible}
                    text={"입력하신 정보로 가입된 회원이 \n 존재하지 않습니다."}
                    onConfirm={() => setVisible(false)}
                />
            }
        </MemberWrap>
    );
}

export default Member6;