import React from 'react'
import Swiper from 'swiper';
import "swiper/css/bundle";
type Props = {}

const Banner = (props: Props) => {
  return (
    <div className='mb-3'>
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="https://res.cloudinary.com/tancd/image/upload/v1648896825/banner_1_n2cw01.jpg" />
                </div>
                <div className="swiper-slide">
                    <img src="https://res.cloudinary.com/tancd/image/upload/v1648896825/banner_1_n2cw01.jpg" />    
                </div>
                <div className="swiper-slide">
                    <img src="https://res.cloudinary.com/tancd/image/upload/v1648896825/banner_1_n2cw01.jpg" />    
                </div>
            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
    </div>
  )
}

export default Banner