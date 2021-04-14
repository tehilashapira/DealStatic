


import produce from 'immer';
import moment from 'moment';

import { createReducer } from "./reducerUtils";

const initialState = {
    leaderStatic: { sumProjects: 0, sumTasks: 0, sumPapers: 0, sumContacts: 0 },
    GoalsStatic: { appointmentsSum: 0, presentationsSum: 0, dealsSum: 0, newContactsSum: 0 },
    CurrentValuesGoals: { appointmentsSum: 0, presentationsSum: 0, dealsSum: 0, newContactsSum: 0 },
    dataStatic: [],
    sumStatic: { viewer: 0, contactOptions: 0, submitioms: 0 },
    AllProject: [],
    AllTask: [],
    AllContact: [],
    AllPapers: [],
    AllDeals: [],
    AllDeals: [],
    AllAppointments: [],
    AllDataDeals: [],
    sumAppointments: 0,
    sumPresentations: 0,
    sumDeals: 0,

    goal1: 0,

    isClicked: 0,
    arrTime: ['Day', 'Week', 'Month', 'Year'],
    choose: 'Day',
    papers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projects: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tasks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    contacts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
};

const staticData = {

    setAppointmentsData(state, action) {
         
        state.sumAppointments = 0
        state.AllDataDeals = action.payload
        let Data = state.AllDataDeals.result
        let dateBeforeMonth = moment().subtract(1, 'month').format('MM/DD/YYYY');
        for (let i = 0; i < Data.length; i++) {

            let date1 = Data[i].openDate
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            const dateFormater = date11[0] + "/" + date11[1] + "/" + date11[2];
            if (Data[i].dealStage === 'Appointment scheduled' && dateFormater >= dateBeforeMonth)
                state.sumAppointments++
        }

        state.GoalsStatic.appointmentsSum = state.sumAppointments



    },
    setPresentationsData(state, action) {
        state.sumPresentations = 0
        state.AllDataDeals = action.payload
        let Data = state.AllDataDeals.result
        let dateBeforeMonth = moment().subtract(1, 'month').format('MM/DD/YYYY');
        for (let i = 0; i < Data.length; i++) {

            let date1 = Data[i].openDate
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            const dateFormater = date11[0] + "/" + date11[1] + "/" + date11[2];
            if (Data[i].dealStage === 'Presentation scheduled' && dateFormater >= dateBeforeMonth)
                state.sumPresentations++
        }

        state.GoalsStatic.presentationsSum = state.sumPresentations
    },
    setDealsStatic(state, action) {
         
        state.sumDeals = 0
        state.AllDataDeals = action.payload
        let Data = state.AllDataDeals.result
        let dateBeforeMonth = moment().subtract(1, 'month').format('MM/DD/YYYY');
        for (let i = 0; i < Data.length; i++) {

            let date1 = Data[i].openDate
            let date11 = moment(date1).format("MM/DD/YYYY").split("/")
            const dateFormater = date11[0] + "/" + date11[1] + "/" + date11[2];
            if (dateFormater >= dateBeforeMonth)
                state.sumDeals++
        }
        state.GoalsStatic.dealsSum = state.sumDeals

    },
    setNewContactData(state, action) {
         
        state.GoalsStatic.newContactsSum = action.payload

    },
    ClickFilter(state, action) {
        state.isClicked = action.payload
    },
   setGoalsServer(state, action) {

        
    let key=action.payload.typeNumber
    let val=action.payload.valueGoal
    
    val=parseInt(val);

    switch (key) {
            case 1:
            state.CurrentValuesGoals.appointmentsSum=val
            break;
            case 2:
            state.CurrentValuesGoals.presentationsSum=val
            break;
            case 3:
            state.CurrentValuesGoals.dealsSum=val
            break;
           case 4:
            state.CurrentValuesGoals.newContactsSum=val
            break;
    }
   
        // let num=action.payload;
        // num=parseInt(num);
        // state.CurrentValuesGoals.appointmentsSum=num

},
    // setGoalServer(state, action) {
         
    //     // state.CurrentValuesGoals.appointments=action.payload

    // },


    setDataGoals(state, action) {
         
        const currentData = action.payload
        state.CurrentValuesGoals.appointmentsSum = currentData.appointmentsSum
        state.CurrentValuesGoals.presentationsSum = currentData.presentationsSum
        state.CurrentValuesGoals.dealsSum = currentData.dealsSum
        state.CurrentValuesGoals.newContactsSum = currentData.newContactsSum



    },
    setMaxValueSpeedometer(state,action){
        debugger
        let val=action.payload.goals.appointmentsSum
        state.maxValue=val


    }
    // setSumMeets(state,action){
    //      
    //     state.AllDeals=action.payload
    //     let sum=0
    //     const meets=(state.AllDeals.result).map((d) => {if (d.dealStage==='Appointment scheduled') sum++});
    //     console.log(sum)


}


export default produce((state, action) => createReducer(state, action, staticData), initialState);