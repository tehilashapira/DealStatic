import React from "react";
import { Bar } from "react-chartjs-2";
// import { MDBContainer } from "mdbreact";
import {useSelector} from "react-redux"

export default function ChartsPage() {
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

    const state = {
        dataBar: {
            labels: ["contact","papers","projects","tasks"],
            datasets: [
                {
                    label: "% of Votes",
                    data: [
                        UpdatedData.leaderStatic.sumContacts,
                          
            
                   
                        UpdatedData.leaderStatic.sumPapers,
            UpdatedData.leaderStatic.sumProjects,
                        
            
                       UpdatedData.leaderStatic.sumTasks,
   
            
                    
            
                    ],
                    backgroundColor: [
                        'rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'

                    ],
                    borderWidth: 2,
                    borderColor: [

            'rgb(247, 181, 0)', 'rgb(1, 220, 209)', 'rgb(103, 114, 222)', 'rgb(253, 81, 219)'

                      
                       
                    ]
                }
            ]
        },
        barChartOptions: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                xAxes: [
                    {
                        barPercentage: 1,
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        }
                    }
                ],
                yAxes: [
                    {
                        gridLines: {
                            display: true,
                            color: "rgba(0, 0, 0, 0.1)"
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            }
        }
    }



    return (
        <div className="container">

        <div>
            
            <Bar data={state.dataBar} options={state.barChartOptions} />
        </div>
        </div>
    );
}
