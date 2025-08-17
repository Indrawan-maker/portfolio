"use client"

import { useState } from "react"
import Icon1 from "./images/uinsi-icon.webp";
import Icon2 from "./images/globe.webp"
import Image from 'next/image';




export const Experience = () => {

    const [btn, setBtn] = useState(true)



    function handleBtn() {
        setBtn(prevBtn => !prevBtn)
    }

    return (
        <div className="flex justify-center items-center">
        <section className="-mt-22 justify-center w-160">
            <h1 className="mb-4 text-gray-300 text-xl tracking-widest">Experience</h1>
            <div className="flex justify-around cursor-pointer mb-3 bg-white rounded-md h-8 items-center">
                <div className="">
                    <button className="text-sm">Work</button>
                </div>
                <div>
                    <button className="">Studies</button>
                </div>
            </div>
            <div className="flexh-26 border-2 rounded-xl border-white">
                <div className="flex">
                <ul>
                    <li className="relative grid justify-center gap-4 p-6">
                        <div className="absolute inset-0 flex justify-center">
                            <div className="w-[1px] bg-white"></div>
                        </div>
                        <div className="relative z-10 bg-white rounded-full p-1">
                            <Image
                                src={Icon1}
                                alt="uinsi"
                                width={46}
                                height={46}
                                className="rounded-full"
                            />
                        </div>
                    </li>
                </ul>
                <div className="grid p-3 items-center justify-center">
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