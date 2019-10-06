import { combineReducers, createStore } from "redux";
import { counterReducer } from './counterReducer';

let reducers = combineReducers({
    counter: counterReducer
})

export let store = createStore(reducers);