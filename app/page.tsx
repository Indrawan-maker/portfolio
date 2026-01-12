import Hero from "@/components/Hero";
import { Experience } from "@/components/Experience";
import { TechStack } from "@/components/TechStack";
import { Project } from "@/components/Project";
import { Footer } from "@/components/Footer";
import IntroClient from "@/components/IntroClient";
import type { Metadata } from 'next';

// ✅ PAGE-SPECIFIC METADATA untuk Homepage
export const metadata: Metadata = {
  title: "Muhammad Indrawan Ismail | M Indrawan | Indrawan - Fullstack Web Developer Indonesia",
  description: "Portfolio resmi Muhammad Indrawan Ismail (M Indrawan / Indrawan). Fullstack web developer profesional Indonesia spesialis Next.js, React, TypeScript. Jasa pembuatan website modern untuk bisnis, UMKM, startup.",
  keywords: "Muhammad Indrawan Ismail, M Indrawan, Indrawan, Muhammad Indrawan, fullstack developer Indonesia, web developer Balikpapan, Next.js developer, React developer, portfolio Muhammad Indrawan Ismail",
  openGraph: {
    title: "Muhammad Indrawan Ismail | M Indrawan - Fullstack Web Developer",
    description: "Portfolio Muhammad Indrawan Ismail (M Indrawan) - Fullstack Web Developer profesional Indonesia",
    url: "https://indrawan-id.vercel.app",
    type: "website",
  },
};

export default function Home() {
  return (
    <main 
      className="relative bg-[#020103] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5"
      itemScope 
      itemType="https://schema.org/Person"
    >
      {/* ✅ SEO CONTENT — Google baca ini, user ga lihat */}
      <article className="sr-only">
        <h1 itemProp="name">
          Muhammad Indrawan Ismail – M Indrawan – Indrawan | Fullstack Web Developer Indonesia
        </h1>
        
        <section>
          <h2>Tentang Muhammad Indrawan Ismail (M Indrawan)</h2>
          <p itemProp="description">
            <strong>Muhammad Indrawan Ismail</strong>, yang biasa dipanggil <strong>M Indrawan</strong> atau <strong>Indrawan</strong>, 
            adalah fullstack web developer profesional dari Indonesia yang berbasis di Balikpapan, 
            Kalimantan Timur. <strong>Muhammad Indrawan Ismail</strong> memiliki keahlian mendalam dalam pengembangan web modern.
          </p>
          <p>
            <strong>M Indrawan</strong> memiliki pengalaman dalam membangun website modern, 
            landing page, company profile, e-commerce, dan sistem web custom menggunakan 
            teknologi terkini seperti Next.js, React, TypeScript, dan Tailwind CSS. 
            Portfolio <strong>Muhammad Indrawan Ismail</strong> menunjukkan dedikasi tinggi terhadap kualitas dan performa.
          </p>
          <p>
            Sebagai <strong>Indrawan</strong>, ia telah membantu berbagai klien dari UMKM, startup, 
            hingga perusahaan besar dalam mewujudkan website impian mereka. Setiap project yang dikerjakan 
            <strong>Muhammad Indrawan Ismail</strong> selalu mengutamakan SEO optimization, user experience, 
            dan performa website yang cepat.
          </p>
        </section>

        <section>
          <h2>Keahlian Muhammad Indrawan Ismail (M Indrawan)</h2>
          <p>
            Sebagai fullstack developer, <strong>M Indrawan</strong> menguasai pengembangan 
            frontend dan backend. <strong>Muhammad Indrawan Ismail</strong> mengkhususkan diri dalam:
          </p>
          <ul>
            <li><strong>Indrawan</strong> ahli dalam pembuatan website dengan Next.js dan React</li>
            <li><strong>M Indrawan</strong> menguasai frontend development dengan TypeScript</li>
            <li><strong>Muhammad Indrawan Ismail</strong> expert dalam UI/UX engineering yang modern dan responsif</li>
            <li><strong>Indrawan</strong> spesialis dalam optimasi SEO dan performa website</li>
            <li><strong>M Indrawan</strong> berpengalaman dalam integrasi backend dan database</li>
            <li><strong>Muhammad Indrawan Ismail</strong> ahli dalam Node.js, Express.js, dan API Development</li>
          </ul>
          <p>
            Stack teknologi yang dikuasai <strong>M Indrawan</strong> meliputi: Next.js 14+, React 18+, 
            TypeScript, JavaScript ES6+, Tailwind CSS, Node.js, Express.js, MongoDB, PostgreSQL, 
            Prisma ORM, Git, Docker, dan Vercel deployment. <strong>Muhammad Indrawan Ismail</strong> 
            terus update dengan teknologi web terbaru untuk memberikan solusi terbaik kepada klien.
          </p>
        </section>

        <section>
          <h2>Portfolio Muhammad Indrawan Ismail (M Indrawan / Indrawan)</h2>
          <p>
            Portfolio <strong>Muhammad Indrawan Ismail</strong> menampilkan berbagai project 
            website berkualitas tinggi yang telah dikerjakan untuk klien dari berbagai 
            industri. Setiap project yang dikerjakan <strong>M Indrawan</strong> selalu 
            mengutamakan kualitas code, user experience, dan performa optimal.
          </p>
          <p>
            <strong>Indrawan</strong> telah menyelesaikan puluhan project termasuk landing page 
            untuk startup teknologi, company profile untuk perusahaan multinasional, e-commerce 
            untuk UMKM, dan sistem web custom untuk berbagai industri. Portfolio lengkap 
            <strong>Muhammad Indrawan Ismail</strong> dapat dilihat di website ini.
          </p>
          <p>
            Klien <strong>M Indrawan</strong> tersebar di seluruh Indonesia, dari Jakarta, Surabaya, 
            Bandung, hingga Balikpapan dan kota-kota lainnya. Testimoni positif dari klien membuktikan 
            bahwa <strong>Muhammad Indrawan Ismail</strong> adalah pilihan tepat untuk project web development Anda.
          </p>
        </section>

        <section>
          <h2>Layanan Web Development Muhammad Indrawan Ismail (M Indrawan)</h2>
          <p>
            <strong>Muhammad Indrawan Ismail</strong> menyediakan jasa pembuatan website profesional 
            untuk bisnis, UMKM, startup, dan organisasi. Layanan yang ditawarkan <strong>M Indrawan</strong> meliputi:
          </p>
          <ul>
            <li>Landing Page Design & Development - <strong>Indrawan</strong></li>
            <li>Company Profile Website - <strong>Muhammad Indrawan Ismail</strong></li>
            <li>E-commerce Website & Online Store - <strong>M Indrawan</strong></li>
            <li>Custom Web Application Development - <strong>Indrawan</strong></li>
            <li>Website Redesign & Optimization - <strong>Muhammad Indrawan Ismail</strong></li>
            <li>SEO Optimization & Performance Tuning - <strong>M Indrawan</strong></li>
            <li>Website Maintenance & Support - <strong>Indrawan</strong></li>
          </ul>
          <p>
            Proses kerja <strong>M Indrawan</strong> transparan, komunikatif, dan tepat waktu. 
            Dari konsultasi awal, desain, development, hingga deployment, <strong>Muhammad Indrawan Ismail</strong> 
            memastikan setiap tahapan berjalan lancar. Website yang dibangun <strong>Indrawan</strong> 
            dijamin mobile-responsive, SEO-friendly, dan loading cepat.
          </p>
        </section>

        <section>
          <h2>Mengapa Memilih Muhammad Indrawan Ismail (M Indrawan)?</h2>
          <p>
            <strong>Muhammad Indrawan Ismail</strong> bukan hanya sekedar developer, tapi partner 
            terpercaya untuk kesuksesan bisnis online Anda. Berikut keunggulan bekerja dengan <strong>M Indrawan</strong>:
          </p>
          <ul>
            <li>✅ Pengalaman proven dalam puluhan project sukses - <strong>Indrawan</strong></li>
            <li>✅ Code quality tinggi, clean, dan maintainable - <strong>Muhammad Indrawan Ismail</strong></li>
            <li>✅ Responsive communication dan update progress rutin - <strong>M Indrawan</strong></li>
            <li>✅ Garansi bug fix dan support after launch - <strong>Indrawan</strong></li>
            <li>✅ Harga kompetitif dengan kualitas premium - <strong>Muhammad Indrawan Ismail</strong></li>
            <li>✅ Fast delivery tanpa mengorbankan kualitas - <strong>M Indrawan</strong></li>
          </ul>
        </section>

        <section>
          <h2>Teknologi Yang Dikuasai Muhammad Indrawan Ismail</h2>
          <p>
            <strong>M Indrawan</strong> menguasai full-stack modern web development. Tech stack 
            <strong>Muhammad Indrawan Ismail</strong>:
          </p>
          <p>
            <strong>Frontend:</strong> <strong>Indrawan</strong> expert dalam Next.js, React, TypeScript, 
            JavaScript, Tailwind CSS, CSS3, HTML5, Framer Motion untuk animasi, dan Zustand/Redux untuk state management.
          </p>
          <p>
            <strong>Backend:</strong> <strong>M Indrawan</strong> menguasai Node.js, Express.js, 
            REST API, GraphQL, tRPC, NextAuth untuk authentication, dan Prisma ORM.
          </p>
          <p>
            <strong>Database:</strong> <strong>Muhammad Indrawan Ismail</strong> berpengalaman dengan 
            MongoDB, PostgreSQL, MySQL, Firebase, dan Supabase.
          </p>
          <p>
            <strong>Tools & Platform:</strong> <strong>Indrawan</strong> menggunakan Git, GitHub, 
            VS Code, Figma, Vercel, Netlify, Railway, Docker, dan AWS.
          </p>
        </section>

        <section>
          <h2>Hubungi Muhammad Indrawan Ismail (M Indrawan / Indrawan)</h2>
          <p>
            Untuk informasi lebih lanjut atau konsultasi pembuatan website, 
            hubungi <strong>Muhammad Indrawan Ismail</strong> melalui:
          </p>
          <ul>
            <li itemProp="email"><strong>Email M Indrawan:</strong> indrawanismail0@gmail.com</li>
            <li><strong>LinkedIn Muhammad Indrawan Ismail:</strong> Muhammad Indrawan Ismail</li>
            <li><strong>GitHub Indrawan:</strong> Indrawan-maker</li>
            <li><strong>Instagram M Indrawan:</strong> @troy_sakana</li>
            <li itemProp="address"><strong>Lokasi Muhammad Indrawan Ismail:</strong> Balikpapan, Kalimantan Timur, Indonesia</li>
          </ul>
          <p>
            <strong>M Indrawan</strong> siap membantu mewujudkan website impian Anda. Konsultasi gratis! 
            Hubungi <strong>Muhammad Indrawan Ismail</strong> sekarang dan dapatkan penawaran terbaik 
            untuk project web development Anda.
          </p>
        </section>

        <footer>
          <p>
            © {new Date().getFullYear()} <strong>Muhammad Indrawan Ismail</strong> (M Indrawan / Indrawan). 
            Fullstack Web Developer Indonesia. All rights reserved. Website ini dibangun dengan Next.js 14, 
            React 18, TypeScript, dan Tailwind CSS oleh <strong>Muhammad Indrawan Ismail</strong>.
          </p>
          <p>
            <strong>Muhammad Indrawan Ismail</strong> | <strong>M Indrawan</strong> | <strong>Indrawan</strong> | 
            Fullstack Web Developer Indonesia | Next.js Developer | React Developer | TypeScript Developer | 
            Web Developer Balikpapan | Developer Kalimantan Timur | Jasa Pembuatan Website Indonesia
          </p>
        </footer>
      </article>

      {/* ✅ KOMPONEN VISUAL - User lihat ini */}
      <IntroClient>
        <Hero />
        <Experience />
        <TechStack />
        <Project />
        <Footer />
      </IntroClient>

      {/* ✅ BREADCRUMB STRUCTURED DATA */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://indrawan-id.vercel.app"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Muhammad Indrawan Ismail Portfolio",
                "item": "https://indrawan-id.vercel.app"
              }
            ]
          })
        }}
      />
    </main>
  );
}