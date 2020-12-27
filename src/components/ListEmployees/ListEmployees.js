import React from "react";
import './ListEmployees.css';
import {useDispatch, useSelector} from "react-redux";
import {selectedEmployee} from "../../redux/empoyees/actions";


export function ListEmpoyees() {

    const employees = useSelector(state => state.employees.all);
    const fullEmployees = employees.filter(employee => employee.name.length > 5 && employee.position);
    const selectedId = useSelector(state => state.employees.selectedId);

    const dispatch = useDispatch();

    return (
        <div className="listEmployees">
            {fullEmployees.map(employee => (
                <div onClick={() => dispatch(selectedEmployee(employee.id))}
                     key={employee.id}
                     className={`employee ${selectedId === employee.id && "selectedEmployee"}`}>
                    <p className="employee__name">{employee.name}</p>
                    <p className="employee__attributes">{employee.position}</p>
                    <p className="employee__attributes">{employee.birthdate}</p>
                    <p className="employee__attributes">{employee.sex}</p>
                    <p className="employee__attributes">{employee.isFired}</p>
                    <p className="employee__attributes">{employee.colleagues}</p>
                </div>
            ))
            }
        </div>
    )
}