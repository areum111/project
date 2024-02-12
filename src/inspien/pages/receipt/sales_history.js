import React, {useMemo, useState} from "react";
import { SalesHistoryWrap } from "styles/receipt.styled";
import SelectBox from "components/SelectBox/SelectBox";
import Checkbox from "components/Checkbox/Checkbox";
import CustomDatePicker from "components/datepicker/CustomDatePicker";
import Button from "components/Button/Button";
import RadioButton from "components/Radio/RadioButton";
import {BsChevronDown, BsChevronUp} from "react-icons/bs";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import {Link} from "react-router-dom";

const SalesHistory = () => {
    const [visible, setVisible] = useState(false);

    const options1 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "부분 일치"}
    ]
    const options2 = [
        {value: 1, label: "상품명"},
        {value: 2, label: "판매사"},
        {value: 2, label: "구매사"},
        {value: 3, label: "비고"}
    ]
    const options3 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "높은 금액순"},
        {value: 3, label: "낮은 금액순"}
    ]
    const options4 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]
    const options5 = [
        {value: 1, label: "완전 일치"},
        {value: 2, label: "이상"},
        {value: 3, label: "이하"}
    ]

    const columnData = [
        {
            accessor: 'no',
            Header: 'No',
            width: '5%',
        },
        {
            accessor: 'store',
            Header: '판매처',
            width: '7%',
        },
        {
            accessor: 'product_name',
            Header: '상품명',
            width: 'auto',
        },
        {
            accessor: 'pay_type',
            Header: '유형',
            width: '7%',
        },
        {
            accessor: 'sell_company',
            Header: '판매사',
            width: '7%',
        },
        {
            accessor: 'buy_company',
            Header: '구매사',
            width: '7%',
        },
        {
            accessor: 'selling_price',
            Header: '판매가',
            width: '10%',
        },
        {
            accessor: 'unit',
            Header: '단위',
            width: '5%',
        },
        {
            accessor: 'cnt',
            Header: '수량',
            width: '5%',
        },
        {
            accessor: 'price',
            Header: '금액(원)',
            width: '9%',
        },
        {
            accessor: 'comment',
            Header: '비고',
            width: '9%',
        },
        {
            accessor: 'sell_date',
            Header: '판매일시',
            width: '9%',
        },
    ]

    const columns = useMemo(() => columnData, []);
    const datas = useMemo(() => [
        {
            "no": "4",
            "store": "백오피스",
            "product_name": <p className="product_name"><span className="product_label purple">P</span><Link to="/" className="link">인터페이스 A</Link></p>,
            "pay_type": "분할결제",
            "sell_company": "롯데",
            "buy_company": "LG",
            "selling_price": "5,500,000",
            "unit": "1EA",
            "cnt": "1",
            "price": "2,200,000",
            "comment": "2회차 40%",
            "sell_date": "2023-06-25 15:53"
        },
        {
            "no": "3",
            "store": "백오피스",
            "product_name": <p className="product_name"><span className="product_label blue">A</span><Link to="/" className="link">유통사 주문 수집 유통사 주문 수집 유통사 주문 수집 유통사 주문 수집</Link></p>,
            "pay_type": "구독형",
            "sell_company": "인스피언",
            "buy_company": "삼성",
            "selling_price": "1,500,000",
            "unit": "1EA",
            "cnt": "1",
            "price": "1,200,000",
            "comment": "-",
            "sell_date": "2023-06-25 15:53"
        },
        {
            "no": "2",
            "store": "백오피스",
            "product_name": <p className="product_name"><span className="product_label yellow">I</span><Link to="/" className="link">인터페이스 B</Link></p>,
            "pay_type": "분할결제",
            "sell_company": "롯데",
            "buy_company": "LG",
            "selling_price": "5,500,000",
            "unit": "1EA",
            "cnt": "1",
            "price": "2,200,000",
            "comment": "-",
            "sell_date": "2023-06-25 15:53"
        },
        {
            "no": "1",
            "store": "백오피스",
            "product_name": <p className="product_name"><span className="product_label orange">S</span><Link to="/" className="link">Data Transfer - Overage</Link></p>,
            "pay_type": "분할결제",
            "sell_company": "롯데",
            "buy_company": "LG",
            "selling_price": "5,500,000",
            "unit": "1EA",
            "cnt": "1",
            "price": "2,200,000",
            "comment": "-",
            "sell_date": "2023-06-25 15:53"
        },
    ], [])



    return (
        <SalesHistoryWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>판매 내역 관리</h2>
                    <p className="path">홈 > 정산 > 판매 내역 관리</p>
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
                                    <th>판매일</th>
                                    <td>
                                        <div className="td_wrap">
                                            <CustomDatePicker /><span className="date_dash">~</span><CustomDatePicker />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>종류</th>
                                    <td>
                                        <div className="td_wrap">
                                            <Checkbox label="전체" id="check1" checked />
                                            <Checkbox label="워크스페이스" id="check2" checked />
                                            <Checkbox label="패키지" id="check3" checked />
                                            <Checkbox label="어댑터" id="check4" checked />
                                            <Checkbox label="부가서비스" id="check5" checked />
                                            <Checkbox label="인터페이스" id="check6" checked />
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th>유형</th>
                                    <td>
                                        <div className="td_wrap wrap">
                                            <Checkbox label="전체" id="check1" checked />
                                            <Checkbox label="즉시구매" id="check2" checked />
                                            <Checkbox label="분할결제" id="check3" checked />
                                            <Checkbox label="구독형" id="check4" checked />
                                        </div>
                                    </td>
                                </tr>
                                { visible ? <>
                                    <tr>
                                        <th>판매처</th>
                                        <td>
                                            <div className="td_wrap wrap">
                                                <RadioButton label="전체" name="radio" id="radio1" checked />
                                                <RadioButton label="백오피스" name="radio" id="radio2" />
                                                <RadioButton label="스토어" name="radio" id="radio3" />
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <th>금액(원)</th>
                                        <td>
                                            <div className="td_wrap">
                                                <div className="select_condition"><SelectBox className="select no_border" options={options5} value={options5[0]} /></div>
                                                <input type="text" placeholder="입력" className="keyword xl" />
                                            </div>
                                        </td>
                                    </tr>
                                </>: null}
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
                        <div className="outline_box">
                            <div className="tb_top">
                                <span className="cnt">총 123건</span>
                                <div className="right">
                                    <SelectBox className="select" options={options3} value={options3[0]} />
                                    <SelectBox className="select" options={options4} value={options4[0]} />
                                </div>
                            </div>
                            <DataTable columns={columns} data={datas} />
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </SalesHistoryWrap>
    )
};

export default SalesHistory;