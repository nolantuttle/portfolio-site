import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '../../assets/assets'

const About = () => {
    return (
        <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl'>About Me</h2>

            <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-10'>
                <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl' />
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
                        {infoList.map(({ icon, iconDark, title, description}, index) => (
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