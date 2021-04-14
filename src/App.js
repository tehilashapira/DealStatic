import React from 'react';
import { Provider } from 'react-redux';

import store from './Redux/staticStore'
import InformationTemp from './components/InformationTemp'
import './App.css'
import Try from './components/try'


function App() {
  return (
   
      <Provider store={store}>
       
        <InformationTemp></InformationTemp>
        <Try></Try>
     
      </Provider>

  );
}
export default App;








