import React from "react";
import { Bar } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";
import { useSelector } from "react-redux"

export default function ChartsPage() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

    const state = {
        dataBar: {
            labels: ["contact", "papers", "projects", "tasks"],
            datasets: [
                {
                    data: [
                        UpdatedData.leaderStatic.sumContacts,
                        UpdatedData.leaderStatic.sumPapers,
                        UpdatedData.leaderStatic.sumProjects,
                        UpdatedData.leaderStatic.sumTasks,
                    ],
                    backgroundColor: [
                        'rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'
                    ],
                    // borderWidth: 1,
                    // borderColor: [
                    //     'rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'
                    // ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            title: {
                display: false,},
            // maintainAspectRatio: true,
            scales: {
                height:800,
                xAxes: [
                    {
                  
                        

                    }
                ],
                yAxes: [
                    {

                    }
                ]
            }
        }
    }



    return (
        <div>
            <Bar data={state.dataBar} options={state.barChartOptions}  width="800" height="700" /></div>

            
     
            
    );
}
