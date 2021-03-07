import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import Chart2 from './components/Chart2'
import './App.css'

function App() {
  return (
    <div className="container-fluid container-all">
      <Provider store={store}>
        <InformationTemp></InformationTemp>
        <Chart2></Chart2>
      </Provider>
    </div>
  );
}
export default App;






