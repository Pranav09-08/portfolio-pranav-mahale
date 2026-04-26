"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";

const texts = ["Loading", "Building", "Launching"];

export const IntroPreloader = () => {
  const pathname = usePathname();
  const shouldRun = pathname === "/";
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  const text = useMemo(() => {
    if (progress < 34) {
      return texts[0];
    }
    if (progress < 67) {
      return texts[1];
    }
    return texts[2];
  }, [progress]);

  useEffect(() => {
    if (!shouldRun) {
      setVisible(false);
      return;
    }

    const alreadyShown = window.sessionStorage.getItem("intro-shown") === "1";
    if (alreadyShown) {
      setVisible(false);
      return;
    }

    setVisible(true);
    window.sessionStorage.setItem("intro-shown", "1");

    const start = performance.now();
    const duration = 1700;

    const tick = (now: number) => {
      const elapsed = now - start;
      const ratio = Math.min(1, elapsed / duration);
      setProgress(Math.round(ratio * 100));

      if (ratio < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setVisible(false), 180);
      }
    };

    requestAnimationFrame(tick);
  }, [shouldRun]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          key="intro-preloader"
          className="fixed inset-0 z-[120] flex items-center justify-center bg-[#040814]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
        >
          <div className="relative w-[min(560px,88vw)] rounded-2xl border border-[#254073] bg-[#0a1328]/90 p-8 shadow-[0_24px_70px_-32px_rgba(71,123,255,0.65)]">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#8db5ff]">Portfolio</p>
            <h2 className="mt-4 text-2xl font-black uppercase text-[#eff3ff] md:text-3xl">{text} Experience</h2>
            <div className="mt-7 h-2 overflow-hidden rounded-full bg-[#122244]">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-[#70a4ff] via-[#8fb9ff] to-[#ff9a6b]"
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "easeOut", duration: 0.12 }}
              />
            </div>
            <p className="mt-3 text-right font-mono text-xs text-[#9eb3db]">{progress}%</p>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
