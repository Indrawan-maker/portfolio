import mynabung from "@/components/images/mynabung.webp";
import semarweb from "@/components/images/semar-web.webp";
import { Card } from "./Card";

export const ProjectCard = () => {
  return (
    <div className="md:ml-0 md:flex md:gap-4 grid items-center justify-center ">
                    <Card
                    projectTitle="MyNabung"
                    projectDescription="Track transaksi anda sehari-hari"
                    projectImage={mynabung}
                    projectLink="https://www.mynabung.my.id"
                    techStack={["MySQL", "NextJS", "Shadcn", "dashboard"]}
                  />
      {/* pemisah antar project */}
                  <Card
                    projectTitle="Software House Semar"
                    projectDescription="Landing page untuk software house semar"
                    projectImage={semarweb}
                    projectLink="https://www.semarweb.my.id"
                    techStack={["NextJS", "MySQL", "framer motion"]}
                  />
    </div>
  );
};
