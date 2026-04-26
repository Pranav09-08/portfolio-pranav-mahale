"use client";

import { motion } from "framer-motion";

const blobs = [
  {
    className: "left-[-8rem] top-[-5rem] h-80 w-80 bg-[#ff9f6f]/28",
    x: [0, 40, -12, 0],
    y: [0, -20, 24, 0],
  },
  {
    className: "right-[-7rem] top-[18rem] h-96 w-96 bg-[#6ea8ff]/25",
    x: [0, -28, 18, 0],
    y: [0, 26, -22, 0],
  },
  {
    className: "left-[42%] bottom-[-8rem] h-80 w-80 bg-[#7bc9b5]/20",
    x: [0, 22, -26, 0],
    y: [0, -18, 22, 0],
  },
];

export const AmbientBackground = () => {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(123,172,255,0.18),transparent_46%),radial-gradient(circle_at_80%_10%,rgba(255,151,105,0.16),transparent_38%)]" />
      <div className="grid-overlay absolute inset-0 opacity-40" />

      {blobs.map((blob, index) => (
        <motion.div
          key={blob.className}
          className={`absolute rounded-full blur-3xl ${blob.className}`}
          animate={{ x: blob.x, y: blob.y }}
          transition={{
            duration: 14 + index * 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        />
      ))}
    </div>
  );
};
