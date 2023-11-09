import React from 'react';
import { easeIn, easeInOut, motion } from 'framer-motion';
import { images } from '../../constants';

import './Header.scss';

const Header = () => {
  return (
    <div className='app__header'>
        <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1]  }}
        transition={{ duration:0.5, ease:'easeIn' }}
        className='app__header-info'>
          <div className='app__header-badge'> 
          <div className='badge-cmp content-main'>
          <div className='header-content-col'>
          <p>Hi, I am</p>
          <h1>MUHAMMAD ALI.</h1>
          <p>A Frontend Web Developer</p>
          <div className='image-group'>
            <img src={images.html} alt="html" />
            <img src={images.css} alt="css" />
            <img src={images.javascript} alt="javascript" />
            <img src={images.sass} alt="sass" />
            <img src={images.react} alt="react" />
          </div>
          </div>
        <motion.div
         whileInView={{ x: [300, 0], opacity: [0, 1]  }}
         transition={{ duration:0.5, ease:'easeIn' }}
        >
        <div className='header-image-col'>
          <img src={images.profile} alt="profile-bg" />
          </div>
        </motion.div>

          </div>
          </div>
        </motion.div>
    </div>
  )
}

export default Header