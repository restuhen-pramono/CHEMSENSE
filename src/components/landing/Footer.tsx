"use client";

import Link from "next/link";
import { Atom } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3">

              <div
                className="
                w-12
                h-12
                rounded-xl
                bg-green-500
                flex
                items-center
                justify-center
                "
              >
                <Atom className="text-white" />
              </div>

              <div>
                <h3 className="font-bold text-lg text-slate-800">
                  CHEMSENSE
                </h3>

                <p className="text-sm text-slate-500">
                  Smart Chemistry Learning
                </p>
              </div>

            </div>

            <p
              className="
              mt-5
              text-slate-600
              leading-relaxed
              "
            >
              Platform pembelajaran kimia multisensori
              berbasis IoT yang membantu peserta didik
              disleksia belajar dengan lebih mudah,
              interaktif, dan menyenangkan.
            </p>
          </motion.div>

          {/* Produk */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-800">
              Produk
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>Multisensory Learning</li>
              <li>AI Companion</li>
              <li>Gamification</li>
              <li>IoT Chemistry Kit</li>
            </ul>
          </div>

          {/* Resource */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-800">
              Resource
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>Panduan Belajar</li>
              <li>Modul Kimia</li>
              <li>Artikel Edukasi</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold mb-4 text-slate-800">
              Kontak
            </h4>

            <ul className="space-y-3 text-slate-600">
              <li>support@chemsense.id</li>
              <li>Yogyakarta, Indonesia</li>
              <li>Universitas Negeri Yogyakarta</li>
            </ul>
          </div>

        </div>

        <div
          className="
          mt-12
          pt-8
          border-t
          border-slate-200
          flex
          flex-col
          md:flex-row
          justify-between
          gap-4
          "
        >
          <p className="text-slate-500 text-sm">
            © 2026 CHEMSENSE. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-slate-500">
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}