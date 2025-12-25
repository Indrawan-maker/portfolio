import Icon1 from "./images/uinsi-icon.webp";
import Icon2 from "./images/semar.png";
import { Studies } from '@/components/ui/Studies';


export const WorkStudies = ({ setActiveTab }: { setActiveTab: string }) => {



    return (
        <div>

            <div className="flex md:grid md:w-full md:h-auto  border-2 rounded-xl border-white">
                {
                    setActiveTab === 'work' ?
                        <>
                            <Studies imageProps={Icon2} dateProps="2025 - now" titleProps="SEMAR" descProps="Working on freelance projects focusing on web development" />
                        </>
                        :
                        <>
                            <Studies imageProps={Icon1} dateProps="August 2024 - August 2028" titleProps="Universitas Islam Negeri Sultan Aji Muhammad Idris Samarinda" descProps="Undergraduate in Information System" />
                        </>
                }
            </div>
        </div>
    )
}
