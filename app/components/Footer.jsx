import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'

const Footer = () => {
    return (
        <div>
            <div className='w-max flex items-center gap-2 mx-auto translate-y-[110%]'>
                <Image src={assets.mail_icon} alt='' className='w-6' />
                nolantuttle@nolantuttle.com
            </div>
            <div className='text-center sm:flex items-center justify-between border-t
            border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2026 Nolan Tuttle. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://www.linkedin.com/in/nolan-tuttle">LinkedIn</a></li>
                    <li><a target='_blank' rel='noopener noreferrer' href="https://github.com/nolantuttle">Github</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer