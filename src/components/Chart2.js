import React from 'react';
import BarT from './BarT'
import TotalChart from './TotalChart'
import ChartT from './ChartT'
import './FusionChart.css'

export default function TryChart() {

    return (
        <>
            <div className="container" >
                <div className="row" style={{ paddingTop: "5%" }}  >
                    <div className="col-xs-12 col-lg-4" style={{ marginLeft: "-70px" }}>
                        <BarT></BarT>
                    </div>
                    <div className="col-xs-12 col-lg-2" style={{ marginLeft: "90px" }}>
                        <TotalChart></TotalChart>
                    </div>
                   
                    {/* <div className="col-xs-12 col-md-4" style={{ marginLeft: "150px" }}> */}
                    <div className={"col-md" ? { marginLeft: "100px" }:{ marginLeft: "200px"}}>
                    {/* <p className="vl"></p>  */}
                    <ChartT></ChartT>
                    </div>
                </div>
            </div>
        </>
    );
}

// className={props.editFolder  ? "container" :  "editF"