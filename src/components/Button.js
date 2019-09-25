/*
  * @file-description : Button component 
  * @author{Yassine JOUT} yassine jout@gmail.com
*/
import React from 'react'
import '../css/Button.css'
const Button = ({onClick,disabled,text}) => {
    return (
        <button className="btn" onClick={onClick} disabled={disabled} > {text} </button>
    );
};

export default Button;