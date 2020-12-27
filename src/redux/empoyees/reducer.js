import {ADD_EMPLOYEE, DELETE_EMPLOYEE, SELECTED_EMPLOYEE, UPDATE_EMPLOYEE} from "./action-types";

const initialState = {
    all: [
        {
            name: "Газизова Эльза Кадировна",
            position: "Директор",
            birthdate: "1996-12-09",
            sex: "female",
            isFired: true,
            colleagues: [],
            id: 1,
        },
        {
            name: "Газизов Салават Кадирович",
            position: "Разработчик",
            birthdate: "1991-10-26",
            sex: "male",
            isFired: false,
            colleagues: [],
            id: 2,
        },
        {
            name: "Малков Сергей Васильевич",
            position: "Разработчик",
            birthdate: "1991-08-23",
            sex: "male",
            isFired: true,
            colleagues: [],
            id: 3,
        },
    ],
    selectedId: -1,
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
            if(index === -1) return newState;
            newState.all.splice(index, 1);

            return newState;
        }
        case UPDATE_EMPLOYEE: {
            const newState = {all: state.all.slice(0), selectedId: state.selectedId};
            const index = newState.all.findIndex(employee => employee.id === action.payload.id);
            newState.all[index] = action.payload;

            return newState;
        }
        case SELECTED_EMPLOYEE: {
            return {...state, selectedId: action.payload}
        }
        default:
            return state;
    }
}