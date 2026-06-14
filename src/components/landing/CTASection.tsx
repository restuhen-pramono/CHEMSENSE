"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Trophy,
  Brain,
} from "lucide-react";

const stats = [
  {
    icon: <BookOpen size={22} />,
    value: "10+",
    label: "Modul Interaktif",
  },
  {
    icon: <Brain size={22} />,
    value: "AI",
    label: "Learning Companion",
  },
  {
    icon: <Trophy size={22} />,
    value: "XP",
    label: "Gamification System",
  },
];

export default function CTASection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-br
          from-green-500
          via-green-600
          to-emerald-600
          text-white
          px-8
          md:px-16
          py-16
          "
        >
          {/* Decorative Blur */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            {/* Heading */}
            <div className="max-w-3xl mx-auto text-center">
              <span
                className="
                inline-flex
                px-4
                py-2
                rounded-full
                bg-white/20
                text-sm
                font-medium
                "
              >
                🚀 Mulai Perjalanan Belajarmu
              </span>

              <h2
                className="
                mt-6
                text-4xl
                md:text-5xl
                font-bold
                leading-tight
                "
              >
                Belajar Kimia Tidak Harus Sulit
              </h2>

              <p
                className="
                mt-6
                text-lg
                text-green-50
                leading-relaxed
                "
              >
                CHEMSENSE membantu peserta didik
                memahami konsep kimia melalui
                pembelajaran multisensori yang lebih
                interaktif, menyenangkan, dan mudah
                dipahami.
              </p>
            </div>

            {/* Stats */}
            <div
              className="
              mt-12
              grid
              gap-6
              md:grid-cols-3
              "
            >
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="
                  bg-white/10
                  backdrop-blur-md
                  rounded-3xl
                  p-6
                  text-center
                  "
                >
                  <div className="flex justify-center mb-3">
                    {item.icon}
                  </div>

                  <h3
                    className="
                    text-3xl
                    font-bold
                    "
                  >
                    {item.value}
                  </h3>

                  <p className="text-green-50 mt-2">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div
              className="
              flex
              flex-wrap
              justify-center
              gap-4
              mt-12
              "
            >
              <button
                className="
                px-8
                py-4
                rounded-full
                bg-white
                text-green-700
                font-semibold
                hover:scale-105
                transition
                "
              >
                Mulai Belajar Gratis
              </button>

              <button
                className="
                px-8
                py-4
                rounded-full
                border
                border-white/40
                bg-white/10
                font-semibold
                hover:bg-white/20
                transition
                "
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}