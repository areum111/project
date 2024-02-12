import React, {useEffect, useMemo} from "react";
import { ReceiptListWrap } from "styles/receipt.styled";
import SelectBox from "components/SelectBox/SelectBox";
import Checkbox from "components/Checkbox/Checkbox";
import CustomDatePicker from "components/datepicker/CustomDatePicker";
import Button from "components/Button/Button";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import {Link} from "react-router-dom";
import {customerTheme} from "theme";

const InvoiceCustomer = ({ setTheme }) => {
    useEffect(() => {
        setTheme(customerTheme);
    }, []);

    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "회사명"},
        {value: 2, label: "인보이스 번호"},
        {value: 3, label: "정산 담당자"}
    ]
    const options3 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "이상"},
        {value: 3, label: "이하"}
    ]
    const options4 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "높은 금액순"},
        {value: 3, label: "낮은 금액순"}
    ]
    const options5 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]

    const columnData = [
        {
            accessor: 'no',
            Header: 'No',
            width: '8%',
        },
        {
            accessor: 'invoice_no',
            Header: '인보이스 번호',
            width: '18%',
        },
        {
            accessor: 'use_date',
            Header: '사용 기간',
            width: '18%',
        },
        {
            accessor: 'price',
            Header: '금액(원)',
            width: '18%',
        },
        {
            accessor: 'pay_date',
            Header: '결제 예정일',
            width: '18%',
        },
        {
            accessor: 'state',
            Header: '결제 상태',
            width: 'auto',
        },
    ]

    const columns = useMemo(() => columnData, []);

    const datas = useMemo(() => [
        {
            "no": "2",
            "invoice_no": <Link to="/receipt/invoice2"><span className="link">20230605-223314</span></Link>,
            "use_date": '2023-05',
            "price": "15,000,000",
            "pay_date": "2023-06-25",
            "state": "청구 완료",
        },
        {
            "no": "1",
            "invoice_no": <Link to="/receipt/invoice2"><span className="link">20230605-223314</span></Link>,
            "use_date": '2023-05',
            "price": "2,000,000",
            "pay_date": "2023-06-25",
            "state": <span className="red_txt">연체</span>,
        },
    ], )



    return (
        <ReceiptListWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>인보이스 관리</h2>
                    <p className="path">홈 > 정산 > 인보이스 관리</p>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="outline_box search_box">
                            <table className="form_tb">
                                <tbody>
                                <tr>
                                    <th>결제 예정일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>결제 상태</th>
                                    <td>
                                        <div className="td_wrap wrap">
                                            <Checkbox label="전체" id="check1" checked />
                                            <Checkbox label="청구 완료" id="check2" checked />
                                            <Checkbox label="입금 완료" id="check3" checked />
                                            <Checkbox label="연체" id="check4" checked />
                                            <Checkbox label="미납" id="check5" checked />
                                            <Checkbox label="결제 실패" id="check6" checked />
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
                    </div>
                    <div className="cont_box">
                        <div className="outline_box search_result">
                            <div className="pay_info">
                                <div className="info_box">
                                    <p className="title">결제 예정일</p>
                                    <p className="text">매월 25일</p>
                                </div>
                                <div className="info_box">
                                    <p className="title">정산방식</p>
                                    <p className="text">계좌이체<span>(국민은행 123456789101112)</span></p>
                                </div>
                            </div>
                            <div className="cnt_box_wrap">
                                <div className="cnt_box">
                                    <p className="title">청구 완료</p>
                                    <p className="cnt">5 건</p>
                                </div>
                                <div className="cnt_box">
                                    <p className="title">입금 완료</p>
                                    <p className="cnt">6 건</p>
                                </div>
                                <div className="cnt_box">
                                    <p className="title">연체</p>
                                    <p className="cnt"><span className="red_txt">1 건</span></p>
                                </div>
                                <div className="cnt_box">
                                    <p className="title">미납</p>
                                    <p className="cnt"><span className="red_txt">3 건</span></p>
                                </div>
                                <div className="cnt_box">
                                    <p className="title">결제 실패</p>
                                    <p className="cnt"><span className="red_txt">1 건</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="outline_box">
                            <div className="tb_top">
                                <span className="cnt">총 123건</span>
                                <div className="right">
                                    <SelectBox className="select" options={options4} value={options4[0]} />
                                    <SelectBox className="select" options={options5} value={options5[0]} />
                                </div>
                            </div>
                            <DataTable columns={columns} data={datas} />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </ReceiptListWrap>
    )
};

export default InvoiceCustomer;