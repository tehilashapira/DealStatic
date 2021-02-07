import produce from 'immer';
import moment from 'moment';
import { createReducer } from "./reducerUtils";
let dateBeforeYear = moment().subtract(1, 'year').format('MM/DD/YYYY')

const initialState = {
    leaderStatic: { sumProjects: 0, sumTasks: 0, sumPapers: 0, sumContacts: 0 },
    dataStatic: [],
    sumStatic: { viewer: 0, contactOptions: 0, submitioms: 0 },
    AllProject: [],
    AllPapers: [],
    AllTask: [],
    AllContact: [],
    chartData: {
        papers: [],
        projects: [],
        tasks: [],
        contacts: []
    }
};

const staticData = {
    setPaperChart(state, action) {
        debugger
        for (let i = 0; i < action.payload.length; i++) {
            let data = action.payload.due_date;
            //  let  date1=split(data).
            //    state.chartData.papers[date1]++
            i++;
        }
        state.chartData.papers = action.payload
        debugger
    },
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
    setTaskData(state, action) {
        state.AllTask = action.payload
    },
    setPaperStatic(state, action) {
        state.leaderStatic.sumPapers = action.payload
    },
    setPaperData(state, action) {
        state.AllPapers = action.payload
    },
    setContactStatic(state, action) {
        state.leaderStatic.sumContacts = action.payload
    },
    setContactData(state, action) {
        state.AllContact = action.payload
    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);