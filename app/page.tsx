"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import { Project } from "@/components/Project";
import { TechStack } from "@/components/TechStack";

export default function Home() {
  const greetings: string[] = [
    "● Hello",
    "● Halo",
    "● Bonjour",
    "● Hola",
    "● Ciao",
    "● こんにちは",
    "● 안녕하세요",
  ];

  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    if (index < greetings.length) {
      const timer = setTimeout(() => setIndex(index + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => setShowContent(true), 500); 
    }
  }, [index]);

  return (
    <main className="relative bg-[#020103] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {/* Overlay Intro */}
      {!showContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-5xl font-bold text-white"
            >
              {greetings[index]}
            </motion.h1>
          </AnimatePresence>
        </div>
      )}

      {showContent && (
        <div className="max-w-7xl w-full">
          <Hero />
          <Experience />
          <TechStack />
          <Project />
          <Footer />
        </div>
      )}
    </main>
  );
}
