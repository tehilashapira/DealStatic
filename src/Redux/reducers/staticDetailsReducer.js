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
        // let AllPapersData = (action.payload).filter(function (AllPapers) {
        //     const datePaper1 = AllPapers.createdDate
        //     let detaPaper = moment(datePaper1).format("MM/DD/YYYY");
        //     return (new Date(detaPaper) >= new Date(dateBeforeYear))
        // })
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