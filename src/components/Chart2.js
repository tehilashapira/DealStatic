import React from 'react';

import './chart.css'
import BarT from './BarT'
import TotalChart from './TotalChart'
import ChartT from './ChartT'
import './chart.css'

export default function TryChart() {
    return (
        <>
            <div className="container mt-5 container-chart" >

                <div className=" d-flex justify-content-between align-items-center myClass in-small-screen">
                    <div className="marginClass">
                        <ChartT></ChartT>
                    </div>
                    <div className="add-div">

                    </div>
                    {/* <div className="text-time-revers-container"> </div> */}
                    {/* <div className="marginClass total-chart" >
                        <TotalChart></TotalChart>
                    </div> */}
                    <div className="marginClass">
                        <BarT></BarT>
                    </div>
                </div>
            </div>
            
        </>
    );
}