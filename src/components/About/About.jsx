import React from 'react'
import './About.css'
import { assets } from '../../assets/assests'
import main_img from '../../assets/main_img.png'
const About = () => {
  return (
    <div className='about' id='About'>
        <div className="about-title">
            <h1>About me</h1>
            <img src={assets.theme_pattern} alt="" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src={main_img} alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias, aperiam!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, alias.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML&CSS</p> <hr style={{width:"50%"}} /></div>
                    <div className="about-skill"><p>React js</p> <hr style={{width:"30%"}} /></div>
                    <div className="about-skill"><p>Javascript</p> <hr style={{width:"40%"}} /></div>
                    <div className="about-skill"><p>Nextjs</p> <hr style={{width:"100%"}} /></div>
                </div>
            </div>
        </div>
        <div className="about-achivements">
            <div className="about-achivement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>90+</h1>
                <p>PROJECT COMPLETED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
            </div>
        </div>
      
    </div>
  )
}

export default About
