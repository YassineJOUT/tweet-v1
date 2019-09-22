import React from 'react'
import '../css/Container.css'
import TableResult from './TableResult'
import BarGraph from './BarGraph'

const ResultContainer = () => {
    return (
        <div className="container result">
            <TableResult />
            <BarGraph />
        </div>
    );
};


export default ResultContainer;