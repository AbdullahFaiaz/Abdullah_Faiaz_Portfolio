import { useEffect, useRef, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import FadeUp from "@/animation/fade-up";
export default function LandingHero() {
  const [scrollY, setScrollY] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = ref;

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => document.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.section
      animate={{
        transform: `translateY(${progress * 20}vh)`,
      }}
      transition={{ type: "spring", stiffness: 100 }}
      ref={ref}
      className="flex h-[calc(100vh-112px)] items-center px-6 sm:px-14 md:px-20"
    >
      <div className="-mt-[112px] w-full">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence>
            <FadeUp key="title-main" duration={0.6}>
              <h1 className="bg-accent bg-clip-text py-2 text-5xl font-bold text-transparent sm:text-6xl md:text-7xl xl:text-8xl">
                Abdullah Faiaz
              </h1>
              <span className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 md:text-3xl">
                MERN Stack Developer
              </span>
            </FadeUp>
            <FadeUp key="description" duration={0.6} delay={0.2}>
              <div className="mt-8 max-w-3xl text-base font-semibold text-zinc-900 dark:text-zinc-200 sm:text-base md:text-2xl">
                <span className="text-xl text-accent sm:text-3xl">Hi</span>,
                I&apos;m
                <span className="text-accent"> Abdullah Faiaz</span> , I turn
                vision into reality with code and design.
              </div>
              <div className="mt-[20px]">
                <a
                  href="https://drive.google.com/drive/u/0/folders/1m3nsKsPGkq9u02-ESJnkVl7_Gh5f-zUh"
                  download
                >
                  <button className="rounded-full bg-[#4ca4a9] px-4 py-2 font-bold text-white hover:bg-[#4ca4a9]">
                    Download My Resume
                  </button>
                </a>
              </div>
            </FadeUp>
          </AnimatePresence>
        </div>
      </div>
    </motion.section>
  );
}
