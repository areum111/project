import React, {useState} from "react";
import Checkbox from "components/Checkbox/Checkbox";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import AlertDialog from "components/Modal/AlertDialog";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";

const Join1 = () => {
    const [onConfirm, setOnConfirm] = useState(false);
    const [toggle, setToggle] = useState([1, 2, 3]);

    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>회원가입</h2>
                </div>
                <div className="content">
                    <h3>이용약관 동의</h3>
                    <div className="check_agree">
                        <Checkbox size="large" label="전체 동의하기" id="chk1" />
                        <p>이용약관, 개인정보처리방침, 계정정보처리방침 동의를 포함합니다.</p>
                    </div>
                    <div className={toggle.includes(1) ? "outline_box agree_box" : "outline_box agree_box close"}>
                        <div className="check_agree">
                            <Checkbox size="large" label="이용약관 동의" id="chk2" />
                            <p>(필수)</p>
                            <button
                                key="1"
                                type="button"
                                className="agree_toggle"
                                onClick={() => {
                                    !toggle.includes(1)
                                        ? setToggle((toggle) => [...toggle, 1])
                                        : setToggle(toggle.filter((button) => button !== 1));
                                }}>
                                {toggle.includes(1) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                            </button>
                        </div>
                        <div className="agree_desc custom_scroll">
                            <div className="scroll_inner">
                                제 1 장 총 칙<br /><br />
                                제 1 조 (목적)<br />
                                이 약관은 COMPANY_NAME(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br /><br />
                                제 2 조 (약관의 효력 및 변경)<br />
                                이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br />
                                사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br /><br />
                                제 3 조 (용어의 정의)<br />
                                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                                제 1 장 총 칙<br /><br />
                                제 1 조 (목적)<br />
                                이 약관은 COMPANY_NAME(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br /><br />
                                제 2 조 (약관의 효력 및 변경)<br />
                                이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br />
                                사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br /><br />
                                제 3 조 (용어의 정의)<br />
                                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                            </div>
                        </div>
                    </div>
                    <div className={toggle.includes(2) ? "outline_box agree_box" : "outline_box agree_box close"}>
                        <div className="check_agree">
                            <Checkbox size="large" label="개인정보처리방침 동의" id="chk3" />
                            <p>(필수)</p>
                            <button
                                key="2"
                                type="button"
                                className="agree_toggle"
                                onClick={() => {
                                    !toggle.includes(2)
                                        ? setToggle((toggle) => [...toggle, 2])
                                        : setToggle(toggle.filter((button) => button !== 2));
                                }}>
                                {toggle.includes(2) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                            </button>
                        </div>
                        <div className="agree_desc custom_scroll">
                            <div className="scroll_inner">
                                제 1 장 총 칙<br /><br />
                                제 1 조 (목적)<br />
                                이 약관은 COMPANY_NAME(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br /><br />
                                제 2 조 (약관의 효력 및 변경)<br />
                                이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br />
                                사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br /><br />
                                제 3 조 (용어의 정의)<br />
                                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                            </div>
                        </div>
                    </div>
                    <div className={toggle.includes(3) ? "outline_box agree_box" : "outline_box agree_box close"}>
                        <div className="check_agree">
                            <Checkbox size="large" label="계정정보처리방침 동의" id="chk4" />
                            <p>(필수)</p>
                            <button
                                key="3"
                                type="button"
                                className="agree_toggle"
                                onClick={() => {
                                    !toggle.includes(3)
                                        ? setToggle((toggle) => [...toggle, 3])
                                        : setToggle(toggle.filter((button) => button !== 3));
                                }}>
                                {toggle.includes(3) ? <BsChevronUp size={20} /> : <BsChevronDown size={20} />}
                            </button>
                        </div>
                        <div className="agree_desc custom_scroll">
                            <div className="scroll_inner">
                                제 1 장 총 칙<br /><br />
                                제 1 조 (목적)<br />
                                이 약관은 COMPANY_NAME(이하 "사이트"라 합니다)에서 제공하는 인터넷서비스(이하 "서비스"라 합니다)의 이용 조건 및 절차에 관한 기본적인 사항을 규정함을 목적으로 합니다.<br /><br />
                                제 2 조 (약관의 효력 및 변경)<br />
                                이 약관은 서비스 화면이나 기타의 방법으로 이용고객에게 공지함으로써 효력을 발생합니다.<br />
                                사이트는 이 약관의 내용을 변경할 수 있으며, 변경된 약관은 제1항과 같은 방법으로 공지 또는 통지함으로써 효력을 발생합니다.<br /><br />
                                제 3 조 (용어의 정의)<br />
                                이 약관에서 사용하는 용어의 정의는 다음과 같습니다.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className="large disabled" onClick={() => setOnConfirm((true))}>다음</Button>
                </div>
            </div>
            <AlertDialog visible={onConfirm} onConfirm={() => setOnConfirm(false)}>
                <p>동의하지 않은 이용약관이 있습니다.<br />약관에 동의하지 않는 경우 회원가입이 제한됩니다.</p>
            </AlertDialog>
        </MemberWrap>
    );
}

export default Join1;