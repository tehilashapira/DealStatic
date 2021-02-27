import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import Chart2 from './components/Chart2'
import Circle from './components/Circle'

function App() {
  return (
    <>
      <div className="container-fluid ">
        <Provider store={store}>
          <InformationTemp></InformationTemp>
          {/* <div style={{ marginLeft: "40px", height: "10" }}>
            <Circle ></Circle>
          </div> */}
          <Chart2></Chart2>
        </Provider>
      </div>
    </>
  );
}
export default App;






