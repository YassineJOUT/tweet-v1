import React from 'react';
import Button from './Button'
import Select from './Select'
import '../css/InputContainer.css'


const InputContainer = ({phase,onClick}) => {

    let nextPhase = 1;
    let text = "";
    let subtxt1 = "";
    let subtxt2 = "";

    switch (phase) {
        case 1: text = "HoneyPot"; 
                nextPhase = 2;
                break;
        case 2: text = "CNN"; 
                nextPhase = 3; 
                subtxt1 = "Tweet CNN"; 
                subtxt2 = "Video CNN";
                break;
        case 3: text = "CNN" ;
                subtxt1 = "Detecting malicious Tweets";
                subtxt2 = "Detecting malicious Profiles";   
                nextPhase = 1;
                break;
        default: break;
    }
    return (
        <div className="input-container">
            
            {phase === 1 ?
                (<Button text={text} onClick={() => onClick(nextPhase,0)} />)
            :
                (<div>
                    <h2>{text}</h2>
                    <Button text={subtxt1} onClick={() => onClick(nextPhase,1)} />
                    <Button text={subtxt2} onClick={() => onClick(nextPhase,2)} />
                </div>)
            }
            
        </div>
    );
}

export default InputContainer;  