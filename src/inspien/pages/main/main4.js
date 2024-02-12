import React, { useState } from "react";
import { MemberWrap } from "styles/main.styled"
import Button from "components/Button/Button";
import Checkbox from "components/Checkbox/Checkbox";
import RadioButton from "components/Radio/RadioButton";
import SelectBox from "components/SelectBox/SelectBox";
import BackConfirmDialog from "components/Modal/BackConfirmDialog";
import DialogCheck from "images/ico/ico_check_bg.svg";
import Dialog from "components/Modal/Dialog";

const Main4 = () => {
    const option1 = [
        {value: 1, label: "1일"},
        {value: 2, label: "2일"},
        {value: 3, label: "3일"},
    ]
    const option2 = [
        {value: 1, label: "국민"},
        {value: 2, label: "카카오"},
        {value: 3, label: "농협"},
    ]

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [check, setCheck] = useState("check1");

    return (
        <MemberWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>승인 요청</h2>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>회사 정보</h3>
                        </div>
                        <div className="outline_box member_box">
                            <Checkbox label="파트너 회원입니다." id="chk" />
                            <table className="form_tb">
                                <caption>회사 정보</caption>
                                <tbody>
                                <tr>
                                    <th>회사명</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="text" placeholder="회사명 입력" />
                                            <Checkbox label="개인 사업자" id="chk1" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>대표자</th>
                                    <td>
                                        <input type="text" placeholder="대표자 입력" />
                                    </td>
                                </tr>
                                <tr>
                                    <th>주소</th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>우편번호</th>
                                                <td>
                                                    <div className="td_wrap">
                                                        <input type="text" className="s" />
                                                        <Button type="button" className="medium outline">우편번호 찾기</Button>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>주소</th>
                                                <td>
                                                    <input type="text" className="l" />
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>상세 주소</th>
                                                <td>
                                                    <input type="text" placeholder="상세 주소 입력" className="sm" />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>정산 정보</h3>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>정산 정보</caption>
                                <tbody>
                                <tr>
                                    <th>정산방식</th>
                                    <td>
                                        <div className="td_wrap">
                                            <RadioButton label="계좌이체" id="pay_method1" onChange={() => setCheck("check1")} checked={check === "check1" && "true"} />
                                            <RadioButton label="신용카드" id="pay_method2" onChange={() => setCheck("check2")} checked={check === "check2" && "true"} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>정산 희망일</th>
                                    <td><SelectBox className="select" size={ "large" } options={ option1 }
                                                   value={ option1[0] }/></td>
                                </tr>
                                { check === "check1" ? <>
                                    <tr>
                                        <th>정산 정보</th>
                                        <td>
                                            <table className="inner_tb">
                                                <tbody>
                                                <tr>
                                                    <th>은행</th>
                                                    <td>
                                                        <SelectBox
                                                            className="select"
                                                            size={ "large" }
                                                            options={ option2 }
                                                            value={ option2[0] }
                                                            isDisabled={true}
                                                        />
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>예금주명</th>
                                                    <td><input type="text" className="s" value="김대표" disabled /></td>
                                                </tr>
                                                <tr>
                                                    <th>예금주명</th>
                                                    <td>
                                                        <div className="td_wrap">
                                                            <input type="text" className="s" value="21521865756321" disabled />
                                                            <Button type="button" className="medium outline disabled">인증하기</Button>
                                                        </div>
                                                        <p className="vali_msg pass">인증이 완료되었습니다.</p>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </> : <>
                                    <tr>
                                        <th>정산 정보</th>
                                        <td>
                                            <table className="inner_tb">
                                                <tbody>
                                                <tr>
                                                    <th>카드번호</th>
                                                    <td><input type="text" placeholder="카드번호 입력" className="s"/></td>
                                                </tr>
                                                <tr>
                                                    <th>유효기간</th>
                                                    <td>
                                                        <div className="td_wrap">
                                                            <input type="number" className="xs" placeholder="MM" />&nbsp;&nbsp;월
                                                            <input type="number" className="xs" placeholder="YY" />&nbsp;&nbsp;년
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>CVC</th>
                                                    <td>
                                                        <div className="td_wrap">
                                                            <input type="number" className="s" placeholder="CVC" />
                                                            <span className="desc">(카드 뒷면 3자리)</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>카드 비밀번호</th>
                                                    <td>
                                                        <div className="td_wrap">
                                                            <input type="password" className="xs" placeholder="비밀번호 입력" />&nbsp;&nbsp;●●
                                                            <span className="desc">(카드 비밀번호 앞 2자리)</span>
                                                        </div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </> }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>사용자 정보</h3>
                            <p className="dot_msg">사용자 정보는 선택 입력 사항입니다.</p>
                        </div>
                        <div className="outline_box member_box">
                            <table className="form_tb">
                                <caption>사용자 정보</caption>
                                <tbody>
                                <tr>
                                    <th>대행담당자 <span>(선택)</span></th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>담당자</th>
                                                <td><input type="text" placeholder="담당자 입력" /></td>
                                            </tr>
                                            <tr>
                                                <th>이메일</th>
                                                <td><input type="text" placeholder="이메일 입력" /></td>
                                            </tr>
                                            <tr>
                                                <th>전화번호</th>
                                                <td><input type="text" placeholder="전화번호 입력" /></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <th>정산담당자 <span>(선택)</span></th>
                                    <td>
                                        <table className="inner_tb">
                                            <tbody>
                                            <tr>
                                                <th>담당자</th>
                                                <td><input type="text" placeholder="담당자 입력" /></td>
                                            </tr>
                                            <tr>
                                                <th>이메일</th>
                                                <td><input type="text" placeholder="이메일 입력" /></td>
                                            </tr>
                                            <tr>
                                                <th>전화번호</th>
                                                <td><input type="text" placeholder="전화번호 입력" /></td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="button_wrap">
                    <Button type="button" className="gray large" onClick={() => setVisible(true)}>이전</Button>
                    <Button type="button" className="large" onClick={() => setVisible2(true)}>완료</Button>
                </div>
            </div>
            <BackConfirmDialog
                visible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={() => window.location.href = '/main/main2'}
            />
            <Dialog visible={visible2} size="small" onCancel={() => setVisible2(false)}>
                <div className="modal_text">
                    <img src={DialogCheck} alt="" />
                    <p className="main_text">승인 요청이 완료되었습니다.</p>
                    <p className="sub_text">승인은 최소 1일~2일(주말 제외)이 소요될 수 있습니다.</p>
                </div>
                <div className="button_wrap">
                    <Button type="button" className="large">메인으로 가기</Button>
                </div>
            </Dialog>
        </MemberWrap>
    )
};

export default Main4;
