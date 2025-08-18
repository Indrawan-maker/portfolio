export const Footer = () => {
    return (
        <section className="flex justify-center items-center">
            <div className="mt-46 justify-center items-center">
                <section className="w-160 h-46 rounded-md border-1 border-white">
                    <div className="flex justify-between px-6 py-6">
                        <div>
                            <h1 className="text-white text-4xl font-bold mt-12">Muhammad <br />Indrawan.</h1>
                        </div>

                        <div className="ml-26">
                            <h5 className="text-neutral-300 mb-4">Explore</h5>
                            <div className="text-neutral-500">
                                <ul>
                                    <li><a className="cursor-pointer hover:text-white">Home</a></li>
                                    <li><a className="cursor-pointer hover:text-white">About</a></li>
                                    <li><a className="cursor-pointer hover:text-white">Project</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <h5 className="text-neutral-300 mb-4">Let's Connect</h5>
                            <div className="text-neutral-500">
                                <ul>
                                    <li><a href="" className="cursor-pointer hover:text-white">Email</a></li>
                                    <li><a className="cursor-pointer hover:text-white">Linkedin</a></li>
                                    <li><a className="cursor-pointer hover:text-white">Github</a></li>
                                    <li><a className="cursor-pointer hover:text-white">Instagram</a></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>
                <div className="text-neutral-700 flex justify-between h-44 w-160 py-4">
                    <h6>&copy; 2024</h6>
                    <h6>Muhammad Indrawan.</h6>
                </div>
            </div>
        </section>
    )
}