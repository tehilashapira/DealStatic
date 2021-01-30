import React, { Component, useState } from "react";
import {useSelector} from 'react-redux'
import Chart from "react-apexcharts";



export function Chart1(props) {
  const UpdatedData = useSelector(state => state.staticDetailsReducer);
  const [options, setOptions] = useState({
    chart: {
      id: "basic-bar"
    },
   xaxis: {
      categories: ['sumContacts','sumPapers','sumProjects','sumTasks']
     }
    
  })

  const [series,setSeries]=useState( [{
    name: "Statistics",
    data:[UpdatedData.leaderStatic.sumContacts, UpdatedData.leaderStatic.sumPapers, UpdatedData.leaderStatic.sumProjects,UpdatedData.leaderStatic.sumTasks]
}  
])


  return (
    <div className="app">
      <div className="row">
        <div className="mixed-chart">
          <Chart
            options={options}
            series={series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
}

export function Donut (props){
  const UpdatedData = useSelector(state => state.staticDetailsReducer);
  const [options,setOptions]=useState({})
  
  const [series,setSeries]=useState( [{
        name: "Statistics",
        data:[UpdatedData.leaderStatic.sumContacts, UpdatedData.leaderStatic.sumPapers, UpdatedData.leaderStatic.sumProjects,UpdatedData.leaderStatic.sumTasks]
    }  
  ])
  // const [labels,setLabels]=useState(['contact', 'project', 'C', 'D', 'E'])
  return (
    <div className="donut">
      <Chart options={options} 
      series={series} 
      type="donut"
       width="380" />
    </div>
  );
}
