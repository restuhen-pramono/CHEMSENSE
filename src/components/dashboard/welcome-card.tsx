"use client";

import React from "react";
import { motion } from "framer-motion";

interface WelcomeCardProps {
  name: string;
  avatar: string;
}

export default function WelcomeCard({ name, avatar }: WelcomeCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-[#4C6EF5] text-white p-6 md:p-8 rounded-3xl border-4 border-[#364FC7] shadow-[0_6px_0_#364FC7] flex items-center gap-6"
    >
      <span className="text-5xl md:text-6xl p-3 bg-white/20 rounded-2xl backdrop-blur-sm select-none" role="img" aria-label="avatar">
        {avatar}
      </span>
      <div>
        <h1 className="text-2xl md:text-4xl font-black tracking-wide">
          Halo, Ilmuwan {name}!
        </h1>
        <p className="text-sm md:text-lg text-[#EDF2FF] font-medium mt-1">
          Hari yang hebat untuk mencoba eksperimen kimia baru. Kamu sudah siap?
        </p>
      </div>
    </motion.div>
  );
}