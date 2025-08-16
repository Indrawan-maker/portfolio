import Icon1 from "./images/uinsi-icon.webp";
import Image from 'next/image';

<div className="flex h-26 border-2 rounded-xl border-white">
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