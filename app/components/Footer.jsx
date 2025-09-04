import React from 'react'
import { assets } from '../../assets/assets'
import Image from 'next/image'
import Logo from './Logo'

const Footer = () => {
    return (
        <div>
            <div>
                

                <div className='w-max flex items-center gap-2 mx-auto'>
                <Logo className='w-12 mx-auto mb-2' />
                    <Image src={assets.mail_icon} alt='' className='w-6' />
                    nolantuttle@gmail.com
                </div>
            </div>

            <div className='text-center sm:flex items-center justify-between border-t
            border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Nolan Tuttle. All rights reserved</p>
                <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://instagram.com/nolantuttle">Instagram</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/nolan-tuttle-07295830a/">LinkedIn</a></li>
                    <li><a target='_blank' href="https://github.com/nolantuttle">Github</a></li>
                </ul>
            </div>

        </div>
    )
}

export default Footer