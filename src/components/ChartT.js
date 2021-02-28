import React from 'react';
import moment from 'moment';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

export default function ApexChart() {
  const UpdatedData = useSelector(state => state.staticDetailsReducer);



  const state = {
    series: [

      {
        name: "",
        data: [UpdatedData.contacts[1], UpdatedData.contacts[2], UpdatedData.contacts[3], UpdatedData.contacts[4], UpdatedData.contacts[5], UpdatedData.contacts[6], UpdatedData.contacts[7], UpdatedData.contacts[8], UpdatedData.contacts[9], UpdatedData.contacts[10], UpdatedData.contacts[11], UpdatedData.contacts[12]]
      },
      {
        name: "",
        data: [UpdatedData.papers[1], UpdatedData.papers[2], UpdatedData.papers[3], UpdatedData.papers[4], UpdatedData.papers[5], UpdatedData.papers[6], UpdatedData.papers[7], UpdatedData.papers[8], UpdatedData.papers[9], UpdatedData.papers[10], UpdatedData.papers[11], UpdatedData.papers[12]]
      },

      {
        name: "",
        data: [UpdatedData.projects[1], UpdatedData.projects[2], UpdatedData.projects[3], UpdatedData.projects[4], UpdatedData.projects[5], UpdatedData.projects[6], UpdatedData.projects[7], UpdatedData.projects[8], UpdatedData.projects[9], UpdatedData.projects[10], UpdatedData.projects[11], UpdatedData.projects[12]]
      },
      {
        name: "",
        data: [UpdatedData.tasks[1], UpdatedData.tasks[2], UpdatedData.tasks[3], UpdatedData.tasks[4], UpdatedData.tasks[5], UpdatedData.tasks[6], UpdatedData.tasks[7], UpdatedData.tasks[8], UpdatedData.tasks[9], UpdatedData.tasks[10], UpdatedData.tasks[11], UpdatedData.tasks[12]]
      }

    ],
    options: {
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
            show: false}
        },
      chart: {
        background: '#f8f9fa',
        zoom: { enabled: false },
        height: 350,
        type: "line",
        stacked: false,
        toolbar: {
          show: false
        }
      },
      dataLabels: {
        enabled: false
      },
      // colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
      grid: {
        show: false,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          }
        },
      },
      stroke: {
        curve: 'smooth',
        width: 3,

        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 0,
          position: 'back',
         
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
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May',
          'Jun', 'jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          labels: {
            show: false}
      },
      labels: ['contacts', 'papers', 'projects ', 'tasks'],
      legend: {

      },
    },
  };
  return (
    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="line" width={420} />
    </div>
  );
}
