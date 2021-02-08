import produce from 'immer';
import moment from 'moment';
import { createReducer } from "./reducerUtils";

const initialState = {
    leaderStatic: { sumProjects: 0, sumTasks: 0, sumPapers: 0, sumContacts: 0 },
    dataStatic: [],
    sumStatic: { viewer: 0, contactOptions: 0, submitioms: 0 },
    AllProject: [],
    AllPapers: [],
    AllTask: [],
    AllContact: [],
    
    chartData: {
        papers: [0,0,0,0,0,0,0,0,0,0,0,0],
        projects: [],
        tasks: [],
        contacts: []
    }
};

const staticData = {
 
    setSumStatic(state, action) {debugger
        state.AllProject = (action.payload);
    },
    setProjectStatic(state, action) {
        state.leaderStatic.sumProjects = action.payload
    },
    setProjectData(state, action) {debugger
        state.AllProject = action.payload
    },
    setTaskStatic(state, action) {debugger
        state.leaderStatic.sumTasks = action.payload
    },
    setTaskData(state, action) {debugger
        state.AllTask = action.payload
    },
    setPaperStatic(state, action) {debugger
        state.leaderStatic.sumPapers = action.payload
    },
    setPaperData(state, action) {debugger
        state.AllPapers = action.payload
    },
    setContactStatic(state, action) {debugger
        state.leaderStatic.sumContacts = action.payload
    },
    setContactData(state, action) {debugger
        state.AllContact = action.payload
    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);