"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    {
      label: "Beranda",
      href: "#hero",
    },
    {
      label: "Fitur",
      href: "#features",
    },
    {
      label: "Tentang",
      href: "#about",
    },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/"
              className="flex items-center gap-2"
            >
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold">
                C
              </div>

              <div>
                <h1 className="font-bold text-slate-800 text-lg">
                  CHEMSENSE
                </h1>

                <p className="text-xs text-slate-500">
                  Learn Chemistry Better
                </p>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-slate-600 hover:text-green-600 transition"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              className="
              bg-green-500
              hover:bg-green-600
              text-white
              px-6
              py-3
              rounded-full
              font-semibold
              transition
              "
            >
              Mulai Belajar
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          className="md:hidden border-t bg-white"
        >
          <div className="px-6 py-4 flex flex-col gap-4">

            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-medium text-slate-600"
              >
                {item.label}
              </a>
            ))}

            <button
              className="
              bg-green-500
              text-white
              py-3
              rounded-full
              font-semibold
              "
            >
              Mulai Belajar
            </button>

          </div>
        </motion.div>
      )}
    </header>
  );
}