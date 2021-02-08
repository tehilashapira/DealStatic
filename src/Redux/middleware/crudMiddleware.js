import { actions } from '../actions/staticAction'

// ---------------A function that extracts the jwt from the cookies----------------
export const getCookie = (c_name) => {
  if (document.cookie.length > 0) {
    let c_start = document.cookie.indexOf(c_name + '=');
    if (c_start !== -1) {
      c_start = c_start + c_name.length + 1;
      let c_end = document.cookie.indexOf(';', c_start);
      if (c_end === -1) {
        c_end = document.cookie.length;
      }
      return unescape(document.cookie.substring(c_start, c_end));
    }
  }
  return '';
};
export const getStaticData = ({ dispatch, getState }) => next => action => {
  // with this type client enter to application:INIT_DATA
  if (action.type === 'INIT_DATA') {
    let jwt = getCookie('jwt');
    //  fetch to get sum of projects for user-----------------
    fetch('https://reacthub.dev.leader.codes/api/renana-il/getAllProjectsForUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
        //    Authorization: jwt,
      },
    })
      .then((data) => data.json())
      .then((data) => {
       
        //all data for project
        let projectData = data.userProjectsList
         //only sumProject
         let sumProject = data.countProjectsForUser
        debugger
        dispatch(actions.setProjectStatic(sumProject));
        dispatch(actions.setProjectData(projectData));
        console.log(data)
      })
    // fetch to get sum tasks for user-------------
    fetch('https://reacthub.dev.leader.codes/api/renana-il/getAllTasksForUser', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
        //     Authorization: jwt,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        //all data for project
        let taskData = data.userTasksList
        //only sumTask
        let sumTask = (data.countTasksForUser)
        debugger
        dispatch(actions.setTaskStatic(sumTask));
        dispatch(actions.setTaskData(taskData));
        dispatch(actions.setTaskChart(taskData));
        console.log(data)
      })
    //  fetch to get sum of papers for user-----------------
    fetch('https://papers.dev.leader.codes/api/ruth109476@gmail.com/getAllQuote', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEWWMzVlVtRUhTY3FhWkJ3MzAwbHY4OWZuYTgyIiwiZW1haWwiOiJydXRoMTA5NDc2QGdtYWlsLmNvbSIsImlhdCI6MTYxMTcyNjEzN30.sDgXmAvDj3JirPgU5AksbPVMdtxHVIAU9rgTFAeAluE",
        //     Authorization: jwt,
      },
    })
      .then((data) => data.json())
      .then((data) => {
        // let sumPapers = (data.quotes.length)
        let sumPapers = (data.quotes.length)
        debugger
        dispatch(actions.setPaperStatic(sumPapers));
        console.log(data)
      })
    // fetch to get sum of contacts for user----------------------
    fetch('https://api.dev.leader.codes/blabla101/getContacts/?includesConversations=false', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwNDM3MDcxfQ.vn3nemrfKrW2TKQqwtkIoyaRZRjS8JBEhTtmIWzdc04",
        //     Authorization: jwt,
      },
    })
      .then((data) => data.json())
      .then((dataContact) => {
        //all data for contact
        let contactData = dataContact
         //only sumContact
        let sumContact = (dataContact.length)
        debugger
        dispatch(actions.setContactStatic(sumContact));
        dispatch(actions.setContactData(contactData));
        console.log(contactData)
      })
  }
  return next(action)
}