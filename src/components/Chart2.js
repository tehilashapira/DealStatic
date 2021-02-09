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
                categories: ['Jan', 'feb', 'marth', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dic'],
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        // color: "#FF1654"
                    },
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
                data: [UpdatedData.papers]
            },
            {
                name: "contacts",
                data: [[UpdatedData.contacts[0], state.op1.xaxis.categories[0]], [UpdatedData.contacts[1], state.op1.xaxis.categories[1], [UpdatedData.contacts[2], state.op1.xaxis.categories[2]],
                [UpdatedData.contacts[3], state.op1.xaxis.categories[3]], [UpdatedData.contacts[4], state.op1.xaxis.categories[4]],
                [UpdatedData.contacts[5], state.op1.xaxis.categories[5]], [UpdatedData.contacts[6], state.op1.xaxis.categories[6]],
                [UpdatedData.contacts[7], state.op1.xaxis.categories[7]], [UpdatedData.contacts[8], state.op1.xaxis.categories[8]],
                [UpdatedData.contacts[8], state.op1.xaxis.categories[8]], [UpdatedData.contacts[9], state.op1.xaxis.categories[9]],
                [UpdatedData.contacts[10], state.op1.xaxis.categories[10]]]]
            },


            {
                name: "projects",
                data: [UpdatedData.projects]
            },
            {
                name: "tasks",
                data: [UpdatedData.tasks]
            }

        ],
        op: {

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
                // data:[{x: "2019-01-03", y: UpdatedData.leaderStatic.sumProjects}, {x: "2019-01-04", y: 18}]
                data: [UpdatedData.leaderStatic.sumContacts,
                UpdatedData.leaderStatic.sumPapers,
                UpdatedData.leaderStatic.sumProjects,
                UpdatedData.leaderStatic.sumTasks]

            },
        ],
        options:
        {

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
            <div className="row" style={{ paddingTop: "5%" }}  >
                <div className="col-sm-4" style={{ marginLeft: "-75px" }}>
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