import Dock from '../lib/Dock';
import { RiHome2Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";

// ngirim data lewat props

export default function HeroRoute() {
        const items = [
            { icon: <RiHome2Line size={22} style={{ color: "white" }} />, label: 'Home', href: '/'},
            { icon: <IoSchoolOutline size={23} style={{ color: "white" }} />, label: 'About', href: '/about'},
            { icon: <GoProjectSymlink size={22} style={{ color: "white" }} />, label: 'Project', href: '/project'},
            { icon: <RiContactsLine size={20} style={{ color: "white" }} />, label: 'Contact Me', href: '/'},
        ];
    
    return (
        <>
        <div>
            <Dock
                                items={items}
                                panelHeight={68}
                                baseItemSize={50}
                                className="z-30"
                                />
                            <div className='space-y-2 text-white w-80 md:w-300'>
                                <h1 className='text-center text-white font-semibold text-3xl md:text-6xl tracking-tight'>
                                    Hi I'm, Muhammad Indrawan.
                                </h1>
                                <div className='items-center justify-center mt-8'>
                                <p className='text-3xl text-center font-extralight'>
                                    A full-stack developer with experience in web and mobile development. I enjoy working across all stages of a project,
                                    from concept to delivery, and I'm always looking for ways to improve both my technical skills and the user experience.
                                </p>
                                </div>
                                </div>
        </div>
        </>
    )
}