import React from 'react'
import Swiper from 'swiper';
import "swiper/css/bundle";
type Props = {}

const Banner = (props: Props) => {
  return (
    <div>
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                    <img src="https://static.cdnno.com/storage/topbox/f32aeebc55f3cff0e095634cdefa9d64.jpg" />
                </div>
                <div className="swiper-slide">
                    <img src="https://static.cdnno.com/storage/topbox/53696630fb0c72563da79720b565b08b.jpg" />    
                </div>
                <div className="swiper-slide">
                    <img src="https://static.cdnno.com/storage/topbox/8da8e131fca14cbd9b65154d8d2e20d0.jpg" />    
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