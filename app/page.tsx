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
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");
    if (seen) {
      setIntroSeen(true);
      setShowContent(true);
      return;
    }
  }, []);

  useEffect(() => {
    if (introSeen) return;

    if (index < greetings.length) {
      const timer = setTimeout(() => setIndex(index + 1), 800);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowContent(true);
        sessionStorage.setItem("introSeen", "true"); 
      }, 250);
    }
  }, [index, greetings.length, introSeen]);

  return (
    <main className="relative bg-[#020103] flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      {!introSeen && !showContent && (
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
        <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: showContent ? 1 : 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="max-w-7xl w-full"
        >
          <Hero />
          <Experience />
          <TechStack />
          <Project />
          <Footer />
        </motion.div>
      )}
    </main>
  );
}
