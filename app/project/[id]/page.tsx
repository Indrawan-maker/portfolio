import { JSX } from "react"
import type { ParamsProps } from "@/app/types"
import HeroRoute from "@/components/HeroRoute"
import { Footer } from "@/components/Footer"

export default async function ProjectId({ params }: ParamsProps): Promise<JSX.Element> {
    const { id } = params
    return (
        <>
            <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-[#020103]"
                translate="no"
            >
                <HeroRoute title="ini adala" description="test" />
                <div>
                    <Footer />
                </div>
            </main>
        </>
    )
}