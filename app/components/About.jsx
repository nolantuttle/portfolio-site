import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-5 scroll-mt-20'>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
                <Image src={assets.happy} alt='user' className='w-80 h-full rounded-3xl object-cover' />
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        I'm an Embedded Systems Engineer specializing in low-level programming, system design, and connected IoT devices.
                        My hands-on experience includes working with a wide range of microcontrollers
                        (such as ARM Cortex-M, ESP32), embedded Linux, and IoT sensors/actuators.
                        I have engineered robust solutions in resource-constrained environments including a custom Unix/Linux shell,
                        a virtual memory simulator, and fast, responsive PID control systems. I'm skilled in hardware-software integration
                        and communicating over protocols like SPI, UART, and I2C.
                    </p>
                    <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl'>
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

            <div className="w-full flex flex-col lg:flex-row items-start gap-8 my-10">
                {/* Text section - 1/4 width on large screens */}
                <div className="w-full lg:w-1/4 flex-none">
                    <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md">
                        <p className='text-2xl mb-7 font-semibold'>
                            When I'm not writing software, you can find me:
                        </p>
                        <ul className="text-lg list-disc list-inside space-y-3">
                            <li>Experimenting with 3D printing new designs (sorting all my components with gridfinity)</li>
                            <li>Soldering together custom electronics projects</li>
                            <li>Working on my 86' Camaro</li>
                        </ul>
                        <p className="text-gray-500 italic text-lg mt-8">
                            But only after making a fresh latte! ☕
                        </p>
                    </div>
                </div>

                {/* Images section - 2/4 width on large screens */}
                <div className="w-full lg:w-2/3 relative h-[600px] sm:h-[700px] flex-none">
                    {/* Soldering - largest image on the left */}
                    <div className="absolute top-0 left-0 w-[48%] h-[65%] rounded-3xl overflow-hidden shadow-lg">
                        <Image src={assets.soldering} alt="Soldering" className="w-full h-full object-cover" />
                    </div>

                    {/* 3D Printing - top right */}
                    <div className="absolute top-0 right-0 w-[48%] h-[35%] rounded-3xl overflow-hidden shadow-lg">
                        <Image src={assets.printing} alt="3D Printing" className="w-full h-full object-cover" />
                    </div>

                    {/* Camaro - bottom right */}
                    <div className="absolute top-[38%] right-0 w-[48%] h-[35%] rounded-3xl overflow-hidden shadow-lg">
                        <Image src={assets.camaro} alt="Yellow Camaro" className="w-full h-full object-cover" />
                    </div>
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