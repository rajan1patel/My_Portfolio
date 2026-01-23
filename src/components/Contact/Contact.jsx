import React from 'react'
import './Contact.css'
import { assets } from '../../assets/assests'
import { motion } from 'framer-motion';

const Contact = () => {
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
      className='contact scroll-reveal'
      id='Contact'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.div
          className="contact-title"
          variants={itemVariants}
        >
            <h1>Getin touch</h1>
            <img src={assets.theme_pattern} alt="" />
        </motion.div>
        <motion.div
          className="contact-section"
          variants={containerVariants}
        >
            <div className="contact-left">
                <h1>Let's Talk</h1>
                <p>I'm open to full-stack roles, freelance projects, or collaboration. Whether you need a web app or want to connect, reach out!</p>
                <div className="contact-details">
                    <div className="contact-detail">
                    <img src={assets.mail_icon} alt="" />
                    <p>rajanpatel.01000@gmail.com</p>
                    </div>
                    <div className="contact-detail">
                    <img src={assets.call_icon} alt="" />
                    <p>+918969314236</p>
                    </div>
                    <div className="contact-detail">
                        <img src={assets.location_icon} alt="" />
                        <p>Delhi, India</p>
                    </div>
                </div>
            </div>
            <motion.form
              action="https://api.web3forms.com/submit"
              method="POST"
              className='contact-right'
              variants={itemVariants}
            >
                <input type="hidden" name="access_key" value={import.meta.env.VITE_WEB3FORMS} />
                <label htmlFor="">Your Name</label>
                <input type="text" name="name" placeholder='Enter your name' required />
                <label htmlFor="">Your Email</label>
                <input type="email" name="email" placeholder='Enter your email' required />
                <label htmlFor="">Write your Message</label>
                <textarea name="message" rows="8" placeholder='Enter your message' required></textarea>
                <button className='contact-submit' type='submit'>Submit</button>
            </motion.form>
        </motion.div>

    </motion.div>
  )
}

export default Contact
