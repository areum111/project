import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import RadioButton from "components/Radio/RadioButton";
import ConfirmDialog from "components/Modal/ConfirmDialog";
import Dialog from "components/Modal/Dialog";
import DialogCheck from "images/ico/ico_check_bg.svg";
import BackConfirmDialog from "../../components/Modal/BackConfirmDialog";

const Join4 = () => {

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const onConfirm = () => {
        window.location.href = '/main/join2';
    }

    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>회원가입</h2>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>기본정보</h3>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>기본정보</caption>
                                <tbody>
                                <tr>
                                    <th>아이디</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="text" placeholder="아이디 입력" />
                                            <span className="desc">(영문 대소문자/숫자로 8~20자)</span>
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
                                            <input type="password" placeholder="비밀번호 입력 확인" />
                                            <button type="button" className="view_btn on">문자 보이기</button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>성명</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="text" placeholder="성명 입력" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="text" placeholder="이메일 입력" />
                                            <Button className="medium outline" onClick={() => setVisible2(true)}>재전송</Button>
                                        </div>
                                        <div className="td_wrap">
                                            <div className="time_input"><input type="number" placeholder="인증번호 입력" /><span>02:59</span></div>
                                            <Button className="medium outline">확인</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="number" placeholder="전화번호 입력" />
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
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>2차 인증</h3>
                            <p className="dot_msg">계정을 보호하기 위해 로그인 시 추가 인증을 진행합니다.</p>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>2차 인증</caption>
                                <tbody>
                                <tr>
                                    <th>인증방식</th>
                                    <td>
                                        <div className="td_wrap">
                                            <RadioButton label="사용안함" name="radio" id="radio1" checked />
                                            <RadioButton label="이메일" name="radio" id="radio2" />
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>사업자 등록번호 확인</h3>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>사업자 등록번호 확인</caption>
                                <tbody>
                                <tr>
                                    <th>사업자 등록 확인</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="text" placeholder="사업자 등록번호 입력" />
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
                    <Button className="large gray" onClick={() => setVisible(true)}>이전</Button>
                    <Button className="large" onClick={() => setVisible3(true)}>완료</Button>
                </div>
            </div>
            <BackConfirmDialog
                visible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={onConfirm}
            />
            <ConfirmDialog
                visible={visible2}
                onConfirm={() => setVisible2(false)}
                text={"메일 전송은 1분 간격으로 가능합니다."}
            />
            <Dialog visible={visible3} size="small" onCancel={() => setVisible3(false)}>
                <div className="modal_text">
                    <img src={DialogCheck} alt="" />
                    <p className="main_text">회원가입이 완료되었습니다.</p>
                    <p className="sub_text">홍길동님은 <strong>삼성전자</strong>의 <strong>관리자</strong> 회원이십니다.</p>
                    <Button type="button" className="large" onClick={() => window.location.href = '/'}>로그인하기</Button>
                </div>
            </Dialog>
        </MemberWrap>
    );
}

export default Join4;