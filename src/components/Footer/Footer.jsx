import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assests'
import { motion } from 'framer-motion';

const Footer = () => {
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
      className='footer scroll-reveal'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="footer-top"
        variants={containerVariants}
      >
        <motion.div
          className="footer-top-left"
          variants={itemVariants}
        >
            {/* <img src={assets.footer_logo} alt="" />
             */}
              <h2>Rajan</h2>
              <img src={assets.nav_underline} alt="underline" />
            <p>Full Stack Developer crafting secure, scalable solutions. From auth flows to cloud deployments, I build products that matter.</p>
        </motion.div>
       
      </motion.div>
      <hr />
      <motion.div
        className="footer-bottom"
        variants={containerVariants}
      >
        <p className='footer-bottom-left'>© 2026 Rajan Patel. All rights reserved.</p>
        <div className="footer-bottom-right">
            <p>LinkedIn</p>
            <p>GitHub</p>
            <p>Twitter</p>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Footer
