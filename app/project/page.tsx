import HeroRoute from "@/components/HeroRoute";


export default function Project() {
    return (
        <>
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#020103]">
                    <HeroRoute 
                    title="Project"
                    description="Explore a list of projects showcasing various skills and technologies."
                    />
            <div className="max-w-7xl w-full">
            </div>
            </main>
        </>
    )
}