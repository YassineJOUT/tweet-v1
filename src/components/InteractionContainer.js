import React from 'react'
import Logging from './Logging'
import InputContainer from './InputContainer'
import '../css/Container.css'


const InteractionContainer = ({phase, onClick,data}) => {
    return (
        <div className="container">
            <InputContainer phase={phase} onClick={onClick} />
            <Logging data={data}/>
        </div>
    );
};


export default InteractionContainer;