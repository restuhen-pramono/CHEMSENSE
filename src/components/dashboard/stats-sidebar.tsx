"use client";

import React from "react";
import { motion } from "framer-motion";

interface StatsSidebarProps {
  xp: number;
  streak: number;
}

export default function StatsSidebar({ xp, streak }: StatsSidebarProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
      {/* Streak Counter */}
      <motion.div
        whileHover={{ y: -3 }}
        className="bg-white p-5 rounded-3xl border-4 border-[#FF922B] shadow-[0_4px_0_#D9480F] flex items-center gap-4 select-none"
      >
        <span className="text-4xl" role="img" aria-label="streak">🔥</span>
        <div>
          <p className="text-xs font-bold text-[#718096] uppercase tracking-wider">Suntikan Hari</p>
          <p className="text-xl md:text-2xl font-black text-[#D9480F]">{streak} Hari</p>
        </div>
      </motion.div>

      {/* XP Counter */}
      <motion.div
        whileHover={{ y: -3 }}
        className="bg-white p-5 rounded-3xl border-4 border-[#40C057] shadow-[0_4px_0_#2B8A3E] flex items-center gap-4 select-none"
      >
        <span className="text-4xl" role="img" aria-label="xp">⚡</span>
        <div>
          <p className="text-xs font-bold text-[#718096] uppercase tracking-wider">Energi XP</p>
          <p className="text-xl md:text-2xl font-black text-[#2B8A3E]">{xp} XP</p>
        </div>
      </motion.div>
    </div>
  );
}