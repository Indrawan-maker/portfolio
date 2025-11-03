"use client"

import { WorkStudies } from "./WorkStudies";
import { useState } from 'react'



export const Experience = () => {
    const [isButtonClick, setIsButtonClick] = useState('work')

    const WorkWhenClick = {
        backgroundColor: isButtonClick === 'work' ? 'white' : 'black',
        color: isButtonClick === 'work' ? 'black' : 'white'
    }
    const StudiesWhenClick = {
        backgroundColor: isButtonClick === 'studies' ? 'white' : 'black',
        color: isButtonClick === 'studies' ? 'black' : 'white'
    }






    return (
        <div className="flex justify-center items-center mt-32" translate="no">
            <section className="justify-center w-90 md:w-160" id="experience">
                <h1 className="mb-4 text-gray-300 text-xl tracking-widest">Experience</h1>

                <section className="flex">
                    <div className="flex justify-around cursor-pointer mb-3 rounded-md h-8 items-center w-80" style={WorkWhenClick}
                    onClick={() => setIsButtonClick('work')}
                    >
                        <div className="cursor-pointer">
                            <button
                                className="">Work</button>

                        </div>
                    </div>
                    <div className="flex justify-around cursor-pointer mb-3 rounded-md h-8 items-center w-80" style={StudiesWhenClick}
                    onClick={() => setIsButtonClick('studies')}
                    >
                        <div className="">
                            <button
                                className="">Studies</button>

                        </div>
                    </div>
                </section>
                <WorkStudies setActiveTab={isButtonClick} />
            </section>
        </div>
    )
}