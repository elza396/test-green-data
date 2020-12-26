import React from "react";
import './EmployeeCard.css';

export function EmployeeCard() {
    return (
        <div className="employeeCard">
            <form className="employeeCard__form">
                <label className="employeeCard__name">
                    ФИО<sup>*</sup>
                    <br/>
                    <input required type="text"/>
                </label>
                <br/>
                <label className="employeeCard__position">
                    Должность<sup>*</sup>
                    <br/>
                    <select required >
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
                    <input type="date" min="1920-01-01" max="2006-12-31" />
                </label>
                <br/>
                <label className="employeeCard__sex">
                    Пол
                    <br/>
                    <input name="sex" type="radio" value="male" id="sexMale"/><label for="sexMale">Мужской</label>
                    <br/>
                    <input name="sex" type="radio" value="female" id="sexFemale"/><label for="sexFemale">Женский</label>
                </label>
                <br/>
                <label className="employeeCard__isFired">
                    Уволен
                    <input type="checkbox" value="male" />
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