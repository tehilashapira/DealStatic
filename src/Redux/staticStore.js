import { createStore, combineReducers, applyMiddleware } from 'redux';
import { getUserName,getStaticData} from './middleware/crudMiddleware'
import staticDetailsReducer from './reducers/staticDetailsReducer'


const state = {
       
};

const reducer = combineReducers({staticDetailsReducer});

const store = createStore(reducer, applyMiddleware(getStaticData,getUserName));
window.store = store;
export default store;
store.dispatch({ type: 'GET_USER_NAME' });