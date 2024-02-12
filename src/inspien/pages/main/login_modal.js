import React, {useState} from "react";
import Button from "components/Button/Button";
import { ModalWrap } from "styles/modal.styled";
import Dialog from "components/Modal/Dialog";

const LoginModal = () => {
    const [modalVisible, setModalVisible] = useState(true);
    const [clickButton, setClickButton] = useState(false);

    return (
        <ModalWrap className="login_modal">
            <Dialog
                visible={modalVisible}
                onCancel={() => setModalVisible(false)}
            >
                <div className="top_area">
                    <p className="sub_text">2차 인증</p>
                    <p className="main_text">인증번호를 입력해주세요.</p>
                </div>
                <div className="bottom_area">
                    <div className="input_wrap time_input">
                        <input type="number" placeholder="인증번호 입력" />
                        <span>02:59</span>
                    </div>
                    <div className="guide_wrap">
                        <p>이메일로 전송된 인증번호를 입력하신 후 [로그인하기] 버튼을 클릭해주세요.</p><br />
                        <ul className="dot_msg">
                            <li>이메일이 보이지 않는 경우 휴지통 또는 스팸함을 확인하시기 바랍니다.</li>
                            <li>유효시간 내에 입력하지 못하셨다면 <span className="bk_txt">[재전송] 버튼</span>을 클릭해주세요.<br />(<span className="red_txt">메일 전송은 1분 간격으로 가능</span>합니다.)</li>
                        </ul>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className={clickButton ? "large disabled outline" : "large outline"} onClick={() => setClickButton(true)}>재전송</Button>
                    <Button className="large">로그인하기</Button>
                </div>
            </Dialog>
        </ModalWrap>
    );
}

export default LoginModal;