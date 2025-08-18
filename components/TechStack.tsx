import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";

export const TechStack = () => {
    return (
        <>
        <div className=" flex justify-center items-center mt-26 text-sm">
        <div className="w-160 h-60">
        <h1 className="flex mb-4 text-gray-300 text-xl tracking-widest">Tech Stack</h1>
            <ul className="flex flex-wrap gap-8 justify-center items-center mt-8">
                
                <li className="flex items-center justify-center gap-3 text-gray-300"><IoLogoJavascript className="w-8 h-8 text-white" /> Javascript
                </li>
                <li className="flex items-center justify-center gap-3 text-gray-300"><BiLogoTypescript className="w-9 h-9 text-white"/> Typeccript
                </li>
                <li className="flex items-center justify-center gap-3 text-gray-300"><BiLogoReact className="w-9 h-9 text-white"/> React
                </li>
                <li className="flex items-center justify-center gap-3 text-gray-300"><SiNextdotjs className="w-8 h-8 text-white"/> NextJS
                </li>
                <li className="flex items-center justify-center gap-3 text-gray-300"><BiLogoNodejs className="w-10 h-10 text-white"/> NodeJS
                </li>
                <li className="flex gap-3 ml-2 items-center text-gray-300"><FaGitAlt className="w-10 h-10 text-white"/> Git
                </li>
                {/* mr auto harus di bagian akhir agar terdorong sisanya */}
                <li className="flex gap-3 mr-auto items-center text-gray-300"><RiTailwindCssFill className="w-10 h-10 text-white"/> Tailwind CSS
                </li>
            </ul>
        </div>
        </div>
        </>
    )
}