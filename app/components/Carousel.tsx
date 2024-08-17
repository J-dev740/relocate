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
    className='flex flex-row  max-[400px]:h-[400px] z-20 relative min-[1200px]:-mb-10 -mb-60 max-[400px]:-mb-10
    w-screen max-[1200px]:h-[600px] min-[1200px]:h-fit'>

      {images.map((item:string,idx:number)=>(
            <div
                      key={idx}
                      // style={{backgroundImage:`url('./m3.png')`}}
                      className={`flex flex-row items-end relative  min-[1200px]:pt-[200px] ${item}   justify-start
                       min-[1200px]:pl-[90px] max-[400px]:pl-[20px] pl-[50px]
                        w-full hover:cursor-grab min-[1200px]:h-[800px] max-[1200px]:h-[400px]  bg-cover bg-center  `}
                      >
                          {/* text  */}
                          <div className='absolute inset-0  z-10 bg-gradient-to-tr opacity-45 from-black to-transparent '></div>
                          <div className='absolute min-[700px]:top-1/4 max-[1200px]:top-1/4 top-1/2 left-5 w-fit flex-col  justify-between  z-20'>
                              <p className=' max-[700px]:text-[50px] max-[700px]:leading-[50px] text-[80px] leading-[100px]
                               min-[1200px]:text-[250px] min-[900px]:text-[200px] 
                               min-[1200px]:leading-[200px] font-allison font-normal text-[#FFC700]'>make the right </p>
                              <p className='text-white min-[1200px]:text-[300px] 
                              max-[700px]:text-[50px] max-[700px]:leading-[50px] leading-[90px] text-[85px]
                              font-extrabold  font-circular min-[1200px]:leading-[180px] min-[900px]:text-[250px]'>move .</p>
                          </div>
              
                      </div>

      ))}


                  

    </Slider>
  )
}
export default Carousel
const images=['bg-[url(/bg1.png)]','bg-[url(/bg2.png)]','bg-[url(/bg3.png)]']

