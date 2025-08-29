import React from 'react'
import Image from 'next/image'
import { assets, infoList } from '../../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>Introduction</h4>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        I am a Software Engineer. I am God's chosen programmer. I have a passion for creating innovative and efficient software solutions that make a difference in people's lives. With a strong foundation in computer science and a keen eye for detail, I strive to deliver high-quality code that is both functional and maintainable.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                        {infoList.map(({ icon, iconDark, title, frontend, backend, description }, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer'
                                key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-2 font-semibold text-gray-700'>{title}</h3>
                                {/* IF FRONTEND AND BACKEND KEYS EXIST, RENDER THEM, ELSE RENDER DESCRIPTION */}
                                {frontend && backend ? (
                                    <div className='text-gray-600 text-sm'>
                                        <p><span className='font-semibold'>Frontend:</span> {frontend}</p>
                                        <p><span className='font-semibold'>Backend:</span> {backend}</p>
                                    </div>
                                ) : (
                                    <p className='text-gray-600 text-sm'>{description}</p>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About