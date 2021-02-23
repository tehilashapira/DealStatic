import React, { useEffect } from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';
import Mdb from './Mdbreact'



export default function TryChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    useEffect(() => {
        debugger
        if (UpdatedData.leaderStatic.contacts)
            document.title = "leaderStatic";
    }, [UpdatedData.leaderStatic.contacts]);

    debugger

    debugger
    const state = {
        option1: {
            chart: {
                background: '#fff',
                type: 'area',
                stacked: false,
                height: 350,
                zoom: {
                    enabled: false
                },
            },
            tooltip: {
                shared: true
            },
            stroke: {
                curve: 'smooth',
                width:1
            },
            dataLabels: {
                enabled: false
            },
            // colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
                    'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            },
            //  fill: {
            //     colors: undefined,
            //     opacity: 0.9,
            //     type: 'gradient',
            //     gradient: {
            //         shade: 'light',
            //         type: "diagonal1",
            //     },
            // },
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
        yaxis: {
            labels: {
                style: {
                    colors: '#8e8da4',
                },
                offsetX: 0,
                formatter: function (val) {
                    return (val / 1000000).toFixed(2);
                },
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false
            }
        },
        // the plase of labels
            // legend: {
            //     horizontalAlign: "left",
            //     offsetX: 40
            // }
        },
       
        series1: [

            {
                name: "contacts",
                data: [UpdatedData.contacts[1], UpdatedData.contacts[2], UpdatedData.contacts[3], UpdatedData.contacts[4], UpdatedData.contacts[5], UpdatedData.contacts[6], UpdatedData.contacts[7], UpdatedData.contacts[8], UpdatedData.contacts[9], UpdatedData.contacts[10], UpdatedData.contacts[11], UpdatedData.contacts[12]]
            },
            {
                name: "papers",
                data: [UpdatedData.papers[1], UpdatedData.papers[2], UpdatedData.papers[3], UpdatedData.papers[4], UpdatedData.papers[5], UpdatedData.papers[6], UpdatedData.papers[7], UpdatedData.papers[8], UpdatedData.papers[9], UpdatedData.papers[10], UpdatedData.papers[11], UpdatedData.papers[12]]
            },

            {
                name: "projects",
                data: [UpdatedData.projects[1], UpdatedData.projects[2], UpdatedData.projects[3], UpdatedData.projects[4], UpdatedData.projects[5], UpdatedData.projects[6], UpdatedData.projects[7], UpdatedData.projects[8], UpdatedData.projects[9], UpdatedData.projects[10], UpdatedData.projects[11], UpdatedData.projects[12]]
            },
            {
                name: "tasks",
                data: [UpdatedData.tasks[1], UpdatedData.tasks[2], UpdatedData.tasks[3], UpdatedData.tasks[4], UpdatedData.tasks[5], UpdatedData.tasks[6], UpdatedData.tasks[7], UpdatedData.tasks[8], UpdatedData.tasks[9], UpdatedData.tasks[10], UpdatedData.tasks[11], UpdatedData.tasks[12]]
            }

        ],
        option2: {

            //%%%%%%
            dataLabels: {
                enabled: true
            },

            labels: ['contacts', 'papers', 'project', 'tasks'],
            //change color
            colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
            //Spacing
            stroke: {
                width: [2, 7, 2],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
        },
        series2: [UpdatedData.leaderStatic.sumContacts,
        UpdatedData.leaderStatic.sumPapers,
        UpdatedData.leaderStatic.sumProjects,
        UpdatedData.leaderStatic.sumTasks],

        series: [{
            name: " ",
            data: [UpdatedData.leaderStatic.sumContacts,
            UpdatedData.leaderStatic.sumPapers,
            UpdatedData.leaderStatic.sumProjects,
            UpdatedData.leaderStatic.sumTasks],
        }],
        options:
        {
            labels: ['contacts', 'papers', 'projects ', 'tasks'],

            chart: {
                type: 'line',
                zoom: {
                    enabled: false
                },

                backgroundColor: [
                    'rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'
                ],
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
        <>
            {UpdatedData.isClicked === 0 ?
                <div className="container" >
                    <div className="row" style={{ paddingTop: "5%" }}  >
                        <div className="col-sm-4" style={{ marginLeft: "-70px" }}>
                            {/* <ReactApexChart options={state.options} series={state.series} type="bar" width="420" /> */}
                            <Mdb ></Mdb>
                        </div>
                        <div className="col-md-2" >
                            <Chart options={state.option2} series={state.series2} type="donut" width="460" height="250" />
                        </div>

                        <div className="col-sm-3" style={{ marginLeft: "270px" }}>
                            < ReactApexChart options={state.option1} series={state.series1} type="area" width="400" height="270" />
                        </div>
                    </div>
                </div>
                :
                <div className="container" >

                    <div className="row" style={{ paddingTop: "5%" }}  >
                        <div className="col-sm-4" style={{ marginLeft: "80px" }} >
                            <Mdb ></Mdb>
                            {/* <div className="col-sm-7" style={{ marginLeft: "50px" }} > */}
                            {/* <ReactApexChart options={state.options} series={state.series} type="bar" width="420" /> */}
                        </div>
                        {/* <div className="col-md-3" style={{ marginLeft: "-90px" }}> */}
                        <div className="col-md-3" style={{ marginLeft: "120px" }}>
                            <Chart options={state.option2} series={state.series2} type="donut" width="460" height="250" />
                        </div>
                    </div>
                </div>
            }
        </>
    );
}