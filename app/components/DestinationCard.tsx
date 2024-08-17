'use client';
import React from 'react'
import {motion} from 'framer-motion'

interface DestinationCardProps{
    img:string;
    loc:string;
    name:string;

}
export const DestinationCard = ({img,loc,name}:DestinationCardProps) => {
  return (
    <motion.div 
    // initial={{scale:0.5,opacity:1}}
    // // whileInView={{y:0,opacity:1}}
    // whileHover={{scale:0.1,opacity:[0,1]}}
    // // viewport={{once:true,amount:0.3}}
    // transition={{duration:1.8,type:'spring'}}
    style={{backgroundImage:`url('${img}')`}}
    className='flex relative w-full min-[1200px]:h-[553px] hover:scale-110 t h-[300px]  bg-cover bg-center transition-all duration-300 ease-in-out  text-white bg-no-repeat max-w-[310px]  rounded-[10px]  flex-col items-center justify-end'>
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex flex-col items-center z-10 justify-center  min:[1200px]:pb-[100px] pb-[50px]  min:[1200px]:leading-[10px] font-circular font-bold leading-[50px] min-[1200px]:text-[40px] text-[20px] text-center '>
            <p>{loc}</p>
            <p className='text-[14px] font-medium tracking-wider font-circular  '>{name}</p>
        </div>
    </motion.div>
  )
}
