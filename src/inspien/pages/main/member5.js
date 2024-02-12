import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import Dialog from "components/Modal/Dialog";
import { ModalWrap } from "styles/modal.styled";

const Member5 = () => {
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
            {visible && <ModalWrap>
                <Dialog size="small" visible={visible} onCancel={() => setVisible(false)}>
                    <div className="top_area">
                        <p className="sub_text">비밀번호 찾기</p>
                        <p className="main_text">안내 메일이 전송되었습니다.</p>
                    </div>
                    <div className="guide_wrap">
                        <p><b>abc@email.com 주소의 메일함을 확인해주세요.</b></p><br />
                        <ul className="dot_msg">
                            <li>이메일이 보이지 않는 경우 휴지통 또는 스팸함을 확인하시기 바랍니다.</li>
                            <li>휴지통 또는 스팸함에도 이메일이 없다면 [재전송] 버튼을 클릭해주세요.<br />(<span className="red_txt">메일 전송은 1분 간격으로 가능</span>합니다.)</li>
                        </ul>
                    </div>
                    <div className="button_wrap">
                        <Button className={resend ? "outline disabled large" : "outline large"} onClick={() => setResend(true)}>재전송</Button>
                        <Button className="large" onClick={() => window.location.href = '/'}>로그인하기</Button>
                    </div>
                </Dialog>
            </ModalWrap>}
        </MemberWrap>
    );
}

export default Member5;