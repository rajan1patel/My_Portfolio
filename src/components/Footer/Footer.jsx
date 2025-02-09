import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assests'
const Footer = () => {
  return (
    <div className='footer' >
      <div className="footer-top">
        <div className="footer-top-left">
            {/* <img src={assets.footer_logo} alt="" />
             */}
              <h2>Rajan</h2>
              <img src={assets.nav_underline} alt="underline" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo amet mollitia beatae deleniti porro repellat!</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
                <img src={assets.user_icon
                } alt="" />
                <input type="email" placeholder=" enter your email"name="" id="" />
            </div>
            <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className='footer-bottom-left'>All rights Reversed</p>
        <div className="footer-bottom-right">
            <p>Terms Of Services</p>
            <p>Terms Of Services</p>
            <p>Terms Of Services</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
