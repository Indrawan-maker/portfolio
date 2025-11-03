import Image from 'next/image'
import type { experienceProps } from '@/app/types/index'

export const Studies = ({ imageProps, dateProps, titleProps, descProps }: experienceProps) => {
    return (

    <main>
                <div className="flex px-6 md:p-0 gap-1 md:gap-0">
                    <ul className="flex justify-center items-center mr-4">
                        <li className="relative grid justify-center gap-2 md:p-7">
                            <div className="absolute inset-0 flex justify-center">
                                <div className="w-[1px] bg-white"></div>
                            </div>
                            <div className="relative z-10 bg-white rounded-full p-3 md:p-1 w-12" >
                                <Image
                                    src={imageProps}
                                    alt="uinsi"
                                    className="rounded-full w-full h-full md:bg-white md:w-12 md:h-12"
                                />
                            </div>
                        </li>
                    </ul>
                    <div className="grid p-2 md:p-3 items-center justify-center">
                        <p className="text-gray-400 text-sm ">{dateProps}</p>
                        <h1 className="text-white font-bold">{titleProps}</h1>
                        <p className="text-gray-400 text-sm">{descProps}</p>
                    </div>
                </div>
            </main>
            )
}

