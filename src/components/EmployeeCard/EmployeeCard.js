import React from "react";
import './EmployeeCard.css';
import {connect} from "react-redux";
import {updateEmployee} from "../../redux/empoyees/actions";

class EmployeeCard extends React.Component{
    render () {
        const employees = this.props.employees;
        const selectedId = this.props.selectedId;
        const employee = employees.find(e => e.id === selectedId);
        if (!employee) {
            return null;
        }
        return (
            <div className="employeeCard">
                <form className="employeeCard__form">
                    <label className="employeeCard__name">
                        ФИО<sup>*</sup>
                        <br/>
                        <input required
                               type="text"
                               value={employee.name}
                               onChange={(e) => this.props.updateEmployee({...employee, name: e.target.value})}
                        />
                    </label>
                    <br/>
                    <label className="employeeCard__position">
                        Должность<sup>*</sup>
                        <br/>
                        <select
                            value={employee.position}
                            required
                            onChange={(e) => this.props.updateEmployee({...employee, position: e.target.value})}
                        >
                            <option disabled value="">Выберите должность</option>
                            <option value="Директор">Директор</option>
                            <option value="Заместитель директора">Заместитель директора</option>
                            <option value="Разработчик">Разработчик</option>
                            <option value="Уборщик">Уборщик</option>
                            <option value="Юрист">Юрист</option>
                        </select>
                    </label>
                    <br/>
                    <label className="employeeCard__birthdate">
                        Дата рождения
                        <br/>
                        <input
                            type="date"
                            min="1920-01-01"
                            max="2006-12-31"
                            value={employee.birthdate}
                            onChange={(e) => this.props.updateEmployee({...employee, birthdate: e.target.value})}
                        />
                    </label>
                    <br/>
                    <label className="employeeCard__sex">
                        Пол
                        <br/>
                        <label>
                            <input checked={employee.sex === "Мужчина"}
                                   name="sex"
                                   type="radio"
                                   value="Мужчина"
                                   onChange={(e) => this.props.updateEmployee({...employee, sex: e.target.value})}
                            />
                            Мужской
                        </label>
                        <br/>
                        <label><input
                            checked={employee.sex === "Женщина"}
                            name="sex"
                            type="radio"
                            value="Женщина"
                            onChange={(e) => this.props.updateEmployee({...employee, sex: e.target.value})}
                        />
                            Женский
                        </label>
                    </label>
                    <br/>
                    <label className="employeeCard__isFired">
                        Уволен
                        <input
                            type="checkbox"
                            checked={employee.isFired}
                            onChange={(e) => this.props.updateEmployee({...employee, isFired: e.target.checked})}
                        />
                    </label>
                    {/*<br/>*/}
                    {/*<label className="employeeCard__colleagues">*/}
                    {/*    Коллеги*/}
                    {/*    <br/>*/}
                    {/*    <select*/}
                    {/*        multiple*/}
                    {/*        onChange={(e) => {*/}
                    {/*            const selected = Array.from(e.target.options).filter(option => option.selected).map(o => +o.value)*/}
                    {/*            setEditedEmployee({...editedEmployee, colleagues: selected})*/}
                    {/*        }}>*/}
                    {/*        <option disabled value="">Выберите коллег</option>*/}
                    {/*        {employees.map(employee => (*/}
                    {/*            <option value={employee.id}>{employee.name}</option>*/}
                    {/*        ))}*/}
                    {/*    </select>*/}
                    {/*</label>*/}
                </form>
            </div>
        )
    }
}

export const EmployeeCardConnected = connect(
    state => ({
        employees: state.employees.all,
        selectedId: state.employees.selectedId
    }),
    dispatch => ({
        updateEmployee: (employee) => dispatch((updateEmployee(employee)))
    })
)(EmployeeCard)