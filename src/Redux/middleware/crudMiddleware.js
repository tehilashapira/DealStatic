import { actions } from '../actions/staticAction'
import { setStaticData,setProjectStatic,setTaskStatic,setContactStatic } from '../reducers/staticDetailsReducer'



export const getStaticData =   ({ dispatch, getState }) => next => action => {
        if (action.type === 'INIT_DATA') {

fetch('https://reacthub.dev.leader.codes/api/renana-il/getAllProjectsForUser', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
    },
   
  })
    .then((data) => data.json())
    .then((data) => {  
    let sumProject=data.sumProjectForUser
    debugger
    dispatch(actions.setProjectStatic(sumProject));
    // (store.staticDetailsReducer.sumProject=sumProject);
     console.log(data)
    

})

}
    return next(action)

}

export const getStaticTask =   ({ dispatch, getState }) => next => action => {
  if (action.type === 'INIT_DATA') {

fetch('https://reacthub.dev.leader.codes/api/renana-il/getAllTasksForUser', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJIZXNJaFlXaVU2Z1A3M1NkMHRXaDJZVzA4ZFkyIiwiZW1haWwiOiJyZW5hbmFAbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjA3NTkxOTI5fQ.U2FQ7I4qBXW9DF-SVJqxKiWgVs5tjSo06pyvmuwzCFU",
},

})
.then((data) => data.json())
.then((data) => {  
let sumTask=data.sumTaskForUser
debugger
// dispatch(actions.setTaskStatic(sumTask));
dispatch(actions.setTaskStatic(56));
// (store.staticDetailsReducer.sumProject=sumProject);
console.log(data)


})

}
return next(action)

}

export const getStaticPapers =   ({ dispatch, getState }) => next => action => {
  if (action.type === 'INIT_DATA') {

fetch('https://papers.dev.leader.codes/api/ruth109476@gmail.com/getAllQuote', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJEWWMzVlVtRUhTY3FhWkJ3MzAwbHY4OWZuYTgyIiwiZW1haWwiOiJydXRoMTA5NDc2QGdtYWlsLmNvbSIsImlhdCI6MTYxMTcyNjEzN30.sDgXmAvDj3JirPgU5AksbPVMdtxHVIAU9rgTFAeAluE",
},

})
.then((data) => data.json())
.then((data) => {  
let sumPapers=data.quotes.length
debugger
// dispatch(actions.setTaskStatic(sumTask));
dispatch(actions.setPaperStatic(sumPapers));
// (store.staticDetailsReducer.sumProject=sumProject);
console.log(data)


})

}
return next(action)

}

export const getStaticContacts =   ({ dispatch, getState }) => next => action => {
  if (action.type === 'INIT_DATA') {

fetch('https://api.dev.leader.codes/blabla101/getContacts/?includesConversations=false', {
method: 'GET',
headers: {
'Content-Type': 'application/json',
Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJzaW1kc01ycmNKZHBRZ3RhOGtnWHlRQmRERnkyIiwiZW1haWwiOiJjdG9AbGVhZGVyLmNvZGVzIiwiaWF0IjoxNjEwNDM3MDcxfQ.vn3nemrfKrW2TKQqwtkIoyaRZRjS8JBEhTtmIWzdc04",
},

})
.then((data) => data.json())
.then((data) => {  
let sumContact=data.length
debugger
// dispatch(actions.setTaskStatic(sumTask));
dispatch(actions.setContactStatic(sumContact));
// (store.staticDetailsReducer.sumProject=sumProject);
console.log(data)


})

}
return next(action)

}





