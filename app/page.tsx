import Hero from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Project } from "@/components/Project";
import { Footer } from "@/components/Footer";
import IntroClient from "@/components/IntroClient";

export default function Home() {
  return (
    <main 
      className="relative bg-[#020103] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* SEO CONTENT — Google baca ini, user ga lihat */}
      <article className="sr-only">
        <h1 itemProp="name">
          Indrawan – Muhammad Indrawan | Fullstack Web Developer Indonesia
        </h1>
        
        <section>
          <h2>Tentang Indrawan</h2>
          <p itemProp="description">
            <strong>Muhammad Indrawan</strong>, yang biasa dipanggil <strong>Indrawan</strong>, 
            adalah fullstack web developer profesional dari Indonesia yang berbasis di Balikpapan, 
            Kalimantan Timur.
          </p>
          <p>
            <strong>Indrawan</strong> memiliki pengalaman dalam membangun website modern, 
            landing page, company profile, e-commerce, dan sistem web custom menggunakan 
            teknologi terkini seperti Next.js, React, TypeScript, dan Tailwind CSS.
          </p>
        </section>

        <section>
          <h2>Keahlian Indrawan</h2>
          <p>
            Sebagai fullstack developer, <strong>Indrawan</strong> menguasai pengembangan 
            frontend dan backend. <strong>Indrawan</strong> mengkhususkan diri dalam:
          </p>
          <ul>
            <li>Pembuatan website dengan Next.js dan React</li>
            <li>Frontend development dengan TypeScript</li>
            <li>UI/UX engineering yang modern dan responsif</li>
            <li>Optimasi SEO dan performa website</li>
            <li>Integrasi backend dan database</li>
          </ul>
        </section>

        <section>
          <h2>Portfolio Indrawan</h2>
          <p>
            Portfolio <strong>Muhammad Indrawan</strong> menampilkan berbagai project 
            website berkualitas tinggi yang telah dikerjakan untuk klien dari berbagai 
            industri. Setiap project yang dikerjakan <strong>Indrawan</strong> selalu 
            mengutamakan kualitas code, user experience, dan performa optimal.
          </p>
        </section>

        <section>
          <h2>Layanan Web Development Indrawan</h2>
          <p>
            <strong>Indrawan</strong> menyediakan jasa pembuatan website profesional 
            untuk bisnis, UMKM, startup, dan organisasi. Hubungi <strong>Indrawan</strong> 
            untuk konsultasi project website Anda.
          </p>
        </section>

        <section>
          <h2>Hubungi Indrawan</h2>
          <p>
            Untuk informasi lebih lanjut atau konsultasi pembuatan website, 
            hubungi <strong>Muhammad Indrawan</strong> melalui:
          </p>
          <ul>
            <li itemProp="email">Email: indrawanismail0@gmail.com</li>
            <li>LinkedIn: Muhammad Indrawan Ismail</li>
            <li>GitHub: Indrawan-maker</li>
            <li itemProp="address">Lokasi: Balikpapan, Kalimantan Timur, Indonesia</li>
          </ul>
        </section>

        <footer>
          <p>
            © {new Date().getFullYear()} <strong>Muhammad Indrawan</strong> (Indrawan). 
            Fullstack Web Developer Indonesia. All rights reserved.
          </p>
        </footer>
      </article>

      <IntroClient>
        <Hero />
        <Experience />
        <TechStack />
        <Project />
        <Footer />
      </IntroClient>
    </main>
  );
}