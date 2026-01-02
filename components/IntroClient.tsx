"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GREETINGS = ["● Hello", "● Halo", "● Bonjour", "● Hola", "● Ciao"];

export default function IntroClient({ children }: { children: React.ReactNode }) {
  const [index, setIndex] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const [introSeen, setIntroSeen] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem("introSeen");
    if (seen) {
      setIntroSeen(true);
      setShowContent(true);
    }
  }, []);

  useEffect(() => {
    if (introSeen) return;

    if (index < GREETINGS.length) {
      const timer = setTimeout(() => setIndex(i => i + 1), 400);
      return () => clearTimeout(timer);
    } else {
      setTimeout(() => {
        setShowContent(true);
        sessionStorage.setItem("introSeen", "true");
      }, 200);
    }
  }, [index, introSeen]);

  if (!introSeen && !showContent) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <p className="text-5xl font-bold text-white">
          {GREETINGS[index]}
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="max-w-7xl w-full"
    >
      {children}
    </motion.div>
  );
}

