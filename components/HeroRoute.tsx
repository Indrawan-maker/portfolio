import Dock from '../lib/Dock';
import { RiHome2Line } from "react-icons/ri";
import { GoProjectSymlink } from "react-icons/go";
import { RiContactsLine } from "react-icons/ri";
import { IoSchoolOutline } from "react-icons/io5";

// ngirim data lewat props
type Props = {
    title: string,
    description: string
}

export default function HeroRoute({ title, description }: Props) {
    const items = [
        { icon: <RiHome2Line size={22} style={{ color: "white" }} />, label: 'Home', href: '/' },
        { icon: <IoSchoolOutline size={23} style={{ color: "white" }} />, label: 'About', href: '/about' },
        { icon: <GoProjectSymlink size={22} style={{ color: "white" }} />, label: 'Project', href: '/project' },
        { icon: <RiContactsLine size={20} style={{ color: "white" }} />, label: 'Contact Me', href: '/' },
    ];

    return (
        <>
            <div className='mt-18'>
                <div className='z-30 flex justify-center items-center pt-4 px-4 fixed bottom-0 left-1/2 -translate-x-1/2'>
                    <Dock
                        items={items}
                        panelHeight={68}
                        baseItemSize={50}
                        className="z-30"
                    />
                </div>
                <div className='space-y-2 text-white w-80 md:w-290'>
                    <h1 className='text-center text-white font-bold text-3xl md:text-6xl tracking-tight'>
                        {title}
                    </h1>
                    <div className='items-center justify-center mt-8'>
                        <p className='text-3xl text-center font-extralight'>
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}