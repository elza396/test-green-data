import React from "react";
import './Button.css';


export function Button(props) {
    return (
        <button onClick={props.onClick} className={`button ${props.className}`}>{props.children}</button>
    )
}