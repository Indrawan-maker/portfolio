import { ProjectCard } from "./ui/ProjectCard"


export const Project = () => {
    return (
        <>
        <div className="flex justify-center items-center">
        <section className="mt-16 justify-center w-160 h-80">
            <div className="flex justify-between mb-6">
        <h4 className="flex justify-start text-gray-300 text-xl tracking-widest">Project</h4>
        <button className="flex justify-start text-gray-600 text-md tracking-widest cursor-pointer hover:text-white">View More</button>
            </div>
            <div>
                <ProjectCard />
            </div>
        </section>
        </div>
        </>
    )
}