'use client'
import { motion } from 'framer-motion';
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
    <div className={twMerge('flex w-screen   h-fit flex-col items-center justify-start  min-[700px]:pt-[150px] pt-[100px] ',className?className:'')}>
        {/* header  */}
        <motion.div 
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:1}}
        viewport={{once:true,amount:0.3}}
        transition={{duration:1,delay:0.2,type:'spring', stiffness:300}}
        className='flex relative flex-col items-center justify-center  gap-[12px]
        w-fit self-center justify-self-center text-center tracking-tight min-[1200px]:text-[80px] max-[700px]:text-[40px] text-[60px] font-circular font-extrabold'>
            {title[1]}
            {/* top */}
            <p 
            className={twMerge(`absolute min-[1200px]:-top-20 min-[700px]:-top-14 right-1/3  max-[700px]:text-[100px] text-[130px] flex min-[1200px]:text-[200px] 
                max-[700px]:-top-10
            tracking-tight leading-[0.2] font-allison  font-light `,topcolor)}>{title[0]}</p>
            <div className='flex  bg-black opacity-20 backdrop-blur-2xl rounded-lg w-[16px] px-4 py-2 '></div>
            </motion.div>
        {/* text  */}
        <motion.div 
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:1}}
        viewport={{once:true,amount:0.3}}
        transition={{duration:1,delay:0.2,type:'spring'}}
        className='flex w-full items-center justify-center '>
            <div className='flex  text-wrap max-[700px]:w-[90%] w-[60%]  tracking-wider text-center p-1 font-circular font-normal 
             min-[1200px]:text-[26px] text-[20px] leading-[32px] 
            mt-[32px]  mb-[90px]
            max-[900px]:text-[13px]  max-[700px]:tracking-normal max-[700px]:leading-[20px]'>
                {text}
            </div>
        </motion.div>
        {/* children */}
        <div className=' flex min-[700px]:px-[70px] px-[20px] w-full min-[1600px]:w-[70%] h-fit   '>
            {children}
        </div>

    </div>
  )
}
