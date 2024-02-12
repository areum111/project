import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import DialogCheck from "images/ico/ico_check_bg.svg";
import Dialog from "components/Modal/Dialog";

const Login4 = () => {
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
                    <h2>비밀번호 변경 안내</h2>
                </div>
                <div className="content">
                    <div className="guide_box">
                        <p className="main_text">소중한 개인정보 보호를 위해 비밀번호를 변경해주세요.</p>
                        <p className="sub_text">회원님께서는 <b>최근 3개월(90일)동안 비밀번호를 변경</b>하지 않으셨습니다.<br />
                            안전한 서비스 이용을 위해 <strong>새로운 비밀번호로 변경</strong>해 주세요.</p>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>비밀번호 변경</caption>
                                <tbody>
                                <tr>
                                    <th>기존 비밀번호 입력</th>
                                    <td>
                                        <div className="td_wrap">
                                            <div className="pw_input">
                                                <input type="password" placeholder="기존 비밀번호 입력" />
                                                <button type="button" className="view_btn">문자 보이기</button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
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
                    <Button className="large gray">다음에 변경하기</Button>
                    <Button className="large" onClick={() => setVisible(true)}>비밀번호 변경하기</Button>
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={onConfirm}
                text={"비밀번호를 변경하시겠습니까?"}
            />
            <Dialog visible={visible2} size="small" onCancel={() => setVisible2(false)}>
                <div className="modal_text">
                    <img src={DialogCheck} alt="" />
                    <p className="main_text">비밀번호 변경이 완료되었습니다.</p>
                    <p className="sub_text">안전을 위해 다른 기기 또는 브라우저에서<br />모두 로그아웃됩니다.</p>
                    <Button type="button" className="large" onClick={() => window.location.href = '/'}>확인</Button>
                </div>
            </Dialog>
        </MemberWrap>
    );
}

export default Login4;