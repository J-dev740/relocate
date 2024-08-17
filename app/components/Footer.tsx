import React from 'react'
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitter } from 'react-icons/io';
import { IconType } from 'react-icons/lib';

export const Footer = () => {
  return (
    <div
    className='flex pb-[70px] relative w-full h-[810px] bg-cover bg-center bg-[#003531] '
    style={{backgroundImage:`url('./footer.png')`}}
    >
        <div className='absolute inset-x-0 z-10 bg-gradient-to-b from-white via-white to-transparent  w-full h-[232px]'>

        </div>
            <div className='flex flex-row w-full  p-8 justify-start  gap-36 items-end '>
                <Card heading='Legal' list={['MSA Self Managed','Privacy','GDPR','Guidelines for Law Enforcement','Terms of Service','Manage Cookies']}/>
                <Card heading='Product' list={['MSA Self Managed','Privacy','GDPR','Guidelines for Law Enforcement','Terms of Service','Manage Cookies']}/>
                <Card heading='Company' list={['MSA Self Managed','Privacy','GDPR','Guidelines for Law Enforcement','Terms of Service','Manage Cookies']}/>
                <Card heading='Legal' list={[IoLogoGithub,IoLogoFacebook,IoLogoTwitter,IoLogoInstagram]}/>

            </div>
    </div>
  )
}

interface cardProps{
    heading:string;
    list:string[] | IconType[];
}

const Card:React.FC<cardProps>=({heading,list})=>{

    const isString = (item: any): item is string => {
        return typeof item === 'string';
      };
    return(
        <div className='flex flex-col items-start justify-start gap-[20px]'>
            {/* heading */}
            <div className='flex  text-[16px] text-white font-circular font-bold '>{heading}</div>
            <ul className='flex flex-col items-start justify-center '>
            {list.map((Item:any,idx)=>{
                if(isString(Item)) return(
                    <li  className='text-white text-[16px] font-normal font-circular gap-1 '
                    key={idx}>{Item}</li>
                )
                else return(
                    <li  className='text-white text-[20px] mb-[18px] font-normal font-circular gap-1 '
                    key={idx}><Item/></li>
                )
})}

            </ul>

        </div>
    )
}
