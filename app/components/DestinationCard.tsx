'use client';
import React from 'react'
import {motion} from 'framer-motion'

interface DestinationCardProps{
    img:string;
    loc:string;
    name:string;
    idx:number;

}
export const DestinationCard = ({img,loc,name,idx}:DestinationCardProps) => {
  return (
    <div className='flex hover:scale-110 w-full h-full transition-all duration-300 ease-in-out'>
    <motion.div 
    initial={{ y:-100,scale:0.7,opacity:0}}
    whileInView={{ y:0,scale:1,opacity:1}}
    // whileHover={{scale:1.1,opacity:1}}
    viewport={{once:true,amount:0.5}}
    transition={{duration:0.1+idx,type:'spring'}}
    style={{backgroundImage:`url('${img}')`}}
    className='flex relative w-full min-[1200px]:h-[553px] min-[700px]:h-[300px] h-[200px] bg-cover bg-center transition-all duration-300 ease-in-out  text-white bg-no-repeat max-w-[310px]  rounded-[10px]  flex-col items-center justify-end'>
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex flex-col  items-center z-10 justify-center 
         min:[1200px]:pb-[100px] min-[700px]:pb-[50px] pb-[20px] 
         max-[1200px]:leading-[30px] font-circular font-bold leading-[50px] min-[1200px]:text-[40px] min-[700px]:text-[20px] text-[14px] text-center '>
            <p >{loc}</p>
            <p className='min-[700px]:text-[14px] text-[7px] font-medium tracking-wider font-circular  uppercase  '>{name}</p>
        </div>
    </motion.div>

    </div>
  )
}
