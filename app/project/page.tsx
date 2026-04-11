import HeroRoute from "@/components/HeroRoute";
import { Footer } from "@/components/Footer";
import evoucher from "@/components/images/evoucher.webp";
import mynabung from "@/components/images/mynabung.webp";
import semarweb from "@/components/images/semar-web.webp";
import projectImage1 from "@/components/images/project1.webp";
import projectImage2 from "@/components/images/project2.webp";
import projectImage3 from "@/components/images/project3.webp";
import topup from "@/components/images/topup.webp";
import cms from "@/components/images/readme3.webp";
import projectImage4 from "@/components/images/project4.webp";
import { Card } from "@/components/ui/Card";

export default function ProjectRoute() {
  return (
    <>
      <main
        translate="no"
        className="relative grid justify-center items-center overflow-hidden mx-auto sm:px-10 px-5 min-h-screen"
      >
        <HeroRoute
          title="Project"
          description="Explore a list of projects showcasing various skills and technologies."
        />
          <div className="mt-22 items-center justify-center flex">
            <section className="mt-16 justify-center w-88 h-60 p-4 md:w-180 md:h-80 md:p-0">
              <div className="">
                <h4 className="flex justify-start text-gray-300 text-xl tracking-widest mb-8 ">
                  Project
                </h4>
                <div className="md:ml-0 md:grid md:gap-4 grid md:grid-cols-2 items-center justify-center">
                    <Card
                    projectTitle="MyNabung"
                    projectDescription="Track transaksi anda sehari-hari"
                    projectImage={mynabung}
                    projectLink="https://www.mynabung.my.id"
                    techStack={["MySQL", "NextJS", "Shadcn", "dashboard"]}
                  />
                    <Card
                      projectTitle="Santee Topup"
                      projectDescription="top up berbagai  game secara online"
                      projectImage={topup}
                      projectLink="https://santeetopup-fe.vercel.app/id-id"
                      techStack={["Nextjs", "express", "sequelize", "Midtrans"]}
                    />
                  <Card
                    projectTitle="Software House Semar"
                    projectDescription="Landing page untuk software house semar"
                    projectImage={semarweb}
                    projectLink="https://www.semarweb.my.id"
                    techStack={["NextJS", "MySQL", "framer motion"]}
                  />
                  <Card
                    projectTitle="E - Voucher"
                    projectDescription="Aplikasi manajemen voucher yang digunakan untuk menghindari kesalahan perhitungan dan mempermudah pencatatan transaksi."
                    projectImage={evoucher}
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
                  {/* pemisah antar project */}
                  <Card
                    projectTitle="HMPS SI"
                    projectDescription="is an information center where you can find things related to your field of study."
                    projectImage={projectImage4}
                    projectLink="https://hmpssi.vercel.app/"
                    techStack={["tailwindCSS", "nextJS", "daisyUI"]}
                  />
                  {/* pemisah antar project */}
                  <Card
                    projectTitle="Costum CMS"
                    projectDescription="Display whatever you want in website interface."
                    projectImage={cms}
                    projectLink="https://github.com/Indrawan-maker/uas-web"
                    techStack={["php native", "MySQL", "admin dashboard"]}
                  />
                  <Card
                    projectTitle="Puzzle 3 x 3"
                    projectDescription="An anime image puzzle game in a 3x3 grid."
                    projectImage={projectImage1}
                    projectLink="https://anime-puzzle-3x3.vercel.app/"
                    techStack={["tailwindCSS", "react", "vite", "slicing"]}
                  />
                  {/* pemisah antar project */}
                  <Card
                    projectTitle="Personal Portfolio"
                    projectDescription="A simple portfolio to showcase my project as a developer."
                    projectImage={projectImage2}
                    projectLink="https://portfolio-sigma-virid-u677bz60w1.vercel.app/"
                    techStack={["tailwindCSS", "nextJS"]}
                  />
                </div>
              </div>
            </section>
          </div>
          <div className="mt-800 md:mt-320">
      <Footer />
          </div>
      </main>
    </>
  );
}
