import React from 'react';
import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Card = (props) => {
    const { name, img, founded, students, fees, address, website } = props.university
    return (
        <div className='card-container'>
            <div className="card">
                <div className="card-content">
                    <div className="card-img">
                        <img className='card-img' src={img} alt="" />
                    </div>
                    <div className="card-content-wrapper">
                        <div className="card-description">
                            <h4>{name}</h4>
                            <p><span>Founded :</span> {founded}</p>
                            <p><span>Address :</span> <small>{address}</small></p>
                            <p><span>Students :</span> {students}</p>
                            <p><span>Semister Fee :</span> {fees} TK</p>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => props.handleClick(props.university)} className='cart-btn'> <FontAwesomeIcon className='shopping-icon' icon={faShoppingCart}></FontAwesomeIcon><span className='addTocart'>Add to cart</span></button>
                            {/* <a href={website} target="_blank">Visit</a> */}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;