import React from 'react'
import './Popular.css'
// import { offers } from "../Offers/Offers";
import data_product from '../Assets/data'
import Item  from '../items/item'

const Popular = () => {
    return (
        <div className="container">
        <div className='popular'>
            <h1>Popular IN Women</h1>
            <hr />
            <div className="popular-item" id='popular'>
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
        </div>
    )
}
export default Popular
