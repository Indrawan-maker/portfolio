import mynabung from "@/components/images/mynabung.webp";
import projectImage3 from "@/components/images/project3.webp";
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
        projectTitle="Ceritain Alumni"
        projectDescription="a place for you to tell stories and share experiences about your college days."
        projectImage={projectImage3}
        projectLink="https://cerita-alumnii.vercel.app/"
        techStack={["zustand", "express", "mongodb", "microservices"]}
      />
    </div>
  );
};
