import React, {useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import RadioButton from "components/Radio/RadioButton";
import BackConfirmDialog from "../../components/Modal/BackConfirmDialog";

const Join3 = () => {

    const [visible, setVisible] = useState(false);
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
                                            <input className="error" type="text" placeholder="아이디 입력" />
                                            <span className="desc">(영문 대소문자/숫자로 8~20자)</span>
                                        </div>
                                        <p className="vali_msg">아이디를 입력해주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>비밀번호</th>
                                    <td>
                                        <div className="td_wrap">
                                            <div className="pw_input">
                                                <input className="error" type="password" placeholder="비밀번호 입력" />
                                                <button type="button" className="view_btn">문자 보이기</button>
                                            </div>
                                            <span className="desc">(영문 대문자, 영문 소문자, 숫자, 특수문자 조합으로 8~20자)</span>
                                        </div>
                                        <p className="vali_msg">비밀번호를 입력해주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>비밀번호 확인</th>
                                    <td>
                                        <div className="pw_input">
                                            <input className="error" type="password" placeholder="비밀번호 확인 입력" />
                                            <button type="button" className="view_btn">문자 보이기</button>
                                        </div>
                                        <p className="vali_msg">비밀번호 확인을 입력해주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>성명</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input className="error" type="text" placeholder="성명 입력" />
                                        </div>
                                        <p className="vali_msg">성명을 입력해주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input className="error" type="text" placeholder="이메일 입력" />
                                            <Button className="medium outline">인증하기</Button>
                                        </div>
                                        <p className="vali_msg">이메일을 입력해주세요.</p>
                                    </td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input className="error" type="number" placeholder="전화번호 입력" />
                                            <Button className="medium outline">인증하기</Button>
                                        </div>
                                        <p className="vali_msg">전화번호를 입력해주세요.</p>
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
                                            <input className="error" type="text" placeholder="사업자 등록번호 입력" />
                                            <Button className="medium outline">확인</Button>
                                        </div>
                                        <p className="vali_msg">사업자등록번호를 입력해주세요.</p>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button className="large gray" onClick={() => setVisible(true)}>이전</Button>
                    <Button className="large disabled">완료</Button>
                </div>
            </div>
            <BackConfirmDialog
                visible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={onConfirm}
            />
        </MemberWrap>
    );
}

export default Join3;