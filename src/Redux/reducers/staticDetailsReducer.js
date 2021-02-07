import produce from 'immer';
import { createReducer } from "./reducerUtils";

const initialState = {
    leaderStatic: { sumProjects: 0, sumTasks: 0, sumPapers: 0, sumContacts: 0 },
    dataStatic: [],
    sumStatic: { viewer: 0, contactOptions: 0, submitioms: 0 },
    AllProject: [],
    AllTask: [],
    AllContact:[],
};

const staticData = {

    //  setStaticData(state, action) {
    //     debugger;
    // //   state.sumStatic=action.payload.viewers.map((viewer) =>new Date(viewer.data))
    //     state.dataStatic=action.payload;
    //     debugger;
    //     state.sumStatic.viewer=sumData(state.dataStatic.viewers);
    //     debugger;
    //     state.sumStatic.contactOptions=sumData(state.dataStatic.contactOptions);
    //     state.sumStatic.submitioms=sumData(state.dataStatic.submitioms);
    //     debugger;

    // },

    setSumStatic(state,action){
        state.AllProject=(action.payload);
        // state.sumStatic.contactOptions=sumData(action.payload.contactOptions);
        // state.sumStatic.submitioms=sumData(action.payload.submitioms);  
    },
    setProjectStatic(state, action) {
        state.leaderStatic.sumProjects = action.payload
    },
    setProjectData(state, action) {
        debugger
        state.AllProject= action.payload
    },
    setTaskStatic(state, action) {
        state.leaderStatic.sumTasks = action.payload

    },
    setTaskData(state, action){

        state.AllTask= action.payload
    },
    setPaperStatic(state, action) {
        state.leaderStatic.sumPapers = action.payload

    },
    setContactStatic(state, action) {
        state.leaderStatic.sumContacts = action.payload
    },
    setContactData(state, action){

        state.AllContact= action.payload

    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);