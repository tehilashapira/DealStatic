import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import Chart2 from './components/Chart2'
import FusionChart from './components/FusionChart'
import NewChart from './components/NewChart'
import ChartT from './components/ChartT'
import BarT from './components/BarT'

function App() {
  return (
    <div className="container-fluid ">
      <Provider store={store}>
        <InformationTemp></InformationTemp>
        <Chart2></Chart2>
        {/* <FusionChart></FusionChart> */}
        {/* <NewChart></NewChart> */}
        {/* <ChartT></ChartT> */}
        {/* <BarT></BarT> */}
      </Provider>
    </div>
  );
}
export default App;






