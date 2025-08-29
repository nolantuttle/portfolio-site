import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} alt=''
            className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2x1 mb-3 font-Ovo'>
            Hi! I'm Nolan Tuttle! <Image src={assets.hand_icon} alt='' 
            className='w-6'/></h3>
        <h1 className='text-3x1 sm:text-6x1 lg:text-[66px] font-Ovo'> 
        Backend Software Engineer based in Phoenix </h1>
        <p className='max-w-2x1 mx-auto font-Ovo'>
            I am a Software Engineer from Phoenix with experience 
            creating a variety of projects from embedded PID systems
            to Spring Boot websites to iOS app development.
        </p>
        <div className='flex flex-col'>
            <a href="#contact"> contact me <Image src={assets.right_arrow_white}
            alt='' className='w-4'/></a>
            <a href="/sample-resume.pdf" download
            className='px-10 py-3 border rounded-full border-gray-500 
            flex items-center gap-2'> my resume <Image src={assets.download_icon}
            alt='' className='w-4'/></a>
        </div>

        
    </div>
  )
}

export default Header