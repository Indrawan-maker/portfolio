"use client";

import React from 'react'
import Orb from '../lib/Orb';
import { LuSend } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import Magnet from '../lib/Magnet'
import { motion } from "framer-motion";
import GlareHover from '../lib/GlareHover'
import { PiInstagramLogoLight } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
// import MyButton from './MyButton';


const Hero: React.FC = () => {
    return (
        <>
            <div className="pt-18 text-white">
                <div className='relative overflow-hidden'>
                    <div
                        style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0 }}
                        className='z-0'>
                        <Orb
                            hoverIntensity={0.5}
                            rotateOnHover={true}
                            hue={0}
                            forceHoverState={false}
                        />
                    </div>
                    <div className='relative z-20 flex flex-col items-center justify-center h-[600px]'>
                        <div className='absolut z-10'>
                            <h1 className='ml-22 text-center text-white font-bold  text-8xl tracking-tight'>FULLSATCK</h1>
                            <div className='flex items-center'>
                                <h1 className='mr-22 text-center text-white font-bold text-8xl tracking-tight'>DEVELOPER</h1>

                                <div className='-m-18'>
                                    <motion.button
                                        whileHover={{ scale: 1.1,  transition: { duration: 0.7 }  }}
                                        whileTap={{ scale: 1.4 }}
                                        className='flex items-center justify-center gap-2 cursor-pointer border rounded-full h-10 w-36'>
                                            <div className="w-full h-full rounded-full overflow-hidden">
                                            <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={800}
                                                playOnce={false}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    borderRadius: '9999px',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    backgroundColor: 'transparent',
                                                }}
                                            >
                                            <LuSend className='mr-2'/>
                                        <p className='font-bold'>Contact me</p>
                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                                
                                </div>
                            </div>
                            <div style={{ marginLeft: '42px' }}
                                className='flex gap-4  mt-4'>
                                <div style={{ position: 'relative' }}
                                className='flex ml-26 gap-4'
                                >
                            <Magnet padding={300} disabled={false} magnetStrength={300}>
                            <a href="https://www.linkedin.com/in/muhammad-indrawan-ismail-1baa13326/">
                            
                                    <motion.button
                                        whileHover={{ scale: 1, rotate: -20, transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.4 }}
                                        className="flex items-center justify-center cursor-pointer border rounded-full p-0 bg-transparent"
                                        style={{ width: 52, height: 52 }} 
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={800}
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
                                                <FiLinkedin className="w-6 h-6" 
                                                />
                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                    </a>
                                    </Magnet>
                                    
                                    <a href="https://www.instagram.com/troy_sakana/">
                                    <motion.button
                                        whileHover={{ scale: 1, rotate: -20, transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.4 }}
                                        className="flex items-center justify-center cursor-pointer border rounded-full p-0 bg-transparent"
                                        style={{ width: 52, height: 52 }} 
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={800}
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
                                                <PiInstagramLogoLight className="w-7 h-7" />
                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                                </a>
                                                <a href="https://github.com/Indrawan-maker">
                                    <motion.button
                                        whileHover={{ scale: 1, rotate: -20, transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.4 }}
                                        className="flex items-center justify-center cursor-pointer border rounded-full p-0 bg-transparent"
                                        style={{ width: 52, height: 52 }} 
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={800}
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
                                                <LuGithub className="w-6 h-6"/>
                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                                    </a>
                                                <a href="https://mail.google.com/mail/u/0/#inbox">
                                    <motion.button
                                        whileHover={{ scale: 1, rotate: -20, transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.4 }}
                                        className="flex items-center justify-center cursor-pointer border rounded-full p-0 bg-transparent"
                                        style={{ width: 52, height: 52 }} 
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={800}
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
                                                <RiCalendarScheduleLine className="w-6 h-6"  />
                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                                    </a>
                                                <a href="https://www.google.com/">
                                    <motion.button
                                        whileHover={{ scale: 1, rotate: -20, transition: { duration: 0.6 } }}
                                        whileTap={{ scale: 1.4 }}
                                        className="flex items-center justify-center cursor-pointer border rounded-full p-0 bg-transparent"
                                        style={{ width: 52, height: 52 }} 
                                    >
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <GlareHover
                                                glareColor="#ffffff"
                                                glareOpacity={0.3}
                                                glareAngle={-30}
                                                glareSize={500}
                                                transitionDuration={800}
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
                                                <GrDocumentText className='h-6 w-6'/>

                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero