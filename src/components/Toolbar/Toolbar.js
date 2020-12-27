import React from "react";
import'./Toolbar.css';
import {Button} from "../Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {deleteEmployee} from "../../redux/empoyees/actions";


export function Toolbar() {

    const dispatch = useDispatch();
    const selectedId = useSelector(state => state.employees.selectedId);

    return (
        <div className="toolbar">
            <Button >Добавить нового сотрудника</Button>
            <Button onClick={() => dispatch(deleteEmployee(selectedId))} >Удалить выбранного сотрудника</Button>
        </div>
    )
}