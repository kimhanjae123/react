import { addsubReducer } from "./reducer/addsub"
import { countingReducer } from "./reducer/counting"
import {combineReducers} from 'redux';
export const rootReducer = combineReducers({
    value:addsubReducer,
    count : countingReducer
})
    
