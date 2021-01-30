import React from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';

export default function TryChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

    const state = {
        op: {
            //%%%%%%
            dataLabels: {
                enabled: true
            },
            labels: ['project', 'papers', 'contacts', 'tasks'],
            //change color
            colors: ['rgb(103, 114, 222)', 'rgb(1, 220, 209)', ' rgb(247, 181, 0)', 'rgb(253, 81, 219)'],
            //Spacing
            stroke: {
                width: [5, 7, 5],
                curve: 'straight',
                dashArray: [0, 8, 5]
            },
        },
         
     
        serie: [UpdatedData.leaderStatic.sumProjects,
            UpdatedData.leaderStatic.sumPapers,
            UpdatedData.leaderStatic.sumContacts,
            UpdatedData.leaderStatic.sumTasks],
        series: [
            {
                // leaderStatic:{sumProjects:0,sumTasks:0,sumPapers:0,sumContacts:0},
                name: "",
                data: [UpdatedData.leaderStatic.sumProjects,
                UpdatedData.leaderStatic.sumPapers,
                UpdatedData.leaderStatic.sumContacts,
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
            markers: {
                size: 0,
                hover: {
                    sizeOffset: 6
                }
            },
            xaxis: {
                categories: [' projects', ' papers', ' contacts', 'tasks']
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
            colors: ['rgb(103, 114, 222)', 'rgb(1, 220, 209)', ' rgb(247, 181, 0)', 'rgb(253, 81, 219)'],

        },
        
    }
    return (
        <div className="container" >
            <div className="row">
                <div className="col-7">
                 
                    <ReactApexChart options={state.options} series={state.series} type="bar" width="500" />
                </div>
                <div className="col-5" style={{paddingTop:"3%"}}>
                    
                    <Chart options={state.op} series={state.serie} type="donut"  width="470" height="270" />
                </div>
            </div>
            <div className="row">
            < ReactApexChart options={state.options} series={state.series} type="line"  width="470" height="270"  />
            </div>
        </div>

    );
}