import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoNodejs } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";

export const TechStack = () => {
    return (
        <>
            <div className="flex justify-center items-center mt-26 text-sm" translate="no">
                <div className="w-160 h-60">
                    <h1 className="flex mb-4 text-gray-300 text-xl tracking-widest">Tech Stack</h1>
<ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 justify-items-center mt-8 text-gray-300">
  <li>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <IoLogoJavascript className="w-6 h-6 md:w-8 md:h-8 text-white" /> Javascript
    </a>
  </li>

  <li>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <BiLogoTypescript className="w-6 h-6 md:w-8 md:h-8 text-white" /> TypeScript
    </a>
  </li>

  <li>
    <a href="https://react.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <BiLogoReact className="w-6 h-6 md:w-8 md:h-8 text-white" /> React
    </a>
  </li>

  <li>
    <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <SiNextdotjs className="w-6 h-6 md:w-8 md:h-8 text-white" /> NextJS
    </a>
  </li>

  <li>
    <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <BiLogoNodejs className="w-6 h-6 md:w-8 md:h-8 text-white" /> NodeJS
    </a>
  </li>

  <li>
    <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <FaGitAlt className="w-6 h-6 md:w-8 md:h-8 text-white" /> Git
    </a>
  </li>

  <li>
    <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <SiMongodb className="w-6 h-6 md:w-8 md:h-8 text-white" /> MongoDB
    </a>
  </li>

  <li>
    <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <SiExpress className="w-6 h-6 md:w-8 md:h-8 text-white" /> Express
    </a>
  </li>

  <li>
    <a href="https://jwt.io/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <SiJsonwebtokens className="w-6 h-6 md:w-8 md:h-8 text-white" /> JWT
    </a>
  </li>

  <li>
    <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
      <RiTailwindCssFill className="w-6 h-6 md:w-8 md:h-8 text-white" /> Tailwind CSS
    </a>
  </li>
</ul>

                </div>
            </div>
        </>
    )
}
