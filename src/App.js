
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
 import Chart2 from './components/Chart2'
// // import PieChart from './components/PieChart'
// import {TryChart,Pie1} from './components/Chart2'

function App() {
  return (
    <div className="container-fluid ">
    <Provider store={store}>
    
       <InformationTemp></InformationTemp>
      {/* <Chart1></Chart1>  */}
      <Chart2></Chart2> 
      {/* <PieChart></PieChart> */}
      {/* <TryChart></TryChart>
      <Pie1></Pie1> */}

       <div style={{marginLeft:"60%" }}> </div>

    </Provider>
    
  </div>

  
  );
}

export default App;





 
