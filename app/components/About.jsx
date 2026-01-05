import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-5 scroll-mt-20'>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
                <div className='w-100 sm:w-100 rounded-3xl max-w-none'>
                    <Image src={assets.happy} alt='user' className='w-full h-165 rounded-3xl' />
                </div>
                <div className='flex-1'>
                    <p className='mb-10 max-w-2xl'>
                        I’m an Embedded Systems Engineer specializing in low-level programming, system design, and connected IoT devices.
                        My hands-on experience includes working with a wide range of microcontrollers
                        (such as ARM Cortex-M, ESP32), embedded Linux, and IoT sensors/actuators.
                        I have engineered robust solutions in resource-constrained environments including a custom Unix/Linux shell,
                        a virtual memory simulator, and fast, responsive PID control systems. I’m skilled in hardware-software integration
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

            <div className="relative w-full flex flex-col lg:flex-row items-start gap-8">

                <div className="py-5 flex-none lg:w-1/4 flex flex-col justify-center">
                    <div className="flex w-full flex-col lg:flex-row items-start gap-4">
                        <div className="flex-none h-115 lg:w-3/4 mt-8 bg-white bg-opacity-80 p-4 rounded-lg shadow-md flex-col justify-start">
                            <p className='text-2xl mb-7 max-w-2xl font-semibold'>
                                When I'm not writing software, you can find me:
                            </p>
                            <ul className="text-l list-disc list-inside space-y-2">
                                <li>Experimenting with 3D printing new designs</li>
                                <li>Soldering together custom electronics projects</li>
                                <li>Working on my 86' Camaro</li>
                            </ul>

                        </div>

                        <div className="relative w-full sm:w-80 h-130 flex-none">
                            <div className="absolute top-0 left-230 w-100 h-125 rounded-xl overflow-hidden shadow-lg">
                                <Image src={assets.soldering2} alt="Soil Moisture Sensor" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-0 left-135 w-95 h-75 rounded-xl overflow-hidden shadow-lg">
                                <Image src={assets.printing} alt="3D Printing" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-75 left-135 w-95 h-50 rounded-xl overflow-hidden shadow-lg">
                                <Image src={assets.camaro} alt="Yellow Camaro" className="w-full h-full object-cover" />
                            </div>
                            <div className="absolute top-0 left-15 w-120 h-125 rounded-xl overflow-hidden shadow-lg">
                                <Image src={assets.soldering} alt="Soldering" className="w-full h-full object-cover" />
                            </div>

                        </div>
                    </div>
                    {/* BOTTOM: caption across full width */}
                    <div className="mt-6 w-full text-center">
                        <p className="text-gray-500 italic text-lg">
                            But only after making a fresh latte! ☕
                        </p>
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