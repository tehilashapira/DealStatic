import { createStore, combineReducers, applyMiddleware } from 'redux';
import {getStaticData,getStaticTask,getStaticPapers,getStaticContacts} from './middleware/crudMiddleware'
import staticDetailsReducer from './reducers/staticDetailsReducer'



const reducer = combineReducers({staticDetailsReducer});

const store = createStore(reducer, applyMiddleware(getStaticData,getStaticTask,getStaticPapers,getStaticContacts));
window.store = store;
export default store;
store.dispatch({type: 'INIT_DATA' });