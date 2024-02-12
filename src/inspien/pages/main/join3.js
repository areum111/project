import React, {useMemo, useState} from "react";
import Button from "components/Button/Button";
import { MemberWrap } from "styles/main.styled";
import RadioButton from "components/Radio/RadioButton";
import BackConfirmDialog from "components/Modal/BackConfirmDialog";
import Dialog from "../../components/Modal/Dialog";
import SearchImg from "../../images/ico/ico_search.svg";
import DataTable from "../../components/Table/DataTable";
import {ModalWrap} from "../../styles/modal.styled";

const Join3 = () => {
    const [visible, setVisible] = useState(false);
    const [checkedItem, setCheckedItem] = useState('n');
    const [visibleSearchBtn, setVisibleSearchBtn] = useState(false);
    const [visibleCompanyModal, setVisibleCompanyModal] = useState(false);
    const [companyName, setCompanyName] = useState(null);
    const onConfirm = () => {
        window.location.href = '/main/join2';
    }

    //소속 정보 가입 이력 체크
    const checkedItemHandler = (id) => {
        setCheckedItem(id);
        if(id === 'y') {
            setVisibleSearchBtn(true);
        }else{
            setVisibleSearchBtn(false);
            setCompanyName(null);
        }
    }

    const onClick = (company_name) => {
        setVisibleCompanyModal(false);
        setCompanyName(company_name);
    }

    //소속 회사 팝업
    const columnData = [
        {
            accessor: "company",
            Header: "회사명",
            width: "100%",
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "company": <button type="button" onClick={() => onClick("삼성전자")}><span className="link">삼성전자</span></button>,
        },
        {
            "company": <button type="button" onClick={() => onClick("현대자동차")}><span className="link">현대자동차</span></button>,
        },
        {
            "company": <button type="button" onClick={() => onClick("SK")}><span className="link">SK</span></button>,
        },
        {
            "company": <button type="button" onClick={() => onClick("LG전자")}><span className="link">LG전자</span></button>,
        },
        {
            "company": <button type="button" onClick={() => onClick("포스코")}><span className="link">포스코</span></button>,
        },
    ], [])


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
                                            <input type="password" placeholder="비밀번호 확인 입력" />
                                            <button type="button" className="view_btn">문자 보이기</button>
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
                                            <Button className="medium outline">인증하기</Button>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>전화번호</th>
                                    <td>
                                        <div className="td_wrap">
                                            <input type="number" placeholder="전화번호 입력" />
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
                            <h3>소속 정보</h3>
                            <p className="dot_msg">소속 회사 또는 단체의 가입 여부를 확인해 주세요.</p>
                        </div>
                        <div className="outline_box member_box company_info">
                            <table className="form_tb">
                                <caption>소속 정보</caption>
                                <tbody>
                                <tr>
                                    <th>가입 이력</th>
                                    <td>
                                        <div className="td_wrap">
                                            <div className="radios">
                                                <RadioButton label="없음" name="isJoin" id="n" onChange={() => checkedItemHandler('n')} checked={checkedItem === 'n' ? true : false} />
                                                <RadioButton label="있음" name="isJoin" id="y" onChange={() => checkedItemHandler('y')} checked={checkedItem === 'y' ? true: false} />
                                            </div>
                                            {visibleSearchBtn
                                                ? <>
                                                    <span className="company_name">{companyName}</span>
                                                    <Button
                                                        type="button"
                                                        className="small outline company_search"
                                                        onClick={() => setVisibleCompanyModal(true)}>{companyName ? "변경" : "찾기"}</Button>
                                                </>
                                                : <Button type="button" className="small outline disabled company_search">찾기</Button>
                                            }
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
                    <Button className="large disabled">완료</Button>
                </div>
            </div>
            <BackConfirmDialog
                visible={visible}
                onCancel={() => setVisible(false)}
                onConfirm={onConfirm}
            />
            <ModalWrap className="select_admin_modal">
                <Dialog
                    title={"소속 회사 선택"}
                    visible={visibleCompanyModal}
                    onCancel={() => setVisibleCompanyModal(false)}
                    size="sm"
                    scroll={true}
                >
                    <div className="scroll_inner">
                        <div className="search_input">
                            <input type="text" placeholder="회사명 입력" />
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
        </MemberWrap>
    );
}

export default Join3;