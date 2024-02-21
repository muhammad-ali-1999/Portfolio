import React, { useState, useEffect } from "react";

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

import { urlFor, client } from "../../client";

import "./Testimonial.scss";

const Testimonial = () => {
  const [brands, setBrands] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setcurrentIndex] = useState(0);
  const handleClick = (index) => {
    setcurrentIndex(index);
  };


  useEffect(() => {
    const brandsQuery = '*[_type == "testimonials"]';
    const query = '*[_type == "brands"]';

    client.fetch(query).then((data) => {
      setBrands(data);
    });
    
    client.fetch(brandsQuery).then((data) => {
      setTestimonials(data);
    });
  }, []);

  const test = testimonials[currentIndex];

  return (
    <>
      <h2 id="testimonials" className="testi-sec-head">
        <span>Client</span> Testimonials
      </h2>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img
              src={urlFor(test.imageurl)}
              alt="testimonials"
            />
            <div className="app__testimonial-content">
              <p>{test.feedback}</p>
              <div>
              <h4>{test.name}</h4>
              <h5>{test.company}</h5>
            </div>
            </div>
        
          </div>
          <div className="app__testimonial-btns app__flex">
        <div className="app__flex" onClick={() => handleClick( currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1 ) }>
        <HiChevronLeft />
        </div>
        <div className="app__flex" onClick={() => handleClick( currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1 ) }>
        <HiChevronRight />
        </div>
          </div>
        </>
      )}
      <div  className="app__testimonial-brands">
        {brands.map((brands) => (
       
       <motion.div
       whileInView={{ opacity : [0, 1] }}
       transition={{ duration : 0.5, type : 'tween' }}
       key={brands._id}
       className="app__brands-img"
       >
        <img src={urlFor(brands.imgUrl)} alt={brands.name} />
       </motion.div>   
       
       ))}
      </div>
    </>
  );
};

export default Testimonial;
