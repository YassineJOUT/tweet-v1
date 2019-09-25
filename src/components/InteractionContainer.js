/*
  * @file-description : Interacation container component, it renders the input container and the logging component
  * @author{Yassine JOUT} yassine jout@gmail.com
*/
import React from 'react'
import Logging from './Logging'
import InputContainer from './InputContainer'
import '../css/Container.css'


const InteractionContainer = ({phase, onClick,data}) => {
    return (
        <div className="container">
            <InputContainer phase={phase} onClick={onClick} />
            <Logging data={data} phase={phase}/>
        </div>
    );
};


export default InteractionContainer;