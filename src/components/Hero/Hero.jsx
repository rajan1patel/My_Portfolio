import React, { useState, useEffect } from 'react';
import './Hero.css';
import main_img from '../../assets/main_img.png';
import { motion } from 'framer-motion';

const Hero = () => {
  const roles = ["Frontend Developer", "Backend Developer", "Full Stack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const delay = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 1, ease: "easeOut" }
    }
  };

  return (
    <motion.section
      className="hero"
      id="home"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.img
        src='/profile-pic (3).png'
        alt="Rajan Patel"
        className="hero-image"
        variants={itemVariants}
      />

      <motion.h1 variants={itemVariants}>
        Hi, I’m <span className="highlight">Rajan Patel </span>
       
        <span className="typing-wrapper">
          <span className="typing-text">{displayText}</span>
          <span className="typing-cursor"></span>
        </span>
      </motion.h1>

      <motion.p variants={itemVariants}>
        I build <strong>secure</strong>, <strong>scalable</strong>, and
        <strong> high-performance</strong> web applications using
        React, Next.js, Node.js, and AWS — turning ideas into production-ready products.
      </motion.p>

      <motion.div className="hero-action" variants={itemVariants}>
        <a href="#Contact" className="hero-connect">Connect with me</a>
        <a href="Rajan_s_Resume (16).pdf" target="_blank" rel="noreferrer" className="hero-resume">
          View Resume
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
