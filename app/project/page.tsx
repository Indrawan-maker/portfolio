import HeroRoute from "@/components/HeroRoute";
import { Footer } from '@/components/Footer';
import { ProjectCard } from "@/components/ui/ProjectCard";


export default function ProjectRoute() {
    return (
        <>
        <main translate="no"
        className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#020103]">
                    <HeroRoute 
                    title="Project"
                    description="Explore a list of projects showcasing various skills and technologies."
                    />
            <div className="max-w-7xl w-full">
                <div className="mt-22 items-center justify-center flex">
                            <section className="mt-16 justify-center w-88 h-60  p-4 md:w-160 md:h-80 md:p-0">
                    <div className="">
                <h4 className="flex justify-start text-gray-300 text-xl tracking-widest mb-8">Project</h4>
                    <ProjectCard />
                    </div>
                            </section>
                </div>
                <div>
                    <Footer />
                </div>
            </div>
            </main>
        </>
    )
}