import React from 'react';
import ReactApexChart from 'react-apexcharts'
import { useSelector } from 'react-redux'

export default function ApexChart() {
  const UpdatedData = useSelector(state => state.staticDetailsReducer);
  const state = {
    series: [{
      name: " ",
      data: [UpdatedData.leaderStatic.sumContacts,
      UpdatedData.leaderStatic.sumPapers,
      UpdatedData.leaderStatic.sumProjects,
      UpdatedData.leaderStatic.sumTasks]
    }],
    options: {
      xaxis: {
        type: 'category',
        categories: [],
        labels: {
            show: false}
        },
        
      grid: {
        show: true,
        borderColor: '#90A4AE',
        strokeDashArray: 0,
        position: 'back',
        xaxis: {
          lines: {
            show: false
          },
          labels: {
            show: false
        },},
        yaxis: {
          lines: {
            show: false
          },
          
        },
        row: {
          colors: undefined,
          opacity: 0.5
        },
        column: {
          colors: undefined,
          opacity: 0.5
        },
      
      },
      chart: {
        height: 350,
        type: 'bar',
      
      },
      colors: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgba(255, 69, 96, 0.85)'],
      plotOptions: {
        bar: {
          borderRadius: 6,
          columnWidth: '50%',
          distributed: true,
        }
      },
      labels: ['contacts', 'papers', 'projects ', 'tasks'],
      dataLabels: {
        show:false,
        enabled: false
      },
      // ----מקרא מפה למטה
      legend: {
        show: false,
        display: false
      },
      tooltip: {
        enabled: true,
        enabledOnSeries: undefined,
        shared:false,
        followCursor: false,
        intersect: false,
        inverseOrder: false,
        custom: undefined,
        fillSeriesColor: false,
        theme: true,
        style: {
          fontSize: '12px',
          fontFamily: undefined
        },
        onDatasetHover: {
            highlightDataSeries: true,
        },
        x: {
            show: true,
            format: 'dd MMM',
            formatter: undefined,
            
        },
        y: {
            formatter: undefined,
            title: {
                formatter: (seriesName) => seriesName,
            },
        },
        z: {
            formatter: undefined,
            title: 'Size: '
        },
        marker: {
            show: true,
        },
        // items: {
        //    display: flex,
        // },
        fixed: {
            enabled: false,
            position: 'topRight',
            offsetX: 0,
            offsetY: 0,
        },
    }
    
    
  
      // fillSeriesColor: ['rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],
    
    },


  };

  return (


    <div id="chart">
      <ReactApexChart options={state.options} series={state.series} type="bar" width="420" />
    </div>


  );
}