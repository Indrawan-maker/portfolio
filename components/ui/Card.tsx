"use client"
import Image from 'next/image';
import { HiArrowRight } from "react-icons/hi";
import GlareHover from '@/lib/GlareHover'
import { motion } from "framer-motion";
import Link from "next/link"
import type { cardProps } from '@/app/types';
import { CardTechStack } from './CardTechStack';

export const Card = ({ projectTitle, projectDescription, projectImage, projectLink, techStack }: cardProps) => {
    return (
        <div>
            <Link className='justify-center items-center flex'
                href={projectLink}>
                <section className="w-82 h-78 md:w-80 md:h-80 border-1 border-white rounded-md transition-transform duration-300 md:mb-0 mb-6
    hover:-translate-y-2 hover:shadow-lg relative">
                    <Image
                        src={projectImage}
                        alt='puzzle 3x3'
                        className='rounded-md w-full min-h rounded-b-none'
                    />
                    <div className='flex justify-between text-white py-0.5 px-3'>
                        <h4 className='font-normal text-xl'>{projectTitle}</h4>
                        <motion.button
                            whileHover={{ scale: 1, transition: { duration: 0.7 } }}
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
                                    <HiArrowRight className='text-center text-xl font-semibold mt-1' />
                                </div>
                            </GlareHover>
                        </motion.button>
                    </div>
                    <div>
                        <p className='text-neutral-500 px-3 text-sm'>{projectDescription}</p>
                    </div>
                    <CardTechStack techStackText={techStack}/>
                </section>
            </Link>
        </div>
    )
}