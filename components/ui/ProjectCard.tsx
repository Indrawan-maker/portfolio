import projectImage1 from "@/components/images/evoucher.webp";
import projectImage3 from "@/components/images/project3.webp";
import { Card } from "./Card";

export const ProjectCard = () => {
  return (
    <div className="md:ml-0 md:flex md:gap-4 grid items-center justify-center ">
      <Card
        projectTitle="E - Voucher"
        projectDescription="Aplikasi manajemen voucher yang digunakan untuk menghindari kesalahan perhitungan dan mempermudah pencatatan transaksi."
        projectImage={projectImage1}
        projectLink="https://github.com/Indrawan-maker/e-voucher"
        techStack={["Laravel", "MySQL", "Livewire", "RBAC"]}
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
