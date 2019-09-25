/*
  * @file-description : Bar chart component that displays a bar chart with spam/no spam count
  * @author{Yassine JOUT} yassine jout@gmail.com
*/
import React from 'react'
import '../css/Graph.css'
import { Bar } from 'react-chartjs-2';

const BarGraph = ({data}) => {
    //parse data
    let jsonData = JSON.parse(data);
    // figure out which button is clicked
    let whichCase = (jsonData) ? 
                (jsonData.hasOwnProperty('users') ? 1 
                    : 
                    (jsonData.hasOwnProperty('Reteweet') ? 2 
                    : -1)) 
                : -1;
    // get data array
    let spamData = (jsonData) ?
                 ((jsonData.spam !== undefined) ? [jsonData.spam,jsonData.notspam]
                    : null) 
                : null;
                
    let chartData = null;

    if (spamData){

        chartData = {
            labels : ['spam', 'not spam'],
            datasets : [{
                label : 'count',
                data : spamData,
                backgroundColor : [
                'rgba(130,99,132,0.6)',
                'rgba(54,10,232,0.6)']
            }]
        }
    }
    return (
        <div className="graph">
            {
                (whichCase === -1) ? (<h1>Spam count Graph</h1>) : ((whichCase === 1) ? (<h1> Malicious tweets</h1>)  : (<h1> Malicious profiles</h1>))
            }
            { (chartData) ? (<Bar data={chartData} options={{maintainAspectRatio:true}}/>) : 
                (<h4 className="danger">
                    No data to display
                    </h4>
                    )
            }
        </div>
    );
}
export default BarGraph;