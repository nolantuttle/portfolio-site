import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-5 scroll-mt-20'>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
                <Image src={assets.about_photo} alt='about me photo' className='w-100 h-full rounded-3xl object-cover' />
                <div className='flex-1'>
                    <p className='mb-12 max-w-3xl'>
                        I'm Nolan, a software engineering student passionate about building software across the full stack from embedded firmware on resource-constrained microcontrollers to full-stack web applications and Linux-based systems. I love designing and implementing software that demands reliability and real-world impact, whether that's a real-time embedded controller or a deployed web service that users interact with every day.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-3xl'>
                        {infoList.map(({ icon, iconDark, title, description }, index) => (
                            <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={icon} alt={title} className='w-7 mt-3' />
                                <h3 className='my-2 font-bold text-gray-700'>{title}</h3>
                                <BoldLabelSentence key={index} text={description}></BoldLabelSentence>

                            </li>
                        ))}
                    </ul>

                    <h4 className='my-6 text-gray-700'> Tools I use:</h4>
                    <ul className='flex items-center gap-3 sm:gap-5'>
                        {toolsData.map((tool, index) => (
                            <li className='flex items-center justify-center w-12 sm:w-14 aspect-square 
                            border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'
                                key={index}>
                                <Image src={tool} alt='Tool' className='w-5, sm:w-7' />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

function BoldLabelSentence({ text }) {
    // Split only on first colon
    const colonIndex = text.indexOf(':');
    if (colonIndex !== -1) {
        // e.g., "Programming: Embedded C, Python"
        const label = text.slice(0, colonIndex + 1);
        const rest = text.slice(colonIndex + 1);
        return (
            <p>
                <span className="font-semibold">{label}</span>
                {rest}
            </p>
        );
    }
    // If no colon, just render as-is
    return <p>{text}</p>;
}

export default About