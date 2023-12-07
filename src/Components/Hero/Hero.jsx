import React from 'react'
import './hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'

export const Hero = () => {
  return (
    <div>
      <div className='hero'>
        <div className='container'>
          <div className="row ">
            <div className="col-6 left-side">
              <h2>New Arrivals only</h2>
              <span className='mt-3'>new<img src={hand_icon} alt="" className='handimg' /></span>
              <p>Collections</p>
              <p>for everyone</p>
              <div className="hero-latest-btn">
                <div>Latest Collection</div>
                <img src={arrow_icon} alt="" />
              </div>

            </div>
            <div className="col-6 right-side">
              <img src={hero_image} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Hero