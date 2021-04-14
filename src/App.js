import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import './App.css'



function App() {
  return (
   
      <Provider store={store}>
       
        <InformationTemp></InformationTemp>
        
     
      </Provider>

  );
}
export default App;








