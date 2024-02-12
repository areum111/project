import React from "react";
import { DashboardWrap } from 'styles/dashboard.styled';
import SelectBox from "components/SelectBox/SelectBox";
import { registerables, Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

const Dashboard4 = () => {
    const options = [
        { value: 1, label: "2022년" },
        { value: 2, label: "2023년" }
    ]

    // 차트
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels, ...registerables);

    // 판매실적 차트
    const data = {
        labels: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        datasets: [
            {
                type: 'line',
                borderColor: "#9963F7",
                borderWidth: 2,
                radius: 5,
                hoverRadius: 5,
                pointBackgroundColor: "#9963F7",
                pointBorderColor: "#9963F7",
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2,
                pointHoverBorderColor: "#9963F7",
                pointHoverBackgroundColor: "#9963F7",
                data: [270, 85, 950, 300, 240, 520, 700, 670, 250, 220, 490, 210]
            },
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
                    <span className="ico_user_type">파트너사</span>
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
                                <p className="title">승인대기</p>
                                <p className="cnt">30</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">승인완료</p>
                                <p className="cnt"><strong>100</strong></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content full">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>판매실적</h3>
                            <span>(단위 일만원)</span>
                            <SelectBox className="select" options={options} value={options[0]} />
                        </div>
                        <div className="outline_box">
                            <Line
                                style={{ height: "30rem" }}
                                data={data}
                                options={chartOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </DashboardWrap>
    )
};

export default Dashboard4;