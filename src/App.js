
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from "react-router-dom";
import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'

function App() {
  return (
    <div className="container-fluid ">
    <Provider store={store}>
    
        
          <InformationTemp></InformationTemp>
    
    

    </Provider>
    
  </div>

  
  );
}

export default App;
