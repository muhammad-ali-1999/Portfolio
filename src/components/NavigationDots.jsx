import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
         {["home", "about", "Contact", "Work", "Skills", "Testimonials"].map((item, index) => (
                  <a href={`#${item}`}
                  key={item + index}
                  className='app__navigation-dot'
                  style={active === item ? {backgroundColor: '#581c87'} : { }}>
                  </a>
              ))}
    </div>
  )
}

export default NavigationDots