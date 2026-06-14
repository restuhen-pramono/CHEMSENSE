// components/common/Container.tsx
import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  size?: 'md' | 'lg';
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'md',
  className = '',
}) => {
  // Menentukan batas lebar maksimal berdasarkan prop 'size'
  const maxWidthClass = size === 'lg' ? 'max-w-7xl' : 'max-w-5xl';

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${maxWidthClass} ${className}`}>
      {children}
    </div>
  );
};