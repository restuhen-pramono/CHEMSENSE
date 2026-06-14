"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
      bg-white
      rounded-3xl
      p-8
      border
      border-slate-100
      shadow-sm
      hover:shadow-xl
      transition
      "
    >
      <div
        className="
        w-16
        h-16
        rounded-2xl
        bg-green-100
        flex
        items-center
        justify-center
        mb-6
        "
      >
        {icon}
      </div>

      <h3
        className="
        text-xl
        font-bold
        text-slate-800
        mb-3
        "
      >
        {title}
      </h3>

      <p
        className="
        text-slate-600
        leading-relaxed
        "
      >
        {description}
      </p>
    </motion.div>
  );
}