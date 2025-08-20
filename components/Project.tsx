import { ProjectCard } from "./ui/ProjectCard"


export const Project = () => {
    return (
        <>
        <div className="flex justify-center items-center" id="project" translate="no">
        <section className="mt-16 justify-center w-88 h-60  p-4 md:w-160 md:h-80 md:p-0">
            <div className="flex justify-between mb-6">
        <h4 className="flex justify-start text-gray-300 text-xl tracking-widest">Project</h4>
        <button className="flex justify-start text-gray-600 text-md tracking-widest cursor-pointer hover:text-white">View More</button>
            </div>
            <div className="flex gap-6 items-center justify-center">
                <ProjectCard />
            </div>
        </section>
        </div>
        </>
    )
}