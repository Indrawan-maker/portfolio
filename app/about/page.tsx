import HeroRoute from "@/components/HeroRoute";
import { TechStack } from '@/components/TechStack';
import { Footer } from '@/components/Footer';

export default function About() {
    return (
        <>
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#020103]">
            <HeroRoute 
            title="Hi I&apos;m, Muhammad Indrawan."
            description="A full-stack developer with experience in web and mobile development. I enjoy working across all stages of a project,from concept to delivery, and I&apos;m always looking for ways to improve both my technical skills and the user experience."
            />
    <div className="max-w-7xl w-full mt-28">
        <TechStack />
    </div>
    <div className="-mt-36">
        <Footer />
    </div>
    </main>
        </>
    )
}