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

            // stroke: {
            //     width: [5, 5, 5, 5]
            // },
            stroke: {
                curve: "straight"
              },
            xaxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 
                'Jun', 'jul', 'Aug','Sep', 'Oct','Nov','Dec'],
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
                data:[UpdatedData.papers[1],UpdatedData.papers[2],UpdatedData.papers[3],UpdatedData.papers[4],UpdatedData.papers[5],UpdatedData.papers[6],UpdatedData.papers[7],UpdatedData.papers[8],UpdatedData.papers[0],UpdatedData.papers[9],UpdatedData.papers[10],UpdatedData.papers[11],UpdatedData.papers[12]]
            },
            {
                 name: "contacts",
                 data:[UpdatedData.contacts[1],UpdatedData.contacts[2],UpdatedData.contacts[3],UpdatedData.contacts[4],UpdatedData.contacts[5],UpdatedData.contacts[6],UpdatedData.contacts[7],UpdatedData.contacts[8],UpdatedData.contacts[0],UpdatedData.contacts[9],UpdatedData.contacts[10],UpdatedData.contacts[11],UpdatedData.contacts[12]]
            },
            {
                name: "projects",
                data: [UpdatedData.projects[1],UpdatedData.projects[2],UpdatedData.projects[3],UpdatedData.projects[4],UpdatedData.projects[5],UpdatedData.projects[6],UpdatedData.projects[7],UpdatedData.projects[8],UpdatedData.projects[0],UpdatedData.projects[9],UpdatedData.projects[10],UpdatedData.projects[11],UpdatedData.projects[12]]
            },
            {
                name: "tasks",
                data: [UpdatedData.tasks[1],UpdatedData.tasks[2],UpdatedData.tasks[3],UpdatedData.tasks[4],UpdatedData.tasks[5],UpdatedData.tasks[6],UpdatedData.tasks[7],UpdatedData.tasks[8],UpdatedData.tasks[0],UpdatedData.tasks[9],UpdatedData.tasks[10],UpdatedData.tasks[11],UpdatedData.tasks[12]]
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
            backgroundColor:['red','blue','red','blue'],
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