import React from "react";
import { motion } from "framer-motion";
import { images } from "../../constants";
import "./About.scss";
const abouts = [
  {
    title: "Wordpress Development",
    description:
      "As a WordPress developer, my expertise lies in creating custom themes from scratch that perfectly match my clients brand and vision",
    imageUrl: images.webdev,
  },
  {
    title: "Web Animations",
    description:
      "As a web developer with a passion for animation, I bring websites to life with engaging and interactive animations that captivate visitors and enhance their user experience.",
    imageUrl: images.webdesign,
  },
  {
    title: "UI/UX",
    description:
      "As a UI/UX developer, my main focus is on creating intuitive and engaging user experiences. I am involved in every stage of the design process to ensure that the end result is a enjoyable experience for the user.",
    imageUrl: images.uiux,
  },
  {
    title: "WebApp Development",
    description:
      "As a web app developer, I specialize in creating dynamic and user-friendly web applications using the latest technologies and programming languages.r",
    imageUrl: images.webapp,
  },
];
const About = () => {
  return (
    <div className="app__about">
      <h2 className="about-sec-head">
        Effective design
        <span> leads to the</span>
        <br />
        successful
        <span> business outcomes</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imageUrl} alt="about.title" />
            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
            <p style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
