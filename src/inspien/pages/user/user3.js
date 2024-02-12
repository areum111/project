import React, { useState, useMemo } from 'react';
import { UserWrap } from 'styles/user.styled';
import SelectBox from "components/SelectBox/SelectBox";
import Button from "components/Button/Button";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import Dialog from "components/Modal/Dialog";
import { ModalWrap } from "styles/modal.styled";
import RadioButton from "components/Radio/RadioButton";
import Checkbox from "../../components/Checkbox/Checkbox";

const User3 = () => {
    const [visible, setVisible] = useState(false);
    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "아이디"},
        {value: 2, label: "성명"},
        {value: 3, label: "이메일"},
        {value: 4, label: "전화번호"}
    ]
    const options3 = [
        {value: 1, label: "최근 가입순"},
        {value: 2, label: "최근 승인순"}
    ]
    const options4 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]

    const columnData = [
        {
            accessor: 'No',
            Header: 'No',
        },
        {
            accessor: '성명',
            Header: '성명',
            width: 240,
        },
        {
            accessor: '아이디',
            Header: '아이디',
            width: 360,
        },
        {
            accessor: '계정상태',
            Header: '계정 상태',
            width: 250,
        },
        {
            accessor: '마지막로그인일시',
            Header: '마지막 로그인 일시',
            width: 370,
        },
        {
            accessor: '권한',
            Header: '권한',
            width: 240,
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [{
        "No": "10",
        "성명": "김인스",
        "아이디": <button type="button" className="user_id">inspien10</button>,
        "계정상태": "정상",
        "마지막로그인일시": "2023-03-01 10:10",
        "권한": <Button className="small dark_gray" onClick={() => setVisible(true)}>관리</Button>
    }], [])

    return (
        <UserWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>그룹 관리</h2>
                    <p className="path">홈 > 사용자 > 그룹 관리</p>
                </div>
                <div className="content">
                    <div className="right_btn_wrap">
                        <Button className="large" onClick={() => window.location.href="/user/user6"}>회사정보</Button>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box search_box">
                            <table className="form_tb">
                                <tbody>
                                <tr>
                                    <th>검색어</th>
                                    <td>
                                        <div className="td_wrap">
                                            <div className="select_condition"><SelectBox className="select no_border" options={options1} value={options1[0]} /></div>
                                            <SelectBox className="select l" size="large" options={options2} value={options2[0]} />
                                            <input type="text" placeholder="입력" className="keyword xl" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>계정 상태</th>
                                    <td>
                                        <div className="td_wrap wrap">
                                            <Checkbox label="전체" name="radio" id="radio1" checked />
                                            <Checkbox label="정상" name="radio" id="radio2" />
                                            <Checkbox label="휴면" name="radio" id="radio3" />
                                            <Checkbox label="탈퇴" name="radio" id="radio4" />
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                            <div className="search_btn_wrap">
                                <Button className="large gray">초기화</Button>
                                <Button className="large">검색</Button>
                            </div>
                        </div>
                        <div className="outline_box">
                            <div className="tb_top">
                                <span className="cnt">총 10개</span>
                                <div className="right">
                                    <SelectBox className="select" options={options3} value={options3[0]} />
                                    <SelectBox className="select" options={options4} value={options4[0]} />
                                </div>
                            </div>
                            <DataTable
                                columns={columns}
                                data={datas}
                            />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
            <ModalWrap className="auth_modal">
                <Dialog
                    visible={visible}
                    onCancel={() => setVisible(false)}
                    title={"사용자 권한 설정"}
                    size={"sm"}
                >
                    <p className="main_text">김인스 (inspien10)님의 권한</p>
                    <table className="form_tb">
                        <tr>
                            <th>회원 관리</th>
                            <td>
                                <div className="td_wrap">
                                    <RadioButton label="관리자" checked={true} />
                                    <RadioButton label="일반" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>상점 관리</th>
                            <td>
                                <div className="td_wrap">
                                    <RadioButton label="관리자" checked={true} />
                                    <RadioButton label="일반" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>정산 관리</th>
                            <td>
                                <div className="td_wrap">
                                    <RadioButton label="관리자" checked={true} />
                                    <RadioButton label="일반" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>Q&A 관리</th>
                            <td>
                                <div className="td_wrap">
                                    <RadioButton label="관리자" checked={true} />
                                    <RadioButton label="일반" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th>고객 관리</th>
                            <td>
                                <div className="td_wrap">
                                    <RadioButton label="관리자" checked={true} />
                                    <RadioButton label="일반" />
                                </div>
                            </td>
                        </tr>
                    </table>
                    <div className="center_button_wrap">
                        <Button className="large">저장</Button>
                    </div>
                </Dialog>
            </ModalWrap>
        </UserWrap>
    )
}

export default User3;