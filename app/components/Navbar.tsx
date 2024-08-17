'use client';
import React, { useState } from 'react'
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
    const[isOpen,setIsOpen]=useState(false);
  return (
    <div className='flex absolute top-0 bg-white z-30 w-full flex-row justify-between  min-[1200px]:px-[100px] px-[50px] items-center h-[50px]  min-[1200px]:h-[82px] '>
        <p className='flex min-[1200px]:text-[82px] text-[30px] leading-[40px] min-[1200px]:leading-[82px] font-allison font-bold text-[#0CA296]'>relocate</p>
        <div className='flex flex-row gap-4'>
        <ul className='flex max-[600px]:hidden flex-row items-center min-[1200px]:gap-10  gap-3 text-[18px] leading-[22px] font-circular font-normal bg-white '>
            <li>Destination</li>
            <li>Deal</li>
            <li>Explore</li>
            <li>Resources</li>
        </ul>
            <div 
            onClick={()=>setIsOpen(!isOpen)}
            className=' flex pt-[4px] hover:scale-110'><IoMdMenu/></div>


        </div>
        {/* mobile menu */}

{    isOpen && <ul className='flex absolute items-start  top-10  right-0 m-2 min-[600px]:hidden flex-col  justify-center   gap-3 min-[400px]:text-[18px] text-[14px]   backdrop-blur-lg  leading-[22px] font-circular font-normal  bg-graident-to-r from-white to-transparent '>
            <li className='flex   hover:scale-110 transition-transform duration-300 ease-linear hover:cursor-pointer bg-gradient-to-r w-full from-white via-white to-transparent p-2 hover:shadow-md hover:ring-1 hover:ring-black rounded-md '>Destination</li>
            <li className='flex hover:scale-110 transition-transform duration-300 ease-linear hover:cursor-pointer bg-gradient-to-r w-full from-white via-white to-transparent p-2 hover:shadow-md hover:ring-1 hover:ring-black rounded-md '>Deal</li>
            <li className='flex hover:scale-110 transition-transform duration-300 ease-linear hover:cursor-pointer bg-gradient-to-r w-full from-white via-white to-transparent p-2 hover:shadow-md hover:ring-1 hover:ring-black rounded-md '>Explore</li>
            <li className='flex hover:scale-110 transition-transform duration-300 ease-linear hover:cursor-pointer bg-gradient-to-r w-full from-white via-white to-transparent p-2 hover:shadow-md hover:ring-1 hover:ring-black rounded-md '>Resources</li>
        </ul>}

    </div>
  )
}
