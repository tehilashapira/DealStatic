
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
            // yaxisname: "Deforested Area{br}(in Hectares)",
            // decimals: "1",
            // theme: "fusion"
        },
        data: [
            // colors: [' rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'],

            {
                label: "contacts",
                value: UpdatedData.leaderStatic.sumContacts,
                "color": ' rgb(247, 181, 0)'
            },
            {
                label: "papers",
                value: UpdatedData.leaderStatic.sumPapers,
                "color": 'rgb(1, 220, 209)'
            },
            {
                label: "projects",
                value: UpdatedData.leaderStatic.sumProjects,
                "color": rgb(103, 114, 222)

            },
            {
                label: "tasks",
                value: UpdatedData.leaderStatic.sumTasks,
                "color": "#9b59b6" 

            }


        ]
    };

    return (
        <ReactFusioncharts
            type="column3d"
            width="40%"
            height="50%"
            dataFormat="JSON"
            dataSource={dataSource}
        />
    );
}
