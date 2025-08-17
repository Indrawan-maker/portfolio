"use client"
import Image from 'next/image';
import projectImage1 from '@/components/images/project1.webp'
import { HiArrowRight } from "react-icons/hi";
import GlareHover from '../../lib/GlareHover'
import { motion } from "framer-motion";



export const ProjectCard = () => {
    return (
        <>
        <section className="w-100 h-90 border-1 border-white rounded-md transition-transform duration-300 
    hover:-translate-y-2 hover:shadow-lg">
            <Image 
            src={projectImage1}
            alt='puzzle 3x3'
            className='rounded-md w-full min-h rounded-b-none'
            />
            <div className='flex justify-between text-white py-3 px-3'>
                <h4 className='font-medium text-xl'>Puzzle 3x3</h4>
                <motion.button 
                whileHover={{ scale: 1.1,  transition: { duration: 0.7 } }}
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
        </section>
        </>
    )
}