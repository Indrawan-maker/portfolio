// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indrawan | Muhammad Indrawan Ismail | M Indrawan - Fullstack Web Developer Indonesia",
  description:
    "Muhammad Indrawan Ismail (Indrawan / M Indrawan) adalah fullstack web developer profesional Indonesia. Spesialis Next.js, React, TypeScript, dan pembuatan website modern untuk bisnis, UMKM, dan startup. Portfolio dan jasa pembuatan website terpercaya.",
  keywords: [
    // Primary Keywords - FOKUS NAMA
    "Muhammad Indrawan Ismail",
    "Muhammad Indrawan",
    "M Indrawan",
    "Indrawan",
    "Indrawan Ismail",
    
    // Developer Keywords
    "Muhammad Indrawan Ismail developer",
    "Muhammad Indrawan developer",
    "M Indrawan developer",
    "Indrawan web developer",
    "Indrawan fullstack developer",
    "Indrawan Indonesia",
    "Indrawan portfolio",
    "fullstack developer Indrawan",
    "developer Indrawan",
    "web developer Muhammad Indrawan",
    "programmer Muhammad Indrawan Ismail",
    
    // Service Keywords
    "jasa website Indrawan",
    "jasa pembuatan website Muhammad Indrawan",
    "Indrawan Next.js",
    "Indrawan React",
    "Indrawan programmer",
    "portfolio Muhammad Indrawan Ismail",
    "portfolio M Indrawan",
    
    // Location Keywords
    "web developer Balikpapan",
    "fullstack developer Kalimantan Timur",
    "developer Indonesia",
  ],
  authors: [
    { 
      name: "Muhammad Indrawan Ismail", 
      url: "https://indrawan-id.vercel.app" 
    },
    { 
      name: "M Indrawan", 
      url: "https://indrawan-id.vercel.app" 
    },
    { 
      name: "Indrawan", 
      url: "https://indrawan-id.vercel.app" 
    }
  ],
  creator: "Muhammad Indrawan Ismail (M Indrawan)",
  publisher: "Muhammad Indrawan Ismail",
  metadataBase: new URL("https://indrawan-id.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Muhammad Indrawan Ismail | M Indrawan | Indrawan - Fullstack Web Developer Indonesia",
    description:
      "Website resmi Muhammad Indrawan Ismail (M Indrawan). Fullstack web developer profesional Indonesia yang membangun website cepat, modern, dan SEO-friendly untuk bisnis, UMKM, dan startup.",
    url: "https://indrawan-id.vercel.app",
    siteName: "Muhammad Indrawan Ismail Portfolio",
    images: [
      {
        url: "/profile.webp",
        width: 1200,
        height: 630,
        alt: "Muhammad Indrawan Ismail (M Indrawan) — Fullstack Web Developer Indonesia Portfolio",
      },
    ],
    locale: "id_ID",
    type: "profile",
    firstName: "Muhammad Indrawan",
    lastName: "Ismail",
    username: "indrawan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Indrawan Ismail | M Indrawan — Fullstack Web Developer Indonesia",
    description:
      "Muhammad Indrawan Ismail (M Indrawan / Indrawan) adalah fullstack web developer profesional Indonesia. Spesialis Next.js, React, dan pembuatan website modern.",
    images: ["/profile.webp"],
    creator: "@troy_sakana",
  },
  icons: {
    icon: "/smartWeb.svg",
    apple: "/profile.webp",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "76f2bdf997e7dd54",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema untuk Person (profil pribadi) - TAMBAH VARIASI NAMA
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Indrawan Ismail",
    alternateName: [
      "M Indrawan", 
      "Indrawan", 
      "Muhammad Indrawan",
      "Indrawan Ismail",
      "Indrawan Dev", 
      "Indrawan Developer", 
      "Troy Sakana"
    ],
    url: "https://indrawan-id.vercel.app",
    image: "https://indrawan-id.vercel.app/profile.webp",
    description: "Muhammad Indrawan Ismail (M Indrawan) adalah fullstack web developer profesional Indonesia spesialis Next.js, React, dan TypeScript",
    jobTitle: "Fullstack Web Developer & UI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Independent Developer"
    },
    knowsAbout: [
      "Web Development",
      "Fullstack Development",
      "Next.js Development",
      "React Development",
      "TypeScript",
      "JavaScript",
      "Frontend Development",
      "Backend Development",
      "UI Engineering",
      "SEO Optimization",
      "Website Performance",
      "Tailwind CSS"
    ],
    knowsLanguage: ["Indonesian", "English"],
    nationality: "Indonesian",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ID",
      addressRegion: "Kalimantan Timur",
      addressLocality: "Balikpapan"
    },
    sameAs: [
      "https://github.com/Indrawan-maker",
      "https://www.linkedin.com/in/muhammad-indrawan-ismail-1baa13326/",
      "https://www.instagram.com/troy_sakana/",
    ],
    email: "indrawanismail0@gmail.com"
  };

  // Schema untuk Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Indrawan Ismail Portfolio",
    alternateName: [
      "Indrawan Portfolio", 
      "M Indrawan Portfolio",
      "Muhammad Indrawan Portfolio", 
      "Indrawan Fullstack Developer",
      "Portfolio Muhammad Indrawan Ismail"
    ],
    url: "https://indrawan-id.vercel.app",
    description: "Portfolio resmi Muhammad Indrawan Ismail (M Indrawan / Indrawan), fullstack web developer profesional Indonesia",
    author: {
      "@type": "Person",
      name: "Muhammad Indrawan Ismail",
      alternateName: ["M Indrawan", "Indrawan"]
    },
    inLanguage: "id-ID",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: "Muhammad Indrawan Ismail"
    }
  };

  // Schema untuk ProfessionalService
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Muhammad Indrawan Ismail Web Development Services",
    alternateName: [
      "Jasa Website Muhammad Indrawan",
      "Jasa Website Indrawan",
      "Jasa Website M Indrawan"
    ],
    image: "https://indrawan-id.vercel.app/profile.webp",
    description: "Jasa pembuatan website profesional oleh Muhammad Indrawan Ismail (M Indrawan). Spesialis landing page, company profile, e-commerce, dan sistem web modern dengan Next.js dan React.",
    provider: {
      "@type": "Person",
      name: "Muhammad Indrawan Ismail",
      alternateName: ["M Indrawan", "Indrawan"]
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia"
    },
    availableLanguage: ["Indonesian", "English"],
    priceRange: "$$",
    serviceType: [
      "Website Development",
      "Fullstack Development",
      "Next.js Development",
      "React Development",
      "Landing Page Creation",
      "E-commerce Development",
      "Company Profile Website"
    ]
  };

  // Schema untuk ProfilePage
  const profileSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    mainEntity: {
      "@type": "Person",
      "@id": "https://indrawan-id.vercel.app/#person",
      name: "Muhammad Indrawan Ismail",
      alternateName: ["M Indrawan", "Indrawan", "Muhammad Indrawan"],
      description: "Fullstack Web Developer profesional Indonesia spesialis Next.js, React, dan TypeScript",
      image: "https://indrawan-id.vercel.app/profile.webp",
      sameAs: [
        "https://github.com/Indrawan-maker",
        "https://www.linkedin.com/in/muhammad-indrawan-ismail-1baa13326/",
        "https://www.instagram.com/troy_sakana/"
      ]
    }
  };

  return (
    <html lang="id">
      <head>
        {/* Schema Markup - SANGAT PENTING untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, serviceSchema, profileSchema])
          }}
        />
        
        {/* Tambahan meta tags untuk SEO */}
        <meta name="author" content="Muhammad Indrawan Ismail" />
        <meta name="copyright" content="Muhammad Indrawan Ismail" />
        <link rel="canonical" href="https://indrawan-id.vercel.app" />
        
        {/* Geo Targeting */}
        <meta name="geo.region" content="ID-KI" />
        <meta name="geo.placename" content="Balikpapan" />
        <meta name="geo.position" content="-1.2379;116.8529" />
        <meta name="ICBM" content="-1.2379, 116.8529" />
        
        {/* Additional SEO */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="Indonesian" />
      </head>
      <body>{children}</body>
    </html>
  );
}