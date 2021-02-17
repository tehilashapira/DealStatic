
import React from "react";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import { useSelector } from 'react-redux'

// Resolves charts dependancy
charts(FusionCharts);

export default function MyComponent() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    const dataSource = {
        chart: {
            caption: "",
            subcaption: "",
        
            "bgColor": "#fff",
            "bgratio": "0,0",
            "bgAlpha": "0,0",
            "bgAngle": "0"
            // yaxisname: "Deforested Area{br}(in Hectares)",
            // decimals: "1",
            // theme: "fusion"
        },
        data: [
            {
                label: "contacts",
                value: UpdatedData.leaderStatic.sumContacts,
                "color":'#ffc107',
                "patternBgColor": "#1122ee"
            },
            {
                label: "papers",
                value: UpdatedData.leaderStatic.sumPapers,
                "color": '#20c997'
            },
            {
                label: "projects",
                value: UpdatedData.leaderStatic.sumProjects,
                "color": '#6610f2'
    

            },
            {
                label: "tasks",
                value: UpdatedData.leaderStatic.sumTasks,
                "color": '#e83e8c'

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
