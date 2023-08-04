import React from 'react'
import './Hero.css'
import Crypto from '../assets/hero-img.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="left">
            <p>Buy & Sell Crypto 24/7 </p>
            <h1>Invest in Cryptocurrency with Your IRA</h1>
           <p>Buy, Sell,and store hundreds of cryptocurrencies</p>
           <div className="input-container">
            <input type="email"placeholder='Enter Your email...' />
            <button className='btn'>Learn More</button>
           </div>
        </div>
       
       <div className="right">
        <div className="img-container">
            <img src={Crypto} alt="" />
        </div>
       </div>
      </div>
    </div>
  )
}

export default Hero