import React from 'react';
import './Result.css'

const Result = () => {
    return (
        <div className='result-container'>
            <h3>Result</h3>
            <div className="result-content">
                <p className='quantity'><small>Number of University <br /> <span>1</span> </small> </p>
                <p className='std'>Total Student <br /> <span>#2196f3</span></p>
                <p className='std'>Total Semister Fee <br /><span>#2196f3</span></p>
            </div>
        </div>
    );
};

export default Result;