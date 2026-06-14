// app/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/common/Container';
import { Button } from '@/components/common/Button';
import { ChevronRight, Zap, Users, BookOpen, Trophy, Accessibility, Radio} from 'lucide-react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      {/* ============ NAVBAR ============ */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 shadow-sm"
      >
        <Container>
          <div className="flex items-center justify-between py-4 lg:py-5">
            {/* Logo */}
            <motion.div className="flex items-center gap-2">
              <div
                className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-500 bg-clip-text text-transparent"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.05em',
                }}
              >
                CHEMSENSE
              </div>
              <div className="text-xl">🔬</div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {['Tentang', 'Fitur', 'Kontak'].map((item, idx) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="text-gray-700 font-medium hover:text-cyan-600 transition-colors"
                  style={{
                    fontSize: 'clamp(14px, 2.5vw, 16px)',
                    letterSpacing: '0.025em',
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Desktop Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="hidden md:flex items-center gap-3"
            >
              <Button variant="outline" size="md">
                Masuk
              </Button>
              <Button variant="primary" size="md">
                Daftar Gratis
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl">☰</span>
            </motion.button>
          </div>
        </Container>
      </motion.nav>

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-cyan-50 to-emerald-50 overflow-hidden py-12 lg:py-20">
        {/* Animated background */}
        <motion.div
          className="absolute top-10 left-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl"
          animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"
          animate={{ y: [0, -30, 0], x: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        <Container size="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col justify-center"
            >
              {/* Eyebrow */}
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 mb-4 w-fit"
              >
                <span className="text-2xl">✨</span>
                <span
                  className="text-cyan-600 font-bold text-sm tracking-wider uppercase"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Belajar Kimia Dengan Cara Baru
                </span>
              </motion.div>

              {/* Main Headline */}
              <motion.h1
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.05em',
                  lineHeight: 1.2,
                  color: '#1F2937',
                }}
              >
                Jelajahi Dunia <br />
                <span className="bg-gradient-to-r from-cyan-600 via-blue-600 to-emerald-600 bg-clip-text text-transparent">
                  Kimia Multisensori
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-700 mb-8 max-w-xl"
                style={{
                  letterSpacing: '0.025em',
                  lineHeight: 1.8,
                }}
              >
                Platform pembelajaran kimia interaktif dengan teknologi IoT RFID, dirancang khusus
                untuk anak-anak disleksia. Sentuh, dengarkan, dan rasakan keajaiban kimia! 🔬
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row gap-4 mb-8"
              >
                <Button
                  variant="primary"
                  size="lg"
                  fullWidth
                  className="sm:w-auto"
                  icon="🚀"
                >
                  Mulai Belajar Sekarang
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  fullWidth
                  className="sm:w-auto flex items-center justify-center gap-2"
                >
                  Lihat Demo
                  <ChevronRight size={20} />
                </Button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <div>
                  <div className="text-2xl font-bold text-gray-900">1000+</div>
                  <div className="text-sm text-gray-600" style={{ letterSpacing: '0.025em' }}>
                    Siswa Aktif
                  </div>
                </div>
                <div className="h-12 w-px bg-gray-300" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">4.9⭐</div>
                  <div className="text-sm text-gray-600" style={{ letterSpacing: '0.025em' }}>
                    Rating
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - Animated RFID Card Demo */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="flex flex-col items-center justify-center"
            >
              <motion.div
                variants={floatingVariants}
                initial="initial"
                animate="animate"
                className="w-full max-w-sm"
              >
                {/* RFID Card */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  className="cursor-pointer p-8 bg-gradient-to-br from-cyan-500 via-blue-500 to-emerald-500 rounded-2xl shadow-2xl"
                >
                  {/* Card Inner */}
                  <div className="bg-white rounded-xl p-6 shadow-xl">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-sm font-bold text-gray-600">CHEMSENSE</div>
                      <div className="text-2xl">🔒</div>
                    </div>

                    {/* RFID Signal Animation */}
                    <motion.div
                      className="flex justify-center mb-6"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <div className="relative w-16 h-16">
                        {/* Outer circle */}
                        <motion.div
                          className="absolute inset-0 border-2 border-cyan-500 rounded-full"
                          animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        {/* Middle circle */}
                        <motion.div
                          className="absolute inset-2 border-2 border-blue-500 rounded-full"
                          animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            delay: 0.2,
                          }}
                        />
                        {/* Center icon */}
                        <div className="absolute inset-0 flex items-center justify-center text-2xl">
                          📡
                        </div>
                      </div>
                    </motion.div>

                    {/* Card Info */}
                    <div className="text-center">
                      <p
                        className="text-xs text-gray-500 mb-2 tracking-wider uppercase"
                        style={{ letterSpacing: '0.1em' }}
                      >
                        Tap Kartu untuk Demo
                      </p>
                      <p
                        className="text-lg font-bold text-gray-900"
                        style={{ letterSpacing: '0.05em' }}
                      >
                        RFID Card Demo
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Tap indicator */}
                <motion.div
                  animate={{ scale: [0.8, 1.2], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="mt-8 text-center"
                >
                  <div className="text-4xl mb-2">👆</div>
                  <p className="text-sm text-gray-600 font-medium">
                    Tap kartu untuk melihat demo
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ============ FEATURES SECTION ============ */}
      <section id="fitur" className="py-16 lg:py-24 bg-white border-t border-gray-200">
        <Container size="lg">
          {/* Section Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="text-center mb-16 lg:mb-20"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 mb-4"
            >
              <span className="text-2xl">⚡</span>
              <span
                className="text-cyan-600 font-bold text-sm tracking-wider uppercase"
                style={{ letterSpacing: '0.1em' }}
              >
                Fitur Unggulan
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-black mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                letterSpacing: '0.05em',
                lineHeight: 1.2,
              }}
            >
              Belajar dengan Cara <br />
              <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                yang Menyenangkan
              </span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-700 max-w-2xl mx-auto"
              style={{
                letterSpacing: '0.025em',
                lineHeight: 1.8,
              }}
            >
              CHEMSENSE menggunakan teknologi terkini dan desain yang ramah untuk semua gaya
              belajar, terutama untuk anak-anak disleksia.
            </motion.p>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {[
              {
                icon: '🍎',
                title: 'Eksplorasi Makanan',
                description: 'Jelajahi dunia kimia melalui makanan sehari-hari',
                color: 'from-orange-400 to-red-500',
              },
              {
                icon: '🤖',
                title: 'AI Tutor Pintar',
                description: 'Asisten AI yang menyesuaikan pembelajaran sesuai kecepatan Anda',
                color: 'from-blue-400 to-cyan-500',
              },
              {
                icon: '⭐',
                title: 'Gamifikasi Seru',
                description: 'Kumpulkan poin, buka lencana, dan naik level',
                color: 'from-yellow-400 to-amber-500',
              },
              {
                icon: '📡',
                title: 'IoT Interaktif',
                description: 'Teknologi RFID membuat pembelajaran menjadi pengalaman nyata',
                color: 'from-green-400 to-emerald-500',
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 hover:border-cyan-500 transition-all h-full"
              >
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 10 }}
                  className="text-5xl mb-4 inline-block"
                >
                  {feature.icon}
                </motion.div>

                {/* Content */}
                <h3
                  className="text-lg lg:text-xl font-bold text-gray-900 mb-3"
                  style={{
                    fontFamily: 'Poppins, sans-serif',
                    letterSpacing: '0.05em',
                    lineHeight: 1.4,
                  }}
                >
                  {feature.title}
                </h3>

                <p
                  className="text-gray-700 text-sm lg:text-base"
                  style={{
                    letterSpacing: '0.025em',
                    lineHeight: 1.8,
                  }}
                >
                  {feature.description}
                </p>

                {/* Badge */}
                <div
                  className={`flex items-center gap-2 mt-4 pt-4 border-t border-gray-300`}
                >
                  <div
                    className={`h-1 w-8 rounded-full bg-gradient-to-r ${feature.color}`}
                  />
                  <span
                    className="text-xs font-semibold text-gray-600 uppercase"
                    style={{ letterSpacing: '0.08em' }}
                  >
                    Aktif
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-cyan-50 via-blue-50 to-emerald-50 border-t border-gray-200">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            {/* Left - Benefits */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              <motion.div
                variants={itemVariants}
                className="inline-flex items-center gap-2 mb-4"
              >
                <span className="text-2xl">🎯</span>
                <span
                  className="text-cyan-600 font-bold text-sm tracking-wider uppercase"
                  style={{ letterSpacing: '0.1em' }}
                >
                  Mengapa CHEMSENSE?
                </span>
              </motion.div>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-black mb-6"
                style={{
                  fontFamily: 'Poppins, sans-serif',
                  letterSpacing: '0.05em',
                  lineHeight: 1.2,
                }}
              >
                Investasi Terbaik untuk{' '}
                <span className="bg-gradient-to-r from-cyan-600 to-emerald-600 bg-clip-text text-transparent">
                  Masa Depan Belajar
                </span>
              </motion.h2>

              {/* Benefits List */}
              <motion.div className="space-y-4 mb-8">
                {[
                  'Pembelajaran yang dipersonalisasi untuk setiap siswa',
                  'Antarmuka yang ramah disleksia dengan aksesibilitas lengkap',
                  'Teknologi IoT yang membuat belajar menjadi pengalaman nyata',
                  'Monitoring progress untuk orang tua dan guru',
                ].map((benefit, idx) => (
                  <motion.div
                    key={idx}
                    custom={idx}
                    variants={itemVariants}
                    className="flex items-start gap-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex-shrink-0 mt-1"
                    >
                      <div className="text-xl">✓</div>
                    </motion.div>
                    <p
                      className="text-gray-700 text-base lg:text-lg"
                      style={{
                        letterSpacing: '0.025em',
                        lineHeight: 1.8,
                      }}
                    >
                      {benefit}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Stats */}
              <motion.div
                variants={itemVariants}
                className="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
              >
                <div className="text-center">
                  <div
                    className="text-2xl lg:text-3xl font-black text-cyan-600"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    98%
                  </div>
                  <p
                    className="text-xs lg:text-sm text-gray-600 mt-1"
                    style={{ letterSpacing: '0.025em' }}
                  >
                    Improvement
                  </p>
                </div>
                <div className="h-12 w-px bg-gray-200 mx-auto" />
                <div className="text-center">
                  <div
                    className="text-2xl lg:text-3xl font-black text-emerald-600"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    1000+
                  </div>
                  <p
                    className="text-xs lg:text-sm text-gray-600 mt-1"
                    style={{ letterSpacing: '0.025em' }}
                  >
                    Pengguna
                  </p>
                </div>
              </motion.div>
            </motion.div>

            {/* Right - CTA Boxes */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col gap-6"
            >
              {/* Primary CTA */}
              <motion.div
                custom={0}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-2xl blur-xl group-hover:blur-2xl transition-all opacity-50 group-hover:opacity-75" />
                  <div className="relative bg-white rounded-2xl p-8 lg:p-10 shadow-lg">
                    <h3
                      className="text-2xl lg:text-3xl font-black mb-3"
                      style={{
                        fontFamily: 'Poppins, sans-serif',
                        letterSpacing: '0.05em',
                      }}
                    >
                      Mulai Percobaan Gratis 🚀
                    </h3>
                    <p
                      className="text-gray-700 mb-6"
                      style={{
                        letterSpacing: '0.025em',
                        lineHeight: 1.8,
                      }}
                    >
                      Akses penuh ke semua fitur selama 30 hari. Tidak perlu kartu kredit.
                    </p>
                    <Button
                      variant="primary"
                      size="lg"
                      fullWidth
                      className="mb-3"
                    >
                      Daftar Sekarang
                    </Button>
                    <p
                      className="text-center text-xs text-gray-600"
                      style={{ letterSpacing: '0.025em' }}
                    >
                      ✓ Gratis selamanya untuk guru
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Secondary CTA */}
              <motion.div
                custom={1}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-white rounded-2xl p-8 lg:p-10 border-2 border-gray-200 hover:border-cyan-500 transition-all shadow-sm">
                  <h3
                    className="text-2xl lg:text-3xl font-black mb-3"
                    style={{
                      fontFamily: 'Poppins, sans-serif',
                      letterSpacing: '0.05em',
                    }}
                  >
                    Konsultasi Gratis 💬
                  </h3>
                  <p
                    className="text-gray-700 mb-6"
                    style={{
                      letterSpacing: '0.025em',
                      lineHeight: 1.8,
                    }}
                  >
                    Bicarakan kebutuhan pembelajaran anak Anda dengan tim ahli kami.
                  </p>
                  <Button
                    variant="outline"
                    size="lg"
                    fullWidth
                  >
                    Booking Demo
                  </Button>
                </div>
              </motion.div>

              {/* Trust Badge */}
              <motion.div
                custom={2}
                variants={itemVariants}
                className="flex items-center justify-center gap-2 p-4 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <span className="text-xl">✅</span>
                <p
                  className="text-sm text-emerald-800 font-medium"
                  style={{ letterSpacing: '0.025em' }}
                >
                  Dipercaya oleh sekolah-sekolah terkemuka
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-gray-900 text-white border-t border-gray-800">
        <Container size="lg">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
            variants={containerVariants}
            className="py-16 lg:py-20"
          >
            {/* Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
              {/* Brand */}
              <motion.div variants={itemVariants} className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-4">
                  <div
                    className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    CHEMSENSE
                  </div>
                  <span className="text-xl">🔬</span>
                </div>
                <p
                  className="text-gray-400 mb-6 text-sm lg:text-base"
                  style={{
                    letterSpacing: '0.025em',
                    lineHeight: 1.8,
                  }}
                >
                  Platform pembelajaran kimia multisensori berbasis IoT untuk anak-anak disleksia.
                  Membuat sains lebih mudah diakses untuk semua.
                </p>

                {/* Contact Info */}
                <div className="space-y-3">
                  <a
                    href="mailto:hello@chemsense.id"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    ✉️ hello@chemsense.id
                  </a>
                  <a
                    href="tel:+6212345678"
                    className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    📞 +62 1234 5678
                  </a>
                  <div className="flex items-start gap-2 text-gray-400 text-sm">
                    📍 Yogyakarta, Indonesia
                  </div>
                </div>
              </motion.div>

              {/* Links */}
              {[
                {
                  title: 'Produk',
                  links: ['Fitur', 'Pricing', 'Blog', 'Documentation'],
                },
                {
                  title: 'Perusahaan',
                  links: ['Tentang', 'Karir', 'Press', 'Contact'],
                },
                {
                  title: 'Legal',
                  links: ['Privacy', 'Terms', 'Cookie', 'Accessibility'],
                },
              ].map((section, idx) => (
                <motion.div
                  key={idx}
                  custom={idx + 1}
                  variants={itemVariants}
                >
                  <h3
                    className="font-bold text-white mb-4"
                    style={{ letterSpacing: '0.025em' }}
                  >
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                          style={{ letterSpacing: '0.025em' }}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-800 pt-8" />

            {/* Bottom */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="flex flex-col md:flex-row items-center justify-between gap-6"
            >
              <motion.p
                variants={itemVariants}
                className="text-gray-500 text-sm"
                style={{ letterSpacing: '0.025em' }}
              >
                © 2026 CHEMSENSE. All rights reserved.
              </motion.p>

              {/* Social Icons */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-4"
              >
                {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-500 hover:text-cyan-400 transition-colors p-2"
                  >
                    <span className="text-lg">
                      {social === 'facebook' && '👍'}
                      {social === 'twitter' && '🐦'}
                      {social === 'instagram' && '📸'}
                      {social === 'linkedin' && '💼'}
                    </span>
                  </motion.a>
                ))}
              </motion.div>

              {/* Accessibility Badge */}
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 rounded-lg border border-gray-700"
              >
                <span>♿</span>
                <span
                  className="text-xs font-medium text-gray-400"
                  style={{ letterSpacing: '0.025em' }}
                >
                  WCAG AAA
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </Container>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 bg-gray-950 py-4">
          <Container>
            <p
              className="text-center text-xs text-gray-600"
              style={{ letterSpacing: '0.025em' }}
            >
              Dirancang dengan ❤️ untuk membuat pembelajaran lebih inklusif
            </p>
          </Container>
        </div>
      </footer>
    </main>
  );
}