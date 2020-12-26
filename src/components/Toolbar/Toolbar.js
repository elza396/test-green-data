import React from "react";
import'./Toolbar.css';
import {Button} from "../Button/Button";


export function Toolbar() {
    return (
        <div className="toolbar">
            <Button >Добавить нового сотрудника</Button>
            <Button >Удалить выбранного сотрудника</Button>
        </div>
    )
}