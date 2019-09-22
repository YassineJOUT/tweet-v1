import React from 'react'
import '../css/Button.css'
const Button = (props) => {
    return (
        <button className="btn" onClick={props.onClick} > {props.text} </button>
    );
};

export default Button;