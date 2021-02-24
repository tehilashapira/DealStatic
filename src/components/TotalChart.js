import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

export default function ApexChart() {
  
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    debugger
    const  sumAll=(UpdatedData.leaderStatic.sumContacts+
        UpdatedData.leaderStatic.sumPapers+
        UpdatedData.leaderStatic.sumProjects+
        UpdatedData.leaderStatic.sumTasks)
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
                        
                        value: {
                            show: true,
                            fontSize: '14px',
                            fontFamily: undefined,
                            fontWeight: 400,
                            color: undefined,
                            offsetY: 16,
                            formatter: function (val) {
                              return val 
                            }
                          },
                          total: {
                            show: true,
                            label: 'Total',
                            formatter:function (w) {
                                return w.globals.seriesTotals.reduce((a, b) => {
                                  return a + b
                                }, 0)
                              }
                            
                        },
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