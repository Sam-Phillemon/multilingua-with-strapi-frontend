import React from 'react'
import coffeeImg from '../../images/image3.jpg'
import '../Banner/style.css'


const Banner = () => {
  console.log('Inside Banner')
  return(
    <div className="banner-container">
      <div className="image-wrapper">
        <img src={coffeeImg} alt="coffee" className="banner-image"/>
      </div>
    </div>
  )
} 

export default Banner;