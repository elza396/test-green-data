import React from "react";
import'./Toolbar.css';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {addEmployee, deleteEmployee, selectedEmployee} from "../../redux/empoyees/actions";


export function Toolbar() {

    const dispatch = useDispatch();
    const selectedId = useSelector(state => state.employees.selectedId);
    const newEmployee = {
        name: "",
        position: "",
        birthdate: "",
        sex: "",
        isFired: "",
        colleagues: [],
        id: Date.now(),
    }


    return (
        <div className="toolbar">
            <Button className="button__add" onClick={() => {
                dispatch(addEmployee(newEmployee))
                dispatch(selectedEmployee(newEmployee.id))
            }}>
                Добавить нового сотрудника
            </Button>
            <Button className="button__delete" onClick={() => dispatch(deleteEmployee(selectedId))}>
                Удалить выбранного сотрудника
            </Button>
        </div>
    )
}