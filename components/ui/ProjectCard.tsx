import mynabung from "@/components/images/mynabung.webp";
import topup from "@/components/images/topup.webp";
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
                      projectTitle="Santee Topup"
                      projectDescription="top up berbagai  game secara online"
                      projectImage={topup}
                      projectLink="https://santeetopup-fe.vercel.app/id-id"
                      techStack={["Nextjs", "express", "sequelize", "Midtrans"]}
                    />
    </div>
  );
};
