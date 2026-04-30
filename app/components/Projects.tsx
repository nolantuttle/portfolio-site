'use client'
import React, { useState } from 'react'
import { assets, projectData } from '../../assets/assets'
import type { Project } from '../../assets/assets'
import Image from 'next/image'

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null)
    const [showAll, setShowAll] = useState(false)

    return (
        <div id="projects" className='w-full px-[12%] py-10 scroll-mt-20'>
            <h2 className='text-center text-5xl'>My Latest Projects!</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12'>
                Here are some of my recent development projects!
            </p>

            <div className='grid grid-cols-3 my-10 gap-5'>
                {(showAll ? projectData : projectData.slice(0, 3)).map((project, index) => (
                    <div key={index} onClick={() => setSelectedProject(project)}
                        className='animate-fadeIn aspect-square bg-no-repeat bg-cover bg-center rounded-lg
                        relative cursor-pointer group'
                        style={{ backgroundImage: `url(${project.bgImage[0]})` }}>
                        <div className='bg-white/80 dark:bg-neutral-700/90 w-10/12 rounded-md absolute bottom-3
                        left-1/2 -translate-x-1/2 py-2 px-2 flex items-center
                        justify-between duration-500 group-hover:bottom-7'>
                            <div>
                                <h2 className='font-semibold text-center'>{project.title}</h2>
                                <p className='text-sm text-gray-700 dark:text-gray-300'>{project.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div onClick={() => setShowAll(!showAll)} className='w-max flex items-center justify-center gap-2
                text-gray-700 dark:text-white border-[0.5px] border-gray-700 rounded-full px-10 py-3 mx-auto
                my-20 hover:bg-[#fcf4ff] dark:hover:bg-[#1a1a1a] duration-500 cursor-pointer'>
                {showAll ? 'Show less' : 'Show more'} <Image src={assets.right_arrow_bold} alt='right arrow' className='w-4 dark:invert' />
            </div>

            {selectedProject && (
                <div className='animate-fadeIn fixed inset-0 backdrop-blur-sm z-50 flex items-center justify-center'
                    onClick={() => setSelectedProject(null)}>

                    <div className='bg-white dark:bg-neutral-600 rounded-xl p-8 max-w-5xl w-[80%] h-[70%] relative shadow-xl flex gap-8'
                        onClick={(e) => e.stopPropagation()}>

                        {/* LEFT SIDE: text + buttons stacked */}
                        <div className='flex flex-col justify-between w-1/2 overflow-y-auto no-scrollbar'>
                            <div>
                                <h2 className='text-2xl font-semibold mb-2'>{selectedProject.title}</h2>
                                <h3 className='text-xl font-semibold mb-2'>Summary</h3>
                                <p className='text-gray-600 dark:text-gray-300 mx-auto mb-6'>{selectedProject.summary}</p>
                                <h3 className='text-xl font-semibold mb-2'>Tech Stack</h3>
                                <p className='text-gray-600 dark:text-gray-300 mb-6'>{selectedProject.tech_stack}</p>
                                <h3 className='text-xl font-semibold mb-2'>Status</h3>
                                <p className='text-gray-600 dark:text-gray-300 mb-6'>{selectedProject.status}</p>
                            </div>

                            {/* Buttons sit at the bottom of the left column */}
                            <div className='flex flex-row flex-wrap gap-3 mt-4'>
                                {selectedProject.github && (
                                    <a href={selectedProject.github} target='_blank' rel='noopener noreferrer'
                                        className='flex items-center gap-4 text-gray-700 dark:text-gray-300 border-[0.5px]
                    border-gray-700 rounded-full px-6 py-2 w-max hover:bg-[#fcf4ff]
                    dark:hover:bg-[#1a1a1a] duration-500'>
                                        View on GitHub <Image src={assets.right_arrow_bold} alt='right arrow' />
                                    </a>
                                )}
                                {selectedProject.link && (
                                    <a href={selectedProject.link} target='_blank' rel='noopener noreferrer'
                                        className='flex items-center gap-4 text-gray-700 dark:text-gray-300 border-[0.5px]
                    border-gray-700 rounded-full px-6 py-2 w-max hover:bg-[#fcf4ff]
                    dark:hover:bg-[#1a1a1a] duration-500'>
                                        See more <Image src={assets.right_arrow_bold} alt='right arrow' />
                                    </a>
                                )}
                                {selectedProject.paper && (
                                    <a href={selectedProject.paper} download
                                        className='flex items-center gap-4 text-gray-700 dark:text-gray-300 border-[0.5px]
                    border-gray-700 rounded-full px-6 py-2 w-max hover:bg-[#fcf4ff]
                    dark:hover:bg-[#1a1a1a] duration-500'>
                                        Download Research Paper <Image src={assets.download_icon} alt='download' className='w-4' />
                                    </a>
                                )}
                            </div>
                        </div>

                        {/* RIGHT SIDE: images */}
                        <div className='w-1/2 flex-shrink-0 flex flex-col gap-2 overflow-hidden'>
                            {selectedProject.bgImage.map((img, index) => (
                                <img key={index} src={img} alt={selectedProject.title}
                                    className='w-full object-contain rounded-lg'
                                    style={{ height: `${100 / selectedProject.bgImage.length}%` }} />
                            ))}
                        </div>

                        <button onClick={() => setSelectedProject(null)}
                            className='absolute top-4 right-4 text-gray-500 hover:text-black dark:hover:text-white text-xl'>
                            ✕
                        </button>
                    </div>
                </div>
            )
            }
        </div >
    )
}

export default Projects