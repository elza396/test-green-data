import React, {useEffect, useState} from "react";
import './EmployeeCard.css';
import {useDispatch, useSelector} from "react-redux";
import {updateEmployee} from "../../redux/empoyees/actions";

export function EmployeeCard() {

    const selectedId = useSelector(state => state.employees.selectedId);
    const employees = useSelector(state => state.employees.all);
    const employee = employees.find(e => e.id === selectedId);
    const dispatch = useDispatch();

    const [editedEmployee, setEditedEmployee] = useState(null);

    useEffect(() => {
        setEditedEmployee(employee);
    }, [employee]);

    useEffect(() => {
        if (editedEmployee === employee || editedEmployee === null) {
            return
        }
        dispatch(updateEmployee(editedEmployee))
    }, [editedEmployee, dispatch]);

    if (!editedEmployee) {
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
                           value={editedEmployee.name}
                           onChange={(e) => setEditedEmployee({...editedEmployee, name: e.target.value})}/>
                </label>
                <br/>
                <label className="employeeCard__position">
                    Должность<sup>*</sup>
                    <br/>
                    <select
                        value={editedEmployee.position}
                        required
                        onChange={(e) => setEditedEmployee({...editedEmployee, position: e.target.value})}>
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
                        value={editedEmployee.birthdate}
                        onChange={(e) => setEditedEmployee({...editedEmployee, birthdate: e.target.value})}/>
                </label>
                <br/>
                <label className="employeeCard__sex">
                    Пол
                    <br/>
                    <label>
                        <input checked={editedEmployee.sex === "Мужчина"}
                               name="sex"
                               type="radio"
                               value="Мужчина"
                               onChange={(e) => setEditedEmployee({...editedEmployee, sex: e.target.value})}/>
                                  Мужской
                    </label>
                    <br/>
                    <label><input
                        checked={editedEmployee.sex === "Женщина"}
                        name="sex"
                        type="radio"
                        value="Женщина"
                        onChange={(e) => setEditedEmployee({...editedEmployee, sex: e.target.value})}/>
                            Женский
                    </label>
                </label>
                <br/>
                <label className="employeeCard__isFired">
                    Уволен
                    <input
                        type="checkbox"
                        checked={editedEmployee.isFired}
                        onChange={(e) => setEditedEmployee({...editedEmployee, isFired: e.target.checked})}/>
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