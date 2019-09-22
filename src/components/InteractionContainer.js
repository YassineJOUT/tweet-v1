import React from 'react'
import Logging from './Logging'
import InputContainer from './InputContainer'
import '../css/Container.css'


const InteractionContainer = (props) => {
    return (
        <div className="container">
            <InputContainer />
            <Logging />
        </div>
    );
};


export default InteractionContainer;