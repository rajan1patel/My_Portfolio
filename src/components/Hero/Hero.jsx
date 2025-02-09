import React from 'react'
import './Hero.css'
import { assets } from '../../assets/assests'
import main_img from '../../assets/main_img.png'
const Hero = () => {
  return (
    <div className='hero'>
        <img src={main_img} alt="" />
        <h1><span>I'm Rajan Patel </span>, frontend Developer based in India</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores molestiae optio tempore fugit alias, ducimus enim!.</p>
        <div className="hero-action">
            <div className="hero-connect">Connect with me</div>
            <div className="hero-resume">My Resume</div>
        </div>
      
    </div>
  )
}

export default Hero
