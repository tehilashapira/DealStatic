import React from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function TryChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
  
    const state = {
        op1: {
            chart: {
                zoom: { enabled: false },
                height: 350,
                type: "line",
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],

            stroke: {
                width: [5, 5, 5, 5]
            },
            xaxis: {
                categories: ['Jan', 'feb', 'marth', 'apr', 'may', 'jun', 'jul', 'aug','sep', 'oct','nov','dic'],
            },
            yaxis: [
                {
                    // axisTicks: {
                    //     show: true
                    // },
                    // axisBorder: {
                    //     show: true,
                    //     color: "#FF1654"
                    // },
                    // labels: {
                    //     style: {
                    //         colors: "#FF1654"
                    //     }
                    // },

                },

            ],
            //the plase of labels
            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        },
        series1: [
            {
                name: "papers",
                data: [UpdatedData.chartData.papers]
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
        op: {
     
            indexLabel: "{name}: {y}",
            dataPoints: [
                { name: "Unsatisfied", y: 5 },
                { name: "Very Unsatisfied", y: 31 },
                { name: "Very Satisfied", y: 40 },
                { name: "Satisfied", y: 17 },
                { name: "Neutral", y: 7 },
            ],
                
            //%%%%%%
            dataLabels: {
                enabled: true
            },
            //con pap pro tasks
            labels: ['contacts', 'papers', 'project', 'tasks'],
            //change color
            colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            //Spacing
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
        },
        serie: [UpdatedData.leaderStatic.sumContacts,
        UpdatedData.leaderStatic.sumPapers,
        UpdatedData.leaderStatic.sumProjects,
        UpdatedData.leaderStatic.sumTasks],
        series: [
            {
                // leaderStatic:{sumProjects:0,sumTasks:0,sumPapers:0,sumContacts:0},
                name: "",
                data: [UpdatedData.leaderStatic.sumContacts,
                UpdatedData.leaderStatic.sumPapers,
                UpdatedData.leaderStatic.sumProjects,
                UpdatedData.leaderStatic.sumTasks],
            },
        ],
        options:
        {
            // colors: [function ({ value }) {
            //     if (value == 38) {
            //         return 'rgb(247, 181, 0)'
            //     }
            //     else if (value == 11) {
            //         return 'rgb(1, 220, 209)'
            //     }
            //     else if (value == 20) {
            //         return 'rgb(103, 114, 222)'
            //     }
            //     else
            //         return 'rgb(253, 81, 219)'
            // }],
            chart: {
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
            legend: {
                tooltipHoverFormatter: function (val, opts) {
                    return val + ' - ' + opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] + ''
                }
            },
            xaxis: {

                categories: [' contacts', ' papers', 'projects ', 'tasks']
            },
            tooltip: {
                y: [
                    {
                        title: {
                            formatter: function (val) {
                                return val;
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
                ]
            },
        },
    }
    return (
        <div className="container" >
            <div className="row" style={{paddingTop:"5%"}}  >
                <div className="col-sm-4" style={{ marginLeft: "-75px"}}>
                    <ReactApexChart options={state.options} series={state.series} type="bar" width="420" />
                </div><div className="col-md-5" >
                    <Chart options={state.op} series={state.serie} type="donut" width="460" height="250" />
                </div>
                <div className="col-md-3">
                    < ReactApexChart options={state.op1} series={state.series1} type="line" width="400" height="270" />
                </div>

            </div>
        </div>
    );
}