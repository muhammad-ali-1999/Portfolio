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
        <img src={images.purple} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {["Home", "About", "Contact", "Work", "Skills"].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
        <li className="p-text icon-li">
        <div />
          <a
            href="https://github.com/Abdul-Rafay-2002"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li className="p-text icon-li">
        <div />
          <a
            href="https://www.linkedin.com/in/abdul-rafay-3bb521231/"
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
              {["Home", "About", "Contact", "Work", "Skills"].map((item) => (
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
