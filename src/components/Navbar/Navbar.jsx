import React, { useState } from "react";

import { HiMenuAlt1, HiX } from "react-icons/hi";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

import { images } from "../../constants";

import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
      <a href="/"><img src={images.purple} alt="logo" /></a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills","testimonials", "contact"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="p-text icon-li">
        <div />
          <a
            href="https://github.com/muhammad-ali-1999"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="p-text icon-li">
        <div />
          <a
            href="https://www.linkedin.com/in/muhammad-ali-5bb085220/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
      </ul>
      <div className="app__navbar-menu">
        <HiMenuAlt1 onClick={() => setToggle(true)} />
        {toggle && (
          <motion.div
            whileInView={{ x: [0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              <li>
                <a href="#" className="menu-logo">  <img src={images.purple} alt="logo" /></a>
              </li>
              {["home", "about", "work", "skills","testimonials", "contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
