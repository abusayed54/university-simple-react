import React from 'react';
import './Result.css'

const Result = (props) => {
    const { students, fees } = props.result;
    return (
        <div className='result-container'>
            <h3>Result</h3>
            <div className="result-content">
                <p className='quantity'><small>Number of University <br /> <span>{props.result.length}</span> </small> </p>
                <p className='std'>Total Student <br /> <span>{students}</span></p>
                <p className='std'>Total Semister Fee <br /><span>{fees}</span></p>
            </div>
        </div>
    );
};

export default Result;