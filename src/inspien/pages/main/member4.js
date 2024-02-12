import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import ConfirmDialog from "components/Modal/ConfirmDialog";

const Member4 = () => {
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
                    <Button className="large disabled">비밀번호찾기</Button>
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

export default Member4;