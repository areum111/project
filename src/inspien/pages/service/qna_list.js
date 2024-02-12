import React, { useMemo } from 'react';
import { BoardWrap } from 'styles/service.styled';
import SelectBox from "components/SelectBox/SelectBox";
import CustomDatePicker from "components/datepicker/CustomDatePicker";
import Button from "components/Button/Button";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import RadioButton from "components/Radio/RadioButton";
import {Link} from "react-router-dom";

const QnaList = () => {
    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "제목"},
        {value: 2, label: "상세"},
        {value: 3, label: "회사명"},
        {value: 4, label: "작성자"},
        {value: 5, label: "아이디"}
    ]
    const options3 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "많은 댓글순"},
        {value: 3, label: "높은 조회수순"}
    ]
    const options4 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]

    const columnData = [
        {
            accessor: 'no',
            Header: 'No',
            width: '7%',
        },
        {
            accessor: 'subject',
            Header: '제목',
            width: 'auto',
        },
        {
            accessor: 'company_name',
            Header: '회사명',
            width: '12%',
        },
        {
            accessor: 'writer',
            Header: '작성자(아이디)',
            width: '12%',
        },
        {
            accessor: 'reg_date',
            Header: '등록일',
            width: '12%',
        },
        {
            accessor: 'state',
            Header: '상태',
            width: '11%',
        },
        {
            accessor: 'cnt',
            Header: '조회수',
            width: '11%',
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "no": "10",
            "subject": <Link className="link subject" to="/qna/detail"><span>사용량 조회 관련 문의</span>(2)</Link> ,
            "company_name": "현대자동차",
            "writer": "홍길동(exa******)",
            "reg_date": "2023-03-01",
            "state": "문의 접수",
            "cnt": "1"
        },
        {
            "no": "10",
            "subject": <Link className="link subject" to="/qna/detail"><span>긴제목이 생길경우에는 이렇게 쭈우욱 나오다가 너무 길어질 경우에는</span>(0)</Link> ,
            "company_name": "현대자동차",
            "writer": "홍길동(exa******)",
            "reg_date": "2023-03-01",
            "state": "문의 접수",
            "cnt": "1"
        }
    ], [])

    return (
        <BoardWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>Q&A</h2>
                    <div className="path">홈 > 서비스 지원 > Q&A</div>
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
                                            <RadioButton label="전체" id="check1" name="state" checked={true} />
                                            <RadioButton label="문의 접수" id="check2" name="state" />
                                            <RadioButton label="처리 완료" id="check3" name="state" />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>등록일</th>
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
                            <div className="tb_top tb_sort">
                                <div className="right">
                                    <SelectBox className="select" options={options3} value={options3[0]} />
                                    <SelectBox className="select" options={options4} value={options4[0]} />
                                </div>
                            </div>
                            <div className="tb_top">
                                <span className="cnt">총 10개</span>
                                <div className="right">
                                    <Button type="button" className="medium">등록</Button>
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
        </BoardWrap>
    )
}

export default QnaList;