
import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { useSelector } from 'react-redux'

// Resolves charts dependancy
charts(FusionCharts);

export default function MyComponent() {
    // colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],

    const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
        const hex = x.toString(16)
        return hex.length === 1 ? '0' + hex : hex
      }).join('')
      debugger
      console.log(rgbToHex(247, 181, 0)); // '#f7b500'
      console.log(rgbToHex(1, 220, 209)); // "#01dcd1"
      console.log(rgbToHex(103, 114, 222)); // "#6772de"
      console.log(rgbToHex(253, 81, 219)); // "#fd51db"
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const dataSource = {
        type: 'column3d',
        renderAt: 'chart-container',
        dataFormat: 'json',
       
        chart: {
            caption: "",
            subcaption: "",
        
            // yaxisname: "Deforested Area{br}(in Hectares)",
            // decimals: "1",

        },
        data: [
            {
                label: "contacts",
                value: UpdatedData.leaderStatic.sumContacts,
                "color":'#f7b500',
                
            },
            {
                label: "papers",
                value: UpdatedData.leaderStatic.sumPapers,
                "color": "#01dcd1"
            },
            {
                label: "projects",
                value: UpdatedData.leaderStatic.sumProjects,
                "color":"#6772de"
    

            },
            {
                label: "tasks",
                value: UpdatedData.leaderStatic.sumTasks,
                "color":"#fd51db"

            }


        ]
    };

    return (
        <ReactFusioncharts
            type="column3d"
            width="40%"
            height="50%"
            // dataFormat="JSON"
            dataSource={dataSource}
        />
    );
}
