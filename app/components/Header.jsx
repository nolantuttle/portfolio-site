import { assets } from '../../assets/assets'
import Image from 'next/image'
import React from 'react'
import { ovo } from '../layout'

const Header = () => {
    return (
        <div id="header" className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4'>
            <div>
                <Image src={assets.profile_img} alt=''
                    className='rounded-full w-32' />
            </div>
            <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Nolan Tuttle! <Image src={assets.hand_icon} alt=''
                    className='w-6' /></h3>
            <h1 className={`${ovo.className}text-3xl sm:text-6xl lg:text-[66px]`}>
                Backend Software Engineer based in Phoenix </h1>
            <p className='max-w-2xl mx-auto font-Ovo'>
                I am a Software Engineer from Phoenix with experience
                creating a variety of projects from embedded PID systems
                to Spring Boot websites to iOS app development.
            </p>
            <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>
                <a href="#contact" className='px-10 py-3 bg-black text-white border rounded-full border-white gap-2
            flex items-center'> Contact Me <Image src={assets.right_arrow_white}
                        alt='' className='w-4' /></a>
                <a href="/Resume.pdf" download="Nolan_Tuttle_Resume.pdf"
                    className='px-10 py-3 border rounded-full border-gray-500 
            flex items-center gap-2'> My Resume <Image src={assets.download_icon}
                        alt='' className='w-4' /></a>
            </div>


        </div>
    )
}

export default Header