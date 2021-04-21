import { actions } from '../actions/staticAction'

// ---------------A function that extracts the jwt from the cookies----------------
// export const getCookie = (c_name) => {
//   if (document.cookie.length > 0) {
//     let c_start = document.cookie.indexOf(c_name + '=');
//     if (c_start !== -1) {
//       c_start = c_start + c_name.length + 1;
//       let c_end = document.cookie.indexOf(';', c_start);
//       if (c_end === -1) {
//         c_end = document.cookie.length;
//       }
//       return unescape(document.cookie.substring(c_start, c_end));
//     }
//   }
//   return '';
// };
export const getStaticData = ({ dispatch }) => next => action => {
  // with this type client enter to application:INIT_DATA
  if (action.type === 'INIT_DATA') {
    // let jwt = getCookie('jwt');

    fetch('https://contacts.dev.leader.codes/api/deal/yi4149411@gmail.com/getAllDealsByUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJJclJCaTlyamFXYndLQVZKQkZ6UmZNSUN0NXEyIiwiZW1haWwiOiJ5aTQxNDk0MTFAZ21haWwuY29tIiwiaWF0IjoxNjE1NzE0NTUxfQ.zv-x886qaFmEz_RnREmauG-TdpxtJCBQJiDuaWpYBrM"
        //    Authorization: jwt,
      },
    })
      .then((data) => data.json())
      .then((data) => {


        //all data for deals


        if (!data.status) {
          let userData = data
          dispatch(actions.setAppointmentsData(userData));
          dispatch(actions.setPresentationsData(userData));
          dispatch(actions.setDealsStatic(userData))
        }

        else {

          dispatch(actions.setAppointmentsData("0"));
          dispatch(actions.setPresentationsData("0"));
          dispatch(actions.setDealsStatic("0"))
        }


      });


    // fetch to get sum of contacts for user----------------------
    fetch("https://api.dev.leader.codes/postman@leader.codes/getContacts/?includesConversations=false", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiIxTXZPektQcmt3V3JIcmd2dTl1T25lT1BzRm8xIiwiZW1haWwiOiJwb3N0bWFuQGxlYWRlci5jb2RlcyIsImlhdCI6MTYxODMyMjc5MH0.ugSWTmPWuPlq040DrrWjL8Cm7beTdP8QklXdZG-biRc",
      },
    })

      .then((data) => data.json())
      .then((dataContact) => {

        if (dataContact && dataContact.length !== 0) {
          let contactData = dataContact
          let sumContact = (contactData.length)
          dispatch(actions.setNewContactData(sumContact));

        }
        else

          dispatch(actions.setNewContactData("0"));

      })



    // ----get Goals for user----------
    fetch('https://contacts.dev.leader.codes/api/goals/OdayaBenfredj', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
        //     Authorization: jwt,
      },
    })

      .then((data) => data.json())
      .then((data) => {
        {

          if (!data.status) {

            let GoalsData = data.goals
            dispatch(actions.setDataGoals(GoalsData))
          }
          else {
            dispatch(actions.setDataGoals("0"))

           }


        }
      })
  }


  return next(action)
}

// ----- function update new goals------------------------
export const updateGoals = ({ dispatch, getState }) => next => action => {
  if (action.type === 'SET_GOALS_SERVER1') {

    console.log("setGoal1");
    let body = { goals: getState().staticDetailsReducer.CurrentValuesGoals };
    fetch("https://contacts.dev.leader.codes/api/goals/OdayaBenfredj", {
      method: 'PUT',
      headers: {
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    }).then(res => res.json()).then(response => {
      if (response) {

        console.log(response)
      }
    }).catch(error => {

      console.log(error);
    });
  }
  return next(action);
}