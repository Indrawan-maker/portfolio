import React from 'react'
import Orb from '../ui/Orb';
import { LuSend } from "react-icons/lu";
import { motion } from "framer-motion";

const Hero = () => {
    return (
        <>
            <div className="pt-16 text-white">
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
                                <div className='-m-12'>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className='flex items-center justify-between gap-3 cursor-pointer'><LuSend />
                                        <p className='font-bold'>Contact me</p>
                                    </motion.button>
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