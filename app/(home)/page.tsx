"use client";

import { TextReveal } from "@/components/ui/text-reveal";
import CoverWrapHero from "../_components/CoverWrapHero";
import TerminalHero from "../_components/TerminalHero";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full">
      <div className="flex justify-center items-center flex-col gap-y-6 w-full">
        <CoverWrapHero />
        <TerminalHero />
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 5, ease: "easeOut", delay: 5 }}
        >
          <TextReveal>
            I am an experienced fullstack software development engineer
            specializing in crafting web, mobile and desktop apps.
          </TextReveal>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
