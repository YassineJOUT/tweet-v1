import React from 'react';
import Button from './Button'
import Select from './Select'
import '../css/InputContainer.css'

const InputContainer = (props) => {
    return (
        <div className="input-container">
            <Button text="Honeypot"/>
            <Button text="CNN"/>
            <Button text="Recommandation" /> 
        </div>
    );
}

export default InputContainer;  