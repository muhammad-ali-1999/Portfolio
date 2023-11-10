import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {urlFor, client} from '../../client';
import "./About.scss";

// for static about data

// const abouts = [
//   {
//     title: "UI/UX",
//     description:
//       "As a UI/UX developer, my main focus is on creating intuitive and engaging user experiences. I am involved in every stage of the design process to ensure that the end result is a enjoyable experience for the user.",
//     imageUrl: images.uiux,
//   },
//   {
//     title: "WebApp Development",
//     description:
//       "As a web app developer, I specialize in creating dynamic and user-friendly web applications using the latest technologies and programming languages.r",
//     imageUrl: images.webapp,
//   },
// ];
const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
    .then((data) =>  setAbouts(data))
  }, [])
  
  return (
    <div id="about" className="app__about">
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
            <img src={urlFor(about.imgUrl)} alt="about.title" />
            <h2 style={{ marginTop: 20 }}>{about.title}</h2>
            <p style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
