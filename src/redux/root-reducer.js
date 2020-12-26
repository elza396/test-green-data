import {combineReducers} from "redux";
import {employees} from "./empoyees/reducer";

export const rootReducer = combineReducers({
    employees
});