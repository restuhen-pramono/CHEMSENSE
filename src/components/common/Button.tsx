// components/common/Button.tsx
'use client';

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

// Mengubah ekstensi interface agar menggunakan properti dari motion.button
interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'outline';
  size?: 'md' | 'lg';
  fullWidth?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  icon,
  children,
  className = '',
  ...props // Sekarang berisi semua properti motion.button yang valid
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-bold rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-md shadow-blue-500/20 border border-transparent',
    outline: 'border-2 border-gray-200 bg-white text-gray-700 hover:bg-gray-50 hover:border-gray-300',
  };

  const sizeClasses = {
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-8 py-3.5 text-base md:text-lg',
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${widthClass} ${className}`}
      {...props} // Dikirimkan ke komponen motion tanpa bentrokan tipe
    >
      <div className="flex items-center gap-2 justify-center">
        {icon && <span className="text-xl flex items-center justify-center">{icon}</span>}
        <span>{children}</span>
      </div>
    </motion.button>
  );
};