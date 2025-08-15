"use client";

import React from 'react'
import Orb from '../lib/Orb';
import { LuSend } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { motion } from "framer-motion";
import GlareHover from '../lib/GlareHover'
import { PiInstagramLogoLight } from "react-icons/pi";
import { LuGithub } from "react-icons/lu";
import { RiCalendarScheduleLine } from "react-icons/ri";
import { GrDocumentText } from "react-icons/gr";
import { RiHome2Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";
import Dock from '../lib/Dock';

const Hero: React.FC = () => {
    const items = [
        { icon: <RiHome2Line size={22}  style={{ color: "white" }}/>, label: 'Home', onClick: () => alert('Home!') },
        { icon: <IoSchoolOutline size={23}  style={{ color: "white" }}/>, label: 'About', onClick: () => alert('Archive!') },
        { icon: <GoProjectSymlink size={22}  style={{ color: "white" }}/>, label: 'Project', onClick: () => alert('Profile!') },
        { icon: <RiContactsLine size={20}  style={{ color: "white" }}/>, label: 'Contact Me', onClick: () => alert('Contact Me!') },
    ];

    const socialLinks = [
        {
            href: "https://www.linkedin.com/in/muhammad-indrawan-ismail-1baa13326/",
            icon: <FiLinkedin className="w-6 h-6" style={{ strokeWidth: '1px' }} />,
        },
        {
            href: "https://www.instagram.com/troy_sakana/",
            icon: <PiInstagramLogoLight className="w-7 h-7" style={{ strokeWidth: '1px' }} />,
        },
        {
            href: "https://github.com/Indrawan-maker",
            icon: <LuGithub className="w-6 h-6" style={{ strokeWidth: '1px' }} />,
        },
        {
            href: "mailto:indrawanismail)@gmail.com",
            icon: <RiCalendarScheduleLine className="w-6 h-6" style={{ strokeWidth: '0.1px' }} />,
        },
        {
            href: "#",
            icon: <GrDocumentText className='h-6 w-6' style={{ strokeWidth: '0.1px', stroke: 'currentColor', fill: 'none' }} />,
        }
    ];

    const SocialButton = ({ href, icon}: { href: string, icon: React.ReactNode}) => {
        const buttonContent = (
            <motion.button
                whileHover={{ scale: 1, rotate: -20, transition: { duration: 0.6 } }}
                whileTap={{ scale: 1.4 }}
                className="flex items-center justify-center cursor-pointer border rounded-full p-0 bg-transparent w-13 h-13"
                aria-label="Social media link"
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
                        {icon}
                    </GlareHover>
                </div>
            </motion.button>
        );


        return (
            <a href={href} target="_blank" rel="noopener noreferrer">
                {buttonContent}
            </a>
        );
    };

    return (
        <section className='min-h-screen'>
            {/* Dock Navigation */}
            <div className='z-30 flex justify-center items-center pt-4 px-4'>
                    <Dock
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        className="z-30"
                        
                    />
            </div>
            {/* Hero Content */}
            <div className="mt-2 text-white">
                <div className='relative overflow-hidden'>
                    {/* Background Orb */}
                    <div 
                        className='absolute top-0 left-0 z-0 w-full h-[600px]'
                    >
                        <Orb
                            hoverIntensity={0}
                            rotateOnHover={false}
                            hue={0}
                            forceHoverState={false}
                        />
                    </div>

                    {/* Main Content */}
                    <div className='relative z-20 flex flex-col items-center justify-center h-[600px]'>
                        <div className='absolute z-10 text-center'>
                            {/* Main Title */}
                            <div className='space-y-2'>
                                <h1 className='text-center text-white font-bold text-6xl md:text-8xl tracking-tight'>
                                    FULLSTACK
                                </h1>
                                
                                {/* Developer text with Contact button */}
                                <div className='flex items-center justify-center gap-4'>
                                    <h1 className='text-center text-white font-bold text-6xl md:text-8xl tracking-tight'>
                                        DEVELOPER
                                    </h1>

                                    {/* Contact Button */}
                                    <motion.button
                                        whileHover={{ scale: 1.1, transition: { duration: 0.7 } }}
                                        whileTap={{ scale: 1.4 }}
                                        className='flex items-center justify-center gap-2 cursor-pointer border rounded-full h-10 w-36 ml-4'
                                        aria-label="Contact me button"
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
                                                    backgroundColor: 'transparent',
                                                }}
                                            >
                                                <LuSend className='mr-2' />
                                                <p className='font-bold'>Contact me</p>
                                            </GlareHover>
                                        </div>
                                    </motion.button>
                                </div>
                            </div>

                            <div className='flex justify-center gap-4 mt-8'>
                                {socialLinks.map((link, index) => (
                                    <SocialButton 
                                        key={index}
                                        href={link.href}
                                        icon={link.icon}

                                    />
                                ))}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero