import React from "react";
import { DashboardWrap } from 'styles/dashboard.styled';
import SelectBox from "components/SelectBox/SelectBox";
import { registerables, Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";
import NotiImg from "images/ico/ico_noti_bg.svg";

const Dashboard8 = () => {
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

    Tooltip.positioners.myCustomPositioner = function(elements, eventPosition) {
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
                borderColor: "#00BF85",
                borderWidth: 2,
                radius: 5,
                hoverRadius: 5,
                pointBackgroundColor: "#00BF85",
                pointBorderColor: "#00BF85",
                pointBorderWidth: 2,
                pointHoverBorderWidth: 2,
                pointHoverBorderColor: "#00BF85",
                pointHoverBackgroundColor: "#00BF85",
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
                enabled: false,
                position: 'myCustomPositioner',
                external: function(context) {
                    // Tooltip Element
                    let tooltipEl = document.getElementById('chartjs-tooltip');

                    // Create element on first render
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<table></table>';
                        document.body.appendChild(tooltipEl);
                    }

                    // Hide if no tooltip
                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = 0;
                        return;
                    }

                    // Set caret Position
                    tooltipEl.classList.remove('above', 'below', 'no-transform');
                    if (tooltipModel.yAlign) {
                        tooltipEl.classList.add(tooltipModel.yAlign);
                    } else {
                        tooltipEl.classList.add('no-transform');
                    }

                    // Set Text
                    if (tooltipModel.body) {
                        let innerHtml = '<tbody>';
                        innerHtml += '<tr><td><span>' + tooltipModel.dataPoints[0].dataset.label + '</span></td><td>' + tooltipModel.dataPoints[0].formattedValue + 'MB</td></tr>';
                        innerHtml += '</tbody>';

                        let tableRoot = tooltipEl.querySelector('table');
                        tableRoot.innerHTML = innerHtml;
                    }

                    const position = context.chart.canvas.getBoundingClientRect();

                    // Display, position, and set styles for font
                    tooltipEl.style.opacity = 1;
                    tooltipEl.style.position = 'absolute';
                    //오른쪽 끝에 있는 툴팁 왼쪽에 뜨도록 수정
                    if((position.left + window.pageXOffset + tooltipModel.caretX) > 1000){
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 220 + 'px';
                        tooltipEl.classList = 'left_tooltip';
                    }else{
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 30 + 'px';
                        tooltipEl.classList = '';
                    }
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 30 + 'px';
                    tooltipEl.style.pointerEvents = 'none';
                }
            }
        },
    }

    return (
        <DashboardWrap>
            <div className="inner">
                <div className="title_area">
                    <h2>대시보드</h2>
                    <span className="ico_user_type">고객사</span>
                </div>
                <div className="content">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>상품 이용 이력</h3>
                            <span>전체</span>
                        </div>
                        <div className="outline_box">
                            <div className="cnt_box">
                                <p className="title">이용 대기</p>
                                <p className="cnt">10</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">이용중</p>
                                <p className="cnt"><strong>30</strong></p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">이용중단</p>
                                <p className="cnt">100</p>
                            </div>
                            <div className="cnt_box">
                                <p className="title">이용해지</p>
                                <p className="cnt"><span className="red_txt">3</span></p>
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
                <div className="content full">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>월별 사용량</h3>
                            <span>(단위 MB)</span>
                            <SelectBox className="select" options={options2} value={options2[0]} />
                        </div>
                        <div className="outline_box">
                            <div className="noti_wrap">
                                <img src={NotiImg} alt="" />
                                <p className="main_txt">서비스 준비 중입니다.</p>
                                <p className="sub_txt">빠른 시일 안에 서비스 할 수 있도록 하겠습니다. </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content full">
                    <div className="cont_box">
                        <div className="cont_title">
                            <h3>월별 저장량</h3>
                            <span>(단위 GB)</span>
                            <SelectBox className="select" options={options2} value={options2[0]} />
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

export default Dashboard8;
