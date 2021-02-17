import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import Chart2 from './components/Chart2'
import FusionChart from './components/FusionChart'
import AreaChart from './components/AreaChart'
import Fasion2 from './components/Fasion2'

function App() {
  return (
    <div className="container-fluid ">
      <Provider store={store}>

        <InformationTemp></InformationTemp>
        <Chart2></Chart2>
        <FusionChart></FusionChart>
        <AreaChart></AreaChart>
        <Fasion2></Fasion2>
        {/* <AreaChart></AreaChart> */}

      </Provider>

    </div>


  );
}
export default App;






