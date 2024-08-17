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
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: true,
      autoplaySpeed: 1000,
    }

  return (
    <Slider {...settings}
    className='flex flex-row  relative min-[1200px]:-mb-10 -mb-60 w-screen max-[1200px]:h-[600px] min-[1200px]:h-fit'>
        {/* {Array(3).fill(0).map((_,idx:number)=>( */}
                  <div
                  key={1}
                  // style={{backgroundImage:`url('./m3.png')`}}
                  className={`flex bg-[url(/bg1.png)] items-center justify-start min-[1200px]:pl-[90px] pl-[50px] w-full hover:cursor-grab min-[1200px]:h-[800px] max-[1200px]:h-[400px] bg-cover bg-center  `}
                  >
                      {/* text  */}
                      <div className='flex w-fit flex-col justify-between '>
                          <p className='min-[1200px]:text-[340px] min-[800px]:text-[300px] font-allison font-normal text-[#FFC700]'>make the right </p>
                          <p className='text-white min-[1200px]:text-[300px] font-extrabold font-circular text-[250px]'>move .</p>
                      </div>
          
                  </div>
                  <div
                  key={2}
                  // style={{backgroundImage:`url('./m3.png')`}}
                  className={`flex bg-[url(/bg1.png)] items-center justify-start min-[1200px]:pl-[90px] pl-[50px] w-full hover:cursor-grab min-[1200px]:h-[800px] max-[1200px]:h-[400px] bg-cover bg-center  `}
                  >
                      {/* text  */}
                      <div className='flex items-start justify-start w-fit flex-col  '>
                          <p className='flex min-[1200px]:text-[340px] min-[800px]:text-[300px] leading-[280px] font-allison font-normal text-[#FFC700]'>make the right </p>
                          <p className='flex text-white min-[1200px]:text-[300px] font-extrabold leading-[220px] font-circular text-[250px]'>move .</p>
                      </div>
          
                  </div>
                  <div
                  key={3}
                  // style={{backgroundImage:`url('./m3.png')`}}
                  className={`flex bg-[url(/bg1.png)] items-center justify-start min-[1200px]:pl-[90px] pl-[50px] w-full hover:cursor-grab min-[1200px]:h-[800px] max-[1200px]:h-[400px] bg-cover bg-center  `}
                  >
                      {/* text  */}
                      <div className='flex w-fit flex-col justify-between '>
                          <p className='min-[1200px]:text-[340px] min-[800px]:text-[300px] font-allison font-normal text-[#FFC700]'>make the right </p>
                          <p className='text-white min-[1200px]:text-[300px] font-extrabold font-circular text-[250px]'>move .</p>
                      </div>
          
                  </div>

    </Slider>
  )
}
export default Carousel

