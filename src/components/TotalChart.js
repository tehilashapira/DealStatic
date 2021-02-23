import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

export default function ApexChart() {

    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const state = {
        series: [UpdatedData.leaderStatic.sumContacts,
        UpdatedData.leaderStatic.sumPapers,
        UpdatedData.leaderStatic.sumProjects,
        UpdatedData.leaderStatic.sumTasks],
        options: {
            chart: {
                height: 350,
                type: 'radialBar',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        // total: {
                        //     show: true,
                        //     label: 'Total',
                        //     formatter: function (w) {
                        //         // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
                        //         return 249
                        //     }
                        // }
                    }
                }
            },
            labels: ['contacts', 'papers', 'projects ', 'tasks'],
        },


    };

    return (


        <div className="col-md-2" id="chart">
            <ReactApexChart options={state.options} series={state.series} type="radialBar" height={270} width={270} />
        </div>
    )
}