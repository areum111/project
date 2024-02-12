import React, { useMemo } from 'react';
import { UserWrap } from 'styles/user.styled';
import SelectBox from "components/SelectBox/SelectBox";
import Checkbox from "components/Checkbox/Checkbox";
import CustomDatePicker from "components/datepicker/CustomDatePicker";
import Button from "components/Button/Button";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";

const User1 = () => {
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
            width: 160,
        },
        {
            accessor: '성명',
            Header: '성명',
            width: 240,
        },
        {
            accessor: '아이디',
            Header: '아이디',
        },
        {
            accessor: '승인상태',
            Header: '승인 상태',
            width: 250,
        },
        {
            accessor: '가입일',
            Header: '가입일',
            width: 370,
        },
        {
            accessor: '승인일',
            Header: '승인일',
            width: 220,
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [{
        "No": "10",
        "성명": "김인스",
        "아이디": <button type="button" className="user_id">inspien10</button>,
        "승인상태": "승인대기",
        "가입일": "2023-03-01",
        "승인일": "-"
    }], [])

    return (
        <UserWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>가입 승인 관리</h2>
                </div>
                <div className="content">
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
                                    <th>상태</th>
                                    <td>
                                        <div className="td_wrap wrap">
                                            <Checkbox label="전체" id="check1" checked={true} />
                                            <Checkbox label="승인 대기" id="check2" checked={true} />
                                            <Checkbox label="승인 완료" id="check3" checked={true} />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>가입일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
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
        </UserWrap>
    )
}

export default User1;