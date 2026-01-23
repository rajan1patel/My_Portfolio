import React from 'react'
import './About.css'
import { assets } from '../../assets/assests'
import main_img from '../../assets/main_img.png'
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 15, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className='about scroll-reveal'
      id='About'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.div
          className="about-title"
          variants={itemVariants}
        >
            <h1>About me</h1>
            <img src={assets.theme_pattern} alt="" />
        </motion.div>
        <motion.div
          className="about-section"
          variants={itemVariants}
        >
            <div className="about-left">
                <img src='\profile-pic (3).png' alt="" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <p>I'm a B.Tech Computer Science student at USICT with 8.4 GPA.   I built secure authentication, optimized APIs, and deployed on AWS EC2.</p>
                    
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>React & Next.js</p> <hr style={{width:"75%"}} /></div>
                    <div className="about-skill"><p>Node.js & Express</p> <hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>AWS & DevOps</p> <hr style={{width:"70%"}} /></div>
                    <div className="about-skill"><p>MongoDB & SQL</p> <hr style={{width:"75%"}} /></div>
                </div>
            </div>
        </motion.div>
        <motion.div
          className="about-achivements"
          variants={itemVariants}
        >
            <div className="about-achivement">
                <h1>8.4</h1>
                <p>CGPA AT USICT</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>3+</h1>
                <p>PRODUCTS SHIPPED</p>
            </div>
            <hr />
            <div className="about-achivement">
                <h1>2</h1>
                <p>AWARDS WON</p>
            </div>
        </motion.div>

    </motion.div>
  )
}

export default About
