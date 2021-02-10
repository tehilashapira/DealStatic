
import React from 'react';
import ReactApexChart from 'react-apexcharts'
import Chart from "react-apexcharts";
import { useSelector } from 'react-redux';



export default function ApexChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

   const state = {

        series: [{
            name: "papers",
            // data:[UpdatedData.papers]
            data: [[UpdatedData.papers[1],Jan],[UpdatedData.papers[2],jjj],
            [UpdatedData.papers[3],hhh], [UpdatedData.papers[4],ppp],[UpdatedData.papers[5],vvv],
            [UpdatedData.papers[6],lll],[UpdatedData.papers[7],mmm],
          [  UpdatedData.papers[8],bbb],[UpdatedData.papers[9],zzz],[UpdatedData.papers[10],ppp],
           [ UpdatedData.papers[11],aaa],[UpdatedData.papers[12]],ddd]
        },
        {
            name: "projects",
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'tasks',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        },
        {
            name: 'contacts',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
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
                categories: ['Jan', 'feb', 'marth', 'apr', 'may', 'jun', 'jul', 'aug','sep', 'oct','nov','dic'],
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





    return (
        <div id="chart">
            <ReactApexChart options={state.options} series={state.series} type="line" height={350} />
        </div>
    )

}