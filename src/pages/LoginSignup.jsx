import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Your Email' />
          <input type="password" placeholder='Password' />

        </div>
        <button>Continue</button>
        <div className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </div>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id='' />
          By Continuing, I agree to the terms of use and privacy policy.
        </div>
      </div>
    </div>
  )
}

