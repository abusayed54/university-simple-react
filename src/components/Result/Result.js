import React from 'react';
import { unstable_concurrentAct } from 'react-dom/cjs/react-dom-test-utils.production.min';
import './Result.css'

const Result = (props) => {
    const { result } = props;
    const totalStudents = result.reduce((previous, current) => previous + current.students, 0)

    const totalFees = result.reduce((previous, current) => previous + current.fees, 0)
    // for (const university of result) {
    //     const reducer = (previous, current) => previous + current.students
    //     const totalStudents = university.reduce(reducer, 7)
    //     console.log(totalStudents)

    // }
    return (
        <div className='result-container'>
            <h3>Result</h3>
            <div className="result-content">
                <p className='quantity'><small>Number of University <br /> <span>{props.result.length}</span> </small> </p>
                <p className='std'>Total Student <br /> <span>{totalStudents}</span></p>
                <p className='std'>Total Semister Fee <br /><span>{totalFees}</span></p>
            </div>
        </div>
    );
};

export default Result;