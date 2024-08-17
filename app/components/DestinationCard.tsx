'use client';
import React from 'react'

interface DestinationCardProps{
    img:string;
    loc:string;
    name:string;

}
export const DestinationCard = ({img,loc,name}:DestinationCardProps) => {
  return (
    <div 
    style={{backgroundImage:`url('${img}')`}}
    className='flex relative w-full h-[553px] bg-cover bg-center text-white bg-no-repeat max-w-[310px]  rounded-[10px]  flex-col items-center justify-end'>
        {/*  overlay*/}
        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-[10px]'></div>
        {/* location & name */}
        <div className='flex flex-col items-center z-10 justify-center  pb-[100px] font-circular font-bold leading-[50px] text-[40px] text-center '>
            <p>{loc}</p>
            <p className='text-[14px] font-medium tracking-wider font-circular  '>{name}</p>
        </div>
    </div>
  )
}
