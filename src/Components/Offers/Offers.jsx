import React from 'react'
import './Offers.css'
import exclusive_image from '../Assets/exclusive_image.png'
import { Link } from 'react-router-dom'

export const Offers = () => {
    return (
        <div>    
            <div className='container'>
                <div className="row offers">
                    <div className="col-6 offers-left">
                        <h1>Exclusive </h1>
                        <h1>Offer For You </h1>
                        <p>Our Best Selling Products</p>
                        <button><Link to="#popular"></Link>Check Now</button>
                    </div>
                    <div className="col-6 offers-right">
                        <img src={exclusive_image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
