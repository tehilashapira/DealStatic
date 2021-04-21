import React, { useState, useEffect } from 'react';

import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from 'react-redux'


export default function App(props) {
    debugger
    const flag=props.flag
    const UpdatedData = useSelector(state => state.staticDetailsReducer);

    return (<>
      
        <ReactSpeedometer

            value={UpdatedData.GoalsStatic.appointmentsSum}
            width={100}
            height={100}
            fluidWidth={false}
            valueTextFontSize={'0px'}
            segmentColors={[
                "#2FAAF4",
                "#2FAAF4",
                "#0F93E3",
                "#007FCC",
                "#0064A0",
            ]}
            labelFontSize={'0'}
            maxValue={UpdatedData.CurrentValuesGoals.appointmentsSum}
            ringWidth={16}
            needleHeightRatio={0.34}
            needleColor={'2E2E2E'}
            forceRender={flag}

        // customSegmentLabels={true}
        // maxSegmentLabels={55}
        // valueTextFontSize={0}
        />
    </>
    );
}