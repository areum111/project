import React, {useMemo, useState} from "react";
import SelectBox from "../SelectBox/SelectBox";
import Button from "../Button/Button";
import {DashboardWrap} from "styles/dashboard.styled";
import DataTable from "../Table/DataTable";
import Pagination from "../Pagination/Pagination";
import Chart from "../Chart/Chart";
import UpIco from "images/ico/ico_tri_up_gray.svg";
import DownIco from "images/ico/ico_tri_down_gray.svg";

const UsageHistory = ({ customer }) => {
    const [visible, setVisible] = useState(false);
    const options1 = [
        {value: 1, label: "연/월"},
        {value: 2, label: "연/분기"}
    ]
    const options2 = [
        {value: 1, label: "2023년"},
        {value: 2, label: "2022년"}
    ]
    const options3 = [
        {value: 1, label: "1분기"},
        {value: 2, label: "2분기"},
        {value: 3, label: "3분기"},
        {value: 4, label: "4분기"}
    ]
    const options4 = [
        {value: 1, label: "1월"},
        {value: 2, label: "2월"},
        {value: 3, label: "3월"},
        {value: 4, label: "4월"},
        {value: 5, label: "5월"},
        {value: 6, label: "6월"},
        {value: 7, label: "7월"},
        {value: 8, label: "8월"},
        {value: 9, label: "9월"},
        {value: 10, label: "10월"},
        {value: 11, label: "11월"},
        {value: 12, label: "12월"}
    ]
    const options5 = [
        {value: 1, label: "최근 등록순"},
        {value: 2, label: "높은 사용료순"},
        {value: 3, label: "낮은 사용료순"}
    ]
    const options6 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]
    const tabLists = [
        {id: 0, title: "사용량"},
        {id: 1, title: "저장량"},
    ]
    //고객일 경우 노드 탭 추가
    if(customer){
        tabLists.push({id: 2, title: "노드"});
    }
    const [index, setIndex] = useState(0);

    //사용량/저장량 차트 데이터 임시로 생성
    const labelArr = [];
    const dataArr1 = [];
    const dataArr2 = [];
    for(let i = 0; i < 31; i++){
        labelArr.push(String(i));
        dataArr1.push(Math.floor(Math.random() * 100));
    }

    const columnData = [
        {
            accessor: 'use_date',
            Header: '사용기간',
            width: '10%',
        },
        {
            accessor: 'default_cnt',
            Header: '기본 노드 수',
            width: 'auto',
        },
        {
            accessor: 'node_cnt',
            Header: '정액제 노드 수',
            width: '10%',
        },
        {
            accessor: 'excess_cnt',
            Header: '초과 노드 수',
            width: '10%',
        },
        {
            accessor: 'total_cnt',
            Header: '총 노드 수',
            width: '10%',
        },
        {
            accessor: 'variation',
            Header: '월(일) 증감',
            width: '10%',
        },
        {
            accessor: 'excess_price',
            Header: '초과요금',
            width: '10%',
        },
        {
            accessor: 'total_price',
            Header: '총 사용료',
            width: '10%',
        },
        {
            accessor: 'subRows',
            Header: '',
            width: '6%',
            Cell: ({ row }) =>
                row.canExpand ? (
                    <span {...row.getToggleRowExpandedProps()} >
              {row.isExpanded ? <img src={UpIco} alt="닫기" /> : <img src={DownIco} alt="열기" />}
            </span>
                ) : null
        },
    ]

    const columns = useMemo(() => columnData, []);
    const datas = useMemo(() => [
        {
            "use_date": "2023-08",
            "default_cnt": "1",
            "node_cnt": "2",
            "excess_cnt": "1",
            "total_cnt": <b>4</b>,
            "variation": <span className="blue_txt">+3</span>,
            "excess_price": <b>1,000</b>,
            "total_price": <b>1,100,000</b>,
            "subRows": [
                {
                    "use_date": "2023-08-25",
                    "default_cnt": "",
                    "node_cnt": "",
                    "excess_cnt": "1",
                    "total_cnt": <b>3</b>,
                    "variation": <span>+1</span>,
                    "excess_price": <b>1,000</b>,
                    "total_price": <b>1,100,000</b>,
                },
                {
                    "use_date": "2023-08-18",
                    "default_cnt": "",
                    "node_cnt": "-",
                    "excess_cnt": "2",
                    "total_cnt": <b>3</b>,
                    "variation": <span>+1</span>,
                    "excess_price": "-",
                    "total_price": <b>1,100,000</b>,
                }
            ]
        },
        {
            "use_date": "2023-07",
            "default_cnt": "1",
            "node_cnt": "0",
            "excess_cnt": "-",
            "total_cnt": <b>4</b>,
            "variation": <span className="red_txt">-2</span>,
            "excess_price": "-",
            "total_price": <b>500,000</b>,
            "subRows": [{}]
        },
    ], []);

    const columnData2 = [
        {
            accessor: 'use_date',
            Header: '사용기간',
            width: '10%',
        },
        {
            accessor: 'capacity_name',
            Header: '용량명',
            width: 'auto',
        },
        {
            accessor: 'capacity',
            Header: '정액제 용량',
            width: '15%',
        },
        {
            accessor: 'total_usage',
            Header: '총 사용량',
            width: '15%',
        },
        {
            accessor: 'excess_usage',
            Header: '초과 사용량',
            width: '15%',
        },
        {
            accessor: 'excess_price',
            Header: '초과요금',
            width: '15%',
        },
        {
            accessor: 'total_price',
            Header: '총 사용료',
            width: '10%',
        },
        {
            accessor: 'subRows',
            Header: '',
            width: '6%',
            Cell: ({ row }) =>
                row.canExpand ? (
                    <span {...row.getToggleRowExpandedProps()} >
              {row.isExpanded ? <img src={UpIco} alt="닫기" /> : <img src={DownIco} alt="열기" />}
            </span>
                ) : null
        },
    ]

    const columns2 = useMemo(() => columnData2, []);
    const datas2 = useMemo(() => [
        {
            "use_date": "2023-07",
            "capacity_name": "데이터 사용량",
            "capacity": "80MB",
            "total_usage": <b>120MB</b>,
            "excess_usage": "40MB",
            "excess_price": "80,000원",
            "total_price": <b>4,120,000원</b>,
            "subRows": [
                {
                    "use_date": "2023-07-25",
                    "capacity_name": "",
                    "capacity": "",
                    "total_usage": <b>120MB</b>,
                    "excess_usage": "20MB",
                    "excess_price": "40,000원",
                    "total_price": <b>1,080,000원</b>,
                },
                {
                    "use_date": "2023-07-18",
                    "capacity_name": "",
                    "capacity": "",
                    "total_usage": <b>120MB</b>,
                    "excess_usage": "-",
                    "excess_price": "-",
                    "total_price": <b>1,080,000원</b>,
                }
            ]
        },
        {
            "use_date": "2023-07",
            "capacity_name": "데이터 사용량_2",
            "capacity": "40MB",
            "total_usage": <b>30MB</b>,
            "excess_usage": "40MB",
            "excess_price": "80,000원",
            "total_price": <b>1,000,000원</b>,
        },
    ], []);

    return (
        <>
            <div className="cont_box">
                <div className="outline_box search_box">
                    <table className="form_tb">
                        <tbody>
                        <tr>
                            <th>검색 기간</th>
                            <td>
                                <div className="td_wrap date_wrap">
                                    <div className="select_condition"><SelectBox className="select no_border" options={options1} value={options1[0]} /></div>
                                    <SelectBox className="select l" size="large" options={options2} value={options2[0]} />
                                    <SelectBox className="select l" size="large" options={options4} value={options4[0]} />
                                </div>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="search_btn_wrap">
                        <Button className="large gray">초기화</Button>
                        <Button className="large" onClick={() => setVisible(true)}>검색</Button>
                    </div>
                </div>
            </div>
            <div className="cont_box usage_box">
                <div className="tab_menu_wrap">
                    <ul className="tab_menu">
                        {tabLists.map((list) => {
                            return (
                                <li
                                    key={list.id}
                                    className={index === list.id ? "on" : null}
                                    onClick={() => setIndex(list.id)}><span>{list.title }</span></li>
                            )
                        })}
                    </ul>
                </div>
                <div className="outline_box">
                    <DashboardWrap>
                        {index === 0 ? <>
                            <p className="chart_title">사용량 (단위 : MB)</p>
                            <Chart labelName="사용량" labels={labelArr} datas={dataArr1} />
                        </> : null}
                        {index === 1 ? <>
                            <p className="chart_title">저장량 (단위 : GB)</p>
                            <Chart labelName="저장량" labels={labelArr} datas={dataArr2} />
                        </> : null}
                        {index === 2 ? <>
                            <div className="tb_top">
                                <span className="cnt">총 2개</span>
                                <div className="right">
                                    <SelectBox className="select" options={options5} value={options5[0]} />
                                    <SelectBox className="select" options={options6} value={options6[0]} />
                                </div>
                            </div>
                            <div className="tb_util">
                                <div className="total_price">누적 합계 금액 <strong>1,970,000</strong></div>
                                <div className="right_btn">
                                    <Button type="button" className="medium gray">엑셀 다운로드</Button>
                                </div>
                            </div>
                            <DataTable columns={columns} data={datas} emptySubText="사용 이력이 없습니다." />
                            <Pagination />
                        </> : null}
                    </DashboardWrap>
                </div>
            </div>
            <div className="cont_box usage_box">
                <div className="outline_box">
                    <div className="tb_top">
                        <span className="cnt">총 123건</span>
                        <div className="right">
                            <SelectBox className="select" options={options5} value={options5[0]} />
                            <SelectBox className="select" options={options6} value={options6[0]} />
                        </div>
                    </div>
                    <div className="tb_util">
                        <div className="total_price">누적 합계 금액 <strong>1,970,000</strong></div>
                        <div className="right_btn">
                            <Button type="button" className="medium gray">엑셀 다운로드</Button>
                        </div>
                    </div>
                    <DataTable columns={columns2} data={datas2} emptySubText="사용 이력이 없습니다." />
                    {datas2.length === 0 ? <div className="no_data">
                            <p>사용 이력이 없습니다.</p>
                        </div> : null}
                    <Pagination />
                </div>
            </div>
        </>
    )
}

export default UsageHistory;