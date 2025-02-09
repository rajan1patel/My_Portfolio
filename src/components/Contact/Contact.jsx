import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assests'
const Contact = () => {
  return (
    <div className='contact' id='Contact'>
        <div className="contact-title">
            <h1>Getin touch</h1>
            <img src={assets.theme_pattern} alt="" />
        </div>
        <div className="contact-section">
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel voluptate magni id minima ullam dignissimos!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={assets.mail_icon} alt="" />
                    <p>rp@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={assets.call_icon} alt="" />
                    <p>+9111111111</p>
                    </div>
                    <div className="contact-detail">
                        <img src={assets.location_icon} alt="" />
                        <p>USA</p>
                    </div>
                </div>
            </div>
            <form action="" className='contact-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter your name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter your email' />
                <label htmlFor="">Write your Message</label>
                <textarea name="message" rows="8" placeholder='enter your message' id=""></textarea>
                <button  className='contact-submit' type='Submit'>Submit</button>
            </form>
        </div>
      
    </div>
  )
}

export default Contact
