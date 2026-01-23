import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assests";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from 'framer-motion';

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (value) => {
    setMenu(value);
    setIsOpen(false);
  };

  // Animation variants
  const navbarVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <motion.div
      className="navbar"
      variants={navbarVariants}
      initial="hidden"
      animate="visible"
    >
      {/* <img src={assets.logo} alt="Logo" /> */}
      <h2>Rajan</h2>
      <img src={assets.nav_underline} alt="underline" />

      <button
        className="nav-toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <img src={isOpen ? assets.menu_close : assets.menu_open} alt="Menu" />
      </button>

      <ul className={`nav-menu ${isOpen ? "open" : ""}`}>
        <li>
          <AnchorLink className="anchor-link"  href="#home">
            <p onClick={() => handleSelect("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p onClick={() => handleSelect("About")}>About me</p>
          </AnchorLink>
          {menu === "About" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Services">
            <p onClick={() => handleSelect("Services")}>Services</p>
          </AnchorLink>
          {menu === "Services" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
            <p onClick={() => handleSelect("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p onClick={() => handleSelect("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>
      </ul>

      <AnchorLink className="anchor-link" offset={50} href="#Contact">
        <div className="nav-connect" onClick={() => handleSelect("Contact")}>Connect with me</div>
      </AnchorLink>
    </motion.div>
  );
};

export default Navbar;
