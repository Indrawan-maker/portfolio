import mynabung from "@/components/images/mynabung.webp";
import taya from "@/components/images/tayatopup.webp";
import { Card } from "./Card";

export const ProjectCard = () => {
  return (
    <div className="md:ml-0 md:flex md:gap-4 grid items-center justify-center ">
                    <Card
                    projectTitle="MyNabung"
                    projectDescription="Track transaksi anda sehari-hari"
                    projectImage={mynabung}
                    projectLink="https://www.mynabung.my.id"
                    techStack={["MySQL", "NextJS", "Shadcn"]}
                  />
                    <Card
                    projectTitle="Tayatopup"
                    projectDescription="Top up games, pulsa, voucher dll"
                    projectImage={taya}
                    projectLink="https://www.tayatopup.id"
                    techStack={["posgree", "NextJS", "Nestjs", "Docker", "Midtrans"]}
                  />
      {/* pemisah antar project */}
    </div>
  );
};
