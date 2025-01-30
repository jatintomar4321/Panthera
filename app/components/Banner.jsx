"use client"
import React from 'react';

const Banner = () => {
   

  return (
    <div className='w-full mt-10 h-40 bg-white '>
    <div className='w-full    text-md uppercase text-center text-[#686767] py-10'>
<p>Trusted by industry leaders and developers</p>
    </div>
    <div className='w-full  absolute h-32 sm:h-32 lg:h-32 bg-slate-500 
    '
          >
    <img src="./Banner.png" alt="Dashboard" className="w-full h-full object-cover" />

    </div>
    </div>
  )
}

export default Banner