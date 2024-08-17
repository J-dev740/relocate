import React from 'react'
import { IoMdMenu } from "react-icons/io";

export const Navbar = () => {
  return (
    <div className='flex fixed inset-0 bg-white z-30 w-full flex-row justify-between  min-[1200px]:px-[100px] items-center h-[82px] '>
        <p className='flex min-[1200px]:text-[82px] min-[1200px]:leading-[82px] font-allison font-bold text-[#0CA296]'>relocate</p>
        <ul className='flex flex-row items-center min-[1200px]:gap-10  text-[18px] leading-[22px] font-circular font-normal bg-white '>
            <li>Destination</li>
            <li>Deal</li>
            <li>Explore</li>
            <li>Resources</li>
            <li><IoMdMenu/></li>
        </ul>
    </div>
  )
}
