import React from 'react'

export const Footer = () => {
  return (
    <div
    className='flex relative w-full h-[810px] bg-cover bg-center bg-[#003531] '
    style={{backgroundImage:`url('./footer.png')`}}
    >
        <div className='absolute inset-x-0 z-10 bg-gradient-to-b from-white via-white to-transparent  w-full h-[232px]'></div>
    </div>
  )
}