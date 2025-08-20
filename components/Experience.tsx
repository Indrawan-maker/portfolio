"use client"

import Icon1 from "./images/uinsi-icon.webp";
import Image from 'next/image';




export const Experience = () => {





    return (
        <div className="flex justify-center items-center mt-32" translate="no">
        <section className="justify-center w-120 md:w-160" id="experience">
            <h1 className="mb-4 text-gray-300 text-xl tracking-widest">Experience</h1>
            <div className="flex justify-around cursor-pointer mb-3 bg-white rounded-md h-8 items-center ">
                <div>
                    <button className="">Studies</button>
                </div>
            </div>
            <div className="flex md:w-full h-38 md:h-29 border-2 rounded-xl border-white">
                <div className="flex px-6 md:p-0 gap-1 md:gap-0">
                <ul>
                    <li className="relative grid justify-center gap-2 p-1 py-13 md:p-7 md:py-full">
                        <div className="absolute inset-0 flex justify-center">
                            <div className="w-[1px] bg-white"></div>
                        </div>
                        <div className="relative z-10 bg-white rounded-full p-1">
                            <Image
                                src={Icon1}
                                alt="uinsi"
                                className="rounded-full w-28 h-8 md:w-12 md:h-12"
                            />
                        </div>
                    </li>
                </ul>
                <div className="grid p-2 md:p-3 items-center justify-center">
                    <p className="text-gray-400 text-sm ">August 2024 - August 2028</p>
                    <h1 className="text-white font-bold">Universitas Islam Negeri Sultan Aji Muhammad Idris Samarinda</h1>
                    <p className="text-gray-400 text-sm">Undergraduate in Information System</p>
                </div>
                </div>
            </div>
        </section>
        </div>
    )
}