"use client"
import Image from 'next/image';
import projectImage1 from '@/components/images/project1.webp'
import projectImage2 from '@/components/images/project2.webp'
import { HiArrowRight } from "react-icons/hi";
import GlareHover from '../../lib/GlareHover'
import { motion } from "framer-motion";




export const ProjectCard = () => {
    return (
        <div className='grid md:ml-0 md:flex md:gap-4'>
        <a href='https://anime-puzzle-3x3.vercel.app/'>
        <section className="w-94 h-88 md:w-80 md:h-80 border-1 border-white rounded-md transition-transform duration-300 md:mb-0 mb-6
    hover:-translate-y-2 hover:shadow-lg">
            <Image 
            src={projectImage1}
            alt='puzzle 3x3'
            className='rounded-md w-full min-h rounded-b-none'
            />
            <div className='flex justify-between text-white py-3 px-3'>
                <h4 className='font-normal text-xl'>Puzzle 3x3</h4>
                <motion.button 
                whileHover={{ scale: 1,  transition: { duration: 0.7 } }}
                className='flex items-center justify-center gap-2 font-bold w-32 h-10 border-1 border-white rounded-3xl cursor-pointer'
                >
                    <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={1300}
                                                playOnce={false}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '9999px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <div className='gap-2 flex'>
                    Discover 
                    <HiArrowRight className='text-center text-xl font-semibold mt-1'/>
                                                </div>
                                            </GlareHover>
                    </motion.button>
            </div>
            <div>
                <p className='text-neutral-500 px-3 text-sm'>An anime image puzzle game in a 3x3 grid.</p>
            </div>
            <section className='flex px-3 mt-12 gap-2 text-sm'>
                <div className='bg-white w-22 h-6 items-center justify-center rounded-md text-center'>Tailwindcss</div>
            </section>
        </section>
        </a>
        <a href='https://portfolio-sigma-virid-u677bz60w1.vercel.app/'>
        <section className="w-94 h-88 md:w-80 md:h-80 border-1 border-white rounded-md transition-transform duration-300 mb-8 md:md-0
    hover:-translate-y-2 hover:shadow-lg">
            <Image 
            src={projectImage2}
            alt='puzzle 3x3'
            className='rounded-md w-full h-40 rounded-b-none'
            />
            <div className='flex justify-between text-white py-3 px-3'>
                <h4 className='font-normal text-xl'>Personal Portfolio</h4>
                <motion.button 
                whileHover={{ scale: 1,  transition: { duration: 0.7 } }}
                className='flex items-center justify-center gap-2 font-bold w-32 h-10 border-1 border-white rounded-3xl cursor-pointer'
                >
                    <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={1300}
                                                playOnce={false}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '9999px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'transparent'
                                                }}
                                            >
                                                <div className='gap-2 flex'>
                    Discover 
                    <HiArrowRight className='text-center text-xl font-semibold mt-1'/>
                                                </div>
                                            </GlareHover>
                    </motion.button>
            </div>
            <div>
                <p className='text-neutral-500 px-3 text-sm'>A simple portfolio to showcase my project as a developer.</p>
            </div>
            <section className='flex px-3 mt-12 md:mt-6 gap-2 text-sm'>
                <div className='bg-white w-14 h-6 items-center justify-center rounded-md text-center'>NextJS</div>
                <div className='bg-white w-22 h-6 items-center justify-center rounded-md text-center'>Tailwindcss</div>
            </section>
        </section>
        </a>
                                                    </div>
    )
}