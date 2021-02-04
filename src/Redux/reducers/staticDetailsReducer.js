import produce from 'immer';
import { createReducer } from "./reducerUtils";

const initialState = {
    leaderStatic: { sumProjects: 0, sumTasks: 0, sumPapers: 0, sumContacts: 0 },
    dataStatic: [],
    sumStatic: { viewer: 0, contactOptions: 0, submitioms: 0 },
    AllProject: [],
    AllPapers: []
};

const staticData = {
    setSumStatic(state, action) {
        state.AllProject = (action.payload);
    },
    setProjectStatic(state, action) {
        state.leaderStatic.sumProjects = action.payload
    },
    setProjectData(state, action) {
        state.AllProject = action.payload
    },
    setTaskStatic(state, action) {
        state.leaderStatic.sumTasks = action.payload
    },
    setPaperStatic(state, action) {
        state.leaderStatic.sumPapers = action.payload
    },
    setPaperData(state, action) {
        state.AllPapers = action.payload
    },
    setContactStatic(state, action) {
        state.leaderStatic.sumContacts = action.payload
    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);