import { createStore, combineReducers, applyMiddleware } from 'redux';

import { getStaticData,updateGoals } from './middleware/crudMiddleware'
import staticDetailsReducer from './reducers/staticDetailsReducer'


const reducer = combineReducers({ staticDetailsReducer });

const store = createStore(reducer, applyMiddleware(getStaticData,updateGoals));
window.store = store;
export default store;
store.dispatch({ type: 'INIT_DATA' });