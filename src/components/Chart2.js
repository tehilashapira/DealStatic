import React from 'react';
import BarT from './BarT'
import TotalChart from './TotalChart'
import ChartT from './ChartT'

export default function TryChart() {

    return (
        <>
            <div className="container" >
                <div className="row" style={{ paddingTop: "5%" }}  >
                    <div className="col-sm-4" style={{ marginLeft: "-70px" }}>
                        <BarT></BarT>
                    </div>
                    <div className="col-md-2" style={{ marginLeft: "90px" }}>
                        <TotalChart></TotalChart>
                    </div>
                    <div className="col-sm-3" style={{ marginLeft: "150px" }}>
                        <ChartT></ChartT>
                    </div>
                </div>
            </div>
        </>
    );
}