import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../../assets/assets'

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
                        I’m a software engineer who works with Java, Spring Boot, SQL, React, and Node.js. I’ve built REST APIs, mobile backends, and full-stack apps, and I’ve also done some lower-level systems programming in C like a custom Unix shell and a virtual memory simulator. I like picking up new tools and figuring out how things work, whether that’s building out a backend, getting something running on the frontend, or experimenting with small side projects to learn more.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
                        {infoList.map(({ icon, iconDark, title, frontend, backend, description }, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500'
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

                    <h4 className='my-6 text-gray-700'> Tools I use:</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                                <Image src={tool} alt='Tool' className='w-5, sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About