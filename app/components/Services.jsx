import React from 'react'
import { serviceData, assets } from '../../assets/assets'
import Image from 'next/image'

const Services = () => {
    return (
        <div id="Services" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg'>What I Offer</h4>
            <h2 className='text-center text-5xl'>My Services</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                I offer a range of services to help you achieve your goals. Whether you need a custom software solution, a mobile app, or a website, I have the skills and experience to deliver high-quality results. I am committed to understanding your needs and providing solutions that are tailored to your specific requirements. </p>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12
                    hover:shadow-black cursor-pointer hover:bg-lightHover
                    hover:-translate-y-1 duration-500'>
                        <Image src={icon} alt={title} className='w-10' />
                        <h3 className='text-lg my-4 text-gray-700'>{title}</h3>
                        <p className='text-sm text-gray-600 leading-5'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                            Read more <Image src={assets.right_arrow} alt='' className='w-4' />
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services