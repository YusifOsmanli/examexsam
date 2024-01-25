import React from 'react'
import "./Section1.scss"

const Section1 = () => {
  return (
    <div className='section1__div '>
        <div className='section1__hp'>
            <h1>M A D E W E L L</h1>
            <p>Summer Collection</p>
            <div className='section1__price'>
            <h3>1,499</h3>
            <h3><span><del>1,999</del></span></h3>
            </div>
            <div className='section1_button'>
                <button className='button1'> Shop Now</button>
                <button className='button2'> Shop Now</button>
            </div>
        </div>
    <div>
        <img className='section1__img' src="https://preview.colorlib.com/theme/dealers/images/person_1.jpg.webp" alt="" />
    </div>
    </div>
  )
}

export default Section1