import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className='newsletter'>
    <h1>
      Get Exclusive Offers & Updates on Your Email
    </h1>
    <p>
      Subscribe to our newsletter and stay updated
    </p>
    <div>
      <input type="email" placeholder='Your Mail Id' />
      <button>Subscribe</button>
    </div>

    </div>
  )
}