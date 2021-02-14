import produce from 'immer';
import { createReducer } from "./reducerUtils";
import moment from 'moment';

const initialState={
    papers: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    projects: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    tasks: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    contacts: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

}