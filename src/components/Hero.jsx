import React from 'react'

const Hero = () => {
  return (
    <div className='hero container'>
        
        <div className='hero-content'>
            <h1>YOUR FEET DESERVE THE BEST</h1>
            <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>

            <div className='hero-btn'>
                <button>Shop Now</button>
                <button className='secondry-btn'>Category</button>
            </div>

            <div className='shopping'>
                <p>Also Available</p>

            </div>

            <div className='shopping-icons'>
                <img src="/images/shops.png" alt="Brand icons" />
            </div>

        </div>

        <div className='hero-image'>
        <img src="/images/shoe_image.png" alt="Shoe Image"/>
        </div>

    </div>
  )
}

export default Hero