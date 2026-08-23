// import Icon1 from "./images/uinsi-icon.webp";
import Icon1 from "./images/uinsi.jpg";
import Icon2 from "./images/tayalogo.webp";
import { Studies } from '@/components/ui/Studies';


export const WorkStudies = ({ setActiveTab }: { setActiveTab: string }) => {

    return (
        <div>

            <div className="flex md:grid md:w-full md:h-auto border-2 rounded-xl border-white">
                {
                    setActiveTab === 'work' ?
                        <>
                            <Studies imageProps={Icon2} dateProps="june 2026 - now" titleProps="Tayatopup" descProps="Focusing on Tayatopup" />
                        </>
                        :
                        <>
                            <Studies imageProps={Icon1} dateProps="August 2024 - August 2028" titleProps="UINSI" descProps="Undergraduate in Information System" />
                        </>
                }
            </div>
        </div>
    )
}
