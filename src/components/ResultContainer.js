import React from 'react'
import '../css/Container.css'
import TableResult from './TableResult'
import BarGraph from './BarGraph'

const ResultContainer = ({phase, data}) => {
    return (
        <div className="container result">
            <TableResult phase={phase} data={data}/>
            <BarGraph  phase={phase} data={data}/>
        </div>
    );
};


export default ResultContainer;