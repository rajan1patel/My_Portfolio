import React, { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assests";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      {/* <img src={assets.logo} alt="Logo" /> */}
      <h2>Rajan</h2>
      <img src={assets.nav_underline} alt="underline" />

      <ul className="nav-menu">
        <li>
          <AnchorLink className="anchor-link"  href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#About">
            <p onClick={() => setMenu("About")}>About me</p>
          </AnchorLink>
          {menu === "About" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Services">
            <p onClick={() => setMenu("Services")}>Services</p>
          </AnchorLink>
          {menu === "Services" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Portfolio">
            <p onClick={() => setMenu("Portfolio")}>Portfolio</p>
          </AnchorLink>
          {menu === "Portfolio" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>

        <li>
          <AnchorLink className="anchor-link" offset={50} href="#Contact">
            <p onClick={() => setMenu("Contact")}>Contact</p>
          </AnchorLink>
          {menu === "Contact" ? <img src={assets.nav_underline} alt="underline" /> : null}
        </li>
      </ul>

      <div className="nav-connect">Connect with me</div>
    </div>
  );
};

export default Navbar;
