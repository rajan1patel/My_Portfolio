import React from 'react'

import './Mywork.css'
import mywork_data from '../../assets/mywork_data'
import { assets } from '../../assets/assests'
import { motion } from 'framer-motion';

const MyWork = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
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

  const workItemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 15
      }
    }
  };

  return (
    <motion.div
      className='mywork scroll-reveal'
      id='Portfolio'
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
        <motion.div
          className="mywork-title"
          variants={itemVariants}
        >
            <h1>My Latest Work</h1>
            {/* <img src="" alt="" /> */}
        </motion.div>
        <motion.div
          className="mywork-container"
          variants={containerVariants}
        >
            {mywork_data.map((work,index)=>{
                return <motion.a
                  key={index}
                  href={work.w_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={workItemVariants}
                  whileHover={{
                    scale: 1.15,
                    y: -10,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  style={{ zIndex: 1, display: 'block' }}
                >
                  <img src={work.w_img} alt={work.w_name} />
                </motion.a>

            })}
        </motion.div>
        <motion.a
          href="https://github.com/rajan1patel?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="mywork-showmore"
          variants={itemVariants}
        >
            <p>Show MORE</p>
          <img src={assets.arrow_icon} alt="" />
        </motion.a>

    </motion.div>
  )
}

export default MyWork
