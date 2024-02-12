import React from "react";
import { DashboardWrap } from 'styles/dashboard.styled';
import SelectBox from "components/SelectBox/SelectBox";
import { registerables, Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Doughnut, Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

const Dashboard1 = () => {
    const options = [
        { value: 1, label: "6월" },
        { value: 2, label: "7월" }
    ]

    const options2 = [
        { value: 1, label: "2022년" },
        { value: 2, label: "2023년" }
    ]

    // 차트
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels, ...registerables);

    // 가입 현황 차트
    const data = {
        labels: ['인스피언 가입자', '파트너 가입자', '고객 가입자'],
        datasets: [
            {
                data: [100, 30, 25],
                backgroundColor: [
                    '#00BF85',
                    '#9963F7',
                    '#4F63E3',
                ],
                borderWidth: 0,
                cutout: "75%",
            },
        ],
    };
    const chartOptions = {
        plugins: {
            legend: {
                display: false,
            },
            datalabels: {
                display: false
            }
        }
    }

    // 구매 순위
    const purchaseLankData = [
        {
            id: "1",
            title: "SK planet",
            price : "123,456,789￦"
        },
        {
            id : "2",
            title: "LOEN Entertainmet",
            price : "23,456,789￦"
        },
        {
            id : "3",
            title: "삼성코닝정밀소재",
            price : "23,456,789￦"
        },
        {
            id : "4",
            title: "현대자동차그룹",
            price : "3,456,789￦"
        },
        {
            id : "5",
            title: "웅진코웨이",
            price : "456,789￦"
        },
        {
            id : "6",
            title: "한국 스마트카드",
            price : "456,789￦"
        },
        {
            id : "7",
            title: "파라다이스 호텔",
            price : "456,789￦"
        },
        {
            id : "8",
            title: "한국철도공사",
            price : "56,789￦"
        },
        {
            id : "9",
            title: "한국전력공사",
            price : "6,789￦"
        },
        {
            id : "10",
            title: "웅진코웨이",
            price : "6,789￦"
        }
    ]

    // 판매 순위
    const salesLankData = [
        {
            id : "1",
            title: " EDI 구축 인건비",
            price : "123,456,789￦"
        },
        {
            id : "2",
            title: "기본 데이터",
            price : "23,456,789￦"
        },
        {
            id : "3",
            title: "서비스 구축 컨설팅",
            price : "23,456,789￦"
        },
        {
            id : "4",
            title: "유통사 주문 수집",
            price : "3,456,789￦"
        },
        {
            id : "5",
            title: "EDI 구축 인건비, 기본 데이터 서비스  컨설팅 유",
            price : "456,789￦"
        },
        {
            id : "6",
            title: "유통사 주문 수집",
            price : "456,789￦"
        },
        {
            id : "7",
            title: "서비스 구축 컨설팅",
            price : "456,789￦"
        },
        {
            id : "8",
            title: "기본 데이터",
            price : "56,789￦"
        },
        {
            id : "9",
            title: "구축 인건비",
            price : "6,789￦"
        },
        {
            id : "10",
            title: "기본 데이터",
            price : "6,789￦"
        }
    ]


    // 판매실적 차트
    const data2 = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
            {
                type: 'line',
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
                data: [270, 85, 950, 300, 240, 520, 700, 670, 250, 220, 490, 210]
            },
        ],
    };
    const chartOptions2 = {
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
                    stepSize: 250,
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
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            datalabels: {
                anchor: "start",
                align: "bottom",
                font: {
                    family: 'Noto Sans KR',
                    size: "12",
                    weight: "500"
                },
            },
        },
    }

    return (
        <DashboardWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>대시보드</h2>
                    <span className="ico_user_type">인스피언</span>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>상품 판매 현황</h3>
                            <span>전체</span>
                        </div>
                        <div className="outline_box">
                            <div className="cnt_box">
                                <p className="title">판매사 미등록</p>
                                <p className="cnt">125</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">판매중</p>
                                <p className="cnt"><strong>20</strong></p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">판매 중지</p>
                                <p className="cnt"><span className="red_txt">100</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>가입 승인 현황</h3>
                            <span>전체</span>
                        </div>
                        <div className="outline_box">
                            <div className="cnt_box">
                                <p className="title">가입완료</p>
                                <p className="cnt">10</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">승인대기</p>
                                <p className="cnt">30</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">승인완료</p>
                                <p className="cnt"><strong>100</strong></p>
                            </div>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>Q&A 현황</h3>
                            <SelectBox className="select" options={options} value={options[0]} />
                        </div>
                        <div className="outline_box">
                            <div className="cnt_box">
                                <p className="title">문의 접수</p>
                                <p className="cnt">10</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">처리완료</p>
                                <p className="cnt"><strong>100</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>가입 현황</h3>
                            <span>2023년 2분기</span>
                        </div>
                        <div className="outline_box chart_box">
                            <div className="chart_wrap">
                                <div>
                                    <Doughnut
                                        data={data}
                                        options={chartOptions}
                                    />
                                    <div className="total_cnt">
                                        <p>Total</p>
                                        <p>58</p>
                                    </div>
                                </div>
                            </div>
                            <div className="chart_label">
                                <p>인스피언 가입자<br />100</p>
                                <p className="partner">파트너 가입자<br />30</p>
                                <p className="customer">고객 가입자<br />25</p>
                            </div>
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>구매 순위</h3>
                            <SelectBox className="select" options={options} value={options[0]} />
                        </div>
                        <div className="outline_box lank_box">
                            {purchaseLankData.length > 0 && purchaseLankData.map((el, idx) => {
                                return (
                                    <div className="lank" key={el.id}>
                                        <p className="left">
                                            <span className="num">{idx + 1}</span>
                                            <span className="title">{el.title}</span>
                                        </p>
                                        <p className="price">{el.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>판매 순위</h3>
                            <SelectBox className="select" options={options} value={options[0]} />
                        </div>
                        <div className="outline_box lank_box">
                            {salesLankData.length > 0 && salesLankData.map((el, idx) => {
                                return (
                                    <div className="lank" key={el.id}>
                                        <p className="left">
                                            <span className="num">{idx + 1}</span>
                                            <span className="title">{el.title}</span>
                                        </p>
                                        <p className="price">{el.price}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
                <div className="content full">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>판매실적</h3>
                            <span>(단위 일만원)</span>
                            <SelectBox className="select" options={options2} value={options2[0]} />
                        </div>
                        <div className="outline_box">
                            <Line
                                style={{ height: "30rem" }}
                                data={data2}
                                options={chartOptions2}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrap>
    )
};

export default Dashboard1;