import React, { useEffect, useMemo, useState } from "react";
import { MemberWrap } from "styles/main.styled";
import { MypageWrap } from "styles/mypage.styled"
import { ModalWrap } from "styles/modal.styled";
import Button from "components/Button/Button";
import { partnerTheme } from "theme";
import MypageMenu from "../../layouts/mypageMenu";
import RadioButton from "components/Radio/RadioButton";
import Dialog from "components/Modal/Dialog";
import SearchImg from "images/ico/ico_search.svg";
import DataTable from "components/Table/DataTable";
import Checkbox from "components/Checkbox/Checkbox";
import ConfirmDialog from "../../components/Modal/ConfirmDialog";
import DialogCheck from "../../images/ico/ico_check_bg.svg";

const Myinfo2 = ({ setTheme }) => {
    // 메인컬러 변경
    useEffect(() => {
        setTheme(partnerTheme);
    });

    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);
    const [adminUser, setAdminUser] = useState(false);
    const [check, setCheck] = useState(false);

    const onClick = () => {
        setVisible(false);
        setAdminUser(true);
    }

    const outUser = () => {
        setVisible2(false);
        setVisible3(true);
        setCheck(false);
    }

    const columnData = [
        {
            accessor: "name",
            Header: "성명 (아이디)",
            width: "100%",
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "name": <button type="button" onClick={onClick} className="user_name">박전자 (samsung02)</button>,
        },
        {
            "name": <button type="button" onClick={onClick} className="user_name">박전자 (samsung02)</button>,
        },
        {
            "name": <button type="button" onClick={onClick} className="user_name">최민준 (samsung02)</button>,
        },
        {
            "name": <button type="button" onClick={onClick} className="user_name">이서연 (samsung02)</button>,
        },
        {
            "name": <button type="button" onClick={onClick} className="user_name">정도윤 (samsung02)</button>,
        },
    ], [])

    return (
        <MypageWrap>
            <MemberWrap>
                <div className="inner">
                    <MypageMenu menu={"회원 정보 수정"} userType={"partner"} />
                    <div className="content">
                        <div className="title_area">
                            <h2>마일리지</h2>
                            <span className="path">홈 > 마이페이지 > 회원 정보 수정</span>
                        </div>
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
                                            <td>inspien1</td>
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
                                        <tr>
                                            <th>성명</th>
                                            <td>
                                                <div className="td_wrap">
                                                    <input type="text" placeholder="성명 입력" className="ssm" />
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>이메일</th>
                                            <td>
                                                <div className="td_wrap">
                                                    <input type="text" placeholder="이메일 입력" className="ssm" />
                                                    <Button className="medium outline">인증하기</Button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>전화번호</th>
                                            <td>
                                                <div className="td_wrap">
                                                    <input type="number" placeholder="전화번호 입력" className="ssm" />
                                                    <Button className="medium outline">인증하기</Button>
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
                                                    <RadioButton label="이메일 인증" name="radio" id="radio2" />
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="cont_box">
                            <div className="cont_title">
                                <h3>대체 관리자 지정</h3>
                                <p className="dot_msg">회원 탈퇴 시 해당 계정이 관리자로 변경됩니다.</p>
                            </div>
                            <div className="outline_box member_box">
                                <table className="form_tb">
                                    <caption>대체 관리자</caption>
                                    <tbody>
                                        <tr>
                                            <th>대체 관리자</th>
                                            <td>
                                                <div className="td_wrap">
                                                    {adminUser && <span style={{ marginRight: "3rem" }}>김삼성(samsung01)</span>}
                                                    <Button type="button" className="outline medium" onClick={() => setVisible(true)}>
                                                        {adminUser ? "변경" : "찾기"}
                                                    </Button>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <p className="out_user"><button type="button" onClick={() => setVisible2(true)}>회원 탈퇴 ></button></p>
                            </div>
                        </div>
                        <div className="button_wrap">
                            <Button type="button" className="large gray">취소</Button>
                            <Button type="button" className="large" onClick={() => setVisible4(true)}>저장</Button>
                        </div>
                    </div>
                </div>
            </MemberWrap>
            <ModalWrap className="select_admin_modal">
                <Dialog
                    title={"대체관리자 선택"}
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    size="sm"
                    scroll={true}
                >
                    <div className="scroll_inner">
                        <div className="search_input">
                            <input type="text" placeholder="이름 입력" />
                            <button type="button"><img src={SearchImg} alt="검색" /></button>
                        </div>
                        <div className="data_wrap">
                            <p className="cnt">총 10개</p>
                            <DataTable
                                columns={columns}
                                data={datas}
                            />
                        </div>
                    </div>
                </Dialog>
            </ModalWrap>
            <ModalWrap className="out_user_modal">
                <Dialog visible={visible2} size="medium" onCancel={() => setVisible2(false)}>
                    <div className="modal_text">
                        <p className="sub_title">탈퇴 확인</p>
                        <p className="main_text">정말 탈퇴하시겠습니까?</p>
                        <p className="sub_text">탈퇴시 <b>더 이상 서비스를 이용할 수 없으며 계정과 데이터가 삭제</b>됩니다.<br />
                            아래의 안내사항을 반드시 확인해주세요.</p>
                    </div>
                    <div className="gray_box">
                        <p className="dot_msg">거래 정보 관리를 위해 판매 내역과 정산 내역은 <b>탈퇴 후 5년간 보관</b>됩니다.</p>
                    </div>
                    <Checkbox label="안내사항을 모두 확인하였으며, 이에 동의합니다." id="chk" onChange={() => setCheck(!check)}/>
                    <div className="button_wrap">
                        <Button type="button" className="large outline" onClick={() => setVisible(false)}>취소</Button>
                        {check
                            ? <Button type="button" className="large" onClick={outUser}>확인</Button>
                            : <Button type="button" className="large disabled">확인</Button>
                        }

                    </div>
                </Dialog>
            </ModalWrap>
            <ConfirmDialog
                visible={visible3}
                text={"정상적으로 회원 탈퇴하였습니다. \n 감사합니다."}
                onConfirm={() => setVisible3(false)}
            />
            <ConfirmDialog
                visible={visible4}
                text={"변경된 내용을 저장하시겠습니까?"}
                onConfirm={() => {setVisible4(false);setVisible5(true);}}
                onCancel={() => setVisible4(false)}
            />
            <ModalWrap className="save_info_modal">
                <Dialog visible={visible5} size="medium" onCancel={() => setVisible5(false)}>
                    <div className="modal_text">
                        <img src={DialogCheck} alt="" />
                        <p className="main_text">회원 정보 변경 완료</p>
                        <p className="sub_text">안전을 위해 다른 기기 또는 브라우저에서 모두 로그아웃 됩니다. </p>
                    </div>
                    <div className="button_wrap">
                        <Button type="button" className="large" onClick={() => setVisible5(false)}>확인</Button>
                    </div>
                </Dialog>
            </ModalWrap>
        </MypageWrap>
    )
};

export default Myinfo2;