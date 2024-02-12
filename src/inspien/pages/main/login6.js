import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Login6 = () => {
    const [visible, setVisible] = useState(false);

    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>휴면 계정 해제 안내</h2>
                </div>
                <div className="content">
                    <div className="guide_box">
                        <p className="main_text">회원님의 아이디는 현재 휴면 상태입니다.</p>
                        <p className="sub_text">회원님의 계정으로 1년 이상 백오피스에 접속하지 않아 관련 법령에 따라 휴면 상태로 전환되었습니다.<br />
                            원활한 서비스 이용을 위해 <strong>휴면 상태를 해제</strong>해주세요.</p>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>휴면 계정 해제 정보</caption>
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
                    <Button className="large" onClick={() => setVisible(true)}>휴면 해제하기</Button>
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                onConfirm={() => setVisible(false)}
                text={"휴면 해제가 완료되었습니다."}
            />
        </MemberWrap>
    );
}

export default Login6;