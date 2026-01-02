// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Indrawan | Muhammad Indrawan - Fullstack Web Developer Indonesia",
  description:
    "Indrawan (Muhammad Indrawan) adalah fullstack web developer profesional Indonesia. Spesialis Next.js, React, TypeScript, dan pembuatan website modern untuk bisnis, UMKM, dan startup. Portfolio dan jasa pembuatan website terpercaya.",
  keywords: [
    "Indrawan",
    "Muhammad Indrawan",
    "Indrawan web developer",
    "Indrawan fullstack developer",
    "Indrawan Indonesia",
    "Indrawan portfolio",
    "fullstack developer Indrawan",
    "web developer Indrawan",
    "jasa website Indrawan",
    "Indrawan Next.js",
    "Muhammad Indrawan developer",
    "Indrawan programmer",
    "developer Indrawan",
  ],
  authors: [
    { 
      name: "Muhammad Indrawan", 
      url: "https://indrawan-id.vercel.app" 
    }
  ],
  creator: "Muhammad Indrawan (Indrawan)",
  publisher: "Indrawan",
  metadataBase: new URL("https://indrawan-id.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Indrawan — Muhammad Indrawan | Fullstack Web Developer Indonesia",
    description:
      "Website resmi Indrawan (Muhammad Indrawan). Fullstack web developer profesional Indonesia yang membangun website cepat, modern, dan SEO-friendly untuk bisnis, UMKM, dan startup.",
    url: "https://indrawan-id.vercel.app",
    siteName: "Indrawan Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Indrawan — Muhammad Indrawan Fullstack Web Developer Portfolio",
      },
    ],
    locale: "id_ID",
    type: "profile",
    firstName: "Muhammad",
    lastName: "Indrawan",
    username: "indrawan",
  },
  twitter: {
    card: "summary_large_image",
    title: "Indrawan — Fullstack Web Developer Indonesia",
    description:
      "Muhammad Indrawan (Indrawan) adalah fullstack web developer profesional Indonesia. Spesialis Next.js, React, dan pembuatan website modern.",
    images: ["/og-image.png"],
    creator: "@troy_sakana",
  },
  icons: {
    icon: "/smartWeb.svg",
    apple: "/apple-touch-icon.png",
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
    google: "isi-setelah-daftar-google-search-console",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema untuk Person (profil pribadi)
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Indrawan",
    alternateName: ["Indrawan", "Indrawan Dev", "Indrawan Developer", "Troy Sakana"],
    url: "https://indrawan-id.vercel.app",
    image: "https://indrawan-id.vercel.app/profile.jpg",
    description: "Fullstack Web Developer profesional Indonesia spesialis Next.js, React, dan TypeScript",
    jobTitle: "Fullstack Web Developer & UI Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Independent Developer"
    },
    knowsAbout: [
      "Web Development",
      "Fullstack Development",
      "Next.js",
      "React",
      "TypeScript",
      "Frontend Development",
      "Backend Development",
      "UI Engineering"
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
    ]
  };

  // Schema untuk Website
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Indrawan Portfolio",
    alternateName: ["Indrawan", "Muhammad Indrawan Portfolio", "Indrawan Fullstack Developer"],
    url: "https://indrawan-id.vercel.app",
    description: "Portfolio resmi Muhammad Indrawan (Indrawan), fullstack web developer Indonesia",
    author: {
      "@type": "Person",
      name: "Muhammad Indrawan"
    },
    inLanguage: "id-ID",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: "Muhammad Indrawan"
    }
  };

  // Schema untuk ProfessionalService
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Indrawan Web Development Services",
    alternateName: "Jasa Website Indrawan",
    image: "https://indrawan-id.vercel.app/og-image.png",
    description: "Jasa pembuatan website profesional oleh Indrawan (Muhammad Indrawan). Spesialis landing page, company profile, dan sistem web modern.",
    provider: {
      "@type": "Person",
      name: "Muhammad Indrawan"
    },
    areaServed: "ID",
    availableLanguage: ["Indonesian", "English"],
    priceRange: "$$"
  };

  return (
    <html lang="id">
      <head>
        {/* Schema Markup - SANGAT PENTING untuk SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([personSchema, websiteSchema, serviceSchema])
          }}
        />
        
        {/* Tambahan meta tags */}
        <meta name="author" content="Muhammad Indrawan" />
        <meta name="copyright" content="Muhammad Indrawan" />
        <link rel="canonical" href="https://indrawan-id.vercel.app" />
      </head>
      <body>{children}</body>
    </html>
  );
}