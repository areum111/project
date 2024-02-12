import React, {useMemo, useState} from 'react';
import { SalesWrap } from 'styles/receipt.styled';
import { DashboardWrap } from 'styles/dashboard.styled';
import SelectBox from "components/SelectBox/SelectBox";
import Button from "components/Button/Button";
import DataTable from "components/Table/DataTable";
import Pagination from "components/Pagination/Pagination";
import UpIco from "images/ico/ico_tri_up.svg";
import DownIco from "images/ico/ico_tri_down.svg";
import { registerables, Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import ConfirmDialog from "../../components/Modal/ConfirmDialog";


const Sales = () => {
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
        {value: 2, label: "높은 금액순"},
        {value: 3, label: "낮은 금액순"}
    ]
    const options6 = [
        {value: 1, label: "10개씩 보기"},
        {value: 2, label: "30개씩 보기"},
        {value: 3, label: "50개씩 보기"},
        {value: 4, label: "100개씩 보기"}
    ]

    //데이터 뷰타입 리스트형/그래프형
    const [viewType, setViewType] = useState('list');

    const columnData = [
        {
            accessor: 'month',
            Header: '대상 월',
            width: '10%',
        },
        {
            accessor: 'amount_month',
            Header: '증감액(전월 대비)',
            width: '18%',
        },
        {
            accessor: 'percentage_month',
            Header: '증감률(전월 대비)',
            width: '18%',
        },
        {
            accessor: 'amount_year',
            Header: '증감액(전년 대비)',
            width: '18%',
        },
        {
            accessor: 'percentage_year',
            Header: '증감률(전년 대비)',
            width: '18%',
        },
        {
            accessor: 'price',
            Header: '금액(원)',
            width: '18%',
        },
    ]

    const columns = useMemo(() => columnData, []);
    const datas = useMemo(() => [
        {
            "month": "2022-12",
            "amount_month": <span>500,000<span className="triangle"><img src={UpIco} alt="증가" /></span></span>,
            "percentage_month": <span>50.0 %<span className="triangle"><img src={DownIco} alt="감소" /></span></span>,
            "amount_year": "-",
            "percentage_year": "-",
            "price": "1,500,000",
        },
    ], []);

    // 차트
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels, ...registerables);

    Tooltip.positioners.myCustomPositioner = function(elements, eventPosition) {
        const tooltip = this;

        return {
            x: eventPosition.x,
            y: eventPosition.y
        };
    };

    // 판매실적 차트
    const data = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
            {
                type: 'line',
                label: "총 사용량",
                borderColor: "#4F63E3",
                borderWidth: 2,
                radius: 5,
                hoverRadius: 5,
                pointBackgroundColor: "#4F63E3",
                pointBorderColor: "#4F63E3",
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2,
                pointHoverBorderColor: "#4F63E3",
                pointHoverBackgroundColor: "#4F63E3",
                data: [25, 14, 95, 65, 72, 32, 80, 50, 20, 2, 5, 20],
                datalabels: {
                    anchor: "start",
                    align: "bottom",
                    font: {
                        family: 'Noto Sans KR',
                        size: "12",
                        weight: "500"
                    },
                },
            }
        ],
    };
    const chartOptions = {
        maintainAspectRatio: false,
        scales:{
            x: {
                ticks: {
                    font: {
                        family: 'Noto Sans KR',
                        size: "14",
                        color: "#828282"
                    },
                },
                grid :{
                    color: "#F2F2F2",
                },
                border :{
                    color: "#F2F2F2",
                }
            },
            y: {
                ticks: {
                    stepSize: 25,
                    height: 64,
                    font: {
                        family: 'Noto Sans KR',
                        size: "14",
                        color: "#828282"
                    },
                },
                grid :{
                    color: "#F2F2F2",
                },
                border :{
                    color: "#F2F2F2",
                }
            }
        },
        interaction: {
            intersect: false,
            mode: 'x',
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            }
        },
    }

    return (
        <SalesWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>판매 실적 관리</h2>
                    <p className="path">홈 > 정산 > 판매 실적 관리</p>
                </div>
                <div className="content">
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
                                            <SelectBox className="select l" size="large" options={options3} value={options3[0]} />
                                            <span className="date_dash">~</span>
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
                    <div className="cont_box">
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
                                    <ul className="tab">
                                        <li
                                            className={viewType === 'list' ? 'selected list' : 'list'}
                                            onClick={() => setViewType('list')}>
                                            목록형 보기
                                            {/*{viewType === 'list' ? <img src={ListOnIco} alt="목록형 보기" /> : <img src={ListIco} alt="목록형 보기" />}*/}
                                        </li>
                                        <li
                                            className={viewType === 'chart' ? 'selected chart' : 'chart'}
                                            onClick={() => setViewType('chart')}>
                                            그래프형 보기
                                            {/*{viewType === 'chart' ? <img src={ChartOnIco} alt="그래프형 보기" /> : <img src={ChartIco} alt="그래프형 보기" />}*/}
                                        </li>
                                    </ul>
                                    <Button type="button" className="medium gray">엑셀 다운로드</Button>
                                </div>
                            </div>
                            {viewType === 'list'
                                ? <>
                                    <DataTable columns={columns} data={datas} />
                                    <Pagination />
                                </>
                                : <DashboardWrap>
                                    <p className="chart_title">판매 실적 (단위 : 일만원)</p>
                                    <div className="chart_wrap">
                                        <Line
                                            style={{ height: "30rem" }}
                                            data={data}
                                            options={chartOptions}
                                        />
                                    </div>
                                </DashboardWrap>}
                        </div>
                    </div>
                </div>
            </div>
            <ConfirmDialog
                visible={visible}
                text="실적은 최대 3년 전까지 조회 가능합니다."
                onConfirm={() => setVisible(false)}
            />
        </SalesWrap>
    )
}

export default Sales;