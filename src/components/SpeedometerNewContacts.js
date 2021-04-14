import React from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import { useSelector } from 'react-redux'


export default function App() {

    const UpdatedData = useSelector(state => state.staticDetailsReducer);
    console.log(UpdatedData.leaderStatic.sumProjects + "in gouge2");
    let s=UpdatedData.CurrentValuesGoals.newContactsSum
    return (
        <ReactSpeedometer
            value={UpdatedData.GoalsStatic.newContactsSum}
            width={100}
            height={100}
            fluidWidth={false}
            valueTextFontSize={'0px'}
            maxValue={UpdatedData.CurrentValuesGoals.newContactsSum}
            segmentColors={[
                "#2FAAF4",
                "#2FAAF4",
                "#0F93E3",
                "#007FCC",
                "#0064A0",
             ]}
            labelFontSize={'0'}
            ringWidth={16}
            needleHeightRatio={0.34}
            needleColor={'2E2E2E'}
            forceRender={true}
            // valueTextFontSize={0}
        />
    );
}