import { actions } from '../actions/staticAction'
import { setStaticData } from '../reducers/staticDetailsReducer'

 
debugger;
 export const getUserName = ({ dispatch, getState }) => next => action => {
         var url = window.location
         // dispatch(actions.setStaticData());
       const userName = (url.pathname.split)('/')[1]
        if (action.type === 'GET_USER_NAME') {
                // return fetch("https://vloger.codes/api/getUser/" + userName )
                 return fetch("https://vloger.codes/api/getUser/" + userName)
                         .then((res) => res.json())
                        .then((uid) => {
                                dispatch({ type: "INIT_DATA", payload: uid });
                         })
                         .catch((err) => {
                                 console.log(err)
                         })
        }
         return next(action);
         
 }
//  ;debugger
export const getStaticData = ({ dispatch, getState }) => next => action => {
        var url = window.location
        const userName = (url.pathname.split)('/')[1]
        console.log(userName)
        const cardName = (url.pathname.split)('/')[2]
        console.log(cardName)
        if (action.type === 'INIT_DATA') {
                //ZXUBzgMPlfW4vLDDlvifIi7Fn4k2
              debugger;
                return fetch(`https://dev.knowme.page/api/digitalcard/${userName}/${cardName}`).then((res) => res.json())

                // return fetch('https://dev.knowme.page/api/digitalcard/' + userName + '/5fed85af33c96aa4857c6c14').then((res) => res.json())
                        // return fetch('https://dev.knowme.page/api/digitalcard/'+action.payload.uid+'/5fed85af33c96aa4857c6c14').then((res) => res.json())
                        .then((resJson) => {
                                


                                dispatch(actions.setStaticData(resJson));

                        })
                        .catch((err) => {
                                console.log(err)
                        })
        }
        return next(action);
}