"use client";

import React from "react";
import { motion } from "framer-motion";

interface Topic {
  id: string;
  title: string;
  icon: string;
  totalSteps: number;
  completedSteps: number;
  color: string;
  borderColor: string;
  textColor: string;
}

interface ProgressListProps {
  topics: Topic[];
}

export default function ProgressList({ topics }: ProgressListProps) {
  return (
    <div className="space-y-4">
      {topics.map((topic, index) => {
        const percentage = (topic.completedSteps / topic.totalSteps) * 100;

        return (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.08 }}
            whileHover={{ scale: 1.01 }}
            className={`${topic.color} p-5 rounded-3xl border-4 ${topic.borderColor} flex flex-col md:flex-row items-start md:items-center justify-between gap-4`}
          >
            {/* Bagian Kiri: Detail Informasi */}
            <div className="flex items-center gap-4">
              <span className="text-4xl p-2 bg-white/70 rounded-2xl border-2 border-dashed border-black/10 select-none" role="img" aria-label="topic-icon">
                {topic.icon}
              </span>
              <div>
                <h3 className={`text-xl font-black ${topic.textColor} tracking-wide`}>
                  {topic.title}
                </h3>
                <p className="text-sm font-bold text-[#4A5568]">
                  {topic.completedSteps} dari {topic.totalSteps} misi selesai
                </p>
              </div>
            </div>

            {/* Bagian Kanan: Indikator & Aksi */}
            <div className="w-full md:w-64 flex items-center gap-4">
              {/* Progress Bar */}
              <div className="w-full bg-white/80 h-6 rounded-full border-2 border-black/5 overflow-hidden p-0.5">
                <motion.div
                  className={`h-full rounded-full ${topic.borderColor.replace('border', 'bg')}`}
                  initial={{ width: 0 }}
                  animate={{ width: `${percentage}%` }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                />
              </div>
              
              {/* Tombol Main */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-4 py-2 bg-white ${topic.textColor} font-black rounded-xl border-2 ${topic.borderColor} shadow-[0_3px_0_rgba(0,0,0,0.1)] text-sm whitespace-nowrap active:translate-y-0.5 transition-all`}
              >
                {percentage === 100 ? "Ulangi 🔄" : percentage > 0 ? "Lanjut 🌟" : "Mulai 🚀"}
              </motion.button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}