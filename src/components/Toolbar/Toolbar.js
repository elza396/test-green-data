import React from "react";
import'./Toolbar.css';
import {Button} from "../Button/Button";
import {connect} from "react-redux";
import {addEmployee, deleteEmployee, selectedEmployee} from "../../redux/empoyees/actions";

function Toolbar(props) {
    const {selectedId} = props;

    return (
        <div className="toolbar">
            <Button className="button__add" onClick={() => {
                const newEmployee = {
                    name: "",
                    position: "",
                    birthdate: "",
                    sex: "",
                    isFired: "",
                    colleagues: [],
                    id: Date.now(),
                }
                props.addEmployee(newEmployee)
                props.selectedEmployee(newEmployee)
            }}>
                Добавить нового сотрудника
            </Button>
            <Button className="button__delete" onClick={() => {
                props.deleteEmployee(selectedId)
            }}>
                Удалить выбранного сотрудника
            </Button>
        </div>
    )
}

export const ToolbarConnected = connect(
    state => ({
        selectedId: state.employees.selectedId
    }),
    dispatch => ({
        addEmployee: (newEmployee) => dispatch((addEmployee(newEmployee))),
        selectedEmployee: (newEmployee) => dispatch(selectedEmployee(newEmployee.id)),
        deleteEmployee: (selectedId) => dispatch(deleteEmployee(selectedId))
    })
)(Toolbar)