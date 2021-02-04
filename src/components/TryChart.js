import React from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
export default function ApexChart(props) {


    const UpdatedData = useSelector(state => state.staticDetailsReducer);

    const state = {

        series: [{
            name: "contacts",
            data: [UpdatedData.leaderStatic.sumContacts]
        },
        {
            name: "papers",
            data: [UpdatedData.leaderStatic.sumPapers]
        },
        {
            name: "projects",
            data: [UpdatedData.leaderStatic.sumProjects]
        },
        {
            name: "tasks",
            data: [UpdatedData.leaderStatic.sumTasks]
        }

        ],
        options: {
            chart: {
                height: 350,
                type: 'line',
                zoom: {
                    enabled: false
                },
            },
            dataLabels: {
                enabled: false
            },
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
            title: {
                text: 'Page Statistics',
                align: 'left'
            },
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                    '10 Jan', '11 Jan', '12 Jan'
                ],
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val + " (mins)"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val + " per session"
                            }
                        }
                    },
                    {
                        title: {
                            formatter: function (val) {
                                return val;
                            }
                        }
                    }
                ]
            },
            grid: {
                borderColor: '#f1f1f1',
            }
        },


    };





    return (<div id="chart">
        <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
    </div>
    )

}