import React, {useState} from 'react';
import Button from "../Button/Button";
import ConfirmDialog from "../Modal/ConfirmDialog";
import {ModalWrap} from "../../styles/modal.styled";
import Dialog from "../Modal/Dialog";

const UserJoinInfo = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const onConfirm = () => {
        setVisible(false);
        setVisible2(true);
    }
    const onClick = () => {
        setVisible3(false);
        setVisible4(true);
    }

    return (
        <>
            <div className="right_btn_wrap">
                <Button className="outline large" onClick={() => setVisible3(true)}>거절</Button>
                <Button className="large" onClick={() => setVisible(true)}>승인</Button>
            </div>
            <div className="cont_box">
                <div className="cont_title"><h3>기본 정보</h3></div>
                <div className="outline_box">
                    <table className="form_tb">
                        <tbody>
                        <tr className="col2">
                            <th>아이디</th>
                            <td>inspien10</td>
                            <th>성명</th>
                            <td>김인스</td>
                        </tr>
                        <tr className="col2">
                            <th>이메일</th>
                            <td>abc@email.com</td>
                            <th>전화번호</th>
                            <td>010-1234-5678</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="cont_box">
                <div className="cont_title"><h3>가입 및 승인 정보</h3></div>
                <div className="outline_box">
                    <table className="form_tb">
                        <tbody>
                        <tr className="col2">
                            <th>가입 일시</th>
                            <td>2023-05-03 15:12:55</td>
                            <th>승인 상태</th>
                            <td>승인대기</td>
                        </tr>
                        <tr className="col2">
                            <th>승인 일시</th>
                            <td>-</td>
                            <th>승인자</th>
                            <td>-</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                text={"김인스님의 가입을 승인하겠습니까?"}
                onConfirm={onConfirm}
                onCancel={() => setVisible(false)}
            >
                <p style={{ fontSize: "1.6rem", marginTop: "1.6rem", fontWeight: "400" }}>(ID : inspien 10)</p>
            </ConfirmDialog>
            <ConfirmDialog
                visible={visible2}
                text={"김인스 님의 가입이 승인되었습니다."}
                onConfirm={() => setVisible2(false)}
            />
            <ModalWrap className="join_reject_modal">
                <Dialog
                    visible={visible3}
                    onCancel={() => setVisible3(false)}
                    title={"가입 승인 관리"}
                    size="ml"
                >
                    <p className="main_text">김인스님의 가입을 거절하시겠습니까?<span>(ID : inspien10)</span></p>
                    <div className="textarea_wrap">
                        <span>거절 사유</span>
                        <textarea />
                    </div>
                    <div className="guide_wrap">
                        <p>거절 사유를 입력하신 후 [거절] 버튼을 클릭해주세요.</p><br />
                        <ul className="dot_msg">
                            <li>해당 회원의 이메일 주소로 가입 거절 안내 메일이 발송됩니다.</li>
                            <li>메일 발송 이후 <span className="red_txt">해당 회원의 기업 정보는 전체 삭제</span>됩니다.</li>
                        </ul>
                    </div>
                    <div className="center_button_wrap">
                        <Button className="large outline" onClick={() => setVisible3(false)}>취소</Button>
                        <Button className="large" onClick={onClick}>거절</Button>
                    </div>
                </Dialog>
                <ConfirmDialog
                    visible={visible4}
                    text={"김인스 님의 가입이 거절되었습니다."}
                    onConfirm={() => setVisible4(false)}
                >
                    <p style={{ fontSize: "1.6rem", marginTop: "1.6rem", fontWeight: "400" }}>가입 거절 메일 발송 이후 회원 정보가 전체 삭제됩니다.</p>
                </ConfirmDialog>
            </ModalWrap>
        </>
    )
}

export default UserJoinInfo;