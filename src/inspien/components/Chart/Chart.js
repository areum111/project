import React from "react";
import { registerables, Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale } from 'chart.js';
import { Line } from 'react-chartjs-2';
import ChartDataLabels from "chartjs-plugin-datalabels";

const Chart = ({ labelName, labels, datas }) => {
    // 차트
    ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ChartDataLabels, ...registerables);

    Tooltip.positioners.myCustomPositioner = function(elements, eventPosition) {
        return {
            x: eventPosition.x,
            y: eventPosition.y
        };
    };

    // 차트
    const data = {
        labels: labels,
        datasets: [
            {
                type: 'line',
                label: labelName,
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
                data: datas,
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
                        innerHtml += '<tr><td><span>' + tooltipModel.dataPoints[0].dataset.label + '</span></td><td>' + tooltipModel.dataPoints[0].formattedValue + 'GB</td></tr>';
                        innerHtml += '<tr><td><span>초과 사용랑</span></td><td>25MB</td></tr>';
                        innerHtml += '<tr><td><span>초과 요금</span></td><td>2,500원</td></tr>';
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
        <div className="line_chart_wrap">
            {datas.length === 0 && <div className="no_data">사용 이력이 없습니다.</div>}
            <Line
                style={{ height: "30rem" }}
                data={data}
                options={chartOptions}
            />
        </div>
    )
}

export default Chart;