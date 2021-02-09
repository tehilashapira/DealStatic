import produce from 'immer';
import { createReducer } from "./reducerUtils";
import moment from 'moment';

const initialState = {
    leaderStatic: { sumProjects: 0, sumTasks: 0, sumPapers: 0, sumContacts: 0 },
    dataStatic: [],
    sumStatic: { viewer: 0, contactOptions: 0, submitioms: 0 },
    AllProject: [],
    AllTask: [],
    AllContact: [],
    AllPapers: [],

    papers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projects: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tasks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    contacts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


};

const staticData = {

    //  setStaticData(state, action) {
    //      
    // //   state.sumStatic=action.payload.viewers.map((viewer) =>new Date(viewer.data))
    //     state.dataStatic=action.payload;
    //      
    //     state.sumStatic.viewer=sumData(state.dataStatic.viewers);
    //      
    //     state.sumStatic.contactOptions=sumData(state.dataStatic.contactOptions);
    //     state.sumStatic.submitioms=sumData(state.dataStatic.submitioms);
    //      

    // },

    setSumStatic(state, action) {
        state.AllProject = (action.payload);
        // state.sumStatic.contactOptions=sumData(action.payload.contactOptions);
        // state.sumStatic.submitioms=sumData(action.payload.submitioms);  
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
    setTaskChart(state = initialState, action) {

        let allData = action.payload
        console.log(initialState.tasks)
        const arr = [...state.tasks];
        for (let i = 0; i < allData.length; i++) {
            const date = allData[i].startDate.split("/");
            const dateFormater = date[1] + "/" + date[0] + "/" + date[2];
            const month = dateFormater[1]
            console.log(month)
            const x = (arr[month]) + 1
            arr[month] = x;
        }
        state.tasks = [...arr];
        console.log(state.tasks)
    },
    setProjectChart(state = initialState, action) {
        debugger
        let allData = action.payload
        console.log(initialState.projects)
        const arr = [...state.projects];
        for (let i = 0; i < allData.length; i++) {
            const date = allData[i].dueDate.split("/");
            const dateFormater = date[1] + "/" + date[0] + "/" + date[2];
            const month = dateFormater[1]
            console.log(month)
            const x = (arr[month]) + 1
            arr[month] = x;
        }
        state.projects = [...arr];
        console.log(state.projects)
    },
    setPaperChart(state = initialState, action) {
        debugger
        let allData = action.payload
        console.log(initialState.papers)
        const arr = [...state.papers];
        for (let i = 0; i < allData.length; i++) {

            const date1 = allData[i].createdDate
            let date2 = moment(date1).format("MM/DD/YYYY")
            let date = date2.split("/")
            const dateFormater = date[0] + "/" + date[1] + "/" + date[2];
            const month = dateFormater[1]
            console.log(month)
            const x = (arr[month]) + 1
            arr[month] = x;
        }
        state.papers = [...arr];
        console.log(state.papers)
    },
    setContactChart(state = initialState, action) {
        debugger
        let allData = action.payload
        console.log(initialState.contacts)
        const arr = [...state.contacts];
        for (let i = 0; i < allData.length; i++) {

            const date1 = allData[i].createDateAndTime;
            let date2 = moment(date1).format("MM/DD/YYYY")
            let date = date2.split("/")
            const dateFormater = date[0] + "/" + date[1] + "/" + date[2];
            const month = dateFormater[1]
            console.log(month)
            const x = (arr[month]) + 1
            arr[month] = x;
        }
        state.contacts = [...arr];
        console.log(state.contacts)
    },
    setPaperStatic(state, action) {
        state.leaderStatic.sumPapers = action.payload
    },

    setContactStatic(state, action) {
        state.leaderStatic.sumContacts = action.payload
    },
    setContactData(state, action) {

        state.AllContact = action.payload

    }, setPaperData(state, action) {

        state.AllPapers = action.payload

    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);