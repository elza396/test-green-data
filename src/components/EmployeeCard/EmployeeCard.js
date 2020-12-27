import React from "react";
import './EmployeeCard.css';
import {useDispatch, useSelector} from "react-redux";

export function EmployeeCard() {

    const selectedId = useSelector(state => state.employees.selectedId);
    const employees = useSelector(state => state.employees.all);
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
                    <input required type="text" value={employee.name || ""}/>
                </label>
                <br/>
                <label className="employeeCard__position">
                    Должность<sup>*</sup>
                    <br/>
                    <select value={employee.position} required >
                        <option value="">Выберите должность</option>
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
                    <input type="date" min="1920-01-01" max="2006-12-31" value={employee.birthdate || ""}/>
                </label>
                <br/>
                <label className="employeeCard__sex">
                    Пол
                    <br/>
                    <label><input checked={employee.sex === "male"} name="sex" type="radio" value="male" />Мужской</label>
                    <br/>
                    <label><input checked={employee.sex === "female"} name="sex" type="radio" value="female" />Женский</label>
                </label>
                <br/>
                <label className="employeeCard__isFired">
                    Уволен
                    <input type="checkbox" checked={employee.isFired || ""}/>
                </label>
                <br/>
                <label className="employeeCard__colleagues">
                    Коллеги
                    <br/>
                    <select  >
                        <option value="">Выберите коллег</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </label>
            </form>
        </div>
    )
}