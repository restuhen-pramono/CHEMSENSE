"use client";

import { motion } from "framer-motion";
import { Atom, FlaskConical, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden py-20 md:py-28"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-green-200 blur-3xl opacity-40" />
        <div className="absolute right-10 top-10 h-72 w-72 rounded-full bg-blue-200 blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-medium
              text-sm
              "
            >
              <Sparkles size={16} />
              Pembelajaran Kimia Multisensori
            </span>

            <h1
              className="
              mt-6
              text-4xl
              md:text-6xl
              font-bold
              leading-tight
              text-slate-800
              "
            >
              Belajar Kimia
              <span className="text-green-500"> Lebih Mudah </span>
              untuk Semua Anak
            </h1>

            <p
              className="
              mt-6
              text-lg
              md:text-xl
              text-slate-600
              leading-relaxed
              max-w-xl
              "
            >
              CHEMSENSE membantu peserta didik disleksia memahami
              konsep kimia melalui visual interaktif, audio,
              gamifikasi, dan perangkat IoT yang menyenangkan.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button
                className="
                px-8
                py-4
                bg-green-500
                hover:bg-green-600
                text-white
                font-semibold
                rounded-full
                transition
                "
              >
                Mulai Belajar
              </button>

              <button
                className="
                px-8
                py-4
                bg-white
                border
                border-slate-200
                hover:border-green-400
                rounded-full
                font-semibold
                "
              >
                Lihat Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-10 flex-wrap">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  10+
                </h3>
                <p className="text-slate-500">
                  Modul Interaktif
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  AI
                </h3>
                <p className="text-slate-500">
                  Learning Assistant
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-slate-800">
                  IoT
                </h3>
                <p className="text-slate-500">
                  Smart Experiment
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Main Character Card */}
            <div
              className="
              bg-white
              rounded-[32px]
              shadow-xl
              p-10
              border
              border-slate-100
              "
            >
              <div className="flex justify-center">
                <div
                  className="
                  w-56
                  h-56
                  rounded-full
                  bg-green-100
                  flex
                  items-center
                  justify-center
                  "
                >
                  <Atom
                    size={110}
                    className="text-green-500"
                  />
                </div>
              </div>

              <h3
                className="
                text-center
                text-2xl
                font-bold
                mt-6
                text-slate-800
                "
              >
                CHEMSENSE Buddy
              </h3>

              <p
                className="
                text-center
                text-slate-500
                mt-2
                "
              >
                Teman belajar kimia yang membantu memahami
                konsep dengan cara yang lebih mudah.
              </p>
            </div>

            {/* Floating Card 1 */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="
              absolute
              -left-4
              top-10
              bg-white
              rounded-2xl
              shadow-lg
              px-5
              py-4
              "
            >
              <div className="flex items-center gap-3">
                <FlaskConical
                  size={22}
                  className="text-blue-500"
                />
                <span className="font-medium">
                  Smart Experiment
                </span>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              className="
              absolute
              -right-4
              bottom-10
              bg-white
              rounded-2xl
              shadow-lg
              px-5
              py-4
              "
            >
              <div className="flex items-center gap-3">
                <Sparkles
                  size={22}
                  className="text-amber-500"
                />
                <span className="font-medium">
                  AI Learning
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}