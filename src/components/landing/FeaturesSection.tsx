"use client";

import { motion } from "framer-motion";

import {
  Brain,
  Atom,
  Trophy,
  Cpu,
} from "lucide-react";

import FeatureCard from "@/components/ui/FeaturedCard";

const features = [
  {
    title: "Multisensory Learning",
    description:
      "Belajar melalui visual, audio, animasi, dan aktivitas interaktif yang membantu peserta didik disleksia memahami konsep kimia lebih mudah.",
    icon: <Atom size={30} className="text-green-600" />,
  },
  {
    title: "AI Learning Companion",
    description:
      "Pendamping belajar yang menjelaskan konsep kimia dengan bahasa yang lebih sederhana dan mudah dipahami.",
    icon: <Brain size={30} className="text-blue-600" />,
  },
  {
    title: "Gamified Learning",
    description:
      "Selesaikan misi harian, kumpulkan XP, naik level, dan dapatkan badge untuk menjaga motivasi belajar.",
    icon: <Trophy size={30} className="text-amber-500" />,
  },
  {
    title: "IoT Chemistry Kit",
    description:
      "Hubungkan eksperimen fisik dengan platform digital dan lihat hasil sensor secara real-time.",
    icon: <Cpu size={30} className="text-purple-600" />,
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
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
            duration: 0.6,
          }}
          className="text-center max-w-3xl mx-auto"
        >
          <span
            className="
            px-4
            py-2
            rounded-full
            bg-green-100
            text-green-700
            text-sm
            font-medium
            "
          >
            Fitur Unggulan
          </span>

          <h2
            className="
            mt-6
            text-4xl
            md:text-5xl
            font-bold
            text-slate-800
            "
          >
            Cara Baru Belajar Kimia
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-slate-600
            "
          >
            CHEMSENSE menggabungkan teknologi, AI,
            dan pembelajaran multisensori untuk
            menciptakan pengalaman belajar yang lebih
            menyenangkan dan mudah dipahami.
          </p>
        </motion.div>

        {/* Cards */}
        <div
          className="
          mt-16
          grid
          gap-8
          md:grid-cols-2
          xl:grid-cols-4
          "
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
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
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}