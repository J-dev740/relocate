'use client'
import React from 'react'
import { twMerge } from 'tailwind-merge';


interface SectionProps{
    children:React.ReactNode;
    className?:string;
    title:string[];
    text:string;
    // textcolor:string;
    topcolor:string;
}

export const Section =({children,className,title,text,topcolor}:SectionProps) => {
  return (
    <div className={twMerge('flex w-screen   h-fit flex-col items-center justify-start  pt-[150px] ',className?className:'')}>
        {/* header  */}
        <div className='flex relative flex-col items-center justify-center  gap-[12px]
        w-fit self-center justify-self-center text-center tracking-tight text-[80px] font-circular font-extrabold'>
            {title[1]}
            {/* top */}
            <p 
            className={twMerge(`absolute min-[1200px]:-top-20 -top-14 right-1/3  flex text-[200px] max-[1200px]:text-[170px] tracking-tight leading-[0.2] font-allison    font-light `,topcolor)}>{title[0]}</p>
            <div className='flex  bg-black opacity-20 backdrop-blur-2xl rounded-lg w-[16px] px-4 py-2 '></div>
            </div>
        {/* text  */}
        <div className='flex w-full items-center justify-center '>
            <div className='flex  text-wrap w-[60%]  tracking-wider text-center p-1 font-circular font-normal  min-[1200px]:text-[26px] text-[20px] leading-[32px] 
            mt-[32px]  mb-[90px] '>
                {text}
            </div>
        </div>
        {/* children */}
        <div className=' flex px-[70px] w-full min-[1600px]:w-[70%] h-fit   '>
            {children}
        </div>

    </div>
  )
}
