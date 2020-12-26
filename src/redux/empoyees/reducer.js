import {ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from "./action-types";

const initialState = {
    all: [
        {
            name: "Gazizova Elza Kadirovna",
            position: "director",
            birthdate: "09.12.96",
            sex: "female",
            isFired: false,
            colleagues: [],
        },
        {
            name: "Gazizov Salavat Kadirovich",
            position: "main director",
            birthdate: "26.10.91",
            sex: "male",
            isFired: false,
            colleagues: [],
        },
    ],
};

export function employees(state = initialState, action) {
    switch (action.type) {
        case ADD_EMPLOYEE: {
            const newState = {all: state.all.slice(0)};
            newState.all.push(action.payload);

            return newState;
        }
        case DELETE_EMPLOYEE: {
            const newState = {all: state.all.slice(0)};
            const index = newState.all.findIndex(employee => employee.id === action.payload);
            newState.all.splice(index, 1);

            return newState;
        }
        case UPDATE_EMPLOYEE: {
            const newState = {all: state.all.slice(0)};
            const index = newState.all.findIndex(employee => employee.id === action.payload.id);
            newState.all[index] = action.payload;

            return newState;
        }
        default:
            return state;
    }
}