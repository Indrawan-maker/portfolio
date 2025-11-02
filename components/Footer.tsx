
import Link from 'next/link'


export const Footer = () => {
    return (
        <footer className="grid md:flex justify-center items-center mt-auto" 
        translate="no"
        id="footer">
            <div className=" mt-24 md:mt-46 justify-center items-center">
                <div className="flex justify-center items-center z-20">

                <section className="w-80 h-90 md:w-160 md:h-46 rounded-xl border-1 border-white">
                    <div className="flex justify-between px-12 md:px-6 py-6">
                        <div className="-ml-8 md:ml-0 -mt-9 md:mb-0">
                            <h1 className="text-white text-4xl font-bold mt-12">Muhammad <br />Indrawan.</h1>
                        </div>


                        <div className="-ml-68 md:ml-26 mt-42 md:mt-0">
                            <h5 className="text-neutral-300 mb-4">Explore</h5>
                            <div className="text-neutral-500">
                                <ul>
                                    <li><Link  href="/" className="cursor-pointer hover:text-white">Home</Link></li>
                                    <li><Link  href="/about" className="cursor-pointer hover:text-white">About</Link></li>
                                    <li><Link  href="/project" className="cursor-pointer hover:text-white">Project</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="mt-42 md:mt-0">
                            <h5 className="text-neutral-300 mb-4">Let&apos;s Connect</h5>
                            <div className="text-neutral-500">
                                <ul>
                                    <li><Link href="mailto:indrawanismail0@gmail.com" className="cursor-pointer hover:text-white">Email</Link></li>
                                    <li><Link href="https://www.linkedin.com/in/muhammad-indrawan-ismail-1baa13326/"className="cursor-pointer hover:text-white">Linkedin</Link></li>
                                    <li><Link href="https://github.com/Indrawan-maker"className="cursor-pointer hover:text-white">Github</Link></li>
                                    <li><Link href="https://www.instagram.com/troy_sakana/"className="cursor-pointer hover:text-white">Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                </div>
                <div className="text-neutral-700 flex justify-between h-44 w-80 md:w-160 py-4 m-auto md:mr-0">
                    <h6>© 2025</h6>
                    <h6>Muhammad Indrawan.</h6>
                </div>
            </div>
        </footer>
    )
}