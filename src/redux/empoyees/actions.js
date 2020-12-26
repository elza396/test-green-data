import {ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from "./action-types";


export const addEmployee = employee => ({
    type: ADD_EMPLOYEE,
    payload: employee,
});

export const deleteEmployee = id => ({
    type: DELETE_EMPLOYEE,
    payload: id,
});

export const updateEmployee = employee => ({
    type: UPDATE_EMPLOYEE,
    payload: employee,
});