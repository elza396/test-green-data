import React from "react";
import './ListEmployees.css';
import {useSelector} from "react-redux";


export function ListEmpoyees() {
    const employees = useSelector(state => state.employees.all);
    return (
        <div className="listEmployees">
            {employees.map(employee => (
                <div className="employee">
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