import React from 'react'

const Select = (props) => {
    return (
        <select onChange={props.onChange} >
            {props.options.map(option => (
                    
                    <option key={option.value} value={option.value}>{option.value}</option>
            )
            )}
        </select>
    );
}

export default Select;