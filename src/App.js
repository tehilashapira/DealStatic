import React from 'react';
import { Provider } from 'react-redux';
import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import Chart2 from './components/Chart2'
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom'

function App() {
  return (
    <div className="container-fluid ">
      <Router>
        {/* <Route path="/home"><Link to="/home"></Link></Route> */}
        <Provider store={store}>
          <InformationTemp></InformationTemp>
          <Chart2></Chart2>
        </Provider>
      </Router>
    </div>
  );
}
export default App;






