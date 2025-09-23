"use client";
import { assets } from '../../assets/assets'
import {useTheme} from "next-themes"
import Image from 'next/image'
import Logo from './Logo'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = () => {

    const { theme, setTheme } = useTheme();
    const [isScroll, setIsScroll] = useState(false);
    const sideMenuRef = useRef();

    const openMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(-16rem)'

    }

    const closeMenu = () => {
        sideMenuRef.current.style.transform = 'translateX(16rem)'

    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (scrollY > 50) {
                setIsScroll(true)
            }
            else {
                setIsScroll(false)
            }
        })
    }, [])
    return (
        <>
            <div id="navbar" className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                <Image src={assets.header_bg_color} alt="" className='w-full' />
            </div>
            <nav className={`w-full fixed px-4 lg:px-4 xl:px-[2%] py-4 flex items-center justify-between z-50 
                ${isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm" : ""}`}>
                <a href="#top">
                    <Logo className='w-18 cursor-pointer mr-14' />
                </a>

                <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 absolute left-1/3 -translate-x-1/32 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50"} `}>
                    <li><a className='font-Ovo' href="#top">Home</a></li>
                    <li><a className='font-Ovo' href="#about">About Me</a></li>
                    { /* <li><a className='font-Ovo' href="#services">Services</a></li> */}
                    <li><a className='font-Ovo' href="#projects">My Projects</a></li>
                    <li><a className='font-Ovo' href="#contact">Contact Me</a></li>
                </ul>

                <div className='flex items-center gap-4'>

                {/* TODO: ADD DARK MODE FUNCTIONALITY*/}
                { /*<button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
                    <Image src={assets.moon_icon} alt='' className='w-6' />
    </button> */}

                    <a href="#contact" className='hidden lg:flex items-center gap-2 px-10 py-2.5 border border-gray-500 rounded-full ml-4'>Contact
                        <Image src={assets.arrow_icon} alt="" className='w-3' />
                    </a>

                    <button className='block md:hidden ml-3' onClick={openMenu}>
                        <Image src={assets.menu_black} alt='' className='w-6' />
                    </button>

                </div>

                {/* mobile menu */}

                <ul ref={sideMenuRef} className='flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64
                top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500'>
                    <div className='absolute right-6 top-6'>
                        <Image src={assets.close_black} alt='' onClick={closeMenu} className='w-5
                        cursor-pointer' />
                    </div>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#top">Home</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#about">About Me</a></li>
                    { /*<li><a className='font-Ovo' onClick={closeMenu} href="#services">Services</a></li> */}
                    <li><a className='font-Ovo' onClick={closeMenu} href="#projects">My Projects</a></li>
                    <li><a className='font-Ovo' onClick={closeMenu} href="#contact">Contact Me</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Navbar