import React from 'react'
import { assets, projectData } from '../../assets/assets'
import Image from 'next/image'

const Projects = () => {
    return (
        <div id="projects" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl'>My Latest Projects!</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                Here are some of my recent development projects! </p>

            <div className='grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] my-10 gap-5'>
                {projectData.map((project, index) => (
                    <a key={index} href={project.link}
                        className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                        relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage})` }}>
                        <div className='bg-white/80 w-10/12 rounded-md absolute bottom-3
                        left-1/2 -translate-x-1/2 py-2 px-2 flex items-center
                        justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold text-center'>{project.title}</h2>
                                <p className='text-sm text-gray-700'>{project.description}</p>
                            </div>
                        </div>
                    </a>
                ))}
            </div>

            <a href="https://github.com/nolantuttle" className='w-max flex items-center justify-center gap-2
            text-gray-700 border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto
            my-20 hover:bg-[#fcf4ff] dark:hover:bg-[#1a1a1a] duration-500'>
                Show more <Image src={assets.right_arrow_bold} alt='right arrow' />
            </a>

        </div>
    )
}

export default Projects