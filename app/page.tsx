import { Experience } from "@/components/Experience";
import Hero from "@/components/Hero";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  return (
  <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#020103]">
    <div className="max-w-7xl w-full">
      <Hero/>
      <Experience />
      <TechStack />
    </div>
  </main>
  )
}
