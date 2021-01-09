import React from "react";
import './ListEmployees.css';
import {connect} from "react-redux";
import {selectedEmployee} from "../../redux/empoyees/actions";


function ListEmpoyees(props) {

    const {employees , selectedId} = props;
    // const employees = useSelector(state => state.employees.all);
    const fullEmployees = employees.filter(employee => employee.name.length > 4 && employee.position);
    // const selectedId = useSelector(state => state.employees.selectedId);

    // const dispatch = useDispatch();

    return (
        <div className="listEmployees">
            {fullEmployees.map(employee => {
                const birthDate = new Date(employee.birthdate);
                const formattedBirthdate = `${birthDate.getDate().toString().padStart(2, '0')}.${(birthDate.getMonth()+1).toString().padStart(2, '0')}.${birthDate.getFullYear()}`

                return <div onClick={() => {
                    props.selectedEmployee(employee)
                    // dispatch(selectedEmployee(employee.id))
                }}
                     key={employee.id}
                     className={`employee ${selectedId === employee.id && "selectedEmployee"}`}>
                    <p className="employee__name">{employee.name}</p>
                    <p className="employee__attributes">{employee.position}</p>
                    {employee.birthdate.length > 0 &&  <p className="employee__attributes">{formattedBirthdate}</p>}
                    <p className="employee__attributes">{employee.sex}</p>
                    <p className="employee__attributes">{employee.isFired && "Уволен"}</p>
                    {/*<p className="employee__attributes">{employee.colleagues}</p>*/}
                </div>
            })
            }
        </div>
    )
}

export const ListEmployeesConnected = connect(
    state => ({
        employees: state.employees.all,
        selectedId: state.employees.selectedId
    }),
    dispatch => ({
        selectedEmployee: (employee) => dispatch(selectedEmployee(employee.id))
    })
)(ListEmpoyees)