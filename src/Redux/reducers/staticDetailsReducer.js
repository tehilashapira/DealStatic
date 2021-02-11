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
    isClicked:0,

    papers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projects: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tasks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    contacts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


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

            const date1 = allData[i].startDate.split("/")
            let date2 = date1[1]
            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }
        state.tasks = [...arr];
        console.log(state.tasks)
    },
    setProjectChart(state = initialState, action) {

        let allData = action.payload
        const arr = [...state.projects];
        for (let i = 0; i < allData.length; i++) {

            const date1 = allData[i].dueDate.split("/")
            let date2 = date1[1]

            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }
        state.projects = [...arr];
        console.log(state.projects)
    },
    setPaperChart(state = initialState, action) {

        let allData = action.payload
        console.log(initialState.papers)
        const arr = [...state.papers];
        for (let i = 0; i < allData.length; i++) {

            const date1 = allData[i].createdDate
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            let date2 = date11[0]
            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }
        state.papers = [...arr];
    },

    setContactChart(state = initialState, action) {

        let allData = action.payload
        console.log(initialState.contacts)
        const arr = [...state.contacts];
        for (let i = 0; i < allData.length; i++) {

            const date1 = allData[i].createDateAndTime
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            let date2 = date11[0]
            if (date2[0] != 0) {
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
            else {
                date2 = date2[1]
                const x = (arr[date2]) + 1
                arr[date2] = x;
            }
        }

        state.contacts = [...arr];
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

    },
    ClickFilter(state, action) {
        state.isClicked = action.payload
    }
};

export default produce((state, action) => createReducer(state, action, staticData), initialState);