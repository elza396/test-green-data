import {ADD_EMPLOYEE, DELETE_EMPLOYEE, SELECTED_EMPLOYEE, UPDATE_EMPLOYEE} from "./action-types";

const initialState = {
    all: [
        {
            name: "Газизова Эльза Кадировна",
            position: "Разработчик",
            birthdate: "1996-12-09",
            sex: "Женщина",
            isFired: false,
            colleagues: [2, 3],
            id: 1,
        }
    ],
    selectedId: -1,
};

export function employees(state = initialState, action) {
    switch (action.type) {
        case ADD_EMPLOYEE: {
            const newState = {...state, all: state.all.slice(0)};
            newState.all = newState.all.filter(e => (e.name.length > 4 && e.position));
            newState.all.push(action.payload);

            return newState;
        }
        case DELETE_EMPLOYEE: {
            const newState = {...state, all: state.all.slice(0)};
            const index = newState.all.findIndex(employee => employee.id === action.payload);
            if(index === -1) return newState;
            newState.all.splice(index, 1);

            return newState;
        }
        case UPDATE_EMPLOYEE: {
            const newState = {...state, all: state.all.slice(0)};
            const index = newState.all.findIndex(employee => employee.id === action.payload.id);
            newState.all[index] = action.payload;
            if (newState.all[index].name.length < 4 || !newState.all[index].position) return state;

            return newState;
        }
        case SELECTED_EMPLOYEE: {
            return {...state, selectedId: action.payload}
        }
        default:
            return state;
    }
}