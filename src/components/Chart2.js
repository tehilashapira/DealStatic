import React from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function TryChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const state = {
        op1: {
            chart: {
                height: 350,
                type: "line",
                stacked: false
            },
            dataLabels: {
                enabled: false
            },
            colors: ["#FF1654", "#247BA0"],

            stroke: {
                width: [4, 4]
            },
            plotOptions: {
                bar: {
                    columnWidth: "20%"
                }
            },
            xaxis: {
                categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
            },
            yaxis: [
                {
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#FF1654"
                    },
                    labels: {
                        style: {
                            colors: "#FF1654"
                        }
                    },
                    title: {
                        text: "contacs",
                        style: {
                            color: "#FF1654"
                        }
                    }
                },
                {
                    opposite: true,
                    axisTicks: {
                        show: true
                    },
                    axisBorder: {
                        show: true,
                        color: "#247BA0"
                    },
                    labels: {
                        style: {
                            colors: "#247BA0"
                        }
                    },
                    title: {
                        text: "papers",
                        style: {
                            color: "#247BA0"
                        }
                    }
                }
            ],
            tooltip: {
                shared: false,
                intersect: true,
                x: {
                    show: false
                }
            },
            legend: {
                horizontalAlign: "left",
                offsetX: 40
            }
        },
        series1: [
            {
                name: "contacts",
                data: [UpdatedData.leaderStatic.sumContacts]
            },
            {
                name: "papers",
                data: [UpdatedData.leaderStatic.sumPapers]
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
                data: [UpdatedData.leaderStatic.sumContacts,
                UpdatedData.leaderStatic.sumPapers,
                UpdatedData.leaderStatic.sumProjects,
                UpdatedData.leaderStatic.sumTasks],
            },
        ],

        options:
        {
            colors: [function ({ value  }) {
                if (value ==38) {
                    return 'rgb(247, 181, 0)'
                } 
              else  if(value==11) {
                    return  'rgb(1, 220, 209)'
                }
               else if(value==20) {
                    return 'rgb(103, 114, 222)'
                }
                else
                return 'rgb(253, 81, 219)'

            }],
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
            <div className="row"  >
                <div className="col-md-4"  >
                    <ReactApexChart options={state.options} series={state.series} type="bar" width="420" />
                </div>
                <div className="col-md-4"  >
                {/* < ReactApexChart options={state.op1} series={state.series1} type="line" width="400"/> */}
                </div>
                <div className="col-md-1" >
                    <Chart options={state.op} series={state.serie} type="donut" width="420" height="240" />

                </div>
            </div>
        </div>

    );
}