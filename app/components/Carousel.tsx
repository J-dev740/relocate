'use client';
import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

const Carousel:React.FC = () => {
    const settings={
      dots: false,
      // arrows:true,
      infinite: true,
      speed: 1500,
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
    }

  return (
    <Slider {...settings}
    className='flex flex-row  relative  w-screen h-[900pxpx]   bg-slate ring-2'>
        <div
        key={1}
        style={{backgroundImage:'url(`./bg1.png)'}}
        className='flex w-full h-[813px] '
        >
            {/* text  */}
            <div>
                <p>hello world </p>
            </div>

        </div>
        <div
        key={2}
        // style={{backgroundImage:'url(`bg1.png)'}}
        className='flex w-full h-[813px] bg-[url(/bg1.png)]  '
        >
            {/* text  */}
            <div>
                <p>hello world </p>
            </div>

        </div>
        <div
        key={3}
        // style={{backgroundImage:'url(`./bg1.png`)'}}
        className='flex w-full h-[400px] bg-cover bg-center bg-[url(/bg1.png)] '
        >
            {/* text  */}
            <div>
                <p>hello world </p>
            </div>

        </div>

    </Slider>
  )
}
export default Carousel

