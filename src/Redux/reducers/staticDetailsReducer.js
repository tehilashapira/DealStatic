import produce from 'immer';
import {createReducer, sumData} from "./reducerUtils";

const initialState = {
    // dataStatic: [{ title: "", viewers: [{ date: new Date(), amount: 0 }] }],
    dataStatic: [],
    listCategory: [],
    sumStatic: {viewer:0,contactOptions:0,submitioms:0}
};

const staticData = { 


    
    setStaticData(state, action) {
        debugger;
    //   state.sumStatic=action.payload.viewers.map((viewer) =>new Date(viewer.data))
        console.log("mine"+action.payload);
        console.log("reducer"+state)
        state.dataStatic=action.payload;
        console.log("reducer"+state.dataStatic)
        debugger;
        state.sumStatic.viewer=sumData(state.dataStatic.viewers);
        debugger;
        state.sumStatic.contactOptions=sumData(state.dataStatic.contactOptions);
        state.sumStatic.submitioms=sumData(state.dataStatic.submitioms);

        console.log("reducer2"+state.sumStatic.contactOptions)
        debugger;
      
    },
   
    setSumStatic(state,action){
        state.sumStatic.viewer=sumData(action.payload.viewers);
        state.sumStatic.contactOptions=sumData(action.payload.contactOptions);
        state.sumStatic.submitioms=sumData(action.payload.submitioms);  


    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);