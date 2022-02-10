import React, { useEffect, useState } from 'react';
import Card from './../Card/Card'
import Result from '../Result/Result';
import './Show.css'

const Show = () => {
    const [universities, setUniversities] = useState([])
    useEffect(() => {
        fetch('./universities.JSON')
            .then(res => res.json())
            .then(data => setUniversities(data))
    }, [])
    return (
        <div className='show-body'>
            <div className="show-container">
                <div className="card-wrapper">
                    {
                        universities.map(university => <Card
                            key={university.id}
                            university={university}
                        ></Card>)
                    }

                </div>
                <div className="result-wrapper">
                    <Result></Result>
                </div>
            </div>
        </div>
    );
};

export default Show;