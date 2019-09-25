/*
  * @file-description : Result container renders the tableresult component along side the bargraphe component
  * @author{Yassine JOUT} yassine jout@gmail.com
*/
import React from 'react'
import '../css/Container.css'
import TableResult from './TableResult'
import BarGraph from './BarGraph'

const ResultContainer = ({phase, data}) => {
    return (
        <div className="container result">
            <TableResult phase={phase} data={data}/>
            <BarGraph data={data}/>
        </div>
    );
};


export default ResultContainer;