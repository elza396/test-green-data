import React from "react";
import'./Toolbar.css';
import {Button} from "../Button/Button";
import {connect} from "react-redux";
import {addEmployee, deleteEmployee, selectedEmployee} from "../../redux/empoyees/actions";

function Toolbar(props) {

    // const dispatch = useDispatch();
    const {selectedId} = props;
    // const selectedId = useSelector(state => state.employees.selectedId);
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
                props.addEmployee(newEmployee)
                props.selectedEmployee(newEmployee)
                // dispatch(addEmployee(newEmployee))
                // dispatch(selectedEmployee(newEmployee.id))
            }}>
                Добавить нового сотрудника
            </Button>
            <Button className="button__delete" onClick={() => {
                props.deleteEmployee(selectedId)
                // dispatch(deleteEmployee(selectedId))
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