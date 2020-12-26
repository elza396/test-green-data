import React from "react";
import './Button.css';


export function Button(props) {
    return (
        <button className="button" >{props.children}</button>
    )
}