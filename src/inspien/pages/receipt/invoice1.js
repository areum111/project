import React, {useMemo, useState} from "react";
import { ReceiptListWrap } from "styles/receipt.styled";
import SelectBox from "components/SelectBox/SelectBox";
import Checkbox from "components/Checkbox/Checkbox";
import CustomDatePicker from "components/datepicker/CustomDatePicker";
import Button from "components/Button/Button";
import RadioButton from "components/Radio/RadioButton";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import DataTable from "components/Table/DataTable";
import SwitchToggle from "components/SwitchToggle/SwitchToggle";
import Pagination from "components/Pagination/Pagination";
import {Link} from "react-router-dom";
import DepositCheckModal from "components/Modal/DepositCheckModal";
import DepositUnCheckModal from "components/Modal/DepositUnCheckModal";
import ConfirmDialog from "../../components/Modal/ConfirmDialog";

const Invoice1 = () => {
    const [visible, setVisible] = useState(false);
    const [visible2, setVisible2] = useState(false);
    const [visible3, setVisible3] = useState(false);
    const [visible4, setVisible4] = useState(false);
    const [visible5, setVisible5] = useState(false);

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
            width: '6%',
        },
        {
            accessor: 'invoice_no',
            Header: '인보이스 번호',
            width: '12%',
        },
        {
            accessor: 'use_date',
            Header: '사용 기간',
            width: '10%',
        },
        {
            accessor: 'company',
            Header: '회사명',
            width: '10%',
        },
        {
            accessor: 'pay_method',
            Header: '정산 방식',
            width: '10%',
        },
        {
            accessor: 'pay_name',
            Header: '정산 담당자',
            width: '10%',
        },
        {
            accessor: 'price',
            Header: '금액(원)',
            width: 'auto',
        },
        {
            accessor: 'pay_date',
            Header: '결제 예정일',
            width: '10%',
        },
        {
            accessor: 'state',
            Header: '결제 상태',
            width: '10%',
        },
        {
            accessor: 'deposit',
            Header: '입금 확인',
            width: '10%',
        },
    ]

    const columns = useMemo(() => columnData, []);

    const [toggle, setToggle] = useState([1]);
    const [no, setNo] = useState(null);
    const handleToggle = (no) => {
        setNo(no);
        !toggle.includes(no) ? setVisible2(true) : setVisible3(true);
    }
    //입금 확인
    const checkDeposit = () => {
        setVisible2(false);
        setToggle((toggle) => [...toggle, no]);
        setVisible4(true);
    }
    //입금 확인 취소
    const unCheckedDeposit = () => {
        setVisible3(false);
        setToggle(toggle.filter((button) => button !== no));
        setVisible5(true);
    }
    const datas = useMemo(() => [
        {
            "no": "2",
            "invoice_no": <Link to="/receipt/invoice2"><span className="link">20230605-223314</span></Link>,
            "use_date": '2023-05',
            "company": "삼성전자",
            "pay_method": "계좌이체",
            "pay_name": "정도현",
            "price": "15,000,000",
            "pay_date": "2023-06-25",
            "state": "청구 완료",
            "deposit":
                <SwitchToggle
                    id="switch1"
                    handleToggle={() => handleToggle(2)}
                    checked={toggle.includes(2) ? true : false}
                />
        },
        {
            "no": "1",
            "invoice_no": <Link to="/receipt/invoice2"><span className="link">20230605-223314</span></Link>,
            "use_date": '2023-05',
            "company": "LG전자",
            "pay_method": "카드결제",
            "pay_name": "-",
            "price": "2,000,000",
            "pay_date": "2023-06-25",
            "state": <span className="red_txt">연체</span>,
            "deposit":
                <SwitchToggle
                    id="switch2"
                    handleToggle={() => handleToggle(1)}
                    checked={toggle.includes(1) ? true : false}
                />
        },
    ], [toggle])



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
                                    <th>결제 예정일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>정산 방식</th>
                                    <td>
                                        <div className="td_wrap">
                                            <RadioButton label="전체" id="radio1" checked />
                                            <RadioButton label="계좌이체" id="radio2" />
                                            <RadioButton label="카드결제" id="radio3" />
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
                                { visible ? <tr>
                                    <th>금액(원)</th>
                                    <td>
                                        <div className="td_wrap">
                                            <SelectBox className="select no_border" options={options3} value={options3[0]} />
                                            <input type="text" placeholder="입력" className="keyword xl" />
                                        </div>
                                    </td>
                                </tr> : null}
                                </tbody>
                            </table>
                            <div className="toggle_btn_wrap">
                                { visible
                                    ? <button type="button" onClick={ () => setVisible(!visible) }>상세검색 닫기<BsChevronUp size={ 18 } /></button>
                                    : <button type="button" onClick={ () => setVisible(!visible) }>상세검색 펼치기<BsChevronDown size={ 18 } /> </button>
                                }
                            </div>
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
                                    <p className="cnt">123 건</p>
                                </div>
                                <div className="cnt_box">
                                    <p className="title">입금 완료</p>
                                    <p className="cnt">150,000 건</p>
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
            <DepositCheckModal visible2={visible2} setVisible2={setVisible2} checkDeposit={checkDeposit} />
            <ConfirmDialog
                visible={visible4}
                text="입금 확인되었습니다."
                onConfirm={() => setVisible4(false)}
            />
            <DepositUnCheckModal visible3={visible3} setVisible3={setVisible3} unCheckedDeposit={unCheckedDeposit} />
            <ConfirmDialog
                visible={visible5}
                text="입금 확인이 취소되었습니다."
                onConfirm={() => setVisible5(false)}
            />
        </ReceiptListWrap>
    )
};

export default Invoice1;