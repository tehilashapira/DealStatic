import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import Chart2 from './components/Chart2'

function App() {
  return (
    <div className="container-fluid ">
      <Provider store={store}>
        <InformationTemp></InformationTemp>
        <Chart2></Chart2>
      </Provider>
    </div>
  );
}
export default App;






