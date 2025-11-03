import HeroRoute from "@/components/HeroRoute";
import { Footer } from '@/components/Footer';
import projectImage1 from '@/components/images/project1.webp'
import projectImage2 from '@/components/images/project2.webp'
import projectImage3 from '@/components/images/project3.webp'
import projectImage4 from '@/components/images/project4.webp'
import { Card } from '@/components/ui/Card';


export default function ProjectRoute() {
    return (
        <>
            <main translate="no"
                className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#020103] min-h-screen">
                <HeroRoute
                    title="Project"
                    description="Explore a list of projects showcasing various skills and technologies."
                />
                <div className="max-w-7xl w-full">
                    <div className="mt-22 items-center justify-center flex">
                        <section className="mt-16 justify-center w-88 h-60  p-4 md:w-160 md:h-80 md:p-0">
                            <div className="">
                                <h4 className="flex justify-start text-gray-300 text-xl tracking-widest mb-8">Project</h4>
                                <div className='md:ml-0 md:grid md:gap-4 grid md:grid-cols-2 items-center justify-center'>
                                    <Card projectTitle='Puzzle 3 x 3'
                                        projectDescription='An anime image puzzle game in a 3x3 grid.'
                                        projectImage={projectImage1}
                                        projectLink='https://anime-puzzle-3x3.vercel.app/'
                                        techStack={['tailwindCSS']}
                                    />
                                    {/* pemisah antar project */}
                                    <Card projectTitle='Personal Portfolio'
                                        projectDescription='A simple portfolio to showcase my project as a developer.'
                                        projectImage={projectImage2}
                                        projectLink='https://portfolio-sigma-virid-u677bz60w1.vercel.app/'
                                        techStack={['tailwindCSS', 'nextJS']}
                                    />
                                    {/* pemisah antar project */}
                                    <Card projectTitle='Ceritain Alumni'
                                        projectDescription='a place for you to tell stories and share experiences about your college days.'
                                        projectImage={projectImage3}
                                        projectLink='https://cerita-alumnii.vercel.app/'
                                        techStack={['vite + react', 'express', 'mongodb']}
                                    />
                                    {/* pemisah antar project */}
                                    <Card projectTitle='HMPS SI'
                                        projectDescription='is an information center where you can find things related to your field of study.'
                                        projectImage={projectImage4}
                                        projectLink='https://hmpssi.vercel.app/'
                                        techStack={['tailwindCSS', 'nextJS']}
                                    />
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className="md:mt-120 mt-280">
                        <Footer />
                    </div>
                </div>
            </main>
        </>
    )
}