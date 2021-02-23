import React from 'react';
import ReactApexChart from 'react-apexcharts'
import {useSelector} from 'react-redux'

export default function  ApexChart() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

  const state = {
      
        series: [{
          name:" ",
          data:[UpdatedData.leaderStatic.sumContacts,
            UpdatedData.leaderStatic.sumPapers,
            UpdatedData.leaderStatic.sumProjects,
            UpdatedData.leaderStatic.sumTasks]
        }],
        options: {
          grid: {
            show: true,
            borderColor: '#90A4AE',
            strokeDashArray: 0,
            position: 'back',
            xaxis: {
                lines: {
                    show: false
                }
            },   
            yaxis: {
                lines: {
                    show: false
                }
            },  
            row: {
                colors: undefined,
                opacity: 0.5
            },  
            column: {
                colors: undefined,
                opacity: 0.5
            },  
            padding: {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            },  
        },
         
            chart: {
            height: 350,
            type: 'bar',
            // events: {
            //   click: function(chart, w, e) {
            //     // console.log(chart, w, e)
            //   }
            // }
          },
          colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
          plotOptions: {
            bar: {
              borderRadius: 6,
              columnWidth: '50%',
              distributed: true,
            }
          },
          labels: ['contacts', 'papers', 'projects ', 'tasks'],
          dataLabels: {
            enabled: false
          },
          legend: {
            show: false
          },
          fillSeriesColor: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
        
          
          xaxis: {
           
            labels: {
              style: {
                //  colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
                fontSize: '12px'
              }
            }
          }
        },
      
      
      };
   
return (
        

  <div id="chart">
<ReactApexChart options={state.options} series={state.series} type="bar" width="420" />
</div>


      );
    }
