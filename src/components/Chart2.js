import React from 'react';

import './chart.css'
import BarT from './BarT'
import TotalChart from './TotalChart'
import ChartT from './ChartT'

export default function TryChart() {
    return (
        <>
            <div className="container mt-5" >
                <div className="d-flex justify-content-between align-items-center myClass">
                    <div className="marginClass">
                        <BarT></BarT>
                    </div>
                    <div className="marginClass" >
                        <TotalChart></TotalChart>
                    </div>
                    <div className="marginClass">
                        {/* <p className="vl"></p>  */}
                        <ChartT></ChartT>
                    </div>
                </div>
            </div>
        </>
    );
}

// className={props.editFolder  ? "container" :  "editF"